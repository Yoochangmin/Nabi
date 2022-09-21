import Vue from "vue";
import VueRouter from "vue-router";
import Test from "../components/Test1.vue";
import TestCase from "../components/Test.vue";
import Login from "../views/Login.vue";
import JobList from "@/views/JobList";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/testcase",
    },

    {
      path: "/test",
      component: Test,
    },
    {
      path: "/testcase",
      component: TestCase,
    },
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },

    {
      path: "/jobList",
      component: JobList,
    },
  ],
});

export default router;
