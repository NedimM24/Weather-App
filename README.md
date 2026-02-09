# Webpack-ESLint-Prettier-Template

- ESLint
My ESLint is not configured for react or vue.js

You can run ESLint on any file or directory like this:
npx eslint yourfile.js 

Rules
{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},

  - Prettier
First install locally
npm install --save-dev --save-exact prettier

Next create an empty config file. Lets editor and other tools know that you're using Prettier. 
node --eval "fs.writeFileSync('.prettierrc','{}\n')"

Next create .prettierignore file. Let's editors know what files not to format. 
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"


- Using Prettier
const badCode="yuck! //Save

npx prettier . --write
const badCode = "yuck!"; //Prettier format



If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

npx prettier . --check

--check is like --write, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.

ESLint. (n.d.). Getting started. ESLint. Retrieved January 30, 2026, from https://eslint.org/docs/latest/use/getting-started

Prettier. (n.d.). Installation. Prettier. Retrieved January 30, 2026, from https://prettier.io/docs/install.html

