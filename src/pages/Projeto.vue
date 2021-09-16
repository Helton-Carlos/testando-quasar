<template>
  <div class="row">
    <div class="col-3 q-ml-md">
      <h4>Produto</h4>
      <q-table
        title="Produtos"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Clientes",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "Estoque", align: "center", label: "Estoque", field: "Estoque" },
];

const rows = [
  {
    name: "Lona",
    Estoque: "11:20",
  },
  {
    name: "Lona",
    Estoque: "07:20",
  },
  {
    name: "Lona",
    Estoque: "17:20",
  },
  {
    name: "Lona",
    Estoque: "10:12",
  },
  {
    name: "Lona",
    Estoque: "09:12",
  },
  {
    name: "Lona",
    Estoque: "10:42",
  },
  {
    name: "Lona",
    Estoque: "10:42",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      stars: ref(4),
    };
  },
};
</script>

<style scoped>
h4 {
  padding: 5px;
  margin: 5px 0;
}
</style>
