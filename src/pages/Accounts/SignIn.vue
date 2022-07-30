<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h4 text-font q-pb-md text-grey-7">
        Sign In
      </div>
      <div class="text-center text-font text-grey-7 text-subtitle1">
        If we have your location,we can do a better job finding what you want
        and deliver it
      </div>
      <q-card class="q-mt-xl" flat>
        <q-form class="q-gutter-md">
          <q-input
            outlined
            v-model="email"
            class="text-font text-subtitle1"
            type="email"
            placeholder="Enter your Email Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            v-model="password"
            outlined
            class="text-font text-subtitle1"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Enter your Password"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div
            class="text-right text-font text-positive text-weight-meduim text-subtitle2"
          >
            <router-link to="/account/forgot-password"
              >Forgot Password?</router-link
            >
          </div>
          <div>
            <q-btn
              class="full-width q-pa-md text-font text-weight-bold"
              label="Sign In"
              no-caps
              dense
              type="submit"
              color="positive"
            />
          </div>
        </q-form>
      </q-card>
      <div class="q-mt-sm text-center text-grey-7 text-font text-subtitle2">
        Don't have an account yet?
        <router-link to="/account/signup">
          <span class="text-positive">Sign Up</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
const metaData = {
  title: "Foodini || Sign In",
};
export default {
  setup() {
    useMeta(metaData);
    const email = ref("");
    const password = ref("");
    return {
      email,
      password,
      isPwd: ref(true),
    };
  },
};
</script>
