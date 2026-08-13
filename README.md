# Bookmarklets Collection

A collection of browser bookmarklets that can be packaged and copied into your
browser's bookmark bar. Each bookmarklet prompts you for input and then
navigates you to the appropriate URL — no extensions required.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

## Installation

```shell
npm install
```

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js          # Jira - View Issue bookmarklet
├── pointing-poker/
│   └── join-session.js        # Pointing Poker - Join Session bookmarklet
└── test/
    ├── jira/
    │   └── view-issue.test.js
    └── pointing-poker/
        └── join-session.test.js
```

## Bookmarklets

### Jira – View Issue (`jira/view-issue.js`)

Prompts you for a Jira issue key and navigates directly to that issue.

**Configuration** — edit the constants at the top of the file before packaging:

| Constant          | Default                      | Description                                              |
| ----------------- | ---------------------------- | -------------------------------------------------------- |
| `HOST`            | `https://jira.myhost.com`    | Base URL of your Jira instance                           |
| `DEFAULT_PROJECT` | `PROJECT`                    | Project key prepended when only a number is entered      |

**Usage** — once installed as a bookmarklet, clicking it will:

1. Prompt you to enter an issue (e.g. `PROJECT-123` or just `123`).
2. Navigate to `<HOST>/browse/<issue>`.

---

### Pointing Poker – Join Session (`pointing-poker/join-session.js`)

Prompts you for a [Pointing Poker](https://pointingpoker.com) session number
and navigates directly to that session.

**Configuration** — edit the constant at the top of the file before packaging:

| Constant | Default                    | Description                        |
| -------- | -------------------------- | ---------------------------------- |
| `HOST`   | `https://pointingpoker.com`| Base URL of the Pointing Poker site |

**Usage** — once installed as a bookmarklet, clicking it will:

1. Prompt you to enter a session number (e.g. `1234`).
2. Navigate to `<HOST>/<session>`.

---

## Formatting and Linting

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

## Running Tests

Tests are run with [Jest](https://jestjs.io/) in a jsdom environment. A
minimum of 80 % coverage is enforced across branches, functions, lines, and
statements.

```shell
npm test
```

## Creating Bookmarklets

Use the [`bookmarklet`](https://www.npmjs.com/package/bookmarklet) CLI to
minify and encode a source file into a `javascript:` URI that can be saved as a
browser bookmark.

```shell
# Package a bookmarklet and print the javascript: URI
npx bookmarklet jira/view-issue.js
npx bookmarklet pointing-poker/join-session.js
```

Use the `-d` / `--demo` flag to generate a demo HTML page with a clickable
link you can drag straight into your browser's bookmark bar:

```shell
npx bookmarklet --demo jira/view-issue.js
npx bookmarklet --demo pointing-poker/join-session.js
```

## License

This project is licensed under the [MIT License](LICENSE).
