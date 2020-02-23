import axios from "axios";
import { message } from "antd";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
});

// 请求拦截
service.interceptors.request.use(
  config => {
    // console.log("request go");
    return config;
  },
  err => {
    // console.log("请求失败");
    return Promise.reject(err);
  }
);
// 响应拦截
service.interceptors.response.use(
  config => {
    // console.log("response get");
    return config;
  },
  err => {
    // console.log("响应失败");
    return Promise.reject(err);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非000000是抛错 可结合自己业务进行修改
     */
    // const res = response.data;
    // if (res.code !== "000000") {
    //   console.log("response", res);
    //   res.code = res.data.code;
    //   res.message = res.response.data.msg;
    //   return Promise.reject("error");
    // }
    // return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
