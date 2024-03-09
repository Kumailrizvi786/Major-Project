import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const NotificationsPage = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-0 mt-10 md:px-5 w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row gap-[13px] items-center justify-start p-3 rounded-[12px] w-full">
            <Input
              name="FrameOne"
              placeholder="Search in social…"
              value={frameonevalue}
              onChange={(e) => setFrameonevalue(e)}
              className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
              wrapClassName="flex sm:flex-1 w-[89%] sm:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-[18px] ml-[9px] mr-[15px] my-[7px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#8f92a1"
                  className="cursor-pointer h-[18px] my-auto"
                  onClick={() => setFrameonevalue("")}
                  style={{
                    visibility:
                      frameonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={18}
                  width={18}
                  viewBox="0 0 18 18"
                />
              }
              shape="square"
            ></Input>
            <Text
              className="text-gray-500 text-xs tracking-[1.00px] uppercase"
              size="txtInterBold12Gray500"
            >
              Filters
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[34px] justify-end mt-10 sm:pl-5 pl-[30px] py-[30px] rounded-[12px] w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between mr-[30px] mt-1 rounded-[12px] w-[96%] md:w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                Featured Stories
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[97px]"
                rightIcon={
                  <Img
                    className="h-3.5 ml-[-3px] mr-[11px] rounded-[7px] my-2"
                    src="images/img_arrowright_1.svg"
                    alt="arrow_right"
                  />
                }
                shape="round"
                color="gray_500_36"
                size="md"
                variant="fill"
              >
                <div className="font-medium text-left text-sm">See more</div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-2.5 md:ml-[0] rounded-[12px] w-[99%] md:w-full">
              <Button
                className="flex h-[45px] items-center justify-center md:mt-0 my-2.5 w-[45px]"
                shape="round"
                color="light_blue_200_33"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-[22px]"
                  src="images/img_plus_45X45.svg"
                  alt="plus"
                />
              </Button>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-7 md:ml-[0] ml-[30px] w-4/5 md:w-full"
                orientation="horizontal"
              >
                <div className="blue_A700_light_blue_200_border7 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image.png"
                    alt="Image"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border8 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_40X40.png"
                    alt="Image One"
                  />
                </div>
                <div className="border-2 border-gray-500_66 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_54X54.png"
                    alt="Image Two"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border9 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_2.png"
                    alt="Image Three"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border10 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_4.png"
                    alt="Image Four"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border11 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_17.png"
                    alt="Image Five"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border12 border-2 border-solid md:h-[54px] h-[65px] p-[5px] relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-[54px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[54px]"
                    src="images/img_image_18.png"
                    alt="Image Six"
                  />
                </div>
              </List>
              <div className="blue_A700_light_blue_200_border13 border-2 border-solid md:h-[54px] h-[65px] ml-5 md:ml-[0] pl-[5px] py-[5px] relative rounded-[12px] w-[7%] md:w-full">
                <Img
                  className="absolute h-[54px] inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-[88%]"
                  src="images/img_image_3.png"
                  alt="Image Seven"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[30px] p-[30px] sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtInterMedium14Gray500"
                  >
                    What are you thinking?{" "}
                  </Text>
                </div>
                <Img
                  className="h-[38px] w-[38px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[21%]">
                  <Button
                    className="flex h-[38px] items-center justify-center w-[38px]"
                    shape="round"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_camera_38X38.svg"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex h-[38px] items-center justify-center w-[38px]"
                    shape="round"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="flex h-[38px] items-center justify-center w-[38px]"
                    shape="round"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_plus_38X38.svg"
                      alt="plus One"
                    />
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[121px] rounded-[29px] text-center text-sm"
                  color="indigo_A200"
                  size="2xl"
                  variant="fill"
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start mt-[30px] p-[30px] sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between w-[23%]">
                <Img
                  className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                  src="images/img_image_1.png"
                  alt="Image Eight"
                />
                <div className="flex flex-col gap-[9px] items-start justify-end">
                  <Text
                    className="mt-0.5 text-gray-900 text-sm"
                    size="txtInterBold14"
                  >
                    Dustin Housto
                  </Text>
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtInterRegular12"
                  >
                    5min ago
                  </Text>
                </div>
              </div>
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_overflowmenu_1.svg"
                alt="overflowmenu One"
              />
            </div>
            <Text
              className="mt-[29px] text-gray-500 text-sm"
              size="txtInterMedium14Gray500"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <div className="flex flex-col font-sfprodisplay items-center justify-start mt-[21px] w-full">
              <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-full">
                <Img
                  className="h-[305px] md:h-auto object-cover rounded-lg"
                  src="images/img_image_160X200.png"
                  alt="PhotoOne"
                />
                <div className="flex flex-col gap-[15px] items-center justify-start">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-[145px] md:h-auto object-cover rounded-lg"
                      src="images/img_image_75X80.png"
                      alt="PhotoTwo"
                    />
                    <Img
                      className="h-[145px] md:h-auto object-cover rounded-lg"
                      src="images/img_photo3_145X160.png"
                      alt="PhotoThree"
                    />
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-[145px] md:h-auto object-cover rounded-lg"
                      src="images/img_photo3.png"
                      alt="PhotoFour"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[145px] items-center justify-center p-[53px] md:px-10 sm:px-5 rounded-lg"
                      style={{ backgroundImage: "url('images/img_5.png')" }}
                    >
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[54px] my-1 rounded"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-[9px] mr-1.5 my-2"
                            src="images/img_camera_14X14.svg"
                            alt="camera"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">15</div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-full">
              <div className="flex md:flex-1 flex-row font-inter gap-[5px] items-center justify-start p-[5px] w-[10%] md:w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_favorite_1.svg"
                  alt="favorite"
                />
                <Text
                  className="text-gray-900 text-sm"
                  size="txtInterMedium14Gray900"
                >
                  326
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row font-inter gap-1.5 items-center justify-start md:ml-[0] ml-[15px] p-[5px] w-[9%] md:w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_location.svg"
                  alt="location"
                />
                <Text
                  className="text-gray-900 text-sm"
                  size="txtInterMedium14Gray900"
                >
                  148
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[75px] md:ml-[0] ml-[482px] rounded"
                rightIcon={
                  <Img
                    className="h-3.5 ml-[3px] mr-[11px] my-2"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                }
                color="gray_100_6c"
                size="md"
                variant="fill"
              >
                <div className="font-medium font-sfprodisplay text-left text-sm">
                  Share
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[30px] pl-[5px] md:px-5 w-full">
          <div className="bg-gray-500_33 h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div>
          <div className="bg-gray-900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start p-[27px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[97%] sm:w-full">
            <div className="flex flex-row gap-5 items-center justify-end mt-[18px] w-[34%] md:w-full">
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="round"
                color="gray_900"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-[22px]"
                  src="images/img_close.svg"
                  alt="close"
                />
              </Button>
              <div
                className="bg-cover bg-no-repeat h-12 relative rounded-[12px] w-12"
                style={{ backgroundImage: "url('images/img_group4551.png')" }}
              >
                <Img
                  className="absolute h-12 inset-[0] justify-center m-auto object-cover rounded-[12px] w-12"
                  src="images/img_avatar_48X48.png"
                  alt="Avatar One"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[41px] mr-[13px] pt-1 w-[97%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-[53%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtSFProDisplayBold22"
                >
                  Notifications
                </Text>
                <Button
                  className="cursor-pointer font-inter min-w-[35px] rounded text-center text-xs"
                  color="red_A200"
                  size="sm"
                  variant="fill"
                >
                  03
                </Button>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-full">
                  <div className="bg-red-A200 h-2 my-5 rounded-[50%] w-2"></div>
                  <Img
                    className="h-7 md:h-auto ml-2.5 object-cover rounded-[10px] w-7"
                    src="images/img_avatar_16.png"
                    alt="Avatar Two"
                  />
                  <div className="flex flex-row items-start justify-center ml-2.5 py-0.5 w-[43%]">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterBold14WhiteA700"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="ml-1 text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    className="h-[49px] md:h-auto ml-[86px] object-cover rounded-lg w-[49px]"
                    src="images/img_5.png"
                    alt="Photo"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-full">
                      <div className="bg-red-A200 h-2 mb-[31px] mt-2.5 rounded-[50%] w-2"></div>
                      <Img
                        className="h-7 md:h-auto ml-2.5 object-cover rounded-[10px] w-7"
                        src="images/img_avatar_17.png"
                        alt="Avatar Three"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start ml-2.5 mt-1 w-1/2">
                        <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[76%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterBold14WhiteA700"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="ml-[3px] text-white-A700 text-xs"
                            size="txtInterRegular12WhiteA700"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterRegular14WhiteA700"
                        >
                          sent you a friend request
                        </Text>
                      </div>
                      <Button
                        className="flex h-[38px] items-center justify-center ml-[73px] my-[5px] w-[38px]"
                        shape="round"
                        color="white_A700_33"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_camera_1.svg"
                          alt="camera Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-14 md:ml-[0] w-[48%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] rounded"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-2.5 mr-1 my-2"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">Add</div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[78px] rounded"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-3 mr-1 my-2"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        }
                        color="gray_900_6c"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Ignore
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-full">
                  <div className="bg-red-A200 h-2 mb-[31px] mt-2.5 rounded-[50%] w-2"></div>
                  <Img
                    className="h-7 md:h-auto ml-2.5 object-cover rounded-[10px] w-7"
                    src="images/img_avatar_18.png"
                    alt="Avatar Four"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-2.5 mt-1 w-1/2">
                    <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[76%] md:w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterBold14WhiteA700"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="ml-[3px] text-white-A700 text-xs"
                        size="txtInterRegular12WhiteA700"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterRegular14WhiteA700"
                    >
                      sent you a friend request
                    </Text>
                  </div>
                  <Button
                    className="flex h-[38px] items-center justify-center ml-[73px] my-[5px] w-[38px]"
                    shape="round"
                    color="white_A700_33"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_favorite_2.svg"
                      alt="favorite One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[18px] w-[95%] md:w-full">
                  <Img
                    className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                    src="images/img_avatar_3.png"
                    alt="Avatar Five"
                  />
                  <div className="flex flex-row items-start justify-center ml-2.5 py-0.5 w-[46%]">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterBold14WhiteA700"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="ml-1 text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    className="h-[49px] md:h-auto ml-[86px] object-cover rounded-lg w-[49px]"
                    src="images/img_5.png"
                    alt="Photo One"
                  />
                </div>
                <List
                  className="flex flex-col gap-10 md:ml-[0] ml-[18px] w-[95%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-5 justify-start w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Img
                          className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                          src="images/img_image_6.png"
                          alt="Avatar Six"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start ml-2.5 mt-1 w-[53%]">
                          <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[76%] md:w-full">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtInterBold14WhiteA700"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="ml-[3px] text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterRegular14WhiteA700"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white-A700_33 md:h-7 h-[38px] ml-[70px] my-[5px] p-2.5 relative rounded-[12px] w-[13%]">
                          <Img
                            className="absolute h-[18px] inset-[0] justify-center m-auto w-[19px]"
                            src="images/img_camera_28X28.svg"
                            alt="camera Three"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[80px] md:ml-[0] ml-[38px] mr-[197px] rounded"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-2.5 mr-1 my-2"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Added
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-5 justify-start w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Img
                          className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                          src="images/img_avatar_19.png"
                          alt="Avatar Seven"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start ml-2.5 mt-1 w-[53%]">
                          <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[76%] md:w-full">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtInterBold14WhiteA700"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="ml-[3px] text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterRegular14WhiteA700"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white-A700_33 md:h-7 h-[38px] ml-[70px] my-[5px] p-2.5 relative rounded-[12px] w-[13%]">
                          <Img
                            className="absolute h-[18px] inset-[0] justify-center m-auto w-[19px]"
                            src="images/img_camera_28X28.svg"
                            alt="camera Four"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[80px] md:ml-[0] ml-[38px] mr-[197px] rounded"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-2.5 mr-1 my-2"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Added
                        </div>
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[18px] w-[95%] md:w-full">
                  <Img
                    className="h-7 md:h-auto mt-2.5 object-cover rounded-[10px] w-7"
                    src="images/img_image_10.png"
                    alt="Avatar Eight"
                  />
                  <div className="flex flex-row items-start justify-center ml-2.5 mt-3.5 py-0.5 w-[46%]">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterBold14WhiteA700"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="ml-1 text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    className="h-11 md:h-auto ml-[86px] object-cover rounded-lg w-[16%]"
                    src="images/img_5.png"
                    alt="Photo Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
