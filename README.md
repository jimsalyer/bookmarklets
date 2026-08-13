# Bookmarklets Collection

A collection of useful bookmarklets that can be packaged and copied to your browser's bookmarks bar for quick access to common tasks.

## What are Bookmarklets?

Bookmarklets are small JavaScript programs stored as bookmarks in your web browser. When clicked, they execute JavaScript code on the current page, allowing you to automate tasks, modify page content, or navigate to specific URLs with custom logic.

## Available Bookmarklets

### Jira - View Issue

**Location:** `jira/view-issue.js`

Quickly navigate to a Jira issue through a simple prompt. This bookmarklet:

- Prompts you to enter an issue number or key
- Validates the input format
- Automatically prefixes with a default project key if only a number is provided
- Navigates to the issue in your Jira instance

**Configuration:**

- `HOST`: Your Jira instance URL (default: `https://jira.myhost.com`)
- `DEFAULT_PROJECT`: Default project key to use when only a number is entered (default: `PROJECT`)

### Pointing Poker - Join Session

**Location:** `pointing-poker/join-session.js`

Quickly join a Pointing Poker session through a simple prompt. This bookmarklet:

- Prompts you to enter a session number
- Validates that the input is a valid session number
- Navigates to the session on Pointing Poker

**Configuration:**

- `HOST`: Pointing Poker instance URL (default: `https://pointingpoker.com`)

## Installation

Install the project dependencies:

```shell
npm i
```

## Creating Bookmarklets

To convert a JavaScript file into a bookmarklet:

```shell
npx bookmarklet source.js
```

This will output the minified bookmarklet code that you can copy and paste into a browser bookmark.

### Generate Demo HTML Page

Use the `-d` or `--demo` option to generate a demo HTML page with a clickable link:

```shell
npx bookmarklet -d jira/view-issue.js
```

## Using Bookmarklets

1. **Generate the bookmarklet code:**

   ```shell
   npx bookmarklet jira/view-issue.js
   ```

2. **Copy the output** (the minified JavaScript code starting with `javascript:`)

3. **Create a new bookmark** in your browser:

   - Right-click your bookmarks bar and select "Add page" or "Add bookmark"
   - Give it a name (e.g., "Jira - View Issue")
   - Paste the bookmarklet code into the URL/Location field
   - Save the bookmark

4. **Click the bookmark** whenever you want to use it!

## Customizing Bookmarklets

Before generating a bookmarklet, you can customize the configuration variables in each `.js` file:

1. Open the bookmarklet source file (e.g., `jira/view-issue.js`)
2. Modify the configuration constants at the top of the file:
   - For Jira: Update `HOST` to your Jira instance URL and `DEFAULT_PROJECT` to your project key
   - For Pointing Poker: Update `HOST` if using a custom instance
3. Save the file
4. Generate the bookmarklet using `npx bookmarklet <file>`

## Development

### Formatting and Linting

Check code formatting:

```shell
npm run format
```

Auto-fix formatting issues:

```shell
npm run format:fix
```

Check for linting errors:

```shell
npm run lint
```

Auto-fix linting issues:

```shell
npm run lint:fix
```

### Running Tests

Run the test suite:

```shell
npm test
```

Or use the shorthand:

```shell
npm t
```

Tests are written using Jest and validate the behavior of each bookmarklet.

## Project Structure

```
bookmarklets/
├── jira/
│   └── view-issue.js           # Jira issue navigation bookmarklet
├── pointing-poker/
│   └── join-session.js         # Pointing Poker session join bookmarklet
├── test/
│   ├── jira/
│   │   └── view-issue.test.js  # Tests for Jira bookmarklet
│   └── pointing-poker/
│       └── join-session.test.js # Tests for Pointing Poker bookmarklet
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! To add a new bookmarklet:

1. Create a new directory for your bookmarklet category (if needed)
2. Add your bookmarklet JavaScript file with the following header format:
   ```javascript
   // ==Bookmarklet==
   // @name Your Bookmarklet Name
   // @description Brief description of what it does
   // @repository https://github.com/jimsalyer/bookmarklets
   // @author Your Name
   // ==/Bookmarklet==
   ```
3. Write your bookmarklet code wrapped in an IIFE: `(() => { /* your code */ })()`
4. Add corresponding tests in the `test/` directory
5. Run tests and linting to ensure everything passes
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Jim Salyer (jim.salyer@gmail.com)

## Repository

https://github.com/jimsalyer/bookmarklets
