import TaskInterface from "../../../utils/TaskInterface";

const ACTIONS = {
  'ADD_TASK': 'ADD_TASK',
  'REMOVE_TASK': 'REMOVE_TASK',
  'MARK_COMPLETED': 'MARK_COMPLETED'
}

interface AddTaskAction{
  type: typeof ACTIONS.ADD_TASK;
  payload: TaskInterface;
}
interface RemovTaskAction{
  type: typeof ACTIONS.REMOVE_TASK;
  payload: TaskInterface;
}
interface markTaskCompletedAction{
  type: typeof ACTIONS.MARK_COMPLETED;
  payload: TaskInterface;
}
export type ActionType = AddTaskAction | RemovTaskAction | markTaskCompletedAction;

const taskReducer = (state:TaskInterface[], action:ActionType) => {
  switch(action.type){
    case ACTIONS.ADD_TASK:
     return [...state, action.payload];
    case ACTIONS.REMOVE_TASK:
      const filteredTasks = state.filter((task) => task.created_at !== action.payload.created_at);
      return filteredTasks;
    case ACTIONS.MARK_COMPLETED:
      const updatedTasks = state.map((task) => {
        if (task.created_at === action.payload.created_at) {
          return { ...task, isCompleted: true };
        } else {
          return task;
        }
      });
      return updatedTasks;
    default : 
      throw new Error('Unrecognised action');
  }
}

export { taskReducer, ACTIONS}
