/* eslint-disable react/jsx-key */
"use client";
import Container from "../../../../../components/Container";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import assets from "@/json/assets";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import MessageIcon from "@/json/icons/MessageIcon";
import StarIconNewYellowIcon from "@/json/icons/StarIconNewYellowIcon";
import React, { useRef, useState } from "react";


export default function VendorCompanyNoData() {

  return (
    <div className="relative py-10 md:pt-6 md:pb-0 border-t border-newborder border-solid">
    <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid pb-6">
      <a
        href="#"
        className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
      >
        <i className="pr-4">
          <ArrowBackIcon />
        </i>
      </a>
      <p className="absolute left-[50%] translate-x-[-50%] top-[2px] text-[16px] text-gray-900 font-satoshi_medium">
      Vendor profile
      </p>
    </div>
    <Container>
      <div className="relative">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Back
        </a>
        <div className="relative flex flex-wrap py-6 w-full">
          <div className="w-[34%] lg:w-full pr-[32px] mb-6 lg:pr-0">
            <div className="sticky top-[10px] bg-white rounded-[12px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] p-6 md:p-0 md:shadow-none">
              <figure className="relative w-[120px] h-[120px] flex items-center rounded-full max-w-[120px] mx-auto mb-4">
                <Image
                  src={assets.noProfileImgFound1}
                  alt="clientimg"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover rounded-full"
                />
                
              </figure>
              <h2 className="text-center text-[36px] text-gray-900 mb-4 lg:text-[30px] md:text-[24px]">
              Health Life
              </h2>
              <Button
                type="button"
                className="bg-transparent transition-all w-full text-[16px] font-satoshi_medium text-gray-900 border-newborder rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto hover:bg-transparent hover:opacity-75"
              >
                <i className="mr-2">
                  <MessageIcon />
                </i>
                Message
              </Button>
              <div className="flex flex-wrap mx-[-8px] pt-6 sm:mx-[-4px]">
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      Rating
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                      0.0
                      <StarIconNewYellowIcon />
                    </h3>
                  </div>
                </div>
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      Reviews
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                      0
                    </h3>
                  </div>
                </div>
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      From{" "}
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                      United States
                    </h3>
                  </div>
                </div>
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      Avg. reply
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                    -
                    </h3>
                  </div>
                </div>
                <div className="relative w-full px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      Languages
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                    -
                    </h3>
                  </div>
                </div>
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500">
                      Member since{" "}
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                    May 2023
                    </h3>
                  </div>
                </div>
                <div className="relative w-1/2 px-[8px] mb-4 sm:mb-2 sm:px-[4px]">
                  <div className="relative bg-gray-50 rounded-[8px] p-4 sm:p-3">
                    <p className="flex items-center text-[14px] text-gray-500 ">
                      Last delivery
                    </p>
                    <h3 className="flex items-center text-[16px] text-gray-900 sm:text-[14px]">
                    Have not yet been
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderTopsWrap_mainRight realtive w-[66%] lg:w-full">
            <div className="relative w-full pb-10 md:pb-6">
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h2 className="text-[24px] text-gray-900 md:text-[20px]">No services yet...</h2>

              </div>
              <p className="py-2 mb-3">This vendor has no available services yet.</p>
              <Button type="button" className="rounded-[60px] hover:bg-secondary">Search for services</Button>
            </div>
            <div className="relative w-full py-8 md:py-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h2 className="text-[24px] text-gray-900 md:text-[20px]">No reviews yet</h2>

              </div>
              <p className="py-2 md:py-1">Once the clients rate the service, their review will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
  );
}