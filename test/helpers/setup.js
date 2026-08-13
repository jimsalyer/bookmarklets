/**
 * Sets up common test mocks for bookmarklet tests
 * @returns {Object} Object containing mock functions and cleanup
 */
function setupBookmarkletTest() {
  const defaultWindowLocation = window.location;

  const alertMock = jest.fn();
  const assignMock = jest.fn();
  const promptMock = jest.fn();

  // Setup
  delete window.location;

  window.location = {
    ...defaultWindowLocation,
    assign: assignMock,
  };

  window.alert = alertMock;
  window.prompt = promptMock;

  // Return mocks and cleanup function
  return {
    alertMock,
    assignMock,
    promptMock,
    cleanup: () => {
      window.location = defaultWindowLocation;
    },
  };
}

module.exports = { setupBookmarkletTest };
