<template>
  <div>
    <CounterView :cnt="cnt" />
    <CounterControl :cnt="cnt" @setCnt="setCnt" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import CounterControl from "@/components/CounterControl.vue";
import CounterView from "@/components/CounterView.vue";

@Component({
  components: {
    CounterControl,
    CounterView,
  },
})
export default class Counter extends Vue {
  public cnt: number = 0;

  constructor() {
    super();
  }

  public setCnt(value: number) {
    this.cnt = value;
  }
}
</script>
