<template>
  <div class="custom-table">
    <h3>Cast</h3>
    <kendo-grid :data-source="checkData">
      <kendo-grid-column
        :field="'name'"
        :title="'Name'"
        :width="120"
        :format="'{0:c}'"
        :template="getRowTemplate"
      >
      </kendo-grid-column>
      <kendo-grid-column
        :field="'character'"
        :title="'Character'"
        :width="120"
      ></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
import rowTemplate from "./ButtonPerson.vue";

export default {
  components: {
    "kendo-grid": Grid,
    "kendo-grid-column": GridColumn,
    rowTemplate: rowTemplate,
  },
  name: "Cast",
  data() {
    return {
      Message: "Cast",
    };
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
  props: ["data"],

  computed: {
    checkData() {
      return this.data;
    },
  },
};
</script>
