<template>
  <div class="flex">
  <q-card class="card-graficos">
  <div>
  <h6>Gráficos temporada:</h6>
  </div>
   <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </q-card>

   <q-card class="card-graficos">
  <div>
  <h6>Gráficos produtos:</h6>
  </div>
   <apexchart
      type="area"
      :options="chartOptions1"
      :series="series1"
    ></apexchart>
  </q-card>
  </div>

</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "Clientes",
        },
        xaxis: {
          categories: ['Nov','Dez','Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun'],
        },
      },
      series: [
        {
          name: "Numero de clientes",
          data: [20, 20, 45, 50, 49, 70, 70, 31],
        },
      ],
      chartOptions1: {
        chart: {
          id: "Produtos",
        },
        xaxis: {
          categories: ['Yogurt','Sandwich','Sabonete', 'Cupcake', 'Papel oficio	', 'Shampoo', 'Pasta de dente','Água Sanitária'],
        },
      },
      series1: [
        {
          name: "Numero de clientes",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-graficos{
  width: 500px;
  margin: 20px;
  padding-top: 20px;
}
h6{padding: 0 20px;margin: 0;}
</style>
