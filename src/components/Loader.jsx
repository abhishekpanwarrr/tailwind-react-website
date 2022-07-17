import React from "react";
import { Hypnosis } from "react-cssfx-loading";
const Loader = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Hypnosis color="#333" width="100px" height="100px  " duration="3s" />
    </div>
  );
};
// #  e9d5a1
export default Loader;
