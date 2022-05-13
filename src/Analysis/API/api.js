import axios from "axios";

export const URL = `https://dummy.restapiexample.com/api/v1/employees`;

export const apiCall=async()=>{
  const req = await axios.get(URL);
  const res = await req.json();
  return res;
}