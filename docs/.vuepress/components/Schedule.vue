<template>
  <section id="schedule">
    <v-dialog/>
    <div class="activities" v-for="(item, index) in event.activities" :key="index">
      <div class="activity-container" @click="show(item)">
        <div class="pad"></div>
        <div class="content-container">
          <div class="dot-container">
            <div class="dot" :style="`background: ${item.color};`"></div>
          </div>
          <div class="content">
            <h3>{{ item.name }}</h3>
            <p>{{ item.start}} - {{ item.end }}</p>
          </div>
        </div>
        <div class="pad"></div>
      </div>
    </div>
    <modal name="hello-world">hello, world!</modal>
  </section>
</template>

<script scoped>
/*
  Huge thanks to https://github.com/sttic for providing the vue component.
*/
export default {
  name: "schedule",
  data() {
    return {
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
#schedule {
  background: #f8fcfe;
  height: 370px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #ddd;
}
h3,
p {
  margin: 0;
}
h3 {
  font-size: 16px;
}
p {
  font-size: 12px;
  color: gray;
  line-height: 16px;
}
.activity-container {
  width: 100%;
  background: white;
  border-bottom: 1px solid #ddd;
  user-select: none;
}
.activity-container:hover > .content-container {
  transform: translateX(6px);
  /* opacity: 0.5; */
  transition: 0.2s;
}
.activity-container:hover {
  cursor: pointer;
  background: rgba(250, 250, 250, 0.9);
}
.pad {
  height: 16px;
}
.content-container {
  display: inline-flex;
}
.dot-container {
  padding: 13px 18px 0 24px;
  vertical-align: middle;
}
.dot {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
</style>
