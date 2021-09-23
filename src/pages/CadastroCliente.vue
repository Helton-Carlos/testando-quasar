<template>
  <div class="row">
    <div class="col-6 q-ml-md q-mt-md">
      <h4>Tela Clientes</h4>
      <q-table
        title="Clientes"
        :rows="arraycliente"
        :columns="columns"
        row-key="Cliente"
      />
    </div>

    <div class="col-3 q-ml-md">
      <h4>Cadastro de Cliente</h4>
      <div class="q-pa-md">
        <label>Nome do Cliente</label>
        <q-input
          standout="bg-primary text-white"
          v-model="nome"
          :dense="dense"
        />
        <label>cpf</label>
       <q-input
          standout="bg-primary text-white"
          v-model="cpf"
          :dense="dense"
          mask="###-###-###-##"
        />
        <q-btn
          class="q-mt-md"
          color="primary"
          label="Salvar"
          @click="onPush()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "Cliente",
    required: true,
    label: "Clientes",
    align: "left",
    field: (row) => row.nome,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "cpf", align: "center", label: "CPF", field: "cpf" },
];

export default {
  setup() {
    return {
      columns,
      arraycliente: ref([]),
      stars: ref(4),
      cpf: ref(""),
      nome: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
  methods: {
    onPush() {
      this.arraycliente.push({
        nome: this.nome,
        cpf: this.cpf,
      });
    },
  },
};
</script>
