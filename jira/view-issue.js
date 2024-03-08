(() => {
  const HOST = 'https://jira.efleets.com';
  const DEFAULT_PROJECT = 'EDGE';

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
