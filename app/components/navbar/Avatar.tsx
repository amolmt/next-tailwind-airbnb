"use client";

import Image from "next/image";
import React, { FC } from "react";

interface IAvatarProps {}

/**
 * @author
 * @function @Avatar
 **/

export const Avatar: FC<IAvatarProps> = (props) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};
