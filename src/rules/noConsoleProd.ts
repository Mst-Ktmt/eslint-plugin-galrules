
import type { Rule } from "eslint";
import type { MemberExpression } from "estree";

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: { description: "Disallow console statements except error/warn." },
    schema: [],
    fixable: "code",
    messages: { noConsole: "Avoid using console statements in production." }
  },
  create(context) {
    return {
      MemberExpression(node: MemberExpression & { parent: any }) {
        if (node.object.type === "Identifier" && (node.object as any).name === "console") {
          const allowed = ["error", "warn"];
          const name = node.property.type === "Identifier" ? node.property.name : "";
          if (!allowed.includes(name)) {
            context.report({
              node: node as any,
              messageId: "noConsole",
              fix: fixer => fixer.remove(node.parent)
            });
          }
        }
      }
    };
  }
};
export default rule;
