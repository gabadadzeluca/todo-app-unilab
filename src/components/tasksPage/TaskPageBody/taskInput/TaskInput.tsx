import { useRef, useReducer } from 'react';
import TaskInterface from '../../../../utils/TaskInterface';


const ACTIONS = {
  'ADD_TASK': 'ADD_TASK',
  'REMOVE_TASK': 'REMOVE_TASK',
}

interface AddTaskAction{
  type: typeof ACTIONS.ADD_TASK;
  payload: TaskInterface;
}
interface RemovTaskAction{
  type: typeof ACTIONS.REMOVE_TASK;
  payload: TaskInterface;
}
type ActionType = AddTaskAction | RemovTaskAction

const taskReducer = (state:TaskInterface[], action:ActionType) => {
  switch(action.type){
    case ACTIONS.ADD_TASK:
     return [...state, action.payload];
    case ACTIONS.REMOVE_TASK:
      const filteredTasks = state.filter((task) => task.created_at !== action.payload.created_at);
      return filteredTasks;
    default : 
      throw new Error('Unrecognised action');
  }
}

export default function TaskInput(props:{
  tasksArray: TaskInterface[];
}){
  const tasksArray = props.tasksArray;
  const [tasks, dispatch] = useReducer(taskReducer, tasksArray);
  const taskInputRef = useRef<HTMLInputElement>(null);

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
    // add a new task to tasks
    dispatch({type:ACTIONS.ADD_TASK, payload:newTask});
    // Clear the input field
    taskInput.value = '';
  };
  console.log("TASKS:", tasks);
  
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