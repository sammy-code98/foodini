<template>
  <q-card flat class="full-width q-pl-sm">
    <q-img :src="picture" class="food-img">
      <q-badge
        class="absolute-bottom-right q-ma-md bg-white text-grey-8 text-subtitle2 time-tag"
      >
        {{ caption }}
      </q-badge>
    </q-img>
    <q-card-section>
      <div class="text-h6 text-weight-medium text-grey-8">
        {{ name }}
      </div>
      <div>
        <span
          class="text-subtitle1 text-strike text-weight-medium text-grey-8 q-mr-sm"
          >{{ price }}</span
        >

        <q-badge color="red"> {{ newPrice }} </q-badge>
      </div>

      <q-btn
        flat
        round
        color="positive"
        class="absolute"
        style="top: 60px; right: 4px; transform: translateY(-100%)"
      >
        <q-icon size="15px" left name="mdi-star" />
        <span>{{ rating }}</span></q-btn
      >
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    newPrice: { type: String, required: true },
    rating: { type: String, required: true },
    caption: { type: String, required: true },
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
