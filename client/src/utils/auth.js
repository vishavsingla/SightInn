import { KEY_ACCESS_TOKEN, getItem, setItem } from "./localStorageManager";
import axios from "axios";

export const isLogin = async () => {
  console.log("above");
  const token = getItem(KEY_ACCESS_TOKEN);

  console.log(token);
  console.log("below");
  if (token) {
    const res = await axios.post(`http://localhost:4001/auth/getuser`, {
      token,
    });
    return res.data;
  }
  return false;
};
