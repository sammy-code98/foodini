<template>
  <div>
    <div class="my-slide">
      <div class="search-card" v-for="search in searchItem" :key="search.name">
        <food-search-card
          class="text-weight-bolder"
          :picture="search.src"
          :name="search.name"
          :price="search.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodSearchCard from "../utility/FoodSearchCard.vue";
import searchItem from "../../data/searchItem";
export default {
  components: {
    FoodSearchCard,
  },
  setup() {
    return {
      searchItem,
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
  // this removes slider bar for other browsers like firefox
  scrollbar-width: none;
}
.search-card {
  width: 170px;
  flex-shrink: 0;
  height: 100%;
  margin: 0 2px;
}
// this removes slider bar for chrome.
.my-slide::-webkit-scrollbar {
  display: none;
}
</style>
