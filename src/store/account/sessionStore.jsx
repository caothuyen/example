import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSessionStore = create(
  devtools(
    persist(
      (set) => ({
        // Initial state
        session: null,

        // Set session
        setSession: (session) => set({ session }),

        // Clear session
        clearSession: () => set({ session: null }),
      }),
      {
        name: "session-store", // Key lưu trữ trong AsyncStorage
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);

export default useSessionStore;
