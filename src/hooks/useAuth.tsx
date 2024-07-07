import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState("");

  const loginUser = (user: string) => {
    console.log(user);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return { user, loginUser };
};

export default useAuth;
