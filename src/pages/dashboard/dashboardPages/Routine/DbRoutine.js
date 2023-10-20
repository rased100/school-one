import React from "react";
import MyButton from "../../../components/MyButton";
import RoutineList from "../../../components/RoutineList";

const DbRoutine = () => {
  return (
    <div className="bg-gray-700 px-10 py-10 scroll-auto">
      <div className="flex-1 justify-center items-center rounded-lg lg:pl-10  py-10 lg:py-0">
        <RoutineList />
      </div>
      <div className="flex justify-center items-center py-10">
        <MyButton name="Add More Routine" to="" />
      </div>
    </div>
  );
};

export default DbRoutine;
