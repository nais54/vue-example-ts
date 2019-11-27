import store from "@/store";
import { Module as Mod } from "vuex";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { SelectEqpPlan } from "@/api/eqpPlan";

export interface IEqpPlan {
  VERSION_NO: string;
  LINE_ID: string;
  EQP_ID: string;
  LOT_ID: string;
  PRODUCT_ID: string;
  PROCESS_ID: string;
  STEP_ID: string;
  PROCESS_QTY: number;
  DISPATCH_IN_TIME: string;
  START_TIME: string;
  END_TIME: string;
  DUE_DATE: string;
  MACHINE_STATE: string;
}

export interface IEqpPlanState {
  eqpPlans: IEqpPlan[];
}

@Module({ dynamic: true, namespaced: true, store, name: "eqpPlanStore" })
class EqpPlanStore extends VuexModule implements IEqpPlanState {
  public eqpPlans: IEqpPlan[] = [];

  constructor(module: Mod<ThisType<{}>, any>) {
    super(module);
  }

  @Mutation
  private setEqpPlan(eqpPlans: IEqpPlan[]) {
    this.eqpPlans = eqpPlans;
  }

  @Action({ rawError: true })
  public async loadEqpPlan(version: string) {
    try {
      const result = await SelectEqpPlan(version);

      this.setEqpPlan(JSON.parse(result.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const EqpPlanModule = getModule(EqpPlanStore);
