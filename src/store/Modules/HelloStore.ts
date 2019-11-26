import store from "@/store";
import { Module as Mod } from "vuex";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface IHelloState {
  title: string;
}

@Module({ dynamic: true, namespaced: true, store, name: "helloStore" })
class HelloStore extends VuexModule implements IHelloState {
  public title: string = "World";

  constructor(module: Mod<ThisType<{}>, any>) {
    super(module);
  }

  @Mutation
  private changeTitle(value: string) {
    this.title = value;
  }

  @Action
  public setTitle(value: string) {
    this.changeTitle(value);
  }
}

export const HelloModule = getModule(HelloStore);
