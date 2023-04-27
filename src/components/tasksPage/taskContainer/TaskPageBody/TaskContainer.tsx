import ContainerHeader from "../TaskPageHeader/ContainerHeader";
import UserType from "../../../../utils/UserType";

export default function TaskContainer(){
  const userString: string|null = localStorage.getItem('user');
  const user: UserType|null = userString ? JSON.parse(userString) : null;
  console.log("USER:", user);
  return (
    <div>
      <ContainerHeader />
    </div>
  );
}