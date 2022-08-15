<template>
  <div>
    <div class="bg-green-2 q-ma-md q-pa-md rounded">
      <div class="text-center text-positive text-weight-bold">
        🎁 50% off all your delivery for 30 days
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="text-grey-8 text-h6 text-weight-medium">
        Restaurants nearby
      </div>
      <q-btn flat dense color="black" icon="mdi-arrow-right" />
    </div>
    <slider class="slider-margin-top" />

    <div class="row justify-between q-pa-md">
      <div class="text-grey-8 text-h6 text-weight-medium">Top rated</div>
      <q-btn flat dense color="black" icon="mdi-arrow-right" />
    </div>
    <div class="slider-height">
      <slider class="slider-margin-top" />
    </div>
    <div class="q-pa-md q-mt-md">
      <div class="text-grey-8 text-h6 text-weight-medium q-mb-md">
        All Restaurants
      </div>
      <div v-for="food in foodItem" :key="food.name">
        <food-card
          class="text-weight-bolder"
          :picture="food.src"
          :name="food.name"
          :price="food.price"
          :newPrice="food.newPrice"
          :rating="food.rating"
          :caption="food.caption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/utility/Slider.vue";
import FoodCard from "../components/utility/FoodCard.vue";
import foodItem from "../data/foodItem";
export default {
  components: {
    Slider,
    FoodCard,
  },
  setup() {
    return {
      foodItem,
    };
  },
};
</script>

<style scoped>
.slider-margin-top {
  padding-top: 4px;
}
.slider-height {
  height: 300px;
}
</style>
