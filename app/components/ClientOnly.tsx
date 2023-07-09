"use client";

import React, { FC, useEffect, useState } from "react";

interface IClientOnlyProps {
  children: React.ReactNode;
}

/**
 * @author
 * @function @ClientOnly
 **/

export const ClientOnly: FC<IClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
};
