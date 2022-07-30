<template>
  <q-page class="">
    <div
      class="q-mt-md q-px-md text-weight-bold text-right text-font text-subtitle2"
    >
      or continue as
      <span class="text-weight-bolder text-positive">Guest</span>
    </div>
    <div class="q-pa-md q-mt-md flex flex-center">
      <div
        class="text-center q-mt-md text-h3 text-weight-bold text-font text-positive"
      >
        Foodini
      </div>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 300px; height: 330px"
      />
    </div>
    <div class="row q-ma-md q-pa-sm">
      <q-btn
        class="full-width q-pa-md q-ma-sm text-font text-weight-bold"
        no-caps
        color="positive"
        to="/account/signup"
        label="Sign Up"
      />
      <q-btn
        class="full-width q-pa-md q-ma-sm text-font text-weight-bold"
        no-caps
        outline
        color="positive"
        to="/account/signin"
        label="Sign In"
      />
    </div>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";
const metaData = {
  title: "Medicals ",
};
export default {
  name: "PageIndex",
  setup() {
    useMeta(metaData);
  },
};
</script>
