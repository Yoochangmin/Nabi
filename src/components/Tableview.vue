<template>
  <v-app>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title">
          <v-card class="project-card" max-width="280px" height="345">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="96px"
            >
            </v-img>
            <div class="card-form px-16px py-16px">
              <div>
                <v-card-actions class="pa-0">
                  <v-card-title
                    class="ma-0 pa-0"
                    v-text="card.project_name"
                  ></v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
                </v-card-actions>
                <!--카드 위치 영역-->
                <div class="location_field d-flex">
                  <div class="mr-2">
                    <v-icon>mdi-access-point</v-icon>
                  </div>
                  <div class="mb-2" v-text="card.location"></div>
                </div>
                <!--     -->
                <div class="introduce_field mb-6">
                  <!--카드 폼 구직 소개 영역-->
                  <div class="mt-2" v-text="card.introduce"></div>
                </div>
                <div class="profile_field d-flex">
                  <!--카드 폼 프로필 영역-->
                  <v-avatar size="24px" class="mr-2">
                    <img alt="user" :src="card.profile_image" />
                  </v-avatar>
                  <p v-text="card.profile_name"></p>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        project_name: "프로젝트 동그라미",
        location: "제주도",
        introduce:
          "한줄 두줄 한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄",
        profile_image:
          "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
        profile_name: "김호두",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        project_name: "프로젝트 유니버스",
        location: "천안시 동남구",
        introduce:
          "한줄 두줄 한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄",
        profile_image:
          "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
        profile_name: "김호두",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        project_name: "프로젝트 바다다",
        location: "제주도",
        introduce:
          "한줄 두줄 한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄한줄 두줄",
        profile_image:
          "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
        profile_name: "김호두",
      },
    ],
  }),
};
</script>

<style scoped>
.card-form {
  padding: 16px;
}
.introduce_field {
  border-top: 1.5px solid #ccc;
}
</style>