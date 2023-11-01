import React from "react";
import Routine from "./Routine";
import Results from "../results/Results";

const RoutineAndResults = () => {
  const type = "Class Routine";

  return (
    <div className="lg:grid lg:grid-cols-2 bg-gray-700">
      <Routine name="Class Routine" type="Class Routine" />
      <Routine name="Exam Results" type="Result" />
    </div>
  );
};

export default RoutineAndResults;
