<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-4">
      <q-toolbar class="text-primary">
        <q-toolbar-title class="text-weight-bold"> Aquosa </q-toolbar-title>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="accent" text-color="white" floating>
              {{ result }}
            </q-badge>
            <q-tooltip>Notificação</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round flat no-wrap>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Colaborador</q-tooltip>
            <q-menu auto-close>
              <q-list dense>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Meu perfil</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary text-white no-scroll"
      :width="58"
      :breakpoint="500"
      behavior="desktop"
      show-if-above
    >
      <q-space />
      <q-item
        v-for="(list, index) in linksList"
        :key="index"
        :to="list.rota"
        active-class="bg-active"
        exact
      >
        <q-item-section avatar>
          <q-icon :name="list.icon" />
        </q-item-section>
      </q-item>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      result: 4,
      Ocorrencia: 250,
      linksList: [
        {
          icon: "dashboard",
          rota: "/",
        },
        {
          icon: "trending_up",
          rota: "/grafico",
        },
        {
          icon: "assignment",
          rota: "/projeto",
        },
        {
          icon: "supervisor_account",
          rota: "/cliente",
        },
        {
          icon: "production_quantity_limits",
          rota: "/estoque",
        },
         {
          icon: "logout",
          rota: "/login",
        },
      ],
    };
  },
});
</script>
<style></style>
