import React from "react";
import { ConfigProvider } from "@alicloudfe/components";

export default ({ children }) => {
  return (
    <ConfigProvider prefix="xdemo-">
      <>{children}</>
    </ConfigProvider>
  );
};
