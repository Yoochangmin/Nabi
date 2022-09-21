<template>
  <div class="containered">
    <section class="bg-container"></section>
    <section class="login-container">
      <div class="login-form">
        <h1>로그인</h1>
        <form action="">
          <div class="input-area">
            <v-text-field
              type="text"
              name="id"
              id="id"
              v-model="userId"
              autocomplete="off"
              required
              placeholder="UserName"
            />
            <i v-if="IdEmpty === true">아이디를 입력하세요</i>
            <!-- <label for="id">UserName</label> -->
          </div>
          <div class="input-area">
            <v-text-field
              type="password"
              name="pw"
              id="pw"
              v-model="UserPassword"
              autocomplete="off"
              required
              placeholder="PassWord"
            />
            <i v-if="PwEmpty === true">비밀번호를 입력하세요</i>
            <i v-if="failCode === 401">아이디 혹은 비밀번호가 틀렸습니다!</i>
            <!-- <label for="pw">PassWord</label> -->
          </div>
          <div class="btn-area">
            <v-btn
              class="login-button"
              @click="LoginSubmit(userId, UserPassword)"
            >
              <!-- @click="LoginSubmit(userId, UserPassword)" -->
              <router-link :to="logoLink">로그인</router-link>
            </v-btn>
            <p>{{ this.$store.state.isLogin }}</p>
            <v-btn class="login-button" @click="KakaoLogin()">
              카카오 로그인
            </v-btn>
          </div>
        </form>
        <div class="caption">
          <div class="outo-login">
            <input type="checkbox" id="outo-check" />
            <label for="outo-check"></label><span>자동로그인</span>
          </div>
          <div class="serach">
            <router-link class="id-serach" to="/idsearch">
              아이디 찾기
            </router-link>

            <router-link class="pw-serach" to="/pwsearch">
              비밀번호 찾기
            </router-link>
          </div>
        </div>
        <div class="quest-register">
          <router-link class="nav-link" to="/join">
            아직 회원이 아니세여? 회원가입
          </router-link>
          <p>{{ this.Authcode }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { postLogin } from "../api/index.js";
export default {
  name: "beforeLogin",

  data() {
    return {
      userId: "",
      UserPassword: "",
      PwEmpty: false,
      IdEmpty: false,
      failCode: "",
      Auth: false,
      Authcode: window.location.search,
    };
  },
  computed: {
    logoLink() {
      return this.$store.getters.isLogin ? "/main" : "/login";
    },
  },

  methods: {
    async LoginSubmit(userId, UserPassword) {
      this.IdEmpty = false;
      this.PwEmpty = false;
      if (userId != "" && UserPassword != "") {
        postLogin(userId, UserPassword)
          .then((res) => {
            if (res.status === 200) {
              this.$store.commit("LoginSuccess");
            }
          })
          .catch((err) => (this.failCode = err.request.status));
        this.PwEmpty = false;
      } else if (userId != "" && UserPassword == "") {
        this.PwEmpty = true;
      } else if (userId == "" && UserPassword != "") {
        this.IdEmpty = true;
      } else if (userId == "" && UserPassword == "") {
        this.IdEmpty = true;
        this.PwEmpty = true;
      }
    },
    KakaoLogin() {
      const params = {
        redirectUri: "https://dev.example.com:8081/login",
      };
      window.Kakao.Auth.authorize(params);
    },
  },
};
</script>

<style scoped>
html {
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.containered {
  display: flex;
  height: 100vh;
  align-items: center;
}
.bg-container {
  height: 100vh;
  width: 747px;
  background-image: url("../assets/bgimage.jpg");
}
.login-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
}
/*body::before{*/
/*  content: "";*/
/*  position: absolute; z-index: 1;*/
/*  top: 0; right: 0; bottom: 0; left: 0;*/
/*  background-color: rgba(0,0,0,.7);*/
/*}*/

.login-form h1 {
  font-size: 20px;
  color: black;
  text-align: left;
  margin-bottom: 60px;
}

.input-area {
  width: 400px;
  position: relative;
  margin-top: 20px;
}
.input-area:first-child {
  margin-top: 0;
}

.input-area input {
  width: 100%;
  padding: 20px 10px 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: black;
  outline: none;
}
.input-area label {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 18px;
  color: #999;
}
.input-area input:focus + label,
.input-area input:valid + label {
  top: 0;
  font-size: 13px;
  color: #166cea;
}

.serach {
  float: right;
}

.outo-login {
  float: left;
  font-size: 12px;
  color: #999;
}
.outo-login span {
  position: relative;
  top: -5px;
  left: 3px;
}
.outo-login label {
  display: inline-block;
  width: 50px;
  height: 20px;
  background: #d3d3d3;
  border-radius: 60px;
  padding-left: 5px;
  position: relative;
}

.outo-login label:after {
  content: "";
  position: absolute;
  left: 2.5px;
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: #ffd25d;
  transform: translateY(-50%);
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  transition: all.4s;
}
.outo-login input:checked + label:after {
  left: calc(100% - 17.5px);
}
.outo-login input {
  display: none;
}
.id-serach {
  padding-right: 10px;
  border-right: 1px solid #999;
}
.pw-serach {
  padding-left: 10px;
}
.btn-area {
  margin-top: 30px;
}
.btn-area button {
  width: 100%;
  height: 50px;
  background: #222222;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.caption {
  margin-top: 20px;
  text-align: center;
}
.caption a {
  font-size: 12px;
  color: #999;
  text-decoration: none;
}

.quest-register {
  display: inline-block;
  float: bottom;
  width: 100%;
}
.quest-register a {
  text-align: center;
  text-decoration: none;
  color: black;
}
</style>