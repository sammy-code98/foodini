<template>
  <div>
    <q-card flat class="q-px-md">
      <q-list>
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded>
              <img :src="picture" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-grey-7 text-weight-medium">{{
              orderDate
            }}</q-item-label>
            <q-item-label class="text-grey-8 text-weight-bold text-subtitle1">{{
              name
            }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label
              class="text-subtitle2 text-weight-medium"
              :class="status === 'Success' ? 'text-positive' : 'text-negative'"
              >{{ status }}</q-item-label
            >
            <q-item-label
              class="text-subtitle2 text-weight-medium text-grey-8"
              >{{ price }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    orderDate: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, required: true },
  },
  setup() {},
};
</script>
