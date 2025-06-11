
import type { Rule } from "eslint";
import type { SwitchStatement } from "estree";

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: { description: "Require default clause in switch statements." },
    schema: [],
    messages: { addDefault: "Add a default case to this switch statement." }
  },
  create(context) {
    return {
      SwitchStatement(node: SwitchStatement) {
        const hasDefault = node.cases?.some(c => c.test === null);
        if (!hasDefault) {
          context.report({ node: node as any, messageId: "addDefault" });
        }
      }
    };
  }
};
export default rule;
