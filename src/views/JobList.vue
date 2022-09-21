<template>
  <div>
    <!--    <div class="main-container">-->
    <!--      <form action="" method="post" class="search-container">-->
    <!--        <span>기업 검색</span>-->
    <!--        <input class="search-txt" type="text" placeholder="검색어를 입력해 주세요">-->
    <!--        <span class="search-btn"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></span>-->
    <!--      </form>-->
    <!--    </div>-->
    <!--    <div>-->

    <!--      <div class="employment-list-container">-->
    <!--        <p>채용공고 상세검색</p>-->
    <!--        <div class="advanced-catagory-list">-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>직무</p></dt>-->
    <!--            <dd class="advanced-item">111111</dd>-->
    <!--          </dl>-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>근무지역</p></dt>-->
    <!--            <dd class="advanced-item">111111</dd>-->
    <!--          </dl>-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>경력</p></dt>-->
    <!--            <dd class="advanced-item"> 22222</dd>-->
    <!--          </dl>-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>학력</p></dt>-->
    <!--            <dd class="advanced-item">3333</dd>-->
    <!--          </dl>-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>기업형태</p></dt>-->
    <!--            <dd class="advanced-item">44444</dd>-->
    <!--          </dl>-->

    <!--          <dl class="advanced-search">-->
    <!--            <dt class="advanced-catagory"><p>고용형태</p></dt>-->
    <!--            <dd class="advanced-item">222</dd>-->
    <!--          </dl>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <h1 @click="test">Test page</h1>
    <JobListPagination v-bind:listArray="jobs" />
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum - 1 }} 페이지</span>
      <button @click="nextPage" class="page-btn">다음</button>
    </div>
  </div>
</template>

<script>
import JobListPagination from "@/components/JobListPagination";
import { fetchJobList, jobType } from "@/api/index";
export default {
  components: { JobListPagination },
  data() {
    return {
      jobs: {},
      locs: [],
      pageNum: 2,
    };
  },
  methods: {
    test() {
      jobType()
        .then((response) => {
          console.log(response.data);
          console.log(this.pageNum);
          this.jobs = response.data;
        })
        .catch((Error) => console.log(Error));
    },
    fetchData() {
      fetchJobList(this.pageNum)
        .then((response) => {
          console.log(response.data);
          console.log(this.pageNum);
          this.jobs = response.data;
        })
        .catch((Error) => console.log(Error));
    },
    nextPage() {
      this.pageNum += 1;
      fetchJobList(this.pageNum)
        .then((response) => {
          this.jobs = response.data;
        })
        .catch((Error) => console.log(Error));
    },
    prevPage() {
      if (this.pageNum !== 2) {
        this.pageNum -= 1;
      } else {
        this.pageNum = 2;
      }
      fetchJobList(this.pageNum)
        .then((response) => {
          console.log(response.data);
          console.log(this.pageNum);
          this.jobs = response.data;
        })
        .catch((Error) => console.log(Error));
    },
  },

  created() {
    this.fetchData(this.pageNum);
  },
};
</script>

<style scoped>
html {
  text-align: center;
  font-family: "JetBrains Mono Thin", sans-serif;
  color: #333;
}
h1 {
  align-items: center;
  text-align: center;
}
.search-container {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}
.search-txt {
  background-color: white;
  height: 50px;
  border-radius: 5px 0 0 5px;
  width: 80%;
  padding: 20px;
  border: solid #1e0d71 3px;
  border-right: none;
}
span {
  color: #1e0d71;
  font-size: 20px;
  margin-right: 20px;
}
.search-btn {
  display: inline-block;
  height: 50px;
  line-height: 36.2px;
  border-radius: 0 5px 5px 0;
  border: 3px #1e0d71 solid;
  border-left: none;
}
.advanced-catagory {
  background-color: #1e0d71;
  height: 57px;
  color: white;
}

.advanced-catagory p {
  padding: 10px;
  font-size: 16px;
}
.advanced-item {
  height: 30px;
  font-size: 16px;
  padding: 10px;
}
.employment-list-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 250px;
}
.main-container {
}

.advanced-catagory-list {
  display: flex;
}
.advanced-search {
  width: 300px;
  height: 190px;
  overflow-y: scroll;
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
</style>