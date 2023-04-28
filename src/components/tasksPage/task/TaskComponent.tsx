import TaskInterface from "../../../utils/TaskInterface";
import { ACTIONS, ActionType } from "../TaskPageBody/TaskReducer";

interface TaskPropsInterface{
  task: TaskInterface;
  dispatch: (action: ActionType) => void;
}
export default function TaskComponent(props:TaskPropsInterface){
  const {task, dispatch} = props;
  const deleteTask = (task:TaskInterface):void => {
    dispatch({type: ACTIONS.REMOVE_TASK, payload:task});
  }
  const markCompleted = (task:TaskInterface):void => {
    dispatch({type: ACTIONS.MARK_COMPLETED, payload: task})
  }
  
  return (
    <div>
      <p>
        {task.body}
      </p>
      <div>
        {/* div for the buttons */}
        <button>mark completed</button>
        <button>delete</button>
      </div>
    </div>
  );
}