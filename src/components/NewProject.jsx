import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewProject({ finishProject }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDate = date.current.value;

    finishProject({
      title: enteredTitle,
      desc: enteredDesc,
      date: enteredDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={desc} label="Description" textarea />
        <Input ref={date} label="Due Date" />
      </div>
    </div>
  );
}
