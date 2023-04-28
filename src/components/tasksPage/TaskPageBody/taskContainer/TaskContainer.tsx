import { useReducer } from 'react';
import ContainerHeader from "../../TaskPageHeader/ContainerHeader";
import UserType from "../../../../utils/UserType";
import TaskInterface from "../../../../utils/TaskInterface";
import TaskInput from "../taskInput/TaskInput";
import { taskReducer, ACTIONS } from "../TaskReducer";

export default function TaskContainer(){
  const userString: string|null = localStorage.getItem('user');
  const user: UserType|null = userString ? JSON.parse(userString) : null;
  const name:string|undefined = user?.name;
  const imageUrl:string|undefined = user?.imageUrl;

  // check for tasks array, if there is not any=> create array
  if(! localStorage.getItem('tasks')) localStorage.setItem('tasks', JSON.stringify([]));
  const taskString:string|null = localStorage.getItem("tasks");
  let tasksArray:TaskInterface[] = [];

  if(taskString){
    tasksArray = JSON.parse(taskString);
  }
  const [tasks, dispatch] = useReducer(taskReducer, tasksArray);

  return (
    <div>
      <ContainerHeader name={name} imageUrl={imageUrl}/>
      <TaskInput dispatch={dispatch} tasks={tasks}/>
      {tasks.map(task=>{
        return <p>{task.body}</p>
      })}
    </div>
  );
}