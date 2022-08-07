<template>
  <div>
    <div v-for="order in orderItem" :key="order.name">
      <order-card
        class="q-mt-md"
        :picture="order.src"
        :name="order.name"
        :orderDate="order.orderDate"
        :status="order.status"
        :price="order.price"
      />
    </div>
  </div>
</template>

<script>
import OrderCard from "../components/utility/OrderCard.vue";
import orderItem from "../data/orderItem";
export default {
  components: {
    OrderCard,
  },
  setup() {
    return {
      orderItem,
    };
  },
};
</script>
