import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    indigo_600: "bg-indigo-600 text-white-A700",
    white_A700_99: "bg-white-A700_99",
    gray_500_36: "bg-gray-500_36 text-gray-900",
    light_blue_200_33: "bg-light_blue-200_33",
    gray_100_6c: "bg-gray-100_6c text-gray-900",
    red_A200: "bg-red-A200 text-white-A700",
    gray_900_6c: "bg-gray-900_6c text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    green_400: "bg-green-400 text-white-A700",
    gray_100: "bg-gray-100",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    white_A700_33: "bg-white-A700_33 text-white-A700",
  },
  outline: {
    gray_500_66: "border-2 border-gray-500_66 border-solid text-gray-900",
    white_A700_33: "border-2 border-solid border-white-A700_33",
  },
};
const sizes = {
  xs: "py-[3px]",
  sm: "p-1",
  md: "p-[7px]",
  lg: "px-[11px] py-3",
  xl: "p-4",
  "2xl": "p-[21px] sm:px-5",
  "3xl": "sm:pr-5 pr-[22px] py-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_600",
    "white_A700_99",
    "gray_500_36",
    "light_blue_200_33",
    "gray_100_6c",
    "red_A200",
    "gray_900_6c",
    "white_A700",
    "light_blue_200",
    "gray_900",
    "green_400",
    "gray_100",
    "indigo_A200",
    "white_A700_33",
    "gray_500_66",
  ]),
};

export { Button };
