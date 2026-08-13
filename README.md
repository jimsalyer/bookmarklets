# Bookmarklets Collection

A collection of browser bookmarklets that can be built, customised, and installed directly into your browser's bookmarks bar. Each bookmarklet is a small, self-contained JavaScript file that prompts you for input and then navigates your browser accordingly.

## Table of Contents

- [Bookmarklets](#bookmarklets)
  - [Jira – View Issue](#jira--view-issue)
  - [Pointing Poker – Join Session](#pointing-poker--join-session)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Building a Bookmarklet](#building-a-bookmarklet)
- [Formatting and Linting](#formatting-and-linting)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

---

## Bookmarklets

### Jira – View Issue

**Source:** [`jira/view-issue.js`](jira/view-issue.js)

Prompts you for a Jira issue key and navigates directly to that issue in your Jira instance.

**Usage:**

1. Click the bookmarklet in your bookmarks bar.
2. Enter an issue key in one of the following formats:
   - Full key — e.g. `PROJECT-123`
   - Number only — e.g. `123` (the configured default project key is prepended automatically)
3. Your browser navigates to `<HOST>/browse/<issue>`.

**Configurable constants** (edit before building):

| Constant          | Default                      | Description                                              |
| ----------------- | ---------------------------- | -------------------------------------------------------- |
| `HOST`            | `https://jira.myhost.com`    | Base URL of your Jira instance                           |
| `DEFAULT_PROJECT` | `PROJECT`                    | Project key prepended when only a number is entered      |

---

### Pointing Poker – Join Session

**Source:** [`pointing-poker/join-session.js`](pointing-poker/join-session.js)

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

**Usage:**

1. Click the bookmarklet in your bookmarks bar.
2. Enter a numeric session ID — e.g. `123456`.
3. Your browser navigates to `https://pointingpoker.com/<session>`.

**Configurable constants** (edit before building):

| Constant | Default                      | Description                        |
| -------- | ---------------------------- | ---------------------------------- |
| `HOST`   | `https://pointingpoker.com`  | Base URL of the Pointing Poker site |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (includes `npm`)

---

## Installation

Clone the repository and install dependencies:

```shell
git clone https://github.com/jimsalyer/bookmarklets.git
cd bookmarklets
npm install
```

---

## Configuration

Before building a bookmarklet, open its source file and update any constants at the top of the IIFE to match your environment. For example, in `jira/view-issue.js`:

```js
const HOST = 'https://jira.mycompany.com'; // ← your Jira URL
const DEFAULT_PROJECT = 'MYPROJ';          // ← your default project key
```

---

## Building a Bookmarklet

The [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) package minifies a source file and wraps it in the `javascript:` URI scheme required by browsers.

**Generate the bookmarklet URI** (printed to stdout):

```shell
npx bookmarklet <source-file>
```

Example:

```shell
npx bookmarklet jira/view-issue.js
```

Copy the output, create a new bookmark in your browser, paste the URI as the URL, and give it a memorable name.

**Generate a demo HTML page** (useful for drag-and-drop installation):

```shell
npx bookmarklet --demo <source-file>
# or
npx bookmarklet -d <source-file>
```

Example:

```shell
npx bookmarklet --demo pointing-poker/join-session.js
```

Open the generated HTML file in your browser and drag the link on the page to your bookmarks bar.

---

## Formatting and Linting

[Prettier](https://prettier.io/) is used for formatting and [ESLint](https://eslint.org/) for linting.

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run format`   | Check all files for formatting issues        |
| `npm run format:fix` | Auto-fix formatting issues                 |
| `npm run lint`     | Lint all `.js`, `.cjs`, and `.mjs` files     |
| `npm run lint:fix` | Auto-fix lint issues where possible          |

```shell
npm run format
npm run format:fix
npm run lint
npm run lint:fix
```

---

## Testing

Tests are written with [Jest](https://jestjs.io/) and run in a [jsdom](https://github.com/jsdom/jsdom) environment that simulates a browser.

```shell
npm test
```

Coverage is collected automatically. The project enforces a minimum of **80 %** coverage across branches, functions, lines, and statements.

Test files live under the `test/` directory and mirror the source tree:

| Source file                        | Test file                                   |
| ---------------------------------- | ------------------------------------------- |
| `jira/view-issue.js`               | `test/jira/view-issue.test.js`              |
| `pointing-poker/join-session.js`   | `test/pointing-poker/join-session.test.js`  |

---

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js               # Jira – View Issue bookmarklet
├── pointing-poker/
│   └── join-session.js             # Pointing Poker – Join Session bookmarklet
├── test/
│   ├── jira/
│   │   └── view-issue.test.js
│   └── pointing-poker/
│       └── join-session.test.js
├── .editorconfig                   # Editor formatting defaults
├── .eslintignore
├── .eslintrc.json                  # ESLint configuration
├── .prettierignore
├── .prettierrc.json                # Prettier configuration
├── jest.config.js                  # Jest configuration
├── package.json
└── README.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).
