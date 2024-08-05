import React from "react";

const loading = ({}) => {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse flex-col gap-2 rounded-lg border px-5 py-3"
        >
          <div className="h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-5/6 rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default loading;
