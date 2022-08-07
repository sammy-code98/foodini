<template>
  <div>
    <div class="my-slide">
      <div class="food-card" v-for="food in foodItem" :key="food.name">
        <food-card
          class="text-weight-bolder"
          :picture="food.src"
          :name="food.name"
          :price="food.price"
          :newPrice="food.newPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodCard from "./FoodCard.vue";
import foodItem from "../../data/foodItem";
export default {
  components: {
    FoodCard,
  },
  setup() {
    return {
      foodItem,
    };
  },
};
</script>
<style lang="scss">
.my-slide {
  width: 100%;
  margin-top: 10px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  // this removes slider bar for other browers like firefox
  scrollbar-width: none;
  .food-card {
    width: 270px;
    flex-shrink: 0;
    height: 100%;
    margin: 0 2px;
  }
}
// this removes slider bar for chrome.
.my-slide::-webkit-scrollbar {
  display: none;
}
</style>
