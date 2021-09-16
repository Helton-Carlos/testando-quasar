<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6">
        <q-table
          title="CHECK DE SERVIÇOS"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
        <q-card class="my-card q-mt-md">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="
                  col-auto
                  text-grey text-caption
                  q-pt-md
                  row
                  no-wrap
                  items-center
                "
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="my-card q-ml-md">
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />

            <q-card-section>
              {{ today }}
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 8:30PM </q-btn>
            <q-btn flat> 19:00PM </q-btn>
            <q-btn flat color="primary"> Escalas </q-btn>
          </q-card-actions>
        </q-card>

        <q-card class="my-card q-ml-md q-mt-md">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
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
      stars: ref(4),
    };
  },
  data() {
    return {
      today: new Date(),
    };
  },
};
</script>
