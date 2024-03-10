/* eslint-disable react/jsx-key */
"use client";
import CommonSearchComponentWithFilter from "@/components/CommonSearchWithFilter/CommonSearchWithFilter";
import Container from "@/components/Container";
import ClientServiceListingCard from "@/components/ListingCard/ClientServiceListingCard";
import ListingCard from "@/components/ListingCard/ListingCard";
import Loading from "@/components/Loading/Loading";
import SortByDropdown from "@/components/SortByDropdown/SortByDropdown";
import FilterLinesIcon from "@/components/ui/FilterLinesIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useClientServiceListings } from "@/hooks/react-qurey/query-hooks/ClientServiceListings.hook";
import assets from "@/json/assets";
import CloseButton from "@/json/icons/CloseButton";
import { serviceList } from "@/json/mock/serviceList.mock";
import { ClientserviceLists } from "@/typescript/Interfaces/clientservicelisting.interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Listing() {
  const [sidebarOpen, setSidebarOpne] = useState(false);
  const handelOpenFilter = () => {
    setSidebarOpne(true);
  };
  const handelCloseFilter = () => {
    setSidebarOpne(false);
  };
  // Client Service Listing API handle
  const [page, setPage] = useState<Number>(1);
  const [limit, setLimit] = useState<Number>(10);
  const [clientservicelists, setClientservicelists] = useState<any>([]);
  const { mutate: clientservicelistingdetails, isLoading: servicelistloading } =
    useClientServiceListings();

  const FetchClieentServiceListing = async () => {
    clientservicelistingdetails(
      {
        page: page,
        limit: limit,
      },
      {
        onSuccess: (response: any) => {
          console.log("res", response?.data);
          const { data, pages } = response?.data ?? {};
          setClientservicelists(response?.data);
        },
        onError: () => {
          console.log("error Found while fetching the service lists");
        },
      }
    );
  };

  useEffect(() => {
    FetchClieentServiceListing();
  }, [page, limit]);

  console.log("clientservicelists", clientservicelists);

  return (
    <div
      className={`{ relative overflow-hidden ${
        sidebarOpen === true ? "lg:!h-[100vh] lg:!overflow-hidden" : ""
      }`}
    >
      <div className="relative lg:hidden px-4">
        <figure className="w-full h-full ">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={assets.bgImgwraps2}
            alt="img"
            width={1920}
            height={132}
          />
        </figure>
      </div>
      <div
        className={`{ w-full h-[100vh] fixed bg-[rgba(0,0,0,0.2)] hidden left-0 top-0 z-[10]} ${
          sidebarOpen === true ? "lg:!block" : ""
        }`}
      ></div>
      <div
        className={`{ lg:fixed lg:hidden bg-white lg:w-full lg:top-0 lg:left-0 lg:z-[11] lg:h-[100vh] lg::bg-white} ${
          sidebarOpen === true
            ? "lg:translate-x-[0%] lg:!block"
            : "lg:translate-x-[-100%]"
        }`}
      >
        <CommonSearchComponentWithFilter closeButton={handelCloseFilter} />
      </div>

      <Container>
        <div className="pt-[80px] pb-[80px] lg:py-8 ">
          <div className="flex overflow-auto w-full lg:mr-[-16px] ">
            <Badge
              variant="outline"
              className="bg-white border-[#F4F4F5] mr-4 py-2 px-4 font-normal text-sm break-normal lg:flex justify-between hidden"
            >
              <Button
                variant={null}
                className="p-0 h-auto mr-2"
                onClick={handelOpenFilter}
              >
                <FilterLinesIcon />
              </Button>
              Filter
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#F4F4F5] border-[#F4F4F5] mr-4 py-2 px-4 font-normal text-sm break-normal flex justify-between lg:min-w-[280px] md:min-w-[230px]"
            >
              Price range: $1000-$2000{" "}
              <Button variant={null} className="p-0 h-auto ml-2">
                <CloseButton />
              </Button>
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#F4F4F5] border-[#F4F4F5] mr-4 font-normal text-sm flex justify-between lg:min-w-[260px] md:min-w-[180px]"
            >
              Rating: 4 start and up
              <Button variant={null} className="p-0 h-auto ml-2">
                <CloseButton />
              </Button>
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#F4F4F5] border-[#F4F4F5] font-normal text-sm flex justify-between lg:min-w-[280px] md:min-w-[260px]"
            >
              Availability: show all professionals
              <Button variant={null} className="p-0 h-auto ml-2">
                <CloseButton />
              </Button>
            </Badge>
          </div>

          <div className="relative pt-8">
            <div className="relative flex justify-between">
              <p className="text-sm text-textgray">Result: 2,087 services</p>
              <div className="flex items-center justify-start min-w-[230px] sm:hidden">
                <p className="text-textgray w-[40%]">Sort by : </p>
                <SortByDropdown />
              </div>
              <div className="hidden sm:block">
                <SortByDropdown hideDropdown />
              </div>
            </div>
          </div>
          {/* All Lists */}

          {servicelistloading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-6 mt-6 lg:grid-cols-2 md:grid-cols-1 ">
                {clientservicelists?.data?.map(
                  (item: ClientserviceLists, index: number) => (
                    <div key={index}>
                      <ClientServiceListingCard
                        availablenow={true}
                        showaviability={true}
                        listingImage={item.images[0] || assets?.noprofileimage}
                        ImageHeight={"197px"}
                        ImageWidth={"410px"}
                        clientImg={item?.vendor_data?.profilePicture}
                        listTitle={item.title}
                        rattedPerson={"45"}
                        rattingvalue={"5"}
                        userName={item?.vendor_data?.fullName}
                        listingText={item.description}
                        priceText={item.package_pricing[0]}
                      />
                    </div>
                  )
                )}
              </div>
            </>
          )}
          {/* {clientservicelists?.data?.map(
              (item: ClientserviceLists, index: number) => (
                <div key={index}>
                  <ClientServiceListingCard
                    availablenow={true}
                    showaviability={true}
                    listingImage={item.images[0] || assets?.noprofileimage}
                    ImageHeight={"197px"}
                    ImageWidth={"410px"}
                    clientImg={item?.vendor_data?.profilePicture}
                    listTitle={item.title}
                    rattedPerson={"45"}
                    rattingvalue={"5"}
                    userName={item?.vendor_data?.fullName}
                    listingText={item.description}
                    priceText={item.package_pricing[0]}
                  />
                </div>
              )
            )} */}
          {/* {serviceList.map((item, index) => (
              <div key={index}>
                <ClientServiceListingCard
                  availablenow={item.availablenow}
                  showaviability={item.showaviability}
                  listingImage={item.listingimg}
                  ImageHeight={"197px"}
                  ImageWidth={"410px"}
                  clientImg={item.clientImg}
                  listTitle={item.listTitle}
                  rattedPerson={item.rattedPerson}
                  rattingvalue={item.rattingvalue}
                  userName={item.userName}
                  listingText={item.listingText}
                  priceText={item.priceText}
                />
              </div>
            ))} */}
        </div>
      </Container>
    </div>
  );
}
