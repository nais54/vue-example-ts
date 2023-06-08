import store from "@/store";
import { Module as Mod } from "vuex";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface IScoreState {
  score: number;
}

@Module({ dynamic: true, namespaced: true, store, name: "scoreStore" })
class ScoreStore extends VuexModule implements IScoreState {
  public score: number = 0;

  constructor(module: Mod<ThisType<{}>, any>) {
    super(module);
  }

  @Mutation
  private changeScore(value: number) {
    this.score = value;
  }

  @Action
  public setScore(value: number) {
    this.changeScore(value);
  }
}

export const ScoreModule = getModule(ScoreStore);
