import TaskInterface from "../../../utils/TaskInterface";
import { ACTIONS, ActionType } from "../../../utils/TaskReducer";
import styles from "./TaskComponent.module.css";

interface TaskPropsInterface{
  task: TaskInterface;
  dispatch: (action: ActionType) => void;
}
export default function TaskComponent(props:TaskPropsInterface){
  const {task, dispatch} = props;
  const deleteTask = (task:TaskInterface):void => {
    dispatch({type: ACTIONS.REMOVE_TASK, payload:task});
  }
  const markTaskCompleted = (task:TaskInterface):void => {
    dispatch({type: ACTIONS.MARK_COMPLETED, payload: task})
  }
  const isCompleted = task.isCompleted;
  return (
    <div className={`${styles.task} ${isCompleted? styles.completed : '' }`}>
      <p className={styles.taskBody}>
        {task.body}
      </p>
      <div className={styles.taskButtonsDiv}>
        <button 
          onClick={()=>markTaskCompleted(task)}
          className={styles.markCompletedBtn}
        >
        </button>
        <button 
          onClick={()=>deleteTask(task)}
          className={styles.deleteBtn}
        >
        </button>
      </div>
    </div>
  );
}