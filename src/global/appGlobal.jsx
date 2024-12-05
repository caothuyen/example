import { useModulesStore } from "src/store";

// Cache modules && clear cache
const cachedModules = new Map();
useModulesStore.subscribe(() => cachedModules.clear());

// Get module info
export const getModuleInfo = (module) => {
  if (!cachedModules.has(module)) {
    const modules = useModulesStore.getState().modules;
    const moduleInfo = modules.find((item) => item.name === module);
    cachedModules.set(module, moduleInfo);
  }
  return cachedModules.get(module);
};
