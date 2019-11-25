<template>
  <div>
    {{ cnt }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CounterView extends Vue {
  @Prop() public cnt: number;
  constructor() {
    super();

    this.cnt = 0;
  }
}
</script>
