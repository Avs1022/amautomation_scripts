function option_selector(week_day_name);
{
    // week_day_name = [Mon,Tue,Wed,Thu,Fri,Sat]
    const xpath = `//button[contains(@class,"week-days") and text()="${week_day_name}"]`;
    const dropdown_option = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (dropdown_option) {
        dropdown_option.click();
    }
    else {
        throw new Error(`element not found for dropdown option -> ,${week_day_name} `);
    }
}
if (week_day_name === '') {
    return;
}
option_selector(week_day_name);