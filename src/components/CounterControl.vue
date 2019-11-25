<template>
  <div>
    <button @click="increament">
      +
    </button>
    <button @click="decreament">
      -
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CounterControl extends Vue {
  @Prop() public cnt: number = 0;
  public count: number;
  constructor() {
    super();

    this.count = this.cnt;
  }

  public increament() {
    this.count++;
    this.$emit("emitEvent", this.count);
  }

  public decreament() {
    this.count--;
    this.$emit("emitEvent", this.count);
  }
}
</script>
