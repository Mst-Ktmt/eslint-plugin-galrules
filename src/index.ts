
import type { Rule } from "eslint";

import earlyReturn from "./rules/earlyReturn";
import promiseCatch from "./rules/promiseCatch";
import exhaustiveSwitch from "./rules/exhaustiveSwitch";
import noConsoleProd from "./rules/noConsoleProd";

export const rules: Record<string, Rule.RuleModule> = {
  "early-return": earlyReturn,
  "promise-catch": promiseCatch,
  "exhaustive-switch": exhaustiveSwitch,
  "no-console-prod": noConsoleProd,
};

export const configs = {
  recommended: {
    plugins: ["galrules"],
    rules: {
      "galrules/early-return": "error",
      "galrules/promise-catch": "error",
      "galrules/exhaustive-switch": "error",
      "galrules/no-console-prod": "warn"
    }
  }
};

export default { rules, configs };
