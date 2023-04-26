import { useRef } from 'react';

type UserType = {
  name: string;
  image: string;
}

export default function LoginForm(){
  const imgInputUrlRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:React.MouseEvent):void => {
    e.preventDefault();
    const imageUrl = imgInputUrlRef.current?.value;
    const name = nameInputRef.current?.value;

    // Create a new user object with the input values
    const newUser: UserType = { name, imageUrl };

    // Store the user object in local storage
    localStorage.setItem('user', JSON.stringify(newUser));
  };


  return (
    <form>
      <h3>Get Started</h3>
      <div>
        <label htmlFor="imgInput">add a photo</label>
        <input type="file" id="imgInput" ref={imgInputUrlRef} />
      </div>
      <div>
        <label htmlFor="nameInput">fill in your name</label>
        <input type="text" id="nameInput" ref={nameInputRef}/>
      </div>
      <button type="submit" onClick={handleSubmit}>Sign In</button>
    </form>
  );
}