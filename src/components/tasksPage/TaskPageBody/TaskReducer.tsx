import TaskInterface from "../../../utils/TaskInterface";

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
export type ActionType = AddTaskAction | RemovTaskAction

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

export { taskReducer, ACTIONS}
