# Bookmarklets Collection

A collection of browser bookmarklets that can be built and installed directly from this repository. Each bookmarklet is a small, self-contained JavaScript file that runs in your browser when you click a bookmark — no browser extension required.

## Table of Contents

- [Bookmarklets](#bookmarklets)
  - [Jira – View Issue](#jira--view-issue)
  - [Pointing Poker – Join Session](#pointing-poker--join-session)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
  - [Formatting](#formatting)
  - [Linting](#linting)
  - [Testing](#testing)
- [Building a Bookmarklet](#building-a-bookmarklet)
- [Project Structure](#project-structure)
- [License](#license)

---

## Bookmarklets

### Jira – View Issue

**File:** `jira/view-issue.js`

Prompts you for a Jira issue key and navigates directly to that issue in your Jira instance.

**Behaviour**

1. A prompt asks: *"Enter issue to view"*.
2. If the input is blank, an error is shown and nothing happens.
3. If the input is not a valid issue key (e.g. `PROJECT-123` or just `123`), an error is shown and nothing happens.
4. If only a number is entered (e.g. `42`), the configured default project key is prepended automatically (e.g. `PROJECT-42`).
5. The browser navigates to `<HOST>/browse/<ISSUE>`.

**Configuration**

Open `jira/view-issue.js` and update the constants near the top of the file before building:

| Constant | Default | Description |
|---|---|---|
| `HOST` | `https://jira.myhost.com` | Base URL of your Jira instance |
| `DEFAULT_PROJECT` | `PROJECT` | Project key prepended when only a number is entered |

---

### Pointing Poker – Join Session

**File:** `pointing-poker/join-session.js`

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

**Behaviour**

1. A prompt asks: *"Enter a session to join"*.
2. If the input is blank, an error is shown and nothing happens.
3. If the input is not a valid numeric session ID, an error is shown and nothing happens.
4. The browser navigates to `https://pointingpoker.com/<SESSION>`.

**Configuration**

Open `pointing-poker/join-session.js` and update the constant near the top of the file before building:

| Constant | Default | Description |
|---|---|---|
| `HOST` | `https://pointingpoker.com` | Base URL of the Pointing Poker service |

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

---

## Installation

Install all dependencies (including the `bookmarklet` build tool and dev tools):

```shell
npm install
```

---

## Development

### Formatting

Check formatting with [Prettier](https://prettier.io/):

```shell
npm run format
```

Auto-fix formatting issues:

```shell
npm run format:fix
```

### Linting

Check for lint errors with [ESLint](https://eslint.org/):

```shell
npm run lint
```

Auto-fix lint issues:

```shell
npm run lint:fix
```

### Testing

Run the full test suite with [Jest](https://jestjs.io/) (code coverage is collected automatically):

```shell
npm test
```

Tests live under the `test/` directory and mirror the source tree (e.g. `test/jira/view-issue.test.js` covers `jira/view-issue.js`). The project enforces a minimum of **80 %** coverage across branches, functions, lines, and statements.

---

## Building a Bookmarklet

The [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) CLI (included as a dependency) minifies and URI-encodes a source file into a `javascript:` URL that you can paste into a browser bookmark.

**Build a single bookmarklet:**

```shell
npx bookmarklet jira/view-issue.js
```

The output is a `javascript:…` string. Copy it, create a new bookmark in your browser, and paste it as the URL.

**Generate a demo HTML page** (useful for testing the bookmarklet in a browser):

```shell
npx bookmarklet --demo jira/view-issue.js
# or
npx bookmarklet -d jira/view-issue.js
```

This writes an HTML file alongside the source that contains a clickable link for the bookmarklet.

---

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js          # Jira – View Issue bookmarklet
├── pointing-poker/
│   └── join-session.js        # Pointing Poker – Join Session bookmarklet
├── test/
│   ├── jira/
│   │   └── view-issue.test.js
│   └── pointing-poker/
│       └── join-session.test.js
├── .editorconfig
├── .eslintrc.json
├── .prettierrc.json
├── jest.config.js
├── package.json
└── README.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).
