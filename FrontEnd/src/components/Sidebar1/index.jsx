import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-indigo-A200 flex flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 w-full">
          <Img
            className="h-12 w-12"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Button
            className="flex h-12 items-center justify-center mt-[101px] w-12"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            <Img className="h-6" src="images/img_home.svg" alt="home" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-10 w-12"
            shape="round"
            color="white_A700_33"
            size="lg"
            variant="fill"
          >
            <Img className="h-6" src="images/img_calendar.svg" alt="calendar" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-10 w-12"
            shape="round"
            color="white_A700_33"
            size="lg"
            variant="fill"
          >
            <Img className="h-6" src="images/img_mail.svg" alt="mail" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-10 w-12"
            shape="round"
            color="white_A700_33"
            size="lg"
            variant="fill"
          >
            <Img className="h-6" src="images/img_user.svg" alt="user" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-10 w-12"
            shape="round"
            color="white_A700_33"
            size="lg"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_settings_48X48.svg"
              alt="settings One"
            />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mb-[15px] mt-[322px] w-12"
            shape="round"
            color="white_A700_33"
            size="xl"
            variant="outline"
          >
            <Img
              className="h-[18px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
