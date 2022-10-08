<template>
  <div>
    <Header></Header>
    <div class="main-container">
      <form action="" method="post" class="search-container">
        <div>기업 검색</div>
        <input class="search-txt" type="text" placeholder="검색어를 입력해 주세요">
        <div class="search-btn">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
        </div>
      </form>
    </div>
    <div>

      <div class="employment-list-container">
        <p>채용공고 상세검색</p>
        <div class="advanced-catagory-list">
          <dl class="advanced-search">
            <dt class="advanced-catagory">직무</dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>

          <dl class="advanced-search">
            <dt class="advanced-catagory"><p>근무지역</p></dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>

          <dl class="advanced-search">
            <dt class="advanced-catagory"><p>경력</p></dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>

          <dl class="advanced-search">
            <dt class="advanced-catagory"><p>학력</p></dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>

          <dl class="advanced-search">
            <dt class="advanced-catagory"><p>기업형태</p></dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>

          <dl class="advanced-search">
            <dt class="advanced-catagory"><p>고용형태</p></dt>
            <div class="advanced-list">
              <dd class="advanced-item"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <JobListPagination v-bind:listArray="jobs"/>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum -1}} 페이지</span>
      <button  @click="nextPage"   class="page-btn">
        다음
      </button>
    </div>
    <Footer></Footer>
    <div @click="test"> test</div>
  </div>
</template>

<script>
import JobListPagination from "@/components/JobListPagination";

import {fetchJobList} from "@/api/index";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  components: {Header,Footer, JobListPagination},
  data() {
    return {
      jobs : {},
      locs : [],
      pageNum : 2,
      bench: 0
    }
  },
  methods: {
    test() {
      fetchJobList()
          .then(response => {
            console.log(response.data)
            this.jobs = response.data;
          })
          .catch((Error) => console.log(Error))
    },
    fetchData(){
      fetchJobList(this.pageNum)
          .then(response => {
            console.log(this.pageNum)
            this.jobs = response.data;
          })
          .catch((Error) => console.log(Error))
    },
    nextPage () {
      this.pageNum += 1;
      fetchJobList(this.pageNum)
          .then(response => {
            this.jobs = response.data;
          })
          .catch((Error) => console.log(Error))
    },
    prevPage () {
      if(this.pageNum !== 2){
        this.pageNum -= 1;
      }else {
        this.pageNum =2
      }
      fetchJobList(this.pageNum)
          .then(response => {
            this.jobs = response.data;
          })
          .catch((Error) => console.log(Error))
    }
  },

  created() {
    this.fetchData(this.pageNum)
  }
}
</script>

<style scoped>
html{
  text-align: center;
  font-family: "JetBrains Mono Thin", sans-serif;
  color: #333;
}


/* ------검색 부분------*/
.search-container{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.search-txt{
  background-color: white;
  height: 50px;
  border-radius: 5px;
  width: 80% ;
  padding: 20px;
  border: solid #1E0D71 3px ;

}

.search-container div{
  color: #1E0D71;
  font-size: 20px;
  margin-right: 20px;

}
.search-btn{
  height: 50px;
  width: 50px;
  padding-top: 10px;
  position: absolute;
  right: 30px;
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

/*----------채용공고 상세검색-------- ----*/

.employment-list-container{
  width: 1200px;
  margin: 0 auto;
  height: 250px;
}

.advanced-catagory-list{
  display: flex;
  border-radius: 5px 5px 0 0;

}

.advanced-search {
  width: 200px;
  height: 190px;

}

.advanced-catagory{
  background-color: #1E0D71;
  height: 60px;
  color: white;
  padding-top: 20px;
  padding-left: 10px;
  box-sizing: border-box;
}


.advanced-item{
  height: 30px;
  width: 190px;

  font-size: 16px;
  padding: 10px;
}




/*--------스크롤바 CSS -----------*/


.advanced-list{
  overflow-y: scroll;
  width: 200px;
  height: 140px;
}
.advanced-list::-webkit-scrollbar {
  width: 10px;
}
.advanced-list::-webkit-scrollbar-thumb {
  background-color: #1E0D71;
  border-radius: 4px;
}
.advanced-list::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

</style>