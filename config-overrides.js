import rewireMobX from "react-app-rewire-mobx";

/* config-overrides.js */
export default function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}