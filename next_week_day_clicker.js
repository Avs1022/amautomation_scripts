// it recieves the no of days ->x
// such that it will bring that date to the first position in calendar

const next_week_xpath = '/html[1]/body[1]/app-root[1]/div[1]/div[1]/app-am-wrapper[1]/main[1]/date-navigation[1]/div[1]/div[4]';
const xpath_calendar_week = '//div[@class="week-days"]//descendant::div[@class="day-name"]';

var currentDate = new Date();
var currentDay = currentDate.getDay();

var key_hit_to_bring_at_first_place = currentDay;

var next_week_button = document.evaluate(next_week_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (next_week_button) {
    console.log('button found');
}
else
{
    console.log('next week button not found');
}
for(let i=0;i<key_hit_to_bring_at_first_place + no_of_days;i++)
{
    next_week_button.click();
}