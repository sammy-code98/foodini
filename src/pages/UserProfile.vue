<template>
  <q-page class="flex flex-center">
    <div>
      <q-avatar class="rounded" size="200px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <div class="q-mt-md text-center text-weight-bold">
        <div class="text-h5 text-grey-8">Olake Folake</div>
        <div class="text-subtitle1 text-grey-7">+234 0002223223</div>
        <div class="text-positive">Edit Profile</div>
      </div>

      <div class="q-mt-md q-gutter-y-md rounded">
        <toggle-btn />
      </div>
    </div>
  </q-page>
</template>

<script>
import ToggleBtn from "../components/utility/ToggleBtn.vue";

export default {
  components: {
    ToggleBtn,
  },

  setup() {
    return {};
  },
};
</script>
