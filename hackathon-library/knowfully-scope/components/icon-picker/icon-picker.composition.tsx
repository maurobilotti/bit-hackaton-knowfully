import React from "react";
import IconPicker from "./icon-picker";

export const BasicIconPicker = () => (
  <IconPicker
    value="fab fa-accessible-icon"
    onChange={(value: string) => console.log(value)}
  />
);
