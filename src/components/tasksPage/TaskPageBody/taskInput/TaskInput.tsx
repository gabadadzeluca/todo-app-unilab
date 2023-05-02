import { useRef, useEffect } from 'react';
import TaskInterface from '../../../../utils/TaskInterface';
import { ACTIONS, ActionType} from '../../../../utils/TaskReducer'
import styles from './TaskInput.module.css';

export default function TaskInput(props:{
  tasks: TaskInterface[]
  dispatch: (action: ActionType) => void;
}){
  const { tasks, dispatch } = props;
  const taskInputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks)); // update local storage
  }, [tasks]);

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
    // append new task to the tasks
    dispatch({type:ACTIONS.ADD_TASK, payload:newTask});
    // Clear the input field
    taskInput.value = '';
  };

  return(
    <form className={styles.taskInputForm}>
      <input 
        ref={taskInputRef}
        type="text"
        className={styles.taskInput}
        placeholder='my task'
      />
      <button 
        type="submit"
        onClick={handleTaskSubmit}        
        className={styles.submitBtn}
      >
        Add
      </button>
    </form>
  );
}