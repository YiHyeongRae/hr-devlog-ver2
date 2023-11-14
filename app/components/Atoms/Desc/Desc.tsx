import React, { ComponentPropsWithRef } from "react";
import * as Style from "./Desc.css";
function Desc({ children }: ComponentPropsWithRef<"div">) {
  return <div className={Style.BaseStyle}>{children}</div>;
}

export default Desc;
