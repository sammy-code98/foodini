<template>
  <div class="q-pa-md flex justify-center items-center q-mt-xl">
    <q-avatar class="rounded" size="200px">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <div class="q-mt-md text-center text-weight-bold">
      <div class="text-h5 text-grey-8">Olake Folake</div>
      <div class="text-subtitle1 text-grey-7">+234 0002223223</div>
      <div class="text-positive">Edit Profile</div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-y-md rounded">
      <toggle-btn />
    </div>
  </div>
  <div class="q-mt-md q-pa-md">
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="grey-8" name="mdi-credit-card-settings-outline" />
        </q-item-section>
        <q-item-section class="text-grey-8 text-weight-bold"
          >Payment</q-item-section
        >
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="grey-8" name="mdi-alert-decagram-outline" />
        </q-item-section>
        <q-item-section class="text-grey-8 text-weight-bold"
          >Discounts and promotions</q-item-section
        >
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="grey-8" name="mdi-cog-outline" />
        </q-item-section>
        <q-item-section class="text-grey-8 text-weight-bold"
          >Settings</q-item-section
        >
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="grey-8" name="mdi-wechat" />
        </q-item-section>
        <q-item-section class="text-grey-8 text-weight-bold"
          >Contact Support</q-item-section
        >
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md">
    <q-btn
      outline
      color="grey-8"
      no-caps
      class="full-width q-pa-md rounded"
      label="Sign out"
    />
  </div>
</template>

<script>
import ToggleBtn from "../components/utility/ToggleBtn.vue";

export default {
  components: {
    ToggleBtn,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped>
.center {
  position: absolute;
  margin: 20px auto;
  top: 50%;
  transform: translate(0, 50%);
  border: 5px solid #ffff00;
  padding: 10px;
}
</style>
