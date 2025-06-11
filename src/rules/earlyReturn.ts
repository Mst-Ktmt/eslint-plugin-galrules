
import type { Rule } from "eslint";
import type { IfStatement } from "estree";

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: { description: "Prefer early return over else/else-if" },
    schema: [],
    messages: { avoidElse: "Use early return instead of else / else-if." }
  },
  create(context) {
    return {
      IfStatement(node: IfStatement) {
        if (node.alternate) {
          context.report({ node: node.alternate as any, messageId: "avoidElse" });
        }
      }
    };
  }
};
export default rule;
