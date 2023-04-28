import ContainerHeader from "../TaskPageHeader/ContainerHeader";
import UserType from "../../../utils/UserType";
import TaskInterface from "../../../utils/TaskInterface";

export default function TaskContainer(){
  const userString: string|null = localStorage.getItem('user');
  const user: UserType|null = userString ? JSON.parse(userString) : null;
  const name:string|undefined = user?.name;
  const imageUrl:string|undefined = user?.imageUrl;

  return (
    <div>
      <ContainerHeader name={name} imageUrl={imageUrl}/>
      {/* map tasks=> */}
    </div>
  );
}