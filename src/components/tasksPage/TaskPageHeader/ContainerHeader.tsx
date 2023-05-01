import UserType from "../../../utils/UserType";
import styles from "./ContainerHeader.module.css"

export default function ContainerHeader(props: UserType){
  const { name, imageUrl } = props;
  return (
    <div className={styles.containerHeader}>
      <h3>to do</h3>
      <div className={styles.userDiv}>
        <p>{name ?? 'name'}</p>
        <img src={imageUrl} alt='avatar' className={styles.profilePic}/>
      </div>
    </div>
  );
}