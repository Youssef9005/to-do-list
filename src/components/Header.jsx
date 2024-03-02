import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPlus } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Header(props) {
  let inputVal;

  function getValue(value) {
    inputVal = value;
    return inputVal;
  }

  let dayOfMonth = new Date().getDate();
  let month      = new Date().getMonth() + 1;
  let fullYear   = new Date().getFullYear();
  let getMinutes = new Date().getMinutes();
  let getHours   = new Date().getHours();

  if (dayOfMonth <= 9 || month <= 9) {
    dayOfMonth = `0${dayOfMonth}`;
    month = `0${month}`;
  }

  function log() {
    props.setTask(inputVal);
    props.input.map((value) => {
    })
    props.input.push({
      task: inputVal,
      date: `${dayOfMonth}-${month}-${fullYear}`,
      time: `${getHours}:${getMinutes}`,
      checked: false,
      state: "",
    });
  }

  return (
    <header className="flex justify-between items-center border-b pb-5 border-gray-600 border-solid">
      <h1 className="text-2xl font-semibold text-stone-950 font-mono">ToDo</h1>

      <label className="relative" htmlFor="input">
        <FontAwesomeIcon
          icon={faPlus}
          className="absolute bottom-1/2 translate-y-2/4 rounded-full p-2 right-0 cursor-pointer"
          onClick={() => log()}
        />

        <input
          type="text"
          placeholder="add new task"
          className="bg-slate-100 outline-none rounded-sm py-2 w-64 px-2 placeholder:text-slate-700 text-center"
          id="input"
          onChange={(event) => getValue(event.target.value)}
        />
      </label>

      <div></div>
    </header>
  );
}
