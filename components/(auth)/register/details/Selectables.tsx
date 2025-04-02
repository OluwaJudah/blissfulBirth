import { ConditionButton, ConditionCancelButton } from "@/components/Buttons";
type ConditionType = { name: string; isAdded: boolean };

const Selectables = ({
  list,
  setList,
}: {
  list: ConditionType[];
  setList: (conditions: ConditionType[]) => void;
}) => {
  const addToList = (index: number) => {
    const newList = [...list];
    newList[index].isAdded = false;
    setList(newList);
  };

  const addToCancelList = (index: number) => {
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

export default Selectables;
