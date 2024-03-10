"use client";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDateTwo, getAmPmFromTime } from "@/lib/utils";

export default function EditDateTimeDetailsModal({
  primarydate,
  start_time,
  end_time,
  id,
  updateReserv,
  avialable_data,
}: {
  primarydate: string | undefined;
  start_time: string | undefined;
  end_time: string | undefined;
  id: string;
  updateReserv: any;
  avialable_data: any;
}) {
  const timeWrap = [
    {
      timeText: "09:00 - 09:15",
    },
    {
      timeText: "09:15 - 09:30",
    },
    {
      timeText: "10:45 - 11:00",
    },
    {
      timeText: "11:30 - 11:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
    {
      timeText: "15:30 - 15:45",
    },
  ];
  const [date, setDate] = React.useState<Date | undefined>(
    primarydate ? new Date(primarydate) : undefined
  );

  const [isLoading, setIsLoading] = React.useState(false);
  const [newstartTime, setnewStartTime] = useState<string | undefined>("");
  const [newendTime, setnewendTime] = useState<string | undefined>("");
  // console.log("newstartTime", newstartTime);
  // console.log("newstartTime", newendTime);

  const [checkBtn, setCheckBtn] = React.useState(0);
  const handelCheck = (index: number) => {
    setCheckBtn(index);
  };
  const handleConfirm = () => {
    if (date === undefined && primarydate) {
      setDate(new Date(primarydate));
    }
    if (date !== undefined && checkBtn !== undefined) {
      const selectedTimeRange = timeWrap[checkBtn].timeText;
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const [startTime, endTime] = selectedTimeRange.split(" - ");
      setIsLoading(true);
      updateReserv({
        id,
        date: formattedDate,
        start_time: startTime,
        end_time: endTime,
      }).then((res: any) => {
        setIsLoading(false);
        if (res) {
          console.log("Response", res);
          handleClick();
        } else {
          console.error("Failed to update reservation");
        }
      });
    } else {
      console.error("Please select a date and time before confirming.");
    }
  };

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  console.log("start_time", avialable_data);

  // const unavailableDates = [
  //   new Date(2024, 1, 5), // March 5, 2024
  //   new Date(2024, 2, 15), // March 15, 2024
  //   new Date(2024, 2, 25), // March 25, 2024
  // ];

  // // A matcher function to disable Saturdays and Sundays
  // const disableWeekends = (date: Date) => {
  //   const day = date.getDay();
  //   // 0 is Sunday and 6 is Saturday
  //   return day === 0 || day === 6;
  // };

  // // Combine specific dates and weekends in the disabled condition
  // const disabledConditions = [...unavailableDates, disableWeekends];
  // Convert unavailable dates to Date objects
  // Convert unavailable dates to Date objects

  // Convert unavailable dates to Date objects
  const unavailableDates = avialable_data?.unavailability?.map(
    (dateString: string) => new Date(dateString)
  );

  // A matcher function to disable specified dates
  const disableDates = (date: Date) => {
    // Check if the date is in the array of unavailable dates
    return unavailableDates?.some(
      (unavailableDate: Date) =>
        date.getFullYear() === unavailableDate?.getFullYear() &&
        date.getMonth() === unavailableDate?.getMonth() &&
        date.getDate() === unavailableDate?.getDate()
    );
  };

  // A matcher function to disable specified weekdays (0 is Sunday, 6 is Saturday)
  const disableWeekdays = (date: Date) => {
    return avialable_data?.unavailable_weekdays?.includes(date.getDay());
  };

  // Combine specific dates and weekdays in the disabled condition
  const disabledConditions = [disableDates, disableWeekdays];

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-[14px] rounded-[100px]  border-none hover:bg-primary hover:text-white"
          >
            Change
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] text-left md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Change execution date
            </DialogTitle>
          </DialogHeader>
          <div className="relative pb-[80px] md:pb-0 md:basis-full md:flex md:flex-col">
            <div className="relative block mb-4 px-6">
              <label className="text-sm text-gray-600">
                Current reservation time
              </label>
              {primarydate && start_time && end_time ? (
                <>
                  <p className="text-sm text-gray-600 font-satoshi_medium">
                    {/* Wednesday, August 3 from 10:45 to 11:00 (GMT+1) */}
                    {dayjs(primarydate).format("MMM D YYYY")} , {start_time} -{" "}
                    {end_time}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="relative flex px-6 md:px-4 h-full overflow-y-auto md:basis-full md:flex-wrap">
              <Calendar
                disabled={disabledConditions}
                mode="single"
                selectedDate={
                  date || (primarydate ? new Date(primarydate) : undefined)
                }
                handleDateChange={setDate}
                className="w-full"
              />
              <div className="timeWrapList pl-8 md:pl-0 h-full md:h-auto md:w-full md:mt-6">
                <ul className="h-full md:flex md:flex-wrap md:h-auto">
                  {timeWrap.map((item, index) => (
                    <li key={index} className="mb-4 md:w-auto md:mr-3 md:mb-3">
                      <Button
                        value={index}
                        // onClick={() => handelCheck(index)}
                        onClick={() => {
                          handelCheck(index);
                          setnewStartTime(item.timeText.split(" - ")[0]);
                          setnewendTime(item.timeText.split(" - ")[1]);
                        }}
                        type="button"
                        className={`rounded-[4px] bg-transparent border-solid border border-gray-300 w-full md:w-auto text-base text-gray-900 font-satoshi_regular ${
                          checkBtn == index && "bg-gray-900 text-white"
                        }`}
                      >
                        {item.timeText}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="relative md:block hidden mb-4">
                <label className="text-sm text-gray-600">
                  New reservation time
                </label>
                <p className="text-sm text-gray-600 font-satoshi_medium">
                  Wednesday, August 3 from 10:45 to 11:00 (GMT+1)
                </p>
              </div> */}
            </div>
            <div className="fixed md:relative bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-between items-center">
              <div className="relative md:hidden">
                <label className="text-sm text-gray-600">
                  New reservation time
                </label>
                {date && newstartTime && newendTime ? (
                  <>
                    <p className="text-sm text-gray-600 font-satoshi_medium">
                      {/* Wednesday, August 3 from 10:45 to 11:00 (GMT+1) */}
                      {dayjs(date).format("MMM D YYYY")}, {newstartTime} -{" "}
                      {newendTime}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <ul className="flex items-center md:w-full md:flex-wrap">
                <li className="mr-2 sm:mr-0 sm:mb-4 sm:w-full md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      ref={buttonRef}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="md:w-full">
                  <Button
                    type="button"
                    onClick={handleConfirm}
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary md:w-full hover:text-white"
                  >
                    {isLoading ? "Confirming..." : "Confirm"}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
