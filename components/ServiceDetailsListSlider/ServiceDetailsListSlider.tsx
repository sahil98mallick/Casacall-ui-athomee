/* eslint-disable react/jsx-key */

"use client";

import LeftArrowIcon from "@/json/icons/LeftArrowIcon";
import RightArrowIcon from "@/json/icons/RightArrowIcon";
import { serviceList } from "@/json/mock/serviceList.mock";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ListingCard from "../ListingCard/ListingCard";

export const cityList = [
  "New York",
  "Chicago",
  "Boston",
  "Los Angeles",
  "San Francisco",
  "Houston",
];

export default function ServiceDetailsListSlider() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = useRef<Slider | null>(null);

  const [city, setCity] = useState("New York");

  const onSelect = (e: any) => {
    if (e.target) {
      const labelText = e.target.textContent;
      setCity(labelText);
    }
  };
  return (
    <div className="py-8 md:py-6">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium md:text-[20px]">
          Recommended for you
        </h3>
        <div className="flex items-center">
          <button
            className="h-10 w-10 md:w-8 md:h-8  rounded-full border-[#D1D1D6] border flex items-center justify-center hover:text-[#E4E4E7] transition-all"
            onClick={() => slider.current && slider.current.slickPrev()}
          >
            <LeftArrowIcon />
          </button>
          <button
            className="h-10 w-10 md:w-8 md:h-8  ml-4 md:ml-2 rounded-full border-[#D1D1D6] border flex items-center justify-center  hover:text-[#E4E4E7] transition-all"
            onClick={() => slider.current && slider.current.slickNext()}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <Slider {...settings} className="request_slider" ref={slider}>
        {serviceList.map((item, index) => (
          <ListingCard
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
            key={index}
          />
        ))}
      </Slider>
    </div>
  );
}
