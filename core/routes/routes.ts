export const routes = {
  home: "/",
  dashboard: "/dashboard",
  register: "/register",
  login: "/login",
  forgotPassword: "/forgot-password",
  addIdea: "/add-idea",
  addIdeaWithID: (id: string) => `/add-idea/${id}`,
};
