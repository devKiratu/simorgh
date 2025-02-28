# Coding standards: General

## Avoid disabling ESLint rules

ESLint is a tool enables that you to enforce a set of style, formatting, and coding standards for your codebase. It looks at your code, and tells you when you're not following the coding standards that have been setup and can also find problems before you even run the application.

It’s possible to disable specific ESLint rules with a code comment e.g `/* eslint-disable-next-line react/no-danger */`. This example refers to use of React’s `dangerouslySetInnerHTML` prop which is a common source of application vulnerabilities.

We should avoid disabling ESLint rules because these rules are normally in place for a good reason.

If there is a rule that you think is not relevant then review the ESLint rule with the team and raise a PR to disable it globally. Disabling rules in individual files should be considered a last resort.
