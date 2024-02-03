import { KEY_ACCESS_TOKEN, getItem, setItem } from "./localStorageManager";
import axios from "axios";

export const isLogin = async () => {
  const token = getItem(KEY_ACCESS_TOKEN);
  if (token) {
    const res = await axios.post(`http://localhost:4001/auth/getuser`, {
      token,
    });
    return res.data;
  }
  return false;
};
