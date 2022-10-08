import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

function PostSchedule(title, body, startTime, endTime, startDate) {
  return axios.post(
    "http://ec2-3-39-103-132.ap-northeast-2.compute.amazonaws.com/api/1234/personal-schedules",
    {
      title: title,
      body: body,
      startTime: startTime,
      endTime: endTime,
      startDate: startDate,
    },
    {
      withCredentials: true,
    }
  );
}
function GetSchedule() {
  return axios.get(
    "http://ec2-3-39-103-132.ap-northeast-2.compute.amazonaws.com/api/1234/personal-schedules",
    {
      withCredentials: true,
    }
  );
}
function DeleteSchedule(id) {
  console.log(id);
  return axios.delete(
    "http://ec2-3-39-103-132.ap-northeast-2.compute.amazonaws.com/api/1234/personal-schedules",
    {
      data: {
        id1: id,
      },
    },
    {
      withCredentials: true,
    }
  );
}

//수정해야댐 URL
function fetchJobList() {
  return axios.get(`http://ec2-3-35-253-186.ap-northeast-2.compute.amazonaws.com:8081/api/announcements/?job_cd=84`, {
    withCredentials: true,
  });
}




export {
  PostSchedule,
  GetSchedule,
  DeleteSchedule,
  fetchJobList,
};
