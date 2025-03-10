"use client";
import { useState } from "react";
import { ConditionButton, ConditionCancelButton } from "@/components/Buttons";
type ConditionType = { name: string; isAdded: boolean };

const Conditions = ({ conditions }: { conditions: ConditionType[] }) => {
  const [list, setList] = useState(conditions);

  const addToList = (index: number) => {
    console.log("Index: ", index);
    const newList = [...list];
    newList[index].isAdded = false;
    setList(newList);
  };

  const addToCancelList = (index: number) => {
    console.log("Index: ", index);

    const newList = [...list];
    newList[index].isAdded = true;
    setList(newList);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 my-3">
        {list.map((c: ConditionType, index: number) => {
          if (!c.isAdded) return <div className="hidden" key={index}></div>;

          return (
            <ConditionCancelButton
              addToList={() => addToList(index)}
              key={index}
              name={c.name}
            />
          );
        })}

        {list.map((c: ConditionType, index: number) => {
          if (c.isAdded) return <div className="hidden" key={index}></div>;
          return (
            <ConditionButton
              addToCancelList={() => addToCancelList(index)}
              key={index}
              name={c.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Conditions;
