# Bookmarklets Collection

A collection of browser bookmarklets that can be packaged and copied into your browser's bookmark bar. Each bookmarklet prompts for input and navigates you directly to the relevant page, saving you from manual URL construction.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Bookmarklets](#bookmarklets)
  - [Jira – View Issue](#jira--view-issue)
  - [Pointing Poker – Join Session](#pointing-poker--join-session)
- [Building a Bookmarklet](#building-a-bookmarklet)
- [Adding a Bookmarklet to Your Browser](#adding-a-bookmarklet-to-your-browser)
- [Development](#development)
  - [Formatting](#formatting)
  - [Linting](#linting)
  - [Testing](#testing)
- [License](#license)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (bundled with Node.js)

---

## Installation

Clone the repository and install dependencies:

```shell
git clone https://github.com/jimsalyer/bookmarklets.git
cd bookmarklets
npm install
```

---

## Bookmarklets

### Jira – View Issue

**Source:** [`jira/view-issue.js`](jira/view-issue.js)

Prompts you for a Jira issue key and navigates directly to that issue in your Jira instance.

**Usage:**

1. Click the bookmarklet in your browser.
2. Enter an issue key in one of the following formats:
   - `PROJECT-123` — full key including the project prefix
   - `123` — number only; the default project prefix (`PROJECT`) is prepended automatically
3. You are taken straight to `https://jira.myhost.com/browse/<issue>`.

**Customisation:**

Before building, open `jira/view-issue.js` and update the two constants at the top of the file to match your environment:

```js
const HOST = 'https://jira.myhost.com'; // ← your Jira base URL
const DEFAULT_PROJECT = 'PROJECT';       // ← your default project key
```

---

### Pointing Poker – Join Session

**Source:** [`pointing-poker/join-session.js`](pointing-poker/join-session.js)

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

**Usage:**

1. Click the bookmarklet in your browser.
2. Enter the numeric session ID (e.g. `123456`).
3. You are taken straight to `https://pointingpoker.com/<session>`.

---

## Building a Bookmarklet

Each source file is a plain, readable JavaScript file. Use the [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) CLI (included as a dependency) to minify and encode it into a `javascript:` URI that can be saved as a bookmark.

```shell
# Print the bookmarklet URI to stdout
npx bookmarklet <source-file>

# Examples
npx bookmarklet jira/view-issue.js
npx bookmarklet pointing-poker/join-session.js
```

Use the `-d` / `--demo` flag to generate a standalone HTML demo page instead. Open the page in your browser and drag the link on it straight to your bookmarks bar.

```shell
npx bookmarklet --demo jira/view-issue.js > demo.html
```

---

## Adding a Bookmarklet to Your Browser

1. **Generate the URI** using the build command above and copy the output (it starts with `javascript:`).
2. **Create a new bookmark** in your browser (most browsers let you right-click the bookmarks bar and choose *Add page…* or *Add bookmark…*).
3. **Paste the URI** into the URL / Address field of the new bookmark and give it a descriptive name.
4. Click the bookmark any time you want to use it.

> **Tip:** Using the `--demo` flag is often the easiest approach — just open the generated HTML file and drag the provided link to your bookmarks bar.

---

## Development

### Formatting

This project uses [Prettier](https://prettier.io/) for consistent code style (configured in [`.prettierrc.json`](.prettierrc.json)).

```shell
# Check formatting
npm run format

# Auto-fix formatting
npm run format:fix
```

### Linting

[ESLint](https://eslint.org/) is used for static analysis (configured in [`.eslintrc.json`](.eslintrc.json)).

```shell
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix
```

### Testing

Tests are written with [Jest](https://jestjs.io/) and run in a [jsdom](https://github.com/jsdom/jsdom) environment, which simulates the browser APIs (`window.location`, `alert`, `prompt`) that the bookmarklets rely on. Coverage is collected automatically and must meet an 80 % threshold across branches, functions, lines, and statements.

```shell
npm test
```

Test files live under the [`test/`](test/) directory and mirror the source layout:

| Source | Test |
|---|---|
| `jira/view-issue.js` | `test/jira/view-issue.test.js` |
| `pointing-poker/join-session.js` | `test/pointing-poker/join-session.test.js` |

---

## License

This project is licensed under the [MIT License](LICENSE).
