import { useState } from "react";

export default function Table({ inputValue }) {
  const [id, setId] = useState(inputValue.length);
  const [task, setTask] = useState(inputValue);
  const [checked, setChecked] = useState(true);

  function checkInput(id) {
    setChecked((prev) => !prev);
    task[id].checked = checked;
  }

  return (
    <table className="table-fixed text-slate-500 w-full font-light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Name</th>
          <th>Start Date</th>
          <th>Date of accession</th>
          <th>State</th>
          <th>Checked</th>
        </tr>
      </thead>

      <tbody>
        
        {task.map((taskDetails, taskId) => {
          return (
            <tr key={taskId}>
              <td>{taskId + 1}</td>
              <td>{taskDetails.task}</td>
              <td>{taskDetails.date}</td>
              <td>{taskDetails.time}</td>
              <td>
                {taskDetails.checked !== false
                  ? (taskDetails.state = "Done")
                  : "In Progress"}
              </td>
              <td>
                <input type="checkbox" onChange={() => checkInput(taskId)} />
              </td>
            </tr>
          );
        })}

      </tbody>
      
    </table>
  );
}
