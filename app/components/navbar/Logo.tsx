"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ILogoProps {}

/**
 * @author
 * @function @Logo
 **/

export const Logo: FC<ILogoProps> = (props) => {
  const router = useRouter();
  return (
    <div>
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      />
    </div>
  );
};
