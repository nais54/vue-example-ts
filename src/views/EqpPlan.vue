<template>
  <v-tabs background-color="white">
    <v-tab>Vuetify</v-tab>
    <v-tab>Canvas</v-tab>

    <v-tab-item>
      <v-container fluid>
        <EqpPlanGrid1 />
      </v-container>
    </v-tab-item>
    <v-tab-item>
      <v-container fluid>
        <EqpPlanGrid2 />
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EqpPlanGrid1 from "@/components/EqpPlanGrid1.vue";
import EqpPlanGrid2 from "@/components/EqpPlanGrid2.vue";

@Component({
  components: {
    EqpPlanGrid1,
    EqpPlanGrid2,
  },
})
export default class EqpPlan extends Vue {
  constructor() {
    super();
  }
}
</script>
