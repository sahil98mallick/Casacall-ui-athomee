import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

const chatList = async (body: object) => {
  const res = await axiosInstance.post(endpoints.chatlists.messagelists, body);
  return res;
};

export const useChatLists = () => useMutation(chatList);

const chatuserList = async (body: object) => {
  const res = await axiosInstance.post(endpoints.chatlists.chatuserlists, body);
  return res;
};

export const useChatuserLists = () => useMutation(chatuserList);
