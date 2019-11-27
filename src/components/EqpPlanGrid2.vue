<template>
  <div ref="datagrid">
    <div style="display: none">{{ eqpPlans.length }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { EqpPlanModule, IEqpPlan } from "@/store/Modules/EqpPlanStore";

@Component({
  components: {},
})
export default class EqpPlanGrid2 extends Vue {
  public grid: any;

  constructor() {
    super();

    EqpPlanModule.loadEqpPlan("TSK-20191121-173837");
  }

  public mounted() {
    this.grid = document.createElement("canvas-datagrid");

    const dg = this.$refs.datagrid as Element;
    dg.append(this.grid);
  }

  public get eqpPlans(): IEqpPlan[] {
    if (this.grid) {
      this.grid.data = EqpPlanModule.eqpPlans;
    }
    return EqpPlanModule.eqpPlans;
  }
}
</script>
