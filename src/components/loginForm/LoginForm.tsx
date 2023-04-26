import { useRef, useState } from 'react';

type UserType = {
  name: string|undefined;
  imageUrl: string|undefined;
}

export default function LoginForm(){
  const imgInputUrlRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState<string|null>(null);


  const handleSubmit = (e:React.MouseEvent):void => {
    e.preventDefault();
    const imageUrl = imgInputUrlRef.current?.value;
    const name = nameInputRef.current?.value;

    // create a new user object with the input values
    const newUser: UserType = { name, imageUrl };

    // store the user object in local storage
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value);
  }
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files &&  e.target.files?.length > 0){
      console.log(e.target.files[0]);
      // convert image to save it
    }
  }


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