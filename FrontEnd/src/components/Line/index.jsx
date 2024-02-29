import React from "react";

const Line = ({ className, ...restProps }) => {
  return <div className={className} {...restProps} />;
};
export { Line };
