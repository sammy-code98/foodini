<template>
  <div class="rounded bg-indigo-1">
    <q-btn
      no-caps
      flat
      @click="toggle()"
      :class="[toggleMode ? 'active' : 'bg-indigo-1']"
      class="rounded"
      >Light Mode</q-btn
    >
    <q-btn
      no-caps
      flat
      @click="toggle()"
      :class="[!toggleMode ? 'active' : 'bg-indigo-1']"
      class="rounded"
      >Dark Mode</q-btn
    >
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const toggleMode = ref(true);
    const toggle = () => {
      toggleMode.value = !toggleMode.value;
      console.log("keke");
    };
    return {
      toggleMode,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: $positive;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>
