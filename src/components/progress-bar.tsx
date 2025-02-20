"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NextNProgressClient = () => {
  return (
    <ProgressBar
      height="10px"
      color="#fff"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default NextNProgressClient;
