import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const StoriesPage = () => {
  const navigate = useNavigate();

  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between mx-auto md:px-5 w-full">
          <Line className="bg-white-A700_66 h-32 md:h-[5px] mb-[528px] md:mt-0 mt-[448px] rounded-[2.5px] w-[5px] md:w-full" />
          <div className="bg-gray-900 flex flex-col items-center justify-end pt-10 px-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-white-A700_33 flex md:flex-1 md:flex-col flex-row gap-[25px] items-center justify-start p-[9px] rounded-[12px] w-[67%] md:w-full">
                  <Input
                    name="FrameSix"
                    placeholder="Search in social…"
                    value={framesixvalue}
                    onChange={(e) => setFramesixvalue(e)}
                    className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="flex ml-0.5 md:ml-[0] md:mt-0 mt-1 w-[87%] md:w-full"
                    prefix={
                      <Img
                        className="mt-[7px] mb-[11px] cursor-pointer h-[18px] ml-[9px] mr-[15px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#8f92a1"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setFramesixvalue("")}
                        style={{
                          visibility:
                            framesixvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    shape="square"
                    color="gray_800"
                    size="lg"
                  ></Input>
                  <Text
                    className="text-gray-500 text-xs tracking-[1.00px] uppercase"
                    size="txtInterBold12Gray500"
                  >
                    Filters
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row font-sfprodisplay gap-5 items-center justify-between w-[11%] md:w-full">
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
                    alt="Avatar"
                  />
                </div>
              </div>
              <Text
                className="mt-[60px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterBold30"
              >
                Stories
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-10 py-0.5 w-[46%] md:w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtInterBold14WhiteA700"
                  >
                    For You
                  </Text>
                  <Line className="bg-white-A700 h-0.5 w-full" />
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[26px] sm:mt-0 mt-0.5">
                  <Text
                    className="text-sm text-white-A700_99"
                    size="txtInterBold14WhiteA70099"
                  >
                    Following
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[25px] sm:mt-0 mt-0.5">
                  <Text
                    className="text-sm text-white-A700_99"
                    size="txtInterBold14WhiteA70099"
                  >
                    Popular
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start ml-6 sm:ml-[0]">
                  <Text
                    className="text-sm text-white-A700_99"
                    size="txtInterBold14WhiteA70099"
                  >
                    Featured
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[26px]">
                  <Text
                    className="text-sm text-white-A700_99"
                    size="txtInterBold14WhiteA70099"
                  >
                    Live
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[26px] sm:mt-0 mt-0.5">
                  <Text
                    className="text-sm text-white-A700_99"
                    size="txtInterBold14WhiteA70099"
                  >
                    Continue Watching
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-sfprodisplay items-center justify-start mt-10 w-full">
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{ backgroundImage: "url('images/img_photo3.png')" }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[18px] items-center justify-end p-[42px] md:px-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-48 object-cover rounded-[24px] w-[68px]"
                        src="images/img_image.png"
                        alt="Image"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile.png')",
                    }}
                  >
                    <div
                      className="common-pointer bg-gradient  flex flex-col gap-[18px] items-center justify-end p-[42px] md:px-10 sm:px-5 rounded-lg w-full"
                      onClick={() => navigate("/singlestory")}
                    >
                      <Img
                        className="h-[68px] md:h-auto mt-48 object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_68X68.png"
                        alt="Image One"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_cardmobile_380X255.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[18px] items-center justify-end p-[42px] md:px-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-48 object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_6.png"
                        alt="Image Two"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile_1.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[18px] items-center justify-end p-[42px] md:px-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-48 object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_7.png"
                        alt="Image Three"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile_2.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[15px] items-center justify-end p-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-[195px] object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_8.png"
                        alt="Image Four"
                      />
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile_3.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[15px] items-center justify-end p-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-[195px] object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_9.png"
                        alt="Image Five"
                      />
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile_4.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[15px] items-center justify-end p-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-[195px] object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_10.png"
                        alt="Image Six"
                      />
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[380px] items-center justify-start rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_cardmobile_5.png')",
                    }}
                  >
                    <div className="bg-gradient  flex flex-col gap-[15px] items-center justify-end p-10 sm:px-5 rounded-lg w-full">
                      <Img
                        className="h-[68px] md:h-auto mt-[195px] object-cover rounded-[24px] w-[68px]"
                        src="images/img_image_11.png"
                        alt="Image Seven"
                      />
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtSFProDisplayBold16"
                      >
                        Edward Ford
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesPage;
