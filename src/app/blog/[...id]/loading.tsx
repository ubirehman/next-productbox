import React from "react";

const loading = ({}) => {
  return (
    <div className="flex h-full w-8/12 animate-pulse flex-col gap-3 px-3">
      <div className="h-8 w-3/4 rounded bg-gray-300"></div>
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-10/12 rounded bg-gray-300"></div>
        <div className="h-4 w-11/12 rounded bg-gray-300"></div>
        <div className="h-4 w-9/12 rounded bg-gray-300"></div>
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-10/12 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default loading;
