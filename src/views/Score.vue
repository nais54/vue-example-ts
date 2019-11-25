<template>
  <div>
    <ScoreView />
    <ScoreControl />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import ScoreControl from "@/components/ScoreControl.vue";
import ScoreView from "@/components/ScoreView.vue";

@Component({
  components: {
    ScoreControl,
    ScoreView,
  },
})
export default class Score extends Vue {
  constructor() {
    super();
  }
}
</script>
