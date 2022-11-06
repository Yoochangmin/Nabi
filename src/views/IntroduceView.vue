<template>
<div>
  <Header></Header>
  <div class="main-containner">
    <div class="start-containner">
      <div class="intro-area">
        <p class="main-intro"> 경력직만 구하는 요즘 세상 !</p>
        <p class="main-intro"> 사이드 프로젝트로 실무 경험을 쌓아보자!</p>
        <p class="sub-intro"> 초보 개발자들을 위한 사이드 프로젝트 매칭 플랫폼</p>
        <p class="sub-intro"> Project Universe</p>
        <div>
          <button class="start">시작하기</button>
        </div>
      </div>
    </div>
    <div class="explain-containner">
      <div class="explain-area">
        <p class="main-expl"> 사이드 프로젝트가 무엇인가요?</p>
        <p class="sub-expl">
          사이드 프로젝트는 본인이 ‘주체’가 되어 프로젝트를 기획하고, 수행할 수 있는 프로젝트를 의미해요.
        </p>
        <p class="sub-expl">
          사이드 프로젝트를 통해 본인의 분야가 아닌 사람들과 협업하는 능력을 키우고, 새로운 경험을 하며
        </p>
        <p class="sub-expl">
        자기 주도적인 포트폴리오를 만들면 취업에도 큰 도움이 됩니다.
        </p>
      </div>
    </div>
  </div>

  <div class="recommend-containner">
    <div class="recommend-area">
      <div>
        <p> 이런 사람이 하면 좋아요</p>
      </div>
    </div >
    <div class="recommend-area">
      <div>
        <div class="recommend-img"></div>
        <div class="recommend-expl">협업 경험이 부족한 초보 개발자</div>
      </div>
      <div>
        <div class="recommend-img"></div>
        <div class="recommend-expl">UX/UI 디자이너</div>
      </div>
      <div>
        <div class="recommend-img"></div>
        <div class="recommend-expl">서비스 기획자</div>
      </div>
      <div>
        <div class="recommend-img"></div>
        <div class="recommend-expl">부트 캠프 수료자</div>
      </div>
    </div>
  </div>

  <div class="category-containner">
    <div class="category-area">
        <p class="main-expl"> 팀원 모집</p>
        <p class="sub-expl">
          취업 공고 탭을 눌러서 취업 공고를 확인 할 수 있어요
        </p>
        <p class="sub-expl">
          원하는 취업 일정을 클릭하여 캘린더에 추가해 보세요
        </p>
        <button class="category-button">
        <router-link to="/jobList" class="nav-link"> 취업공고 </router-link>
      </button>
      </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "IntroduceView",
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-containner{
  width: 1200px;
  margin: 0 auto;
}

/*------------------------------------------*/

.start-containner{
  height: 582px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.intro-area{
  margin-left: 50px;
}
.main-intro{
  font-size: 40px;
  color: #1e0d71;
  font-weight: bold;
}
.sub-intro{
  font-size: 25px;
}
.start{
  border: #1e0d71 1px solid;
  background-color: #1e0d71;
  color: white;
  width: 180px;
  height: 50px;
}

/*------------------------------------------*/
.explain-containner{
  height: 382px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-expl{
  font-size: 32px;
  font-weight: bold;
}
.sub-expl{
  font-size: 24px;
}
/*------------------------------------------*/
.recommend-containner{
  height: 492px;
  background-color: lightgrey;
}
.recommend-area{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
.recommend-area div p{
  margin-top: 50px;
  font-size: 32px;
  font-weight: bold;
}

.recommend-expl{
  text-align: center;
  width: 180px;
  margin-top: 20px;
}
.recommend-img{
  width: 180px;
  height: 180px;
  margin-top: 50px;
  background-color: #999999;
  border-radius: 100%;
}

/*---------------------*/
.category-containner{
  height: 492px;
  width: 1200px;
  margin: 0 auto;

}
.category-area{
  padding-top: 168px;
}
.category-button{
  float: right;
  border: #1e0d71 1px solid;
  width: 180px;
  height: 50px;
}
</style>