module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "You have to provide jira link for skipped test",
    },
    schema: [], // no options
  },
  create: function (context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "test" && node.property.name === "skip") {
          const hasIssue = context.sourceCode
            .getCommentsBefore(node)
            .some((comment) =>
              comment.value.includes("http://jira.com/ISSUE-"),
            );
          if (!hasIssue) {
            context.report({
              node,
              message: "Provide Jira link for issue",
            });
          }
        }
      },
    };
  },
};
