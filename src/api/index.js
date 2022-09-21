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
function fetchJobList(num) {
  return axios.get(`http://localhost:8080/job_cd=${num}`, {
    withCredentials: true,
  });
}
function publishedJobList(num) {
  return axios.get(`http://localhost:8080/deadline=${num}`, {
    withCredentials: true,
  });
}
function jobType() {
  return axios.get(`http://localhost:8080/job_type=2`, {
    withCredentials: true,
  });
}

function patchJobList(num) {
  return axios.patch(`http://localhost:8080/job_cd=${num}`, num + 1, {
    withCredentials: true,
  });
}

export {
  PostSchedule,
  GetSchedule,
  DeleteSchedule,
  fetchJobList,
  jobType,
  publishedJobList,
  patchJobList,
};
