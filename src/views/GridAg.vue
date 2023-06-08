<template>
  <div>
    <button @click="getSelectedRows()">Get Selected Rows</button>
    <ag-grid-vue
      style="width: 100%; height: 500px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
      :defaultColDef="defaultColDef"
      :rowGroupPanelShow="rowGroupPanelShow"
      :groupDefaultExpanded="groupDefaultExpanded"
      :autoGroupColumnDef="autoGroupColumnDef"
      :floatingFilter="true"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue,
  },
})
export default class GridAg extends Vue {
  public columnDefs: object[] = [];
  public rowData: object[] = [];
  public gridApi: any = null;
  public columnApi: any = null;
  public defaultColDef: any = null;
  public rowGroupPanelShow: any = null;
  public groupDefaultExpanded: any = null;
  public autoGroupColumnDef: any = null;

  constructor() {
    super();
  }

  public beforeMount() {
    this.columnDefs = [
      {
        headerName: "Make",
        field: "make",
        editable: true,
        enableRowGroup: true,
        filter: "agTextColumnFilter",
      },
      { headerName: "Model", field: "model", editable: true, filter: "agTextColumnFilter" },
      { headerName: "Price", field: "price", editable: true, filter: "agNumberColumnFilter" },
    ];

    this.defaultColDef = { resizable: true };
    this.rowGroupPanelShow = "always";
    this.groupDefaultExpanded = -1;
    this.autoGroupColumnDef = { field: "make" };

    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => {
        this.rowData = rowData;
      });
  }

  public onGridReady(params: any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  public getSelectedRows() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
</script>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
