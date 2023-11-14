import React, { ComponentPropsWithRef } from "react";
import * as Style from "./Flex.css";
import { flexDirection, justifyContent, alignItems } from "./Flex.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface FlexStylesTypes extends ComponentPropsWithRef<"div"> {
  dir?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "center" | "flex-start" | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
}

function Flex({ children, dir, justify, align, style }: FlexStylesTypes) {
  return (
    <div
      className={`${Style.BaseStyle}`}
      style={
        (assignInlineVars({
          [flexDirection]: dir,
          [justifyContent]: justify,
          [alignItems]: align,
        }),
        style)
      }
    >
      {children}
    </div>
  );
}

export default Flex;
