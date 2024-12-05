import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAccountStore = create(
  devtools(
    persist(
      (set) => ({
        // Initial state
        account: {},

        // Set account
        setAccount: (accountData) => set({ account: accountData }),

        // Clear account
        clearAccount: () => set({ account: {} }),
      }),
      {
        name: "account-store", // Key lưu trữ trong AsyncStorage
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);

export default useAccountStore;
