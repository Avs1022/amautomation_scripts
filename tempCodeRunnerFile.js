//week_day
const next_week_xpath='/html[1]/body[1]/app-root[1]/div[1]/div[1]/app-am-wrapper[1]/main[1]/date-navigation[1]/div[1]/div[4]';
const xpath_calendar_week='//div[@class="week-days"]//descendant::div[@class="day-name"]';

var currentDate = new Date();
var currentDay = currentDate.getDay();
var tomorrowDate= currentDate;
// Array of weekday names
var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var currentWeekdayName = weekdays[currentDay];
tomorrowDate.setDate(currentDate.getDate() + 1);
var tomorrowWeekdayName = weekdays[tomorrowDate.getDay()];
console.log(tomorrowWeekdayName);
var next_week_button= document.evaluate(next_week_xpath, document, null, XPathResult.ANY_TYPE, null);

if(currentWeekdayName === "Sun")
{
    next_week_button.click();
}

while(true)
{
    var elements = document.evaluate('//div[@class="week-days"]//descendant::div[@class="day-name"]', document, null, XPathResult.ANY_TYPE, null);
    var element = elements.iterateNext();
    if(element.textContent === tomorrowWeekdayName)
    {
        break;
    }
}
