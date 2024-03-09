import React from "react";

const List = ({ children, className, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};
export { List };
