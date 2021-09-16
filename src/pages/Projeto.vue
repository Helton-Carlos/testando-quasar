<template>
  <div class="row">
    <div class="col-6 q-ml-md q-mt-md">
      <h4>Produtos Limpeza</h4>
      <q-table
        title="Produtos"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>

    <div class="col-3 q-ml-md">
      <h4>Cadastro de produto</h4>
      <div class="q-pa-md">
        <label>Nome do produto</label>
        <q-input
          standout="bg-primary text-white"
          v-model="text"
          :dense="dense"
        />
        <label>Quantidade</label>
        <q-input
          v-model.number="model"
          type="number"
          standout="bg-primary text-white"
        />
        <q-btn class="q-mt-md" color="primary" label="Salvar" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Produtos",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "Estoque", align: "center", label: "Estoque", field: "Estoque" },
];

const rows = [
  {
    name: "Sabadão em pó",
    Estoque: 10,
  },
  {
    name: "Sabão em barra",
    Estoque: 22,
  },
  {
    name: "Água sanitária",
    Estoque: 9,
  },
  {
    name: "Amaciante",
    Estoque: 1,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      stars: ref(4),
      model: ref(10),
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>
