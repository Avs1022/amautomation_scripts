function option_selector(choice)
{
    // choice =[never,on]
    const xpath = `//label[@for="${choice}"]`;
    const dropdown_option = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (dropdown_option) {
        dropdown_option.click();
    }
    else {
        throw new Error(`element not found for dropdown option -> ,${week_day_name} `);
    }
}
if(option === '')
{
    return;
}
option = String(option).toLowerCase();
option_selector(option);
