<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h5 text-font q-pb-md text-grey-7">
        Create an account
      </div>

      <div class="q-mt-sm">
        <q-btn
          class="full-width q-pa-md q-ma-sm"
          flat
          no-caps
          style="background: #e9e8e8; color: #000"
          icon="mdi-google"
          label="Sign Up with Google"
        />
        <q-btn
          class="full-width q-pa-md q-ma-sm"
          flat
          no-caps
          style="background: #e9e8e8; color: #000"
          icon="mdi-facebook"
          label="Sign Up with Facebook"
        />
      </div>

      <div
        class="text-center text-h6 text-font text-weight-bold text-positive q-mt-lg"
      >
        Or
      </div>

      <q-card class="q-mt-xl" flat>
        <q-form class="q-gutter-md">
          <q-input
            outlined
            v-model="name"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Fullname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="email"
            class="text-font text-subtitle1"
            type="email"
            placeholder="Email Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input outlined v-model="PhoneNumber" type="tel">
            <template v-slot:before>
              <q-select
                filled
                v-model="model"
                :options="options"
                options-dense
                menu-anchor="bottom left"
                popup-content-style="bottom left"
              />
            </template>
          </q-input>

          <div class="text-font text-center text-grey-7 q-pt-md">
            If you sign up,you agree to the <br />
            <span class="text-weight-bold text-positive"
              >Terms & Conditions</span
            >
            and
            <span class="text-weight-bold text-positive">Privacy Policy</span>
          </div>

          <div>
            <q-btn
              class="full-width q-pa-md text-font text-weight-bold"
              label="Continue"
              no-caps
              dense
              type="submit"
              color="positive"
            />
          </div>
        </q-form>
      </q-card>

      <div class="q-mt-sm text-center text-grey-7 text-font text-subtitle2">
        Already have an account?
        <router-link to="/account/signin"
          ><span class="text-positive">Sign In</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { useMeta } from "quasar";
const metaData = {
  title: "Foodini || Sign Up",
};
export default {
  setup() {
    useMeta(metaData);
    const name = ref("");
    const email = ref("");
    const PhoneNumber = ref("");

    return {
      name,
      email,
      PhoneNumber,
      model: ref("+234"),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>
Footer
