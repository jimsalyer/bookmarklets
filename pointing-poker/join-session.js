// ==Bookmarklet==
// @name Pointing Poker - Join Session
// @description Join a Pointing Poker session through a simple prompt.
// @repository https://github.com/jimsalyer/bookmarklets
// @author Jim Salyer
// ==/Bookmarklet==

(() => {
  const HOST = 'https://pointingpoker.com';

  let session = prompt('Enter a session to join');
  if (!session) {
    alert('You must enter a session to join.');
    return;
  }

  session = session.trim();
  if (!/^\d+$/.test(session)) {
    alert('You must enter a valid session number to join.');
    return;
  }

  location.assign(`${HOST}/${session}`);
})();
