<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <div class="q-mt-sm">
          <div class="text-grey-8 text-h5 text-weight-bold q-mx-sm">
            My Orders
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square>
        <q-tabs
          class="text-grey-7"
          active-class="text-positive"
          indicator-color="transparent"
        >
          <q-route-tab icon="mdi-home" to="/dashboard" />

          <q-route-tab icon="search" exact to="/search" />

          <q-route-tab icon="mdi-bag-personal-outline" to="/order" exact />

          <q-route-tab icon="mdi-account-outline" exact to="/profile" />
        </q-tabs>
      </q-card>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  setup() {},
};
</script>
