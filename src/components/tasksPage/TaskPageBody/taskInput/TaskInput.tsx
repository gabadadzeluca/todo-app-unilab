import { useRef } from 'react';
import TaskInterface from '../../../../utils/TaskInterface';


export default function TaskInput(){
  const taskInputRef = useRef<HTMLInputElement>(null);

  const handleTaskSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const taskInput = taskInputRef.current;
    if (!taskInput) return;
  
    const body = taskInput.value.trim();
    if (!body) return;
  
    const newTask : TaskInterface = {
      body,
      isCompleted: false
    };
    console.log("NEW TASK", newTask);
    // Clear the input field
    taskInput.value = '';
  };
  return(
    <form>
      <input 
        ref={taskInputRef}
        type="text"
      />
      <button 
        type="submit"
        onClick={handleTaskSubmit}
      >
        Add
      </button>
    </form>
  );
}