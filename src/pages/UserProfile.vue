<template>
  <div class="q-pa-md flex justify-center items-center q-mt-xl">
    <q-avatar class="rounded" size="200px">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <div class="q-mt-md text-center text-weight-bold">
      <div class="text-h5 text-grey-8">Olake Folake</div>
      <div class="text-subtitle1 text-grey-7">+234 0002223223</div>
      <div class="text-positive">Edit Profile</div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-y-md rounded">
      <toggle-btn />
    </div>
  </div>
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

<style scoped>
.center {
  position: absolute;
  margin: 20px auto;
  top: 50%;
  transform: translate(0, 50%);
  border: 5px solid #ffff00;
  padding: 10px;
}
</style>
