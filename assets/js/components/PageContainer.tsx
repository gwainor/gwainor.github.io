import * as React from "react";

type Props = {
  center?: boolean;
  children: React.ReactNode;
};

export const PageContainer = ({ center = false, children }: Props) => {
  const centerClasses = center ? "justify-center items-center" : "";

  return <div className={`h-screen flex ${centerClasses}`}>{children}</div>;
};
