import React from "react";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CustomCalenderTime from "../CustomCalenderTime/CustomCalenderTime";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import CaklendarIcon from "@/json/icons/CaklendarIcon";

const ReserveServiceCard = () => {
  const radioList = [
    {
      value: "1",
      label: "30-Minute",
      bgColor: "#FFF9D7",
    },
    {
      value: "2",
      label: "60-Minute",
      bgColor: "#E8FBDA",
    },
    {
      value: "3",
      label: "90-Minute",
      bgColor: "#F5EFFD",
    },
  ];
  return (
    <div className="relative p-6 md:p-3 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)]">
      <div className="realtive mb-6 ">
        <CustomRadioGroup radioList={[...radioList]} defaultValue={"1"} />
      </div>
      <div className="realative w-full border border-gray-200 border-solid rounded-[8px]">
        <div className="relative w-full px-3 py-2 border-gray-200 border-solid border-b">
          <label className=" w-full text-sm text-gray-400">Address</label>
          <Select>
            <SelectTrigger icon={<ChevronDown color="#E4E4E7" />} className="w-full border-0 p-0 h-auto text-gray-900 text-base text-left">
              <SelectValue
                placeholder="25 Draper Street, San Francisco, CA, USA"
                className="text-gray-900 text-base text-left"
              />
            </SelectTrigger>
            <SelectContent className="border-0">
              <SelectGroup>
                <SelectLabel>
                  25 Draper Street, San Francisco, CA, USA
                </SelectLabel>
                <SelectItem value="1">
                  26 Draper Street, San Francisco, CA, USA
                </SelectItem>
                <SelectItem value="2">
                  27 Draper Street, San Francisco, CA, USA
                </SelectItem>
                <SelectItem value="3">
                  28 Draper Street, San Francisco, CA, USA
                </SelectItem>
                <SelectItem value="4">
                  29 Draper Street, San Francisco, CA, USA
                </SelectItem>
                <SelectItem value="5">
                  30 Draper Street, San Francisco, CA, USA
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-full px-3 py-2">
          <label className=" w-full text-sm text-gray-400">Date & time</label>

          <div className="dateWrap">
            <Select>
              <SelectTrigger  icon={<CaklendarIcon IconColor="#E4E4E7" />} className="w-full border-0 p-0 h-auto text-gray-900 text-base">
                <SelectValue
                  placeholder="20 May 2023, 02:30 PM"
                  className="text-gray-900 text-base"
                />
              </SelectTrigger>
              <SelectContent
                className="min-w-[690px] min-h-[480px] right-0 left-inherit"
                align="end"
              >
                <SelectGroup>
                  <CustomCalenderTime onDataFromChild={undefined} />
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="relative pt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="rounded-[4px] border-gray-200" />
            <label
              htmlFor="terms"
              className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Wrap it up as a gift!
            </label>
          </div>
          <p className="text-gray-900 text-base">$10</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-gray-900 text-base">Service fee</p>
          <p className="text-gray-900 text-base">$5</p>
        </div>
        <div className="flex items-center justify-between pb-4 border-gray-200 border-solid border-b">
          <p className="text-gray-900 text-[20px] font-satoshi_medium">
            Total{" "}
          </p>
          <p className="text-gray-900 text-[20px] font-satoshi_medium">$55</p>
        </div>
        <div className="relative w-full py-2">
          <Select>
            <SelectTrigger icon={<ChevronDown color="#131316" />}  className="w-full border-0 p-0 h-auto text-gray-900 text-base">
              <SelectValue
                placeholder="What's included?"
                className="text-gray-900 text-base"
              />
            </SelectTrigger>
            <SelectContent className="border-0">
              <SelectGroup>
                <SelectLabel>Option 1</SelectLabel>
                <SelectItem value="1">Option 2</SelectItem>
                <SelectItem value="2">Option 3</SelectItem>
                <SelectItem value="3">Option 4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="py-4 w-full">
          <Button type="button"  className="w-full rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black">
            Reserve service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReserveServiceCard;
