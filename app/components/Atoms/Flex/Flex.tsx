import React, { ComponentPropsWithRef } from "react";
import * as Style from "./Flex.css";

function Flex({ children }: ComponentPropsWithRef<"div">) {
  return <div className={Style.BaseStyle}>{children}</div>;
}

export default Flex;
