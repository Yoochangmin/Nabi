<template>
  <div class="containered">
    <section class="bg-container"></section>
    <section class="IdSearch-container">
      <div class="IdSearch-form">
        <h1>회원가입</h1>

        <form @submit.prevent action="">
          <div class="input-area">
            <input
              type="text"
              name="id"
              id="id"
              autocomplete="off"
              required
              v-model="inputId"
              :style="inputId.length ? check : emptyCheck"
              placeholder="아이디"
            />
          </div>

          <div class="input-area">
            <input
              v-model="inputEm"
              :style="inputEm.length ? check : emptyCheck"
              type="password"
              name="email"
              id="email"
              autocomplete="off"
              required
              placeholder="이메일 주소"
            />
          </div>

          <div class="input-area">
            <input
              v-model="inputPw"
              :style="inputPw.length ? check : emptyCheck"
              type="text"
              name="pw"
              id="pw"
              autocomplete="off"
              required
              placeholder="비밀번호"
            />
            <label for="pw"></label>
          </div>
          <div class="input-area">
            <input
              v-model="inputPwCheck"
              :style="inputPwCheck.length ? check : emptyCheck"
              type="text"
              name="check-pw"
              id="check-pw"
              autocomplete="off"
              required
              placeholder="비밀번호 재확인"
            />
            <label for="check-pw"></label>
            <i v-if="PwCheck === true">! 비밀번호가 일치하지 않습니다.</i>
          </div>
          <div class="btn-area">
            <button
              type="submit"
              :style="
                inputId.length ||
                inputEm.length ||
                inputPw.length ||
                inputPwCheck.length
                  ? btnBackGround
                  : notBtnBackGround
              "
              @click="checkPw(inputId, inputPw, inputEm, inputPwCheck)"
            >
              가입하기
            </button>
          </div>
          <p class="read-email">
            가입하기를 누르면 <span>이용약관</span>과
            <span>개인정보취급방침</span>에 동의한 것으로 간주합니다.
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { Join } from "../api/index.js";

export default {
  name: "join",

  data() {
    return {
      inputId: "",
      inputPw: "",
      inputEm: "",
      inputPwCheck: "",
      PwCheck: false,
      failCode: "",
      backgroundColor: "#1E0D71",
      btnBackGround: {
        backgroundColor: "#1E0D71",
      },

      notBtnBackGround: {
        backgroundColor: "#C4C4C4",
      },
      emptyCheck: {
        borderBotton: "1.5px solid #999",
      },
      check: {
        borderBottom: "1.5px solid #222222",
      },
      hasEmpty: false,
    };
  },
  methods: {
    checkPw(inputId, inputPw, inputEm, inputPwCheck) {
      if (inputPw != inputPwCheck) {
        this.PwCheck = true;
      } else if (inputPw == inputPwCheck) {
        Join(inputId, inputPw, inputEm)
          .then((res) => {
            if (res.status == 201) {
              this.$router.push("/login");
            }
          })
          .catch((err) => (this.failCode = err.request.status));
      }
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
  height: 100%;
  width: 747px;
  background-image: url("../assets/bgimage.jpg");
}
.IdSearch-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
}

.IdSearch-form {
  width: 488px;
}
.IdSearch-form h1 {
  font-size: 28px;
  color: black;
  text-align: left;
  margin-bottom: 30px;
}

.input-area {
  width: 488px;
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
  color: black;
  outline: none;
  margin-bottom: 15px;
}

.btn-area {
  margin-top: 30px;
}
.btn-area button {
  width: 100%;
  height: 80px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.read-email {
  font-size: 18px;
  font-weight: 400;
  color: #999999;
}
.read-email span {
  color: darkblue;
}
</style>