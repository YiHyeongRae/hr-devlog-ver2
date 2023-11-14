import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const flexDirection = createVar();
export const justifyContent = createVar();
export const alignItems = createVar();
export const BaseStyle = style({
  display: "flex",
  flexDirection: flexDirection,
  justifyContent: justifyContent,
  alignItems: alignItems,
});
