import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useModulesStore = create(
  devtools(
    persist(
      (set) => ({
        // Initial state
        modules: [],

        // Set modules
        setModules: (modulesData) => set({ modules: modulesData }),

        // Clear modules
        clearModules: () => set({ modules: [] }),
      }),
      {
        name: "modules-store", // Save to AsyncStorage
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);

export default useModulesStore;
