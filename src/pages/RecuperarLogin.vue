<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-actions class="full-width">
        <q-input
          v-model="email"
          filled
          type="email"
          class="q-pt-sm full-width"
          label="E-mail"
          :rules="[(val) => !!val || 'Preencha seu Email', isValidEmail]"
        />
        <q-btn color="accent q-pa-md" style="width: 100%">
          <div class="ellipsis">Enviar</div>
        </q-btn>
        <q-btn
          flat
          color="primary"
          class="q-pt-none full-width"
          label="voltar"
          @click="$router.push({ name: 'Login' })"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "RecuperarLogin",
  setup() {
    return {
      email: ref(""),
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Preencha seu Email";
    },
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
