

// changing the slot count for block slot
function change_slot_count(count)
{
    const xpath='//div[@class="plus-minus-btn"]//img[@class="plus"]';
    const slot_count_incrementor=document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if(slot_count_incrementor)
    {
        count-=1;
        while(count--)
        {
          slot_count_incrementor.click();
        }
    }
    else
    {
        console.log("slot count element not found");
    }

}

// selecting the slot as all day
function click_all_day()
{
    const xpath_check_box='//body/app-root[1]/div[1]/div[1]/app-am-wrapper[1]/calendar-create[1]/div[2]/div[2]/div[2]/div[2]/label[1]/span[1]';
    const check_box = document.evaluate(xpath_check_box, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if(check_box)
    {
        check_box.click();
    }
    else
    {
        console.log("check box not found");
    }
}

all_day= JSON.parse(all_day);
if(all_day)
{
    click_all_day();
}
else
{
    count=Number(count);
    change_slot_count(count);
}