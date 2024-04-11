import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [registeredUsers, setRegisteredUsers] = useState(
    localStorage.getItem("registeredUsers")
      ? JSON.parse(localStorage.getItem("registeredUsers"))
      : []
  );
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (data) => {
    setRegisteredUsers((prev) => [
      ...prev,
      {
        id: new Date(),
        ...data,
      },
    ]);
    setSignupSuccess(true);
  };

  const handleSignin = (data) => {
    const user = registeredUsers.find((user) => user.email === data.email);

    if (!user) {
      setEmailError("Email is incorrect!");
      return;
    }

    if (user.password !== data.password) {
      setPasswordError("Password is incorrect!");
      return;
    }

    setUser({
      id: user.id,
      image: user.image,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: user.id,
        image: user.image,
      })
    );
    setSigninSuccess(true);
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const contextData = {
    image,
    setImage,
    user,
    registeredUsers,
    signinSuccess,
    signupSuccess,
    handleSignup,
    setSignupSuccess,
    setSigninSuccess,
    handleSignin,
    emailError,
    passwordError,
    logout,
    setEmailError,
    setPasswordError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
