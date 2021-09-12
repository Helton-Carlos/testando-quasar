<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-4">
        <q-table
          title="CHECK DE SERVIÇOS"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div>
      <div class="col-6">
      </div>
    </div>
  </div>
</template>
<script>
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
  {
    name: "Livia Marinho",
    Entrada: "17:20",
    Saida: "20:40",
    Status: "Finalizado",
  },
  {
    name: "Martha Valle",
    Entrada: "10:12",
    Saida: "12:55",
    Status: "Finalizado",
  },
  {
    name: "Vania Firmino",
    Entrada: "09:12",
    Saida: "10:50",
    Status: "Finalizado",
  },
  {
    name: "Jelly Bean",
    Entrada: "10:42",
    Saida: "12:15",
    Status: "Finalizado",
  },
  {
    name: "Maicon Silva",
    Entrada: "10:42",
    Saida: "12:15",
    Status: "Finalizado",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
