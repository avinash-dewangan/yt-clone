import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  let navigate = useNavigate();
  useEffect(() => {
    console.log(accessToken)
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="youtube"
        />
        <button onClick={handleLogin}>Login with google</button>
        <p>This Project is mad using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
