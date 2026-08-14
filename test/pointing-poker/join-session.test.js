import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';

describe('Pointing Poker - Join Session', () => {
  const defaultWindowLocation = window.location;

  const alertMock = jest.fn();
  const assignMock = jest.fn();
  const promptMock = jest.fn();

  beforeEach(() => {
    delete window.location;

    window.location = {
      ...defaultWindowLocation,
      assign: assignMock,
    };

    window.alert = alertMock;
    window.prompt = promptMock;
  });

  afterEach(() => {
    window.location = defaultWindowLocation;
  });

  it('navigates to the Pointing Poker session entered in the prompt', async () => {
    const session = '1234';

    promptMock.mockReturnValue(session);

    await import('../../pointing-poker/join-session.js');

    expect(promptMock).toHaveBeenCalledWith('Enter a session to join');
    expect(assignMock).toHaveBeenCalledWith(
      `https://pointingpoker.com/${session}`,
    );
  });

  it('presents an error and returns if no session is entered in the prompt', async () => {
    promptMock.mockReturnValue('');

    await import('../../pointing-poker/join-session.js');

    expect(alertMock).toHaveBeenCalledWith('You must enter a session to join.');
    expect(assignMock).not.toHaveBeenCalled();
  });

  it('presents and error and returns if an invalid session has been entered in the prompt', async () => {
    promptMock.mockReturnValue('invalid');

    await import('../../pointing-poker/join-session.js');

    expect(alertMock).toHaveBeenCalledWith(
      'You must enter a valid session number to join.',
    );
    expect(assignMock).not.toHaveBeenCalled();
  });
});
