<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> DashBoard </q-toolbar-title>
        <div>
          <q-avatar size="27px" color="teal" class="espacos">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="60">
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
const linksList = [
  {
    icon: "dashboard",
    link: "https://quasar.dev",
  },
  {
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
