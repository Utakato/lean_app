export const routes = {
  // authentication
  register: "/register",
  login: "/login",
  forgotPassword: "/forgot-password",
  // main navigation
  home: "/",
  dashboard: "/dashboard",
  ideaDashboard: (id: string) => `${routes.dashboard}/${id}`,
  // lean canvas
  leanCanvas: (id: string) => `/lean-canvas/${id}`,
  // add idea
  addIdea: "/add-idea",
  addIdeaWithID: (id: string) => `${routes.addIdea}/${id}`,
};

export const unprotectedRoutes = [
  routes.register,
  routes.login,
  routes.forgotPassword,
];
