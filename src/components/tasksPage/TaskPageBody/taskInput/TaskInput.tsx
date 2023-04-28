import { useRef, useEffect } from 'react';
import TaskInterface from '../../../../utils/TaskInterface';
import { ACTIONS, ActionType} from '../TaskReducer'

export default function TaskInput(props:{
  tasks: TaskInterface[]
  dispatch: (action: ActionType) => void;
}){
  const { tasks, dispatch } = props;
  const taskInputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks)); // update local storage
  }, [tasks]);

  const handleTaskSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const taskInput = taskInputRef.current;
    if (!taskInput) return;
  
    const body = taskInput.value.trim();
    if (!body) return;
  
    const newTask : TaskInterface = {
      body,
      isCompleted: false,
      created_at: new Date()
    };
    // append new task to the tasks
    dispatch({type:ACTIONS.ADD_TASK, payload:newTask});
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