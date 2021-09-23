<template>
  <div class="row">
    <div class="col-6 q-ml-md q-mt-md">
      <h4>Produtos Limpeza</h4>
      <q-table
        title="Produtos"
        :rows="arrayproduto"
        :columns="columns"
        row-key="produto"
      />
    </div>

    <div class="col-3 q-ml-md">
      <h4>Cadastro de produto</h4>
      <div class="q-pa-md">
        <label>Nome do produto</label>
        <q-input
          standout="bg-primary text-white"
          v-model="produto"
          :dense="dense"
        />
        <label>Quantidade</label>
        <q-input
          v-model.number="quantidade"
          type="number"
          standout="bg-primary text-white"
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
    name: "produto",
    required: true,
    label: "Produtos",
    align: "left",
    field: (row) => row.produto,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "quantidade", align: "center", label: "Quantidade", field: "quantidade" },
];

export default {
  setup() {
    return {
      columns,
      arrayproduto: ref([]),
      stars: ref(4),
      quantidade: ref(1),
      produto: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
  methods: {
    onPush() {
      this.arrayproduto.push({
        produto: this.produto,
        quantidade: this.quantidade,
      });
    },
  },
};
</script>
