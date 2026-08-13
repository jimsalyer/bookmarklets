# Bookmarklets Collection

A collection of browser bookmarklets that can be packaged and copied into your browser. Each bookmarklet prompts for input and navigates you directly to the relevant page, saving you time on repetitive navigation tasks.

## Table of Contents

- [Overview](#overview)
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
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

Bookmarklets are small JavaScript programs stored as the URL of a browser bookmark. Clicking the bookmark runs the script on the current page. This project provides source files for several bookmarklets along with a build step (powered by the [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) npm package) that minifies and URI-encodes each source file into a ready-to-use `javascript:` URL.

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

**Source:** `jira/view-issue.js`

Prompts you for a Jira issue key and navigates directly to that issue in your Jira instance.

**Usage:**

1. Click the bookmarklet from any page.
2. Enter an issue key in one of the following formats:
   - Full key — e.g. `PROJECT-123`
   - Number only — e.g. `123` (the configured default project key is prepended automatically)
3. You are taken straight to `https://jira.myhost.com/browse/<issue>`.

**Customisation:**

Open `jira/view-issue.js` and update the two constants near the top of the file:

```js
const HOST = 'https://jira.myhost.com'; // ← your Jira base URL
const DEFAULT_PROJECT = 'PROJECT';       // ← your default project key
```

---

### Pointing Poker – Join Session

**Source:** `pointing-poker/join-session.js`

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

**Usage:**

1. Click the bookmarklet from any page.
2. Enter the numeric session ID (e.g. `987654`).
3. You are taken straight to `https://pointingpoker.com/<session>`.

---

## Building a Bookmarklet

Use the `bookmarklet` CLI (included as a dependency) to convert a source file into a minified, URI-encoded `javascript:` URL:

```shell
npx bookmarklet <source-file>
```

**Examples:**

```shell
npx bookmarklet jira/view-issue.js
npx bookmarklet pointing-poker/join-session.js
```

The command prints the `javascript:` URL to stdout. Copy the entire output (including the `javascript:` prefix) and use it as the URL of a new browser bookmark.

### Generating a Demo Page

Pass the `-d` or `--demo` flag to generate a standalone HTML page containing a clickable link you can use to test the bookmarklet before adding it to your browser:

```shell
npx bookmarklet --demo jira/view-issue.js
npx bookmarklet --demo pointing-poker/join-session.js
```

---

## Adding a Bookmarklet to Your Browser

1. Build the bookmarklet and copy the full `javascript:` URL output.
2. Open your browser's bookmark manager.
3. Create a new bookmark:
   - **Name:** anything descriptive (e.g. *Jira – View Issue*)
   - **URL:** paste the `javascript:` URL you copied in step 1.
4. Save the bookmark. Optionally drag it to your bookmarks toolbar for one-click access.

> **Tip:** Most browsers also let you drag a link directly from a demo page (generated with `--demo`) onto the bookmarks toolbar.

---

## Development

### Formatting

This project uses [Prettier](https://prettier.io/) with single quotes (configured in `.prettierrc.json`).

| Command | Description |
|---|---|
| `npm run format` | Check all files for formatting issues |
| `npm run format:fix` | Auto-fix formatting issues in place |

### Linting

This project uses [ESLint](https://eslint.org/) with the `eslint:recommended` ruleset and Prettier integration (configured in `.eslintrc.json`).

| Command | Description |
|---|---|
| `npm run lint` | Lint all `.js`, `.cjs`, and `.mjs` files |
| `npm run lint:fix` | Auto-fix lint issues where possible |

### Testing

Tests are written with [Jest](https://jestjs.io/) and run in a [jsdom](https://github.com/jsdom/jsdom) environment, which simulates the browser globals (`window.location`, `alert`, `prompt`) that the bookmarklets rely on. Code coverage is collected automatically and must meet an **80 %** threshold across branches, functions, lines, and statements.

```shell
npm test
```

Test files live under the `test/` directory and mirror the source layout:

| Source | Test |
|---|---|
| `jira/view-issue.js` | `test/jira/view-issue.test.js` |
| `pointing-poker/join-session.js` | `test/pointing-poker/join-session.test.js` |

---

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js               # Jira – View Issue bookmarklet source
├── pointing-poker/
│   └── join-session.js             # Pointing Poker – Join Session bookmarklet source
├── test/
│   ├── jira/
│   │   └── view-issue.test.js      # Tests for Jira – View Issue
│   └── pointing-poker/
│       └── join-session.test.js    # Tests for Pointing Poker – Join Session
├── .editorconfig                   # Editor formatting defaults
├── .eslintignore                   # Files excluded from ESLint
├── .eslintrc.json                  # ESLint configuration
├── .prettierignore                 # Files excluded from Prettier
├── .prettierrc.json                # Prettier configuration
├── jest.config.js                  # Jest configuration
├── package.json                    # Project metadata and npm scripts
└── README.md                       # This file
```

---

## License

This project is licensed under the [MIT License](LICENSE).
