const { setupBookmarkletTest } = require('../helpers/setup');

describe('Pointing Poker - Join Session', () => {
  let alertMock, assignMock, promptMock, cleanup;

  beforeEach(() => {
    const setup = setupBookmarkletTest();
    alertMock = setup.alertMock;
    assignMock = setup.assignMock;
    promptMock = setup.promptMock;
    cleanup = setup.cleanup;
  });

  afterEach(() => {
    cleanup();
  });

  it('navigates to the Pointing Poker session entered in the prompt', () => {
    const session = '1234';

    promptMock.mockReturnValue(session);

    require('../../pointing-poker/join-session');

    expect(promptMock).toHaveBeenCalledWith('Enter a session to join');
    expect(assignMock).toHaveBeenCalledWith(
      `https://pointingpoker.com/${session}`,
    );
  });

  it('presents an error and returns if no session is entered in the prompt', () => {
    promptMock.mockReturnValue('');

    require('../../pointing-poker/join-session');

    expect(alertMock).toHaveBeenCalledWith('You must enter a session to join.');
    expect(assignMock).not.toHaveBeenCalled();
  });

  it('presents and error and returns if an invalid session has been entered in the prompt', () => {
    promptMock.mockReturnValue('invalid');

    require('../../pointing-poker/join-session');

    expect(alertMock).toHaveBeenCalledWith(
      'You must enter a valid session number to join.',
    );
    expect(assignMock).not.toHaveBeenCalled();
  });
});
