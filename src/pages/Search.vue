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
  </div>
</template>

<script>
import { ref } from "vue";
import SearchSlider from "../components/utility/SearchSlider.vue";
import foodItem from "../data/foodItem";
export default {
  components: {
    SearchSlider,
  },
  setup() {
    return {
      text: ref(""),
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
