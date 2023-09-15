// select recurrence type from donot repeat , weekly, daily
function option_selector(choice) {
    const xpath = `//span[text()="${choice}"]`;
    const dropdown_option = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (dropdown_option) {
      dropdown_option.click();
    }
    else {
      throw ('element not found for dropdown option ', choice);
    }
  }
  choice = (choice === '' ? 'Do not Repeat' : 'choice');
  option_selector(choice);
  