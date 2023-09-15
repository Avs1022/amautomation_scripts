// requires three parameters
// date 1-31
// month [1,2,3....12]
// year
// all three should be valid

function clickElementByXPath(xpath) {
    console.log(xpath)
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
    } else {
        console.log('Element not found.');
    }
}


function select_date(date, month, year) {
    date = Number(date);
    month = Number(month);
    year = Number(year);
    
    const xpath_month = '//div[@class="ui-datepicker-title"]//span[contains(@class,"ui-datepicker-month")]';
    const xpath_before = '//a[contains(@class,"ui-datepicker-prev")]';
    const xpath_next = '//a[contains(@class,"ui-datepicker-next")]';
    const before_button = document.evaluate(xpath_before, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    const after_button = document.evaluate(xpath_next, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    var currentDate = new Date();
    var current_day = (currentDate.getDate());
    var current_year = (currentDate.getFullYear());
    var current_month = (currentDate.getMonth()) + 1;
    
        while (current_year < year) {
            after_button.click();
            current_month++;
            if (current_month === 13) {
                current_year++;
                current_month = 1;
            }
        }
        while (current_month < month) {
            after_button.click();
            current_month++;
        }
    

    const xpath_calendar_day = `//td//descendant::a[text()="${date}"]`;
    clickElementByXPath(xpath_calendar_day);
}
select_date(13, 2, 2023);
