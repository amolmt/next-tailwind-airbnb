"use client";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

interface IToasterProviderProps {}

/**
 * @author
 * @function @ToasterProvider
 **/

export const ToasterProvider: FC<IToasterProviderProps> = (props) => {
  return <Toaster />;
};
