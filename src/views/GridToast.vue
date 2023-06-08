<template>
  <grid :data="rowData" :columns="columnDefs" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import "tui-grid/dist/tui-grid.css";
import { Grid } from "@toast-ui/vue-grid";

@Component({
  components: {
    Grid,
  },
})
export default class GridToast extends Vue {
  public columnDefs: object[] = [];
  public rowData: object[] = [];

  constructor() {
    super();
  }

  public beforeMount() {
    this.columnDefs = [
      { header: "Make", name: "make", editor: "text" },
      { header: "Model", name: "model", editor: "text" },
      { header: "Price", name: "price", editor: "text" },
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ];

    // fetch("https://api.myjson.com/bins/15psn9")
    //   .then(result => result.json())
    //   .then(rowData => {
    //     this.rowData = rowData;
    //     console.log(this.rowData);
    //   });
  }
}
</script>
