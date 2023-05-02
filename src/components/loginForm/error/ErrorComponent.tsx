import styles from "./ErrorComponent.module.css";

export default function Error(props:{
  condition: boolean;
  message: string;
  show: boolean;
}){
  const{condition, message,show} = props;
  if(show){
    return(
      <div className={styles.error}>
        {condition ? message : ''}
      </div>
    )
  }else{
    return null;
  }
}