<template>
  <q-page class="flex flex-center">
    <div class="q-px-lg q-pb-md">
      <q-card class="my-card">
        <q-img src="https://placeimg.com/500/300/nature">
          <div class="absolute-bottom">
            <div class="text-h6">Crie Seu Login</div>
            <div class="text-subtitle2">Gratuito</div>
          </div>
        </q-img>

        <q-card-actions class="q-pt-none full-width">
          <q-input
            v-model="email"
            filled
            type="email"
            class="q-pt-none full-width"
            label="E-mail"
          />
          <q-input
            class="q-pt-none full-width"
            v-model="password"
            filled
            label="Password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-actions>
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary q-pa-md" style="width: 100%">
            <div class="ellipsis">Cadastrar</div>
          </q-btn>
          <q-btn flat color="primary" class="q-pt-none full-width" label="ESQUECI MINHA SENHA" />
        </div>
      </q-card>
    </div>
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
      password: ref(""),
      isPwd: ref(true),
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
