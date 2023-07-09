"use client";

import React, { FC } from "react";

interface IHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

/**
 * @author
 * @function @Heading
 **/

export const Heading: FC<IHeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div
      className={`
  ${center ? "text-center" : "text-start"}`}
    >
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};
