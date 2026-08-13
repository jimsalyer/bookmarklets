# Bookmarklets Collection

A collection of browser bookmarklets that can be packaged, copied, and saved directly into your browser's bookmarks bar. Each bookmarklet is written as a plain JavaScript source file, making it easy to read, customize, and test before deploying.

## Table of Contents

- [What Is a Bookmarklet?](#what-is-a-bookmarklet)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Bookmarklets](#bookmarklets)
  - [Jira – View Issue](#jira--view-issue)
  - [Pointing Poker – Join Session](#pointing-poker--join-session)
- [Development](#development)
  - [Formatting](#formatting)
  - [Linting](#linting)
  - [Testing](#testing)
  - [Building / Packaging](#building--packaging)
- [Project Structure](#project-structure)
- [License](#license)

---

## What Is a Bookmarklet?

A bookmarklet is a browser bookmark whose URL contains a small JavaScript program (prefixed with `javascript:`) instead of a web address. Clicking it runs the script in the context of the currently open page. Bookmarklets are a lightweight way to automate repetitive browser tasks without installing a browser extension.

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

## Bookmarklets

### Jira – View Issue

**Source:** [`jira/view-issue.js`](jira/view-issue.js)

Prompts you for a Jira issue key and navigates directly to that issue in your Jira instance. If you enter only a number, the configured default project key is prepended automatically (e.g. `42` → `PROJECT-42`).

#### Configuration

Open `jira/view-issue.js` and update the two constants near the top of the file:

| Constant | Default | Description |
|---|---|---|
| `HOST` | `https://jira.myhost.com` | Base URL of your Jira instance |
| `DEFAULT_PROJECT` | `PROJECT` | Project key prepended when only a number is entered |

#### Usage

1. [Build the bookmarklet](#building--packaging) from `jira/view-issue.js`.
2. Create a new bookmark in your browser and paste the generated `javascript:…` string as the URL.
3. Click the bookmark on any page, enter an issue key (e.g. `PROJECT-123` or just `123`), and you will be taken straight to that issue.

---

### Pointing Poker – Join Session

**Source:** [`pointing-poker/join-session.js`](pointing-poker/join-session.js)

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number and navigates directly to that session.

#### Configuration

Open `pointing-poker/join-session.js` and update the constant near the top of the file if needed:

| Constant | Default | Description |
|---|---|---|
| `HOST` | `https://pointingpoker.com` | Base URL of the Pointing Poker site |

#### Usage

1. [Build the bookmarklet](#building--packaging) from `pointing-poker/join-session.js`.
2. Create a new bookmark in your browser and paste the generated `javascript:…` string as the URL.
3. Click the bookmark on any page, enter the session number, and you will be taken straight to that session.

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

This project uses [ESLint](https://eslint.org/) with the `eslint:recommended` rule set and Prettier integration (configured in [`.eslintrc.json`](.eslintrc.json)).

```shell
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix
```

### Testing

Tests are written with [Jest](https://jestjs.io/) and run in a [jsdom](https://github.com/jsdom/jsdom) environment so that browser globals (`window`, `location`, `alert`, `prompt`) are available. Coverage is collected automatically and must meet the following thresholds:

| Metric | Minimum |
|---|---|
| Branches | 80 % |
| Functions | 80 % |
| Lines | 80 % |
| Statements | 80 % |

```shell
npm test
```

Test files live under the [`test/`](test/) directory and mirror the source tree (e.g. `test/jira/view-issue.test.js` covers `jira/view-issue.js`).

### Building / Packaging

The [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) CLI tool minifies a source file and wraps it in the `javascript:` URI scheme required by browsers.

```shell
# Print the bookmarklet string to stdout
npx bookmarklet <source-file>

# Example
npx bookmarklet jira/view-issue.js
```

Use the `-d` / `--demo` flag to generate a standalone HTML demo page that contains a clickable link you can drag straight to your bookmarks bar:

```shell
npx bookmarklet --demo jira/view-issue.js > demo.html
```

---

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js          # Jira – View Issue bookmarklet source
├── pointing-poker/
│   └── join-session.js        # Pointing Poker – Join Session bookmarklet source
├── test/
│   ├── jira/
│   │   └── view-issue.test.js
│   └── pointing-poker/
│       └── join-session.test.js
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .prettierignore
├── .prettierrc.json
├── jest.config.js
├── package.json
└── README.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).
