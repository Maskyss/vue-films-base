<template>
  <div
    v-on:click="onClick()"
    style="text-decoration: underline !important; cursor: pointer"
  >
    {{ this.templateArgs.dataItem.name }}
  </div>
</template>

<script>
import { actor } from "../Services/ActorService";

export default {
  name: "rowTemplate",
  methods: {
    onClick: function () {
      const id = this.templateArgs.dataItem.id;
      this.templateArgs.router.push({
        name: "Actor",
        params: { id },
      });
      actor(id);
    },
  },
  data() {
    return {
      templateArgs: {},
    };
  },
};
</script>
