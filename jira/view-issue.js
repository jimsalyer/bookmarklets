// ==Bookmarklet==
// @name Jira - View Issue
// @description Browse to a Jira issue through a simple prompt.
// @repository https://github.com/jimsalyer/bookmarklets
// @author Jim Salyer
// ==/Bookmarklet==

(() => {
  const HOST = 'https://jira.myhost.com';
  const DEFAULT_PROJECT = 'PROJECT';

  let issue = prompt('Enter issue to view');
  if (!issue) {
    alert('You must enter an issue to view.');
    return;
  }

  issue = issue.trim();
  if (!/^([a-z]+-)?\d+$/i.test(issue)) {
    alert('You must enter a valid issue to view.');
    return;
  }

  if (/^\d+$/.test(issue)) {
    issue = `${DEFAULT_PROJECT}-${issue}`;
  }

  location.assign(`${HOST}/browse/${issue}`);
})();
