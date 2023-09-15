function xpath_calendar_at_time(time)
{
    const xpath=`//tr[contains(@data-time,"${time}")]`;
    return xpath;
}
return xpath_calendar_at_time(input_time);