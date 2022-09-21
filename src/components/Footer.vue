<template>
  <footer>
    <div class="footerSection">
      <div class="navbar-brand">
        <router-link class="navbar-logo" to="/">
          <img src="../assets/footerlogo.png" />
        </router-link>
      </div>
      <table>
        <tbody>
          <tr class="d">
            <td>유니버스</td>
            <td>유니버스</td>
            <td>페이지 바로가기</td>
          </tr>

          <tr class="d">
            <td>소개</td>
            <td>소개</td>
            <td>팀원 모집</td>
          </tr>
          <tr>
            <td>채용</td>
            <td>채용</td>
            <td>팀 구직</td>
          </tr>

          <tr>
            <td>문의하기</td>
            <td>문의하기</td>
            <td>공지사항</td>
          </tr>

          <tr>
            <td>개인정보호정책</td>
            <td>개인정보호정책</td>
            <td>워크스페이스</td>
          </tr>
        </tbody>
      </table>
      <div class="tableIntro" style="color: white">
        Copyright 2022 Universe. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  font-size: 12px;
  font-weight: 400;
  height: 372px;
  background-color: #222222;
  width: 100%;
}
footer div .navbar-logo img {
  width: 183px;
}
.footerSection {
  display: flex;
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
}
table {
  color: #ffffff;
  line-height: 34px;
}
td {
  width: 280px;
  height: 18px;
}
.readCopy td {
  width: 600px;
}
</style>