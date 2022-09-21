import Vue from "vue";
import Vuex from "vuex";
import { PostSchedule, GetSchedule, DeleteSchedule } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    calendar: {
      id: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      content: "",
      title: "",
    },
    event: initEvent(),
    events: [],
    dialog: false,
    deleteid: "",
  },
  mutations: {
    OPEN_CALENDAR_DIALOG(state, payload) {
      state.calendar.startDate = payload.date;
      state.calendar.startTime = payload.time;
      state.calendar.hasTime = payload.hasTime;
      state.dialog = true;
    },
    CLOSE_CALENDAR_DIALOG(state) {
      state.dialog = false;
    },
    ADD_EVENTS(state, event) {
      state.event = [];
      console.log(state.event);
      event.forEach((e) => {
        state.events.push(makeEvents(e));
        console.log(e);
      });
    },
    ADD_EVENT(state, getEvent) {
      state.events.push(getEvent);
      state.dialog = false;
      state.event = initEvent();
    },
    DELETE_ID(state, idx) {
      state.deleteid = idx;
    },
    FETCH_DELETE(state, id) {
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id === id) {
          state.events.splice(i, 1);
          i--;
        }
      }
    },
  },
  actions: {
    async REQUEST_ADD_EVENT(context, calendar) {
      try {
        const title = calendar.title;
        const body = calendar.content;
        const startDate =
          calendar.startDate[0] +
          calendar.startDate[1] +
          calendar.startDate[2] +
          calendar.startDate[3] +
          calendar.startDate[5] +
          calendar.startDate[6] +
          calendar.startDate[8] +
          calendar.startDate[9];

        const startTime =
          calendar.startTime[0] +
          calendar.startTime[1] +
          calendar.startTime[3] +
          calendar.startTime[4];
        const endTime =
          calendar.endTime[0] +
          calendar.endTime[1] +
          calendar.endTime[3] +
          calendar.endTime[4];
        await requestAddEvent(title, body, startTime, endTime, startDate);
        const addedEvent = makeEvent(calendar);
        console.log(addedEvent);
        context.commit("ADD_EVENT", addedEvent);
      } catch (e) {
        console.log("일정 추가 에러" + e);
      }
    },
    async REQUEST_EVERY_EVENTS(context) {
      try {
        const response = await GetSchedules();
        console.log(response);
        context.commit("ADD_EVENTS", response.data);
      } catch (e) {
        console.log("일정 FETCH 에러" + e);
      }
    },
    async DELETE_PERSONAL_SCHEDULE(state) {
      try {
        await Delete_PersonalSchedule(state.state.deleteid);
      } catch (e) {
        console.log("일정 삭제 에러" + e);
      }
    },
  },
});

function requestAddEvent(title, body, startTime, endTime, startDate) {
  return PostSchedule(title, body, startTime, endTime, startDate)
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err.status);
    });
}

function GetSchedules() {
  return GetSchedule()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

function Delete_PersonalSchedule(idx) {
  return DeleteSchedule(idx)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

const colors = ["blue", "indigo", "deep-purple", "green", "orange", "red"];

function initEvent() {
  return {
    id: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    content: "",
    title: "",
  };
}

const makeEvent = (event) => {
  return {
    name: event.title,
    body: event.content,
    start: event.startDate + " " + event.startTime,
    end: event.startDate + " " + event.endTime,
    color: colors[Math.floor(Math.random() * 6)],
  };
};

const makeEvents = (event) => {
  return {
    id: event.id,
    name: event.title,
    body: event.body,
    start:
      event.startDate[0] +
      event.startDate[1] +
      event.startDate[2] +
      event.startDate[3] +
      "-" +
      event.startDate[4] +
      event.startDate[5] +
      "-" +
      event.startDate[6] +
      event.startDate[7] +
      " " +
      event.startTime[0] +
      event.startTime[1] +
      ":" +
      event.startTime[2] +
      event.startTime[3],
    end:
      event.startDate[0] +
      event.startDate[1] +
      event.startDate[2] +
      event.startDate[3] +
      "-" +
      event.startDate[4] +
      event.startDate[5] +
      "-" +
      event.startDate[6] +
      event.startDate[7] +
      " " +
      event.endTime[0] +
      event.endTime[1] +
      ":" +
      event.endTime[2] +
      event.endTime[3],
    color: colors[Math.floor(Math.random() * 6)],
  };
};
