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
    return {};
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
