import ContainerHeader from "../../TaskPageHeader/ContainerHeader";
import UserType from "../../../../utils/UserType";
import TaskInterface from "../../../../utils/TaskInterface";
import TaskInput from "../taskInput/TaskInput";

export default function TaskContainer(){
  const userString: string|null = localStorage.getItem('user');
  const user: UserType|null = userString ? JSON.parse(userString) : null;
  const name:string|undefined = user?.name;
  const imageUrl:string|undefined = user?.imageUrl;

  // check for tasks array, if there is not any=> create array
  if(! localStorage.getItem('tasks')) localStorage.setItem('tasks', JSON.stringify([]));
  const taskString:string|null = localStorage.getItem("tasks");
  let tasks:TaskInterface[] = [];

  if(taskString){
    tasks = JSON.parse(taskString);
  }

  console.log("TASKS:", tasks);
  return (
    <div>
      <ContainerHeader name={name} imageUrl={imageUrl}/>
      <TaskInput tasks={tasks}/>
      {/* map tasks=> */}
    </div>
  );
}