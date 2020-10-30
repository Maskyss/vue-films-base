<template>
  <div class="custom-table">
    <kendo-grid :data-source="checkData">
      <kendo-grid-column
        field="lastModified"
        title="Last Modified"
        :template="getRowTemplate"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'release_date ? release_date : first_air_date?first_air_date:none'"
        :title="'Date'"
        :width="120"
      ></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
import rowTemplate from "./ButtonMovie.vue";

export default {
  components: {
    "kendo-grid": Grid,
    "kendo-grid-column": GridColumn,
    rowTemplate: rowTemplate,
  },
  methods: {
    getRowTemplate(e) {
      return {
        template: rowTemplate,
        templateArgs: Object.assign(this.templateData(e)),
      };
    },
    templateData(item) {
      return {
        dataItem: item,
        router: this.$router,
      };
    },
  },
  name: "MovieSimilar",
  data() {
    return {
      Message: "MovieSimilar",
    };
  },
  props: ["data"],

  computed: {
    checkData() {
      console.log(this.data);
      return this.data;
    },
  },
};
</script>
