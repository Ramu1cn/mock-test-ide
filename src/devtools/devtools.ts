/**
 * Adds Puppeteer IDE panel in devtools window.
 */
function addIDEPanel() {
  chrome.devtools.panels.create(
    'MockTest IDE',
    'devtools/idePanel/pptr.png',
    'devtools/idePanel/idePanel.html',
    () => {}
  );
}

addIDEPanel();
