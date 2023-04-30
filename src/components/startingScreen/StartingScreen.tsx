import { useNavigate } from "react-router-dom";
import todoIcon from "../../assets/todo-icon.png"
import styles from "./StartingScreen.module.css";


export default function StartingScreen(){
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.startingScreenContainer}>
      <div className={styles.startingScreenDiv}>
        <img src={todoIcon} alt=''/>
        <h2>Keep track of daily tasks in life</h2>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </div>
  );
}