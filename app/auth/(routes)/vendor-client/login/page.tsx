/* eslint-disable react/no-unescaped-entities */
"use client";
import CommonInput from "@/components/CommonInput/CommonInput";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Image from "next/image";
import Link from "next/link";

const selectApi = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
];

function SignUpVendor() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
          <Link href="/" className="inline-block">
            <Image src={assets.logo} width={124} height={24} alt="" />
          </Link>
        </div>
        <div className="relative hidden  md:flex px-[16px] pt-4">
          <a
            href="#"
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
          </a>
          <p className=" text-[16px] text-gray-900 font-satoshi_medium">
            Choose log in format
          </p>
        </div>
        <div className="mt-[72px] xl:mt-[50px] md:px-4 md:mt-6">
          <Link href="/" className="font-satoshi_medium md:hidden">
            <i className="inline-block mr-[18px] mb-[2px] align-middle">
              <Image src={assets.back_btns} width={16} height={11} alt="" />
            </i>
            Back
          </Link>

          <div className="mt-[32px]">
            <div className="h-[calc(100vh-223px)] md:h-[calc(100vh-170px)] overflow-y-auto overflow-x-hidden mt-[40px]">
              <div className="text-[var(--black1F1F1F)] mb-8">
                <h2 className="text-3xl	mb-2">Welcome back &#128075;</h2>
                <p>Enter the information to login the Casacall platform.</p>
              </div>
              <div>
                <ul className="flex flex-wrap -mx-3">
                  <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                    <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorfef0ef)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                      <i className="mr-2">
                        <Image
                          src={assets?.google_icon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </i>{" "}
                      Google
                    </Button>
                  </li>

                  <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                    <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf3fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                      <i className="mr-2">
                        <Image
                          src={assets?.fb_icon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </i>{" "}
                      Facebook
                    </Button>
                  </li>

                  <li className="w-1/3 px-3 lg:w-full lg:mb-3">
                    <Button className="text-[var(--black1F1F1F)] text-base font-satoshi_medium w-[100%] py-3 px-3 h-auto bg-[var(--colorecf7fd)] hover:bg-[var(--primary)] hover:text-[var(--secondary-foreground)]">
                      <i className="mr-2">
                        <Image
                          src={assets?.twitter_icon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </i>{" "}
                      Twitter
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="text-center relative my-8 md:my-4 before:absolute before:content:[] before:left-0 before:top-[50%] before:w-[100%] before:h-[1px] before:bg-[var(--colorEAECF0)] before:translate-y-[-50%]">
                <span className="text-xs text-[var(--color98A2B3)] font-satoshi_medium bg-[var(--secondary-foreground)] relative px-4">
                  or
                </span>
              </div>
              <form>
                <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 mb-8 md:px-3 md:py-3 hidden">
                  <i className="self-center mb-[2px] mr-[17px] md:mr-[12px] md:min-w-[17px]">
                    <Image
                      src={assets?.account_tooltip}
                      width={17}
                      height={17}
                      alt=""
                    />
                  </i>
                  Email or password are incorrect or this account doesn't exist.
                </div>
                <div className="flex flex-wrap -mx-[6px] -my-[6px]">
                  <div className="w-full px-[6px] py-[6px]">
                    <CommonInput placeholderLabel="Your email" />
                  </div>

                  <div className="w-full px-[6px] py-[6px]">
                    <CommonInput
                      passwordvalue
                      placeholderLabel="Create password"
                    />
                    <p className="text-right text-sm text-[var(--secondary)] mt-3">
                      <Link
                        className="text-[var(--secondary)] hover:text-[var(--primary)]"
                        href="/"
                      >
                        Forgot password?
                      </Link>
                    </p>
                  </div>

                  <div className="w-full px-[6px] py-[6px] mt-6">
                    <Button
                      className="w-[100%] text-base py-3 h-auto"
                      variant="default"
                    >
                      Log in
                    </Button>
                  </div>

                  <div className="w-full px-[6px] py-[6px] text-center mt-3">
                    <p className="text-sm text-[var(--textgray)]">
                      Don't have an account?{" "}
                      <Link
                        className="text-[var(--primary)] hover:text-[var(--secondary)]"
                        href="/"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 md:hidden">
        <SignSlideRight bannerImage={assets.banner_image_sign}>
          <h2 className="text-4xl leading-[1.4] text-[var(--black-light)] xl:text-[32px] lg:text-[24px]">
            <span className="text-[var(--secondary)] font-satoshi_bold">
              Casacall
            </span>{" "}
            combines a multitude of professionals near you with <br />{" "}
            <span className="relative pb-3">
              instant booking{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>{" "}
            and{" "}
            <span className="relative pb-3">
              flexible settings.{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>
          </h2>
        </SignSlideRight>
      </div>
    </div>
  );
}

export default SignUpVendor;
