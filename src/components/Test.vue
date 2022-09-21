<template>
  <div class="pa-5">
    <v-row>
      <v-col cols="12" md="6" class="mb-4">
        <v-row>
          <v-col cols="6">
            <v-menu
              ref="dateOpen"
              v-model="dateOpen"
              :close-on-content-click="false"
              :return-value.sync="start"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="start"
                  dark
                  label="Start Date"
                  prepend-icon="mdi-calendar"
                  dense
                  readonly
                  outlined
                  hide-details
                  v-on="on"
                ></v-text-field>
                <div class="text-center">
                  {{ start | moment("YYYY MMMM") }}
                </div>
              </template>

              <v-date-picker dark v-model="start" no-title>
                <v-spacer />
                <v-btn text dark color="primary" @click="dateOpen = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  dark
                  color="primary"
                  @click="$refs.dateOpen.save(start)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="type"
              :items="typeOptions"
              label="Type"
              class="my-auto"
              dark
              hide-details
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small> mdi-chevron-left </v-icon>
        </v-btn>
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small> mdi-chevron-right </v-icon>
        </v-btn>
        <v-sheet height="500">
          <v-calendar
            :event-color="getEventColor"
            :events="events"
            ref="calendar"
            v-model="value"
            :start="start"
            @click:date="open"
            @click:time="open"
            @click:event="showEvent"
            :type="type"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="deleteSchedule">
                  <v-icon>{{ icons.mdiDelete }}</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.body"></span>
              </v-card-text>
              <v-card-text>
                <span>시작 시간 :</span>
                <span v-html="selectedEvent.start"></span>
              </v-card-text>
              <v-card-text>
                <span>종료 시간 :</span>
                <span v-html="selectedEvent.end"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <modal v-if="ShowModal"></modal>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import { mdiDelete } from "@mdi/js";

export default {
  components: { Modal },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
  created() {
    this.$store.dispatch("REQUEST_EVERY_EVENTS");
  },
  data() {
    return {
      value: "",
      icons: { mdiDelete },
      ShowModal: this.$store.state.dialog,
      dateOpen: false,
      selectedOpen: false,
      selectedElement: null,
      selectedEvent: {},
      start: this.$moment(new Date()).format("YYYY-MM-DD"),
      type: "month",
      typeOptions: [
        { text: "Day", value: "day" },
        { text: "Week", value: "week" },
        { text: "Month", value: "month" },
      ],
    };
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    open(date) {
      this.$store.commit("OPEN_CALENDAR_DIALOG", date);
      this.ShowModal = true;
    },
    getEventColor(event) {
      return event.color;
    },
    deleteSchedule() {
      this.$store.commit("DELETE_ID", this.selectedEvent.id);
      this.$store.dispatch("DELETE_PERSONAL_SCHEDULE");
      this.$store.commit("FETCH_DELETE", this.selectedEvent.id);
      this.selectedOpen = false;
    },
    fetchSchedule() {},
  },
};
</script>
<style scoped>
.row {
  background-color: #e6e6e6;
}
</style>
