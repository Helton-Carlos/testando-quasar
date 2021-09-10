<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-actions class="full-width">
        <q-input
          v-model="email"
          filled
          type="email"
          class="q-pt-xs full-width"
          label="E-mail"
        />
      </q-card-actions>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary q-pa-md" style="width: 100%">
          <div class="ellipsis">Enviar</div>
        </q-btn>
        <q-btn
          flat
          color="primary"
          class="q-pt-none full-width"
          label="voltar"
          @click="$router.push({ name: 'Login' })"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      email: ref(""),
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
