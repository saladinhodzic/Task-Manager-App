import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ finishProject }) {
  const dialog = useRef();

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    finishProject({
      title: enteredTitle,
      desc: enteredDesc,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="font-bold  text-stone-600 md:text-xl ">
          You entered invalid input.
        </h2>
        <p className="text-stone-400">Please enter a valid input.</p>
      </Modal>
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
          <Input type="text" ref={title} label="Title" />
          <Input ref={desc} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
