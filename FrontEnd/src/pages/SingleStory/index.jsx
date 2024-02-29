import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SingleStoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay gap-1.5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-center justify-between mx-auto md:px-5 w-full">
          <Line className="bg-white-A700_66 h-32 md:h-[5px] md:mt-0 my-[448px] rounded-[2.5px] w-[5px] md:w-full" />
          <div className="bg-gray-900 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[91px] rounded-bl-[32px] rounded-tl-[32px]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-center justify-end w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-3/5 md:w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-[89%] md:w-full">
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[103px]"
                      onClick={() => navigate("/stories")}
                      leftIcon={
                        <Img
                          className="h-[18px] ml-5 mr-2.5 my-5"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="white_A700_33"
                      size="3xl"
                      variant="fill"
                    >
                      <div className="font-bold text-left text-sm">Back</div>
                    </Button>
                    <div className="flex flex-row font-inter gap-2.5 items-center justify-between w-[21%]">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterMedium14"
                      >
                        Sara Scholz
                      </Text>
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="white_A700_33"
                      size="xl"
                      variant="outline"
                    >
                      <Img
                        src="images/img_arrowleft_48X48.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <Img
                      className="h-[768px] md:h-auto object-cover rounded-lg"
                      src="images/img_image_768X540.png"
                      alt="Image"
                    />
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="white_A700_33"
                      size="xl"
                      variant="outline"
                    >
                      <Img
                        src="images/img_arrowright_white_A700.svg"
                        alt="arrowright One"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_6c border-2 border-gray-500_6c border-solid flex flex-col font-inter items-center justify-start p-[9px] rounded w-[78%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[99%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[87%] sm:w-full">
                      <Input
                        name="FrameSeven"
                        placeholder="Write a comment…"
                        className="font-medium p-0 placeholder:text-white-A700 text-left text-sm w-full"
                        wrapClassName="w-full"
                        shape="square"
                        color="gray_900"
                      ></Input>
                    </div>
                    <Img
                      className="h-5 sm:ml-[0] ml-[7px] w-5"
                      src="images/img_send_20X20.svg"
                      alt="send"
                    />
                    <Img
                      className="h-5 sm:ml-[0] ml-[21px] w-5"
                      src="images/img_iconemoji.svg"
                      alt="IconEmoji"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[35%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[45px] justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-full">
                  <div className="flex flex-row font-sfprodisplay gap-5 items-center justify-end md:ml-[0] ml-[204px] mt-[5px] w-[37%] md:w-full">
                    <Button
                      className="common-pointer cursor-pointer font-bold h-12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
                      onClick={() => navigate("/notifications")}
                      shape="round"
                      color="light_blue_200"
                      size="lg"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Img
                      className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                      src="images/img_avatar_48X48.png"
                      alt="Avatar One"
                    />
                  </div>
                  <Text
                    className="mb-[820px] md:ml-[0] ml-[5px] mr-[182px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtInterBold22"
                  >
                    Next Stories
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStoryPage;
