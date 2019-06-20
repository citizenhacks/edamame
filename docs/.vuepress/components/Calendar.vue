<template>
  <div class="calendar-container">
    <div>
      <select v-model="date" class="date-picker">
        <option selected>September 6, 2019</option>
        <option>September 7, 2019</option>
        <option>September 8, 2019</option>
      </select>
    </div>
    <Timeline/>
    <Schedule/>
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
import Schedule from "./Schedule.vue";
export default {
  name: "calendar",
  data() {
    return {
      date: "September 6, 2019"
    };
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
