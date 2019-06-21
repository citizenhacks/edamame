<template>
  <section id="timeline">
    <v-dialog/>
    <div class="timeline-container">
      <div class="track">
        <p
          id="labels"
          v-for="(item, index) in hourList"
          :key="`label-${index}`"
          :style="`left: ${(offsetX - labelOffsetX) + index * 30 * durationMultiplier}px;`"
        >{{ item }}</p>
        <div
          class="track-item"
          v-for="(item, index) in event.activities"
          :key="index"
          :style="`top: ${rowHeight * colorMap[item.color] + offsetY}px; left: ${(item.startInt - origin) * durationMultiplier + offsetX}px; width: ${(item.endInt - item.startInt) * durationMultiplier}px;`"
          @click="show(item)"
        >
          <p>{{ item.name }}</p>
          <div class="bar" :style="`background: ${item.color};`">
            <div class="dot-start" :style="`background: ${item.color};`"></div>
            <div class="dot-end" :style="`background: ${item.color};`"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped>
/*
  Huge thanks to https://github.com/sttic for providing the vue component.
*/
export default {
  name: "timeline",
  props: {
    event: {
      activities: [
        {
          name: String,
          start: String,
          end: String,
          color: String,
          description: String
        }
      ]
    }
  },
  data() {
    return {
      // sparkfest: JSON.parse(JSON.stringify(this.event)),
      colorMap: {},
      origin: 0,
      offsetX: 16,
      offsetY: 30,
      rowHeight: 25,
      durationMultiplier: 10,
      startHour: 0,
      startMinute: 0,
      hourList: [],
      labelOffsetX: 16
    };
  },
  created() {},
  mounted() {
    this.transformData();
  },
  methods: {
    transformData() {
      let getTime = wordTime => {
        return {
          hour: parseInt(wordTime.substring(0, 2)),
          minute: parseInt(wordTime.substring(3))
        };
      };
      for (let i = 0; i < this.event.activities.length; i++) {
        let t0 = getTime(this.event.activities[i].start);
        this.event.activities[i].startInt = 60 * t0.hour + t0.minute;
        let t1 = getTime(this.event.activities[i].end);
        this.event.activities[i].endInt = 60 * t1.hour + t1.minute;
        this.event.activities[i]["pos"] = i;
        let color = this.event.activities[i].color;
        if (!this.colorMap[color]) {
          this.colorMap[color] = Object.keys(this.colorMap).length;
        }
      }
      this.origin = this.event.activities[0].startInt;
      let first = getTime(this.event.activities[0].start);
      let last = getTime(
        this.event.activities[this.event.activities.length - 1].end
      );
      this.startHour = first.hour;
      this.startMinute = first.minute;
      let lastHour = last.minute == 0 ? last.hour : last.hour + 1;
      for (let i = this.startHour; i <= lastHour; i++) {
        this.hourList.push(i + ":00");
        if (i != lastHour) {
          this.hourList.push(i + ":30");
        }
      }
    },
    show(item) {
      this.$modal.show("dialog", {
        title: item.name,
        text: `${item.start} - ${item.end}<br><br>${item.description}`,
        buttons: [
          {
            title: "Close"
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
#timeline {
  height: 250px;
  overflow-x: auto;
  border: 1px solid #ddd;
}
.track {
  position: relative;
}
#labels {
  position: absolute;
  margin: 0;
  font-size: 12px;
  color: #555;
  top: 0;
  left: 0;
}
.track-item {
  position: absolute;
  transition: all 0.2s;
  margin-top: 4px;
}
.track-item:hover {
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;
}
.track-item p {
  font-size: 10px;
  line-height: 12px;
  margin: 0;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bar {
  height: 2px;
  margin-top: 4px;
}
div[class^="dot-"],
div[class*=" dot-"] {
  height: 8px;
  width: 8px;
  border-radius: 100%;
  position: absolute;
  bottom: -3px;
}
.bar .dot-start {
  left: -4px;
}
.bar .dot-end {
  right: -4px;
}
</style>
