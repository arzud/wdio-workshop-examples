import { expect } from "chai";

describe("Should verify the structure of the list", function() {
  it("Should verify the list does not contain empty activites", function() {
    browser.url("http://webdriveruniversity.com/To-Do-List/index.html");
    let activites = browser.$$("body ul li").map(element => element.getText());
    activites.forEach(activity => expect(activity.trim()).to.not.empty);
  });
  it("Should verify the title of the list is TO-DO LIST", function() {
    browser.url("http://webdriveruniversity.com/To-Do-List/index.html");
    let title = browser.$("body h1").getText();
    expect(title).to.equal("TO-DO LIST");
  });
  it("Should verify the placeholder of textbox is Add new todo", function() {
    browser.url("http://webdriveruniversity.com/To-Do-List/index.html");
    let placeholder = browser.$("body input").getAttribute("placeholder");
    expect(placeholder).to.equal("Add new todo");
  });
});
