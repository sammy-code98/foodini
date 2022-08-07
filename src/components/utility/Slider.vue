<template>
  <div>
    <div class="my-slide">
      <div class="popular-card" v-for="pop in foodItem" :key="pop.name">
        <food-card
          class="foods-card text-weight-bolder"
          :picture="pop.src"
          :name="pop.name"
          :price="pop.price"
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
  .popular-card {
    width: 150px;
    flex-shrink: 0;
    height: 100%;
    margin: 0 2px;
  }
}
// this removes slider bar for chrome.
.my-slide::-webkit-scrollbar {
  display: none;
}
.goods-card {
  font-family: "Sniglet", cursive;
}
</style>
