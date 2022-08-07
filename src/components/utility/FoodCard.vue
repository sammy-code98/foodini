<template>
  <q-card flat class="full-width">
    <img :src="picture" class="product-img" />
    <q-card-section>
      <div class="text-body1">
        {{ name }}
      </div>
      <div class="text-h5 text-weight-bold">
        {{ price }}
      </div>
      <q-btn
        flat
        round
        color="text-black"
        icon="mdi-shopping-outline"
        class="absolute"
        style="top: 60px; right: 8px; transform: translateY(-50%)"
      />
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.product-img {
  height: 200px;
  border-radius: 30px !important;
  margin: 0px;
  padding: 0px;
  position: relative;
}
</style>
