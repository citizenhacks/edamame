<template>
  <div class="calendar-container">
    <div>
      <select v-model="date" v-on:change="dateChange($event)" class="date-picker">
        <option selected>September 6, 2019</option>
        <option>September 7, 2019</option>
        <option>September 8, 2019</option>
      </select>
    </div>
    <Timeline v-bind:event="event"/>
    <Schedule v-bind:event="event"/>
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
import Schedule from "./Schedule.vue";
export default {
  name: "calendar",
  data() {
    return {
      date: "September 6, 2019",
      event: {
        activities: [
          {
            name: "Guest Arrival",
            start: "18:00",
            end: "18:15",
            color: "grey",
            description: "This is a description of the activity."
          },
          {
            name: "Welcome Speech and Opening Remarks",
            start: "18:15",
            end: "18:30",
            color: "purple",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 1",
            start: "18:30",
            end: "18:40",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 2",
            start: "18:40",
            end: "18:50",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 3",
            start: "18:50",
            end: "19:00",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Break, Networking, and Booths",
            start: "19:00",
            end: "19:20",
            color: "deepskyblue",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 4 Speech",
            start: "19:20",
            end: "19:30",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 5 Speech",
            start: "19:30",
            end: "19:40",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Guest Speaker 6 Speech",
            start: "19:40",
            end: "19:50",
            color: "lightpink",
            description: "This is a description of the activity."
          },
          {
            name: "Pitch Competition",
            start: "19:50",
            end: "20:50",
            color: "indianred",
            description: "This is a description of the activity."
          },
          {
            name: "Judge Deliberations",
            start: "20:50",
            end: "21:05",
            color: "indianred",
            description: "This is a description of the activity."
          },
          {
            name: "Awards Ceremony",
            start: "21:05",
            end: "21:20",
            color: "indianred",
            description: "This is a description of the activity."
          },
          {
            name: "Speeches of Appreciation",
            start: "21:20",
            end: "21:35",
            color: "navy",
            description: "This is a description of the activity."
          },
          {
            name: "Closing Remarks",
            start: "21:35",
            end: "21:45",
            color: "purple",
            description: "This is a description of the activity."
          },
          {
            name: "Cleanup",
            start: "21:45",
            end: "22:00",
            color: "lightgreen",
            description: "This is a description of the activity."
          }
        ]
      }
    };
  },
  methods: {
    dateChange: function() {
      this.event = {
        activities: [
          {
            name: "a",
            start: "18:00",
            end: "18:15",
            color: "grey",
            description: "This is a description of the activity."
          },
          {
            name: "b",
            start: "21:05",
            end: "21:20",
            color: "indianred",
            description: "This is a description of the activity."
          },
          {
            name: "c",
            start: "21:45",
            end: "22:00",
            color: "lightgreen",
            description: "This is a description of the activity."
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.calendar-container {
  margin-top: 40px;
  margin-bottom: 40px;
}
.date-picker {
  -webkit-appearance: none;
  outline: none;
  width: 100%;
  padding: 10px;
  height: 40px;
  border: 1px solid #ddd;
  font-weight: bold;
  font-family: Gilroy;
  font-size: 16px;
  background-color: #ffffff;
}
</style>
