/* eslint-disable react/jsx-key */
import Container from "@/components/Container";
import ListingCard from "@/components/ListingCard/ListingCard";
import ReservationHeader from "@/components/ReservationHeader/ReservationHeader";
import { Button } from "@/components/ui/button";
import ArrowNarrowLeft from "@/json/icons/ArrowNarrowLeft";
import PaginationArrow1 from "@/json/icons/PaginationArrow1";
import PaginationArrow2 from "@/json/icons/PaginationArrow2";
import { serviceList4 } from "@/json/mock/serviceList.mock";

export default function Index() {
  return (
    <div className="py-24 lg:py-6">
      <Container>
        <div>
          <Button
            variant="outline"
            className="border-0 mb-8 font-satoshi_medium text-base transition-all hover:text-inherit hover:bg-inherit hover:scale-110 p-0"
          >
            <i className="inline-block mr-4">
              <ArrowNarrowLeft />
            </i>
            Back
          </Button>
          <ReservationHeader isMenu headerName="Massage" />
          <div className="grid grid-cols-3 gap-8 mt-12 mb-12 lg:mt-6 lg:mb-6 lg:grid-cols-2 md:gap-4 md:grid-cols-1">
            {serviceList4.map((item) => (
              <ListingCard
                availablenow={item.availablenow}
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
            ))}
          </div>
          <div className="relative md:block hidden mb-4">
            <ul className="flex flex-wrap items-center justify-center">
              <li className="px-1.5 md:px-[2px] flex items-center">
                <Button
                  type="button"
                  className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                >
                  <PaginationArrow1 />
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-gray-900 transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  1
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  2
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  3
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  4
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  5
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  ...
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px]">
                <Button
                  type="button"
                  className="bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] p-0 rounded-full hover:bg-gray-900 hover:text-white"
                >
                  23
                </Button>
              </li>
              <li className="px-1.5 md:px-[2px] flex items-center">
                <Button
                  type="button"
                  className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                >
                  <PaginationArrow2 />
                </Button>
              </li>
            </ul>
          </div>
          <Button
            variant="outline"
            className="border-0 mb-8 md:mb-0 font-satoshi_medium text-base transition-all hover:text-inherit hover:bg-inherit hover:scale-110 p-0"
          >
            <i className="inline-block mr-4">
              <ArrowNarrowLeft />
            </i>
            Vendor profile
          </Button>
        </div>
      </Container>
    </div>
  );
}
