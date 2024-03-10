"use client";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { getCookie } from "@/lib/storage.lib";
import { setUserData } from "@/redux-toolkit/slices/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userData } = useAppSelector((s) => s.userSlice);

  // console.log("userData", userData);

  const router = useRouter();

  // useEffect(() => {
  //   if (!userData || userData.role != "super_admin") {
  //     router.push("/auth/admin/login");
  //   }
  // }, [userData]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const co = getCookie("atHomee_user");
    if (co) {
      const data = JSON.parse(co ? co : "");
      dispatch(setUserData(data));
    } else {
      router.push("/auth/admin/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default AdminLayout;
