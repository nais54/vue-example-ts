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

import { ScoreModule } from "@/store/Modules/ScoreStore";

@Component({
  components: {},
})
export default class ScoreControl extends Vue {
  constructor() {
    super();
  }

  public increament() {
    ScoreModule.setScore(ScoreModule.score + 1);
  }

  public decreament() {
    ScoreModule.setScore(ScoreModule.score - 1);
  }
}
</script>
