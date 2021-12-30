import React from "react";
import { Button } from "@material-ui/core";

export function ButtonTest({ text, ...props }) {

  const showAlert = () => {
    console.log("Called from button");
  }

  return (
    <Button {...props} onClick={showAlert}>
      {text}
    </Button>
  );
}
