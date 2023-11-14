import React, { ComponentPropsWithRef } from "react";
import * as Style from "./Title.css";

function Title({ children }: ComponentPropsWithRef<"div">) {
  return <div className={Style.BaseStyle}>{children}</div>;
}

export default Title;
