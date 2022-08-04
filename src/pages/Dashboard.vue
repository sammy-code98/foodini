<template>
  <div>
    <div class="bg-green-2 q-ma-md q-pa-md rounded">
      <div class="text-center text-positive text-weight-bold">
        🎁 50% off all your delivery for 30 days
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="text-grey-8 text-h6 text-weight-medium">
        Resturants nearby
      </div>
      <q-btn flat dense color="black" icon="mdi-arrow-right" />
    </div>

    <div class="row justify-between q-pa-md">
      <div class="text-grey-8 text-h6 text-weight-medium">Top rated</div>
      <q-btn flat dense color="black" icon="mdi-arrow-right" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.rounded {
  border-radius: 8px;
}
</style>
