describe('Jira - View Issue', () => {
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

  it('navigates to the Jira issue entered in the prompt', () => {
    const issue = 'test-1';

    promptMock.mockReturnValue(issue);

    require('../../jira/view-issue');

    expect(promptMock).toHaveBeenCalledWith('Enter issue to view');
    expect(assignMock).toHaveBeenCalledWith(
      `https://jira.efleets.com/browse/${issue}`,
    );
  });

  it('presents an error and returns if no issue is entered in the prompt', () => {
    promptMock.mockReturnValue('');

    require('../../jira/view-issue');

    expect(alertMock).toHaveBeenCalledWith('You must enter an issue to view.');
    expect(assignMock).not.toHaveBeenCalled();
  });

  it('presents and error and returns if an invalid issue has been entered in the prompt', () => {
    promptMock.mockReturnValue('invalid');

    require('../../jira/view-issue');

    expect(alertMock).toHaveBeenCalledWith(
      'You must enter a valid issue to view.',
    );
    expect(assignMock).not.toHaveBeenCalled();
  });

  it('prepends project portion of issue if missing', () => {
    promptMock.mockReturnValue('1');

    require('../../jira/view-issue');

    expect(assignMock).toHaveBeenCalledWith(
      `https://jira.efleets.com/browse/EDGE-1`,
    );
  });
});
