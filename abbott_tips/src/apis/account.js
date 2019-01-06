import request from "./request"; //引入axios的封装方法

export const login = (params) => {
  console.log("login");
  return request('post', 'http://localhost:6373/api/OAuth', params); //登陆管理员获取自身信息
};

export const values = (params) => {
  return request('get', 'http://localhost:6373/api/values', params); //登陆管理员获取自身信息
};