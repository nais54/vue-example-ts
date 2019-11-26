<template>
  <div class="hello">
    <h3 ref="text">Hello {{ title }}</h3>
    <button @click="onChangeTitle">changeTitle</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { HelloModule } from "@/store/Modules/HelloStore";

@Component
export default class HelloWorld extends Vue {
  public num: number;
  constructor() {
    super();
    this.num = 10;
    console.log("constructor");
  }

  public beforeCreate() {
    console.log("beforeCreate");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public created() {
    console.log("created");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public beforeMount() {
    console.log("beforeMount");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public mounted() {
    console.log("mounted");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public beforeUpdate() {
    console.log("beforeUpdate");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public updated() {
    console.log("updated");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public beforeDestroy() {
    console.log("beforeDestroy");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public destroyed() {
    console.log("destroyed");
    console.log(`num => ${this.num}`);
    console.log(this.$refs.text);
  }

  public onChangeTitle() {
    if (this.title === "Vue") {
      this.title = "World";
    } else {
      this.title = "Vue";
    }
  }

  public get title(): string {
    return HelloModule.title;
  }

  public set title(value: string) {
    HelloModule.setTitle(value);
  }
}
</script>

<style scoped lang="scss"></style>
