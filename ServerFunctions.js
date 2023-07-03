function doGet(){
  const html = HtmlService.createTemplateFromFile('Main');
  const output = html.evaluate();
  return output;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
