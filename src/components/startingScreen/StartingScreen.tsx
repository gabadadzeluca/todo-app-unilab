import { useNavigate } from "react-router-dom";

export default function StartingScreen(){
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <img src='' alt=''/>
      <h2>Keep track of daily tasks in life</h2>
      <button onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
}