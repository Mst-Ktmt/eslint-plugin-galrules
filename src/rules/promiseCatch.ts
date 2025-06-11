
import type { Rule } from "eslint";
import type { AwaitExpression, CallExpression } from "estree";

function inTry(node: any): boolean {
  for (let cur = node; cur; cur = cur.parent) {
    if (cur.type === "TryStatement") return true;
  }
  return false;
}

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: { description: "Ensure promises have catch/try-catch" },
    schema: [],
    messages: { missingCatch: "Handle promise rejection via catch or try/catch." }
  },
  create(context) {
    return {
      AwaitExpression(node: AwaitExpression & { parent: any }) {
        if (!inTry(node)) {
          context.report({ node: node as any, messageId: "missingCatch" });
        }
      },
      CallExpression(node: CallExpression & { parent: any }) {
        if (node.callee.type === "MemberExpression" &&
            (node.callee.property as any).name === "then") {
          const parent = node.parent;
          if (!parent ||
              parent.type !== "CallExpression" ||
              parent.callee.type !== "MemberExpression" ||
              (parent.callee.property as any).name !== "catch") {
            context.report({ node: node as any, messageId: "missingCatch" });
          }
        }
      }
    };
  }
};
export default rule;
