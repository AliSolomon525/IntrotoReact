import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Signup";

  //you have to have a parameter in this fuction because you have to do the e prevent default
  function toggle(e) {
    e.preventDefault();
    if (isLogin == true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }

  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="text" id="password" />
        <br />
        <button onClick={(e) => toggle(e)}>Toggle Signup/Login</button>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Auth;
