import React from "react";
import Routine from "./Routine";
import Results from "../results/Results";

const RoutineAndResults = () => {
  const type = "Class Routine";

  return (
    <div className="lg:flex lg:justify-around bg-gray-700">
      <Routine name="Class Routine" type="Class Routine" />
      <Routine name="Exam Results" type="Results" />
    </div>
  );
};

export default RoutineAndResults;
