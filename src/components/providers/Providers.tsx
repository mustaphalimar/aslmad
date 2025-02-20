"use client";

import { PropsWithChildren } from "react";
import NextNProgressClient from "../progress-bar";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextNProgressClient />
      {children}
    </>
  );
};
export default Providers;
