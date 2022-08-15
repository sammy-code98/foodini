<template>
  <div>
    <div class="q-pa-md">
      <q-input
        class="rounded"
        filled
        v-model="text"
        color="positive"
        placeholder="Search for anything"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="q-px-md">
      <div class="text-grey-8 text-h6 text-weight-medium">
        Your search history
      </div>
      <div class="slider-height">
        <search-slider class="slider-margin-top" />
      </div>
    </div>

    <div class="q-px-md q-mt-md">
      <div class="text-grey-8 text-h6 text-weight-medium">
        Popular Categories
      </div>

      <q-list
        class="q-mt-sm"
        v-for="popCat in popularCategory"
        :key="popCat.title"
      >
        <q-item clickable v-ripple>
          <q-item-section>{{ popCat.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchSlider from "../components/utility/SearchSlider.vue";
import foodItem from "../data/foodItem";
import popularCategory from "../data/popularCategory";
export default {
  components: {
    SearchSlider,
  },
  setup() {
    return {
      text: ref(""),
      foodItem,
      popularCategory,
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
