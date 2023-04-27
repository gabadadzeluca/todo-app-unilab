import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserType from '../../utils/UserType';

export default function LoginForm(){
  const navigate = useNavigate();
  const imgInputUrlRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [name, setName] = useState<string|null>(null);

  const handleSubmit = (e:React.MouseEvent):void => {
    e.preventDefault();
    if(imageUrl && name){
      // create a new user object with the input values
      const newUser: UserType = { name, imageUrl};
      // store the user object in local storage
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('.tasks');
    }else{
      console.log("NO IMAGE AND NAME");
      // add error messages later
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value);
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
    <form>
      <h3>Get Started</h3>
      <div>
        <label htmlFor="imgInput">add a photo</label>
        <input 
          type="file" 
          id="imgInput"
          ref={imgInputUrlRef} 
          onChange={handleAvatarChange}
        />
      </div>
      <div>
        <label htmlFor="nameInput">fill in your name</label>
        <input 
          type="text" 
          id="nameInput" 
          ref={nameInputRef} 
          onChange={handleNameChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Sign In</button>
    </form>
  );
}