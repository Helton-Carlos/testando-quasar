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
            class="q-pt-sm full-width"
            label="E-mail"
            :rules="[(val) => !!val || 'Preencha seu Email', isValidEmail]"
          />
          <q-input
            class="q-pt-sm full-width"
            v-model="password"
            filled
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => (val && val.length > 0) || 'Preencha sua senha']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            color="accent q-pa-md"
            class="full-width"
            @click="validarClick"
          >
            <div class="ellipsis">Logar</div>
          </q-btn>
          <q-btn
            flat
            color="primary"
            class="full-width"
            label="ESQUECI MINHA SENHA"
            @click="$router.push({ name: 'RecuperarLogin' })"
          />
        </q-card-actions>
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
      erro: true,
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Preencha seu Email";
    },
    validarClick() {
      if (this.email.trim() === "" && this.trim() === "") {
        return false
      }else{
        this.$router.push({ name: "Index" });
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
