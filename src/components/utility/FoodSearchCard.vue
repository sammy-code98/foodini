<template>
  <q-card flat class="full-width q-pl-sm">
    <q-img :src="picture" class="food-img" />
    <q-card-section>
      <div class="text-subtitle1 text-weight-bold text-grey-8">
        {{ name }}
      </div>
      <div>
        <span class="text-subtitle1 text-weight-medium text-grey-8 q-mr-sm">{{
          price
        }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
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
.food-img {
  height: 200px;
  border-radius: 20px !important;
  margin: 0px;
  padding: 0px;
  position: relative;
}
.time-tag {
  height: 25px;
  border-radius: 20px !important;
}
</style>
