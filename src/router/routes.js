const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/account",
    component: () => import("layouts/AcctLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Accounts/AccountsIndex.vue") },
    ],
  },
  {
    path: "/account/signin",
    component: () => import("layouts/AcctLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Accounts/SignIn.vue") },
    ],
  },
  {
    path: "/account/signup",
    component: () => import("layouts/AcctLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Accounts/SignUp.vue") },
    ],
  },
  {
    path: "/account/forgot-password",
    component: () => import("layouts/AcctLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Accounts/ForgotPassword.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [{ path: "", component: () => import("pages/Dashboard.vue") }],
  },

  {
    path: "/order",
    component: () => import("layouts/OrderLayout.vue"),
    children: [{ path: "", component: () => import("pages/Orders.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
