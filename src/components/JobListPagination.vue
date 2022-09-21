<template>
  <div>
    <div class="employee-container">
      <div class="employee-catagory">
        <div class="item" v-bind="listArray">
          전체({{ listArray.jobs.total }})
        </div>
        <div class="item">----</div>
        <div class="item">----</div>
        <div class="item">----</div>
      </div>
      <div
        class="employee-list"
        v-for="item in listArray.jobs.job"
        v-bind:key="item.id"
      >
        <li class="grow0">
          <router-link :to="`${item.url}`">{{
            item.company.detail.name
          }}</router-link>
        </li>

        <li class="grow1">
          {{ item.position.title }}
        </li>
        <li class="grow2">
          <button class="addSchedule" @click="check">스케줄에 추가</button>
          {{ item.opening - timestams }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobListPagination",

  data() {
    return {
      pageNum: 0,
    };
  },
  props: {
    listArray: {
      type: Object,
      required: true,
    },
  },
  methods: {
    check() {
      console.log(this.listArray.jobs);
    },

    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },
  computed: {},
};
</script>

<style scoped>
.employee-catagory {
  display: flex;
  background-color: rgba(33, 16, 117, 78);
  margin-top: 10px;
}

.employee-catagory div {
  width: 300px;
  height: 63px;
  color: white;
  padding: 10px;
}

.employee-container {
  width: 1200px;
  margin: 0 auto;
}
.employee-list {
  width: 100%;
  display: flex;
  gap: 16px;
  height: 190px;
}
.employee-list div {
  border: #1e0d71 1px solid;
  margin: 0;
}
.addSchedule {
  font-size: 1.5rem;
  color: white;
  height: 70px;
  line-height: 55px;
  border: #1e0d71 2px solid;
  border-radius: 20px;
  padding: 5px;
  background-color: #1e0d71;
}
.grow0 {
  width: 250px;
  padding: 20px 0 20px 20px;
  border-right: #222222 2px solid;
}
.grow1 {
  width: 800px;
  padding: 20px;
  font-size: var(--use-font-size);
}
.grow2 {
  width: 200px;
  text-align: center;
  padding-top: 20px;
}
</style>