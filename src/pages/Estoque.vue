<template>
  <div class="q-pa-md">
    <h4>Estoque</h4>
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="separatorOptions"
    />

    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-left">Produtos gerais</th>
          <th class="text-right">Entrada</th>
          <th class="text-right">Saida</th>
          <th class="text-right">Total Atual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">44</td>
          <td class="text-right">87</td>
        </tr>
        <tr>
          <td class="text-left">Sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">228</td>
          <td class="text-right">19</td>
        </tr>
        <tr>
          <td class="text-left">Sabonete</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">246</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">37</td>
          <td class="text-right">283</td>
        </tr>
        <tr>
          <td class="text-left">Papel oficio</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">344</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      separator: ref("vertical"),
      separatorOptions: [
        { label: "Horizontal", value: "horizontal" },
        { label: "Vertical", value: "vertical" },
        { label: "Cell", value: "cell" },
        { label: "None", value: "none" },
      ],
    };
  },
};
</script>
