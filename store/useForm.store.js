import { create } from "zustand";

export const useStore = create((set) => ({
  /**
   * which form to choose:
   * 0 -> forget password
   * 1 -> login form
   * 2 -> signup form
   */
  form: 1,
  setForm: (form) => set({ form }),
  loggedInUser: null,
  setLoggedInUser: (user) => set({ loggedInUser: user }),
  registered: false,
  registrations: [],
  setRegistration: (value) => set({ registered: value }),
  setRegistrationsData: (value) => set({ registrations: value }),
}));
