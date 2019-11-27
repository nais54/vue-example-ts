<template>
  <v-data-table
    :headers="headers"
    :items="eqpPlans"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { EqpPlanModule, IEqpPlan } from "@/store/Modules/EqpPlanStore";

@Component({
  components: {},
})
export default class EqpPlanGrid1 extends Vue {
  public headers: object[];

  constructor() {
    super();

    this.headers = [
      { text: "Version", value: "VERSION_NO" },
      { text: "Line", value: "LINE_ID" },
      { text: "Equipment", value: "EQP_ID" },
      { text: "Lot", value: "LOT_ID" },
      { text: "Product", value: "PRODUCT_ID" },
      { text: "Process", value: "PROCESS_ID" },
      { text: "Step", value: "STEP_ID" },
      { text: "Unit Qty", value: "PROCESS_QTY" },
      { text: "Dispatch In Time", value: "DISPATCH_IN_TIME" },
      { text: "Start Time", value: "START_TIME" },
      { text: "End Time", value: "END_TIME" },
      { text: "Due Date", value: "DUE_DATE" },
      { text: "Machine State", value: "MACHINE_STATE" },
    ];

    EqpPlanModule.loadEqpPlan("TSK-20191121-173837");
  }

  public get eqpPlans(): IEqpPlan[] {
    return EqpPlanModule.eqpPlans;
  }
}
</script>
