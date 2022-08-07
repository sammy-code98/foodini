<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer class="bg-white q-pt-md">
      <q-card class="curved-card">
        <div class="q-mt-md">
          <div class="q-pt-xl text-h5 text-grey-9 text-center">
            Share your location
          </div>
          <div class="text-center q-ma-lg text-subtitle1 text-grey-7">
            If we have your location,we can do a better job finding what you
            want and deliver it
          </div>
        </div>
        <div class="q-px-md q-pb-md">
          <q-btn
            dense
            no-caps
            color="positive"
            class="full-width q-pa-md text-weight-bold"
            label="Yes, share my location"
          />

          <div class="text-center text-subtitle1 text-positive q-mt-sm">
            No, choose location manually
          </div>
        </div>
      </q-card>
    </q-footer>

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
    return {};
  },
});
</script>

<style lang="scss" scoped>
.text-heading {
  font-size: 25px !important;
  margin-left: 20px;
}
.text-font {
  font-family: "Sniglet", cursive;
}
.curved-card {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.text-weight {
  font-weight: bold !important;
}
</style>
