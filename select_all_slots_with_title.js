// Replace this with your desired XPath expression
const xpathExpression = `//div[@class="title" and text()="${title}"]//ancestor::div[@class="cal-event-wrapper"]//descendant::input`;

// Function to retrieve elements using XPath
function getElementsByXPath(xpath) {
  const elements = [];
  const xpathResult = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  
  let node = xpathResult.iterateNext();
  while (node) {
    elements.push(node);
    node = xpathResult.iterateNext();
  }
  
  return elements;
}

// Call the function with the XPath expression
const matchedElements = getElementsByXPath(xpathExpression);

for(let i=0;i<matchedElements.length;i++)
{
    matchedElements[i].click();
}
