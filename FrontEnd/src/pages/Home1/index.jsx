import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-0 mt-10 md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-full">
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-1/2 md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[7px] items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                      src="images/img_avatar.png"
                      alt="Avatar"
                    />
                    <Input
                      name="language"
                      placeholder="What are you thinking? "
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="ml-[5px] rounded-[19px] w-[87%]"
                      size="lg"
                    ></Input>
                  </div>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Button
                      className="flex h-7 items-center justify-center mt-0.5 rounded-lg w-7"
                      color="gray_100"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </Button>
                    <Button
                      className="flex h-7 items-center justify-center ml-2.5 mt-0.5 rounded-lg w-7"
                      color="gray_100"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_videocamera.svg"
                        alt="videocamera"
                      />
                    </Button>
                    <Button
                      className="flex h-7 items-center justify-center ml-2.5 mt-0.5 rounded-lg w-7"
                      color="gray_100"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[75px] ml-[141px] rounded"
                      rightIcon={
                        <Img
                          className="h-3.5 ml-[0] mr-[11px] my-2"
                          src="images/img_arrowright_14X14.svg"
                          alt="arrow_right"
                        />
                      }
                      color="indigo_A200"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm">Share</div>
                    </Button>
                  </div>
                </div>
                <div
                  className="common-pointer bg-white-A700 flex flex-col items-center justify-end p-2 rounded-[12px] w-full"
                  onClick={() => navigate("")}
                >
                  <div className="flex flex-col items-center justify-start mt-[22px] w-[88%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-1/2">
                        <Img
                          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                          src="images/img_image.png"
                          alt="Image"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end">
                          <Text
                            className="mt-0.5 text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Edward Ford
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
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-start mt-[34px] w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14Gray500"
                      >
                        Tourism Is Back In Full Swing In Cancun Mexico
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[180px] items-center justify-start rounded-lg w-full"
                        style={{
                          backgroundImage: "url('images/img_video.png')",
                        }}
                      >
                        <div className="bg-gray-900_66 flex flex-col items-center justify-start p-[71px] md:px-10 sm:px-5 rounded-lg w-full">
                          <Button
                            className="flex h-[38px] items-center justify-center w-[38px]"
                            shape="round"
                            color="white_A700_99"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              src="images/img_play.svg"
                              alt="play"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[44%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[48%]">
                          <Img
                            className="h-3.5 my-0.5 w-3.5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start p-[5px] w-[46%]">
                          <Img
                            className="h-3.5 my-[3px] w-3.5"
                            src="images/img_laptop.svg"
                            alt="laptop"
                          />
                          <Text
                            className="my-0.5 text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            148
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[7px] w-[24%]">
                        <Text
                          className="ml-0.5 text-gray-900 text-sm"
                          size="txtInterMedium14Gray900"
                        >
                          Share
                        </Text>
                        <Img
                          className="h-3.5 mx-0.5 w-3.5"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <div className="border-2 border-gray-500_33 border-solid flex flex-row gap-[15px] items-center justify-evenly mt-5 p-[11px] rounded w-full">
                      <Input
                        name="FrameFive"
                        placeholder="Write a comment…"
                        className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                        wrapClassName="flex w-[88%]"
                        suffix={
                          <Img
                            className="h-3.5 ml-[35px] my-1.5"
                            src="images/img_user_14X14.svg"
                            alt="user"
                          />
                        }
                        shape="square"
                        size="xs"
                      ></Input>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_send.svg"
                        alt="send"
                      />
                    </div>
                    <List
                      className="flex flex-col gap-[30px] items-center mt-5 w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                            <div className="flex flex-row items-end justify-evenly">
                              <Img
                                className="h-7 md:h-auto object-cover rounded-lg w-7"
                                src="images/img_avatar_28X28.png"
                                alt="Avatar One"
                              />
                              <Text
                                className="mb-1 mt-2 text-gray-900 text-sm"
                                size="txtInterMedium14Gray900"
                              >
                                Billy Green
                              </Text>
                            </div>
                            <Text
                              className="mb-1 mt-2 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              20min ago
                            </Text>
                          </div>
                          <Text
                            className="leading-[22.00px] text-gray-500 text-sm w-full"
                            size="txtInterRegular14"
                          >
                            Awesome Edward, remeber that five tips for low cost
                            holidays I sent you?
                          </Text>
                          <div className="flex flex-row gap-[15px] items-center justify-start w-[14%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_favorite_14X14.svg"
                              alt="favorite One"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_laptop.svg"
                              alt="laptop One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row items-end justify-between w-[99%] md:w-full">
                            <div className="flex flex-row items-end justify-evenly">
                              <Img
                                className="h-7 md:h-auto object-cover rounded-lg w-7"
                                src="images/img_avatar_28X28.png"
                                alt="Avatar Two"
                              />
                              <Text
                                className="mb-1 mt-2 text-gray-900 text-sm"
                                size="txtInterMedium14Gray900"
                              >
                                Billy Green
                              </Text>
                            </div>
                            <Text
                              className="mb-1 mt-2 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              20min ago
                            </Text>
                          </div>
                          <Text
                            className="mt-3.5 text-gray-500 text-sm"
                            size="txtInterRegular14"
                          >
                            Awesome Edward, remeber that five tips for low cost
                            holidays I sent you?
                          </Text>
                          <div className="flex flex-row gap-[15px] items-center justify-start mt-[35px] w-[14%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_favorite_14X14.svg"
                              alt="favorite Two"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_laptop.svg"
                              alt="laptop Two"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[47%] md:w-full">
                <div
                  className="common-pointer bg-white-A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full"
                  onClick={() => navigate("")}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                      <Img
                        className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                        src="images/img_image_48X48.png"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-end">
                        <Text
                          className="mt-0.5 text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Katherine Cole
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
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                    <Img
                      className="h-[150px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                      src="images/img_image_150X290.png"
                      alt="Image Two"
                    />
                    <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                      <Text
                        className="leading-[22.00px] text-base text-gray-900 w-full"
                        size="txtInterBold16"
                      >
                        The Best Fashion Instagrams of the Week: Céline Dion,
                        Lizzo, and More
                      </Text>
                      <Text
                        className="leading-[20.00px] text-gray-500 text-sm w-full"
                        size="txtInterMedium14Gray500"
                      >
                        If you are looking for a break from the cold, take a cue
                        from Lizzo: This week, the singer headed to Disneyland
                        in warm and sunny California.
                      </Text>
                    </div>
                    <Text
                      className="mt-3 text-indigo-A200 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12IndigoA200"
                    >
                      Read More
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-5 w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[23%]">
                      <Img
                        className="h-3.5 my-0.5 w-3.5"
                        src="images/img_favorite.svg"
                        alt="favorite Three"
                      />
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[22%]">
                      <Img
                        className="h-3.5 my-[3px] w-3.5"
                        src="images/img_laptop.svg"
                        alt="laptop Three"
                      />
                      <Text
                        className="my-0.5 text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center ml-[77px] p-[7px] w-[26%]">
                      <Text
                        className="ml-0.5 text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        Share
                      </Text>
                      <Img
                        className="h-3.5 mx-0.5 w-3.5"
                        src="images/img_reply.svg"
                        alt="reply One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-start my-[7px] w-[98%] md:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[61%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_1.png"
                            alt="Image Three"
                          />
                          <div className="flex flex-col gap-2 items-start justify-start pr-0.5 pt-0.5">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterBold14"
                            >
                              Dustin Houston
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
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14Gray500"
                      >
                        Whether its a driving tour 😂
                      </Text>
                    </div>
                    <div className="flex flex-col font-sfprodisplay items-center justify-start w-[98%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                        <Img
                          className="h-40 md:h-auto object-cover rounded-lg"
                          src="images/img_image_160X200.png"
                          alt="image Four"
                        />
                        <div className="flex flex-col gap-2.5 items-center justify-start">
                          <Img
                            className="h-[75px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                            src="images/img_image_75X80.png"
                            alt="image Five"
                          />
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[75px] items-center justify-start p-[13px] rounded-lg w-full"
                            style={{
                              backgroundImage: "url('images/img_photo3.png')",
                            }}
                          >
                            <div className="flex flex-row gap-1.5 items-center justify-center my-[9px] p-[7px] w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_settings_14X14.svg"
                                alt="settings Two"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtSFProDisplayMedium14"
                              >
                                17
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row font-inter items-center justify-between w-[98%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[48%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[48%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_favorite.svg"
                            alt="favorite Four"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start p-[5px] w-[46%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_laptop.svg"
                            alt="laptop Four"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            148
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[5px] w-[26%]">
                        <Text
                          className="ml-[5px] text-gray-900 text-sm"
                          size="txtInterMedium14Gray900"
                        >
                          Share
                        </Text>
                        <Img
                          className="h-3.5 mr-1.5 w-3.5"
                          src="images/img_reply.svg"
                          alt="reply Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row font-sfprodisplay gap-2.5 items-center justify-between md:ml-[0] ml-[30px] overflow-auto pl-[5px] md:px-5 w-full">
          <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div>
          <div className="sm:h-[1022px] h-[1024px] md:h-[815px] relative w-full">
            <div className="absolute bg-gray-900 flex flex-col md:gap-10 gap-[227px] h-full inset-y-[0] justify-end left-[0] my-auto p-[30px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[93%]">
              <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[214px] mr-2.5 mt-[15px] w-[35%] md:w-full">
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
                  alt="Avatar Three"
                />
              </div>
              <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-start md:ml-[0] ml-[15px] mr-5 w-[90%] md:w-full">
                <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22WhiteA700"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar.png"
                        alt="Avatar Four"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12WhiteA700"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                        color="indigo_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_camera_28X28.svg"
                          alt="camera One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_38X38.png"
                        alt="Avatar Five"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12WhiteA700"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                        color="indigo_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_camera_28X28.svg"
                          alt="camera Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_1.png"
                        alt="Avatar Six"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12WhiteA700"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                        color="indigo_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_camera_28X28.svg"
                          alt="camera Three"
                        />
                      </Button>
                    </div>
                  </List>
                  <Button
                    className="bg-transparent cursor-pointer flex items-center justify-center min-w-[90px]"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-1"
                        src="images/img_arrowright_18X18.svg"
                        alt="arrow_right"
                      />
                    }
                    size="xs"
                  >
                    <div className="font-bold text-gray-500 text-left text-xs tracking-[1.00px] uppercase">
                      See more
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22WhiteA700"
                  >
                    Trend Topics
                  </Text>
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-center text-sm w-[38px]"
                        shape="round"
                        color="green_400"
                        size="lg"
                        variant="fill"
                      >
                        #1
                      </Button>
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[124px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-center text-sm w-[38px]"
                        shape="round"
                        color="green_400"
                        size="lg"
                        variant="fill"
                      >
                        #2
                      </Button>
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[124px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-center text-sm w-[38px]"
                        shape="round"
                        color="green_400"
                        size="lg"
                        variant="fill"
                      >
                        #3
                      </Button>
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[124px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-center text-sm w-[38px]"
                        shape="round"
                        color="green_400"
                        size="lg"
                        variant="fill"
                      >
                        #4
                      </Button>
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[124px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark Three"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-inter gap-[45px] items-start justify-start right-[0] top-[13%] w-[90%]">
              <Text
                className="common-pointer text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtInterBold22WhiteA700"
                onClick={() => navigate("/stories")}
              >
                Featured Stories
              </Text>
              <List
                className="sm:flex-col flex-row gap-5 grid grid-cols-6 justify-center w-full"
                orientation="horizontal"
              >
                <div className="blue_A700_light_blue_200_border border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image.png"
                    alt="Image Six"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border2 border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image_40X40.png"
                    alt="Image Seven"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border3 border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image_2.png"
                    alt="Image Eight"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border4 border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image_3.png"
                    alt="Image Nine"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border5 border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image_4.png"
                    alt="Image Ten"
                  />
                </div>
                <div className="blue_A700_light_blue_200_border6 border-2 border-solid md:h-10 h-12 p-1 relative rounded-[12px] w-full">
                  <Img
                    className="absolute h-10 inset-[0] justify-center m-auto object-cover rounded-[9px] w-10"
                    src="images/img_image_5.png"
                    alt="Image Eleven"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
