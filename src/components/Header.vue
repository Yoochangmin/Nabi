<template>
  <div class="header">
    <v-app-bar
      absolute
      color="#black"
      scroll-target="#scrolling-techniques-4"
      height="88px"
      max-height="88px"
    >
      <v-tabs centered>
        <v-tab>
          <router-link to="/" class="nav-link"> 홈 </router-link>
        </v-tab>
        <v-tab>
          <router-link to="/maketeam" class="nav-link"> 취업공고 </router-link>
        </v-tab>
        <v-tab>
          <router-link class="nav-link" to="/teamsearch"> 자격증 </router-link>
        </v-tab>

        <v-tab>
          <router-link class="nav-link" to="/search">
            <v-btn icon>
              <v-icon>mdi-magnify </v-icon>
              검색
            </v-btn>
          </router-link>
        </v-tab>
      </v-tabs>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              <v-avatar size="24px">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
              <span>프로필</span>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </div>

      <router-link class="nav-link" to="/login">
        <v-btn @click="LogOutMethod()"> 로그아웃 </v-btn>
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
import { LogOut } from "@/api/index.js";

export default {
  name: "NavBar",

  methods: {
    LogOutMethod() {
      LogOut();
    },
  },
  mounted() {
    this.$store.dispatch("FETCH_PROFILE");
  },
  data: () => ({}),
};
</script>

<style scoped>
.header {
  margin-bottom: 100px;
}
</style>