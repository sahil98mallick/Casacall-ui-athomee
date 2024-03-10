import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function CreateCollectionModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className=" hover:text-[grey] hover:bg-[white] sm:p-0 sm:min-w-[145px] sm:min-h-[36px] sm:capitalize sm:h-auto sm:border-gray-200"
          >
            <PluseBtnIcon className="sm:w-4 sm:h-auto" />
            <p className="ml-2 hover:text-[grey] sm:text-gray-900 sm:font-satoshi_regular">
              <span className="sm:hidden">Create</span> new collection
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Create a collection
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pb-10 md:px-4 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin max-h-[334px] md:max-h-[inherit] md:basis-full">
              <div>
                <CommonInput placeholderLabel="Name" />
              </div>
            </div>
            <div className="relative px-10 md:px-4 md:pt-4 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center md:w-full">
                <li className="mr-4 md:hidden">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className=" md:w-full">
                  <Button
                    type="button"
                    className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
                  >
                    Save
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
