<template>
  <div class="row">
    <div class="col-6 q-ml-md q-mt-md">
      <h4>Tabela de Clientes</h4>
      <q-table
        title="Clientes"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>

    <div class="col-4 q-ml-md">
      <div class="q-pa-md">
        <h4>Cadastro de Clientes</h4>
        <label>Nome do cliente</label>
        <q-input
          standout="bg-primary text-white"
          v-model="text"
          :dense="dense"
        />
        <label>CPF</label>
        <q-input
          standout="bg-primary text-white"
          v-model="cpf"
          :dense="dense"
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
    label: "Clientes",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "Entrada", align: "center", label: "Entrada", field: "Entrada" },
  { name: "Saida", label: "Saida", field: "Saida" },
  { name: "Status", label: "Status", field: "Status" },
];

const rows = [
  {
    name: "Igor Santos",
    Entrada: "11:20",
    Saida: "14:20",
    Status: "Finalizado",
  },
  {
    name: "Marcio Brito",
    Entrada: "07:20",
    Saida: "14:40",
    Status: "Finalizado",
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
  data() {
    return {
      today: new Date(),
      cpf: ref(10),
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped></style>
