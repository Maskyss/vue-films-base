<template>
  <div
    v-on:click="onClick()"
    style="text-decoration: underline !important; cursor: pointer"
  >
    {{
      this.templateArgs.dataItem.original_title ||
      this.templateArgs.dataItem.original_name
    }}
  </div>
</template>

<script>
import { film, getCast, getMovieSimilar } from "../Services/FilmService";

export default {
  name: "rowTemplate",
  methods: {
    onClick: function () {
      const id = this.templateArgs.dataItem.id;
      this.templateArgs.router.push({
        name: "Film",
        params: { id },
      });
      film(id);
      getCast(id);
      getMovieSimilar(id);
    },
  },
  data() {
    return {
      templateArgs: {},
    };
  },
};
</script>
