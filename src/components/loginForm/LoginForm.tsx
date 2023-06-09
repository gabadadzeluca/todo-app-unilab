import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserType from '../../utils/UserType';
import styles from "./LoginForm.module.css";
import Error from './error/ErrorComponent';

export default function LoginForm(props:{
  setIsLoggedIn: (isLoggedIn: boolean)=>void;
}){
  const setIsLoggedIn  = props.setIsLoggedIn;
  const navigate = useNavigate();
  const imgInputUrlRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [name, setName] = useState<string|null>(null);
  const [showError, setShowError] = useState<boolean>(false);


  const handleSubmit = (e:React.MouseEvent):void => {
    e.preventDefault();
    setShowError(true);
    if(imageUrl && name){
      // create a new user object with the input values
      const newUser: UserType = { name, imageUrl};
      // store the user object in local storage
      localStorage.setItem('user', JSON.stringify(newUser));
      setIsLoggedIn(true);
      navigate(`/tasks`);
    }else{
      console.log("NO IMAGE AND NAME");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setName(value);
  }
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result as string;
        setImageUrl(dataURL);
      };
    }
  };


  return (
    <form className={styles.loginForm}>
      <h3>Get Started</h3>
      <div className={styles.imgInputDiv}>
        <label htmlFor="imgInput">add a photo</label>
        <input 
          className={styles.imgInput}
          type="file" 
          id="imgInput"
          ref={imgInputUrlRef} 
          onChange={handleAvatarChange}
        />
         <Error 
          condition={imageUrl == '' || imageUrl == null}
          message={'Image is required'}
          show={showError}
        />
      </div>
      <div className={styles.nameInputDiv}>
        <label htmlFor="nameInput">fill in your name</label>
        <input 
          className={styles.nameInput}
          type="text" 
          id="nameInput" 
          ref={nameInputRef} 
          onChange={handleNameChange}
          placeholder='your name'
          value={name || ''}
        />
        <Error 
          condition={name == '' || name == null}
          message={'Name must not be empty'}
          show={showError}
        />
      </div>
      <button 
        className={styles.signInBtn}
        type="submit" 
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </form>
  );
}