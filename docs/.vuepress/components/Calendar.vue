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
import Schedule from "./Schedule.vue";
import Timeline from "./Timeline.vue";
import friday from '../friday.json';
import saturday from '../saturday.json';
import sunday from '../sunday.json';

export default {
  name: "calendar",
  data() {
    return {
      date: "September 6, 2019",
      event: friday,
    };
  },
  methods: {
    dateChange: function() {
      console.log(this.date);
      switch(this.date){
        case("September 6, 2019"):
          this.event = friday;
          break;
        case("September 7, 2019"):
          this.event = saturday
          break;
        default:
          this.event = sunday;
          break;
      }
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
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #ffffff;
  background-origin: content-box;
}
</style>
