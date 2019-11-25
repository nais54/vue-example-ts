<template>
  <div>
    {{ score }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ScoreModule } from "@/store/Modules/ScoreStore";

@Component({
  components: {},
})
export default class ScoreView extends Vue {
  constructor() {
    super();
  }

  public get score(): number {
    return ScoreModule.score;
  }
}
</script>
