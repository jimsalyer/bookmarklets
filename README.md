# Bookmarklets Collection

A collection of browser bookmarklets that can be built and copied into your browser. Each bookmarklet prompts for input and navigates you to the appropriate URL, saving you time on repetitive browser tasks.

## Table of Contents

- [What Is a Bookmarklet?](#what-is-a-bookmarklet)
- [Bookmarklets](#bookmarklets)
  - [Jira – View Issue](#jira--view-issue)
  - [Pointing Poker – Join Session](#pointing-poker--join-session)
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Customization](#customization)
- [Building a Bookmarklet](#building-a-bookmarklet)
- [Adding a Bookmarklet to Your Browser](#adding-a-bookmarklet-to-your-browser)
- [Formatting and Linting](#formatting-and-linting)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [License](#license)

---

## What Is a Bookmarklet?

A bookmarklet is a browser bookmark that runs a small JavaScript program instead of navigating to a URL. When you click it, it executes code in the context of the current page — or, in this case, opens a prompt and navigates you somewhere new. They require no browser extension and work in every modern browser.

---

## Bookmarklets

### Jira – View Issue

**Source:** [`jira/view-issue.js`](jira/view-issue.js)

Prompts you for a Jira issue key and navigates directly to that issue.

| Prompt input | Behavior |
|---|---|
| `PROJECT-123` | Navigates to `https://jira.myhost.com/browse/PROJECT-123` |
| `123` | Prepends the default project key → navigates to `https://jira.myhost.com/browse/PROJECT-123` |
| Empty or invalid | Shows an error alert and does nothing |

> **Before building**, open `jira/view-issue.js` and update the two constants at the top of the file to match your environment:
>
> ```js
> const HOST = 'https://jira.myhost.com'; // ← your Jira base URL
> const DEFAULT_PROJECT = 'PROJECT';       // ← your default project key
> ```

---

### Pointing Poker – Join Session

**Source:** [`pointing-poker/join-session.js`](pointing-poker/join-session.js)

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

| Prompt input | Behavior |
|---|---|
| `1234` | Navigates to `https://pointingpoker.com/1234` |
| Empty or non-numeric | Shows an error alert and does nothing |

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```shell
git clone https://github.com/jimsalyer/bookmarklets.git
cd bookmarklets
npm install
```

---

## Customization

Each bookmarklet source file contains constants near the top that control its behavior (host URL, default project key, etc.). Edit those values before building so the generated bookmarklet points at the right place.

---

## Building a Bookmarklet

The [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) package (included as a dependency) minifies and encodes a source file into a `javascript:` URI that you can paste directly into a browser bookmark.

```shell
# Print the bookmarklet URI to stdout
npx bookmarklet jira/view-issue.js

# Generate a demo HTML page you can open in a browser
npx bookmarklet --demo jira/view-issue.js
```

Replace `jira/view-issue.js` with the path to any bookmarklet source file.

The `-d` / `--demo` flag produces an HTML file with a clickable link so you can test the bookmarklet before installing it.

---

## Adding a Bookmarklet to Your Browser

1. Build the bookmarklet and copy the full `javascript:...` URI that is printed to your terminal.
2. Open your browser's bookmark manager (or simply show the bookmarks bar).
3. Create a new bookmark:
   - **Name:** anything you like (e.g. *Jira – View Issue*)
   - **URL:** paste the `javascript:` URI you copied in step 1.
4. Click the bookmark at any time to run it.

---

## Formatting and Linting

[Prettier](https://prettier.io/) is used for formatting and [ESLint](https://eslint.org/) for linting.

```shell
# Check formatting
npm run format

# Auto-fix formatting
npm run format:fix

# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix
```

---

## Running Tests

Tests are written with [Jest](https://jestjs.io/) and run in a simulated browser environment via `jest-environment-jsdom`. Coverage is collected automatically and must meet an 80 % threshold across branches, functions, lines, and statements.

```shell
npm test
```

Test files live under the [`test/`](test/) directory and mirror the source tree (e.g. `test/jira/view-issue.test.js` tests `jira/view-issue.js`).

---

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js              # Jira – View Issue bookmarklet source
├── pointing-poker/
│   └── join-session.js            # Pointing Poker – Join Session bookmarklet source
├── test/
│   ├── jira/
│   │   └── view-issue.test.js     # Tests for Jira – View Issue
│   └── pointing-poker/
│       └── join-session.test.js   # Tests for Pointing Poker – Join Session
├── .editorconfig                  # Editor formatting rules
├── .eslintignore
├── .eslintrc.json                 # ESLint configuration
├── .prettierignore
├── .prettierrc.json               # Prettier configuration
├── jest.config.js                 # Jest configuration
├── package.json
└── README.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).
