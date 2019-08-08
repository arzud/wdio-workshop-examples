import { getRandomInclusive } from "../helpers/number";
import { expect } from "chai";

describe("Should verify the remove option of the list", function() {
  it("Should verify the amount of activities decreases on removal", function() {
    browser.url("http://webdriveruniversity.com/To-Do-List/index.html");
    let activities = browser.$$("body ul li");
    let removeButtons = browser.$$("body .fa-trash");
    let initialActivitiesAmount = activities.length;
    let indexOfActivityToRemove = getRandomInclusive(0, initialActivitiesAmount - 1);
    activities[indexOfActivityToRemove].moveTo();
    removeButtons[indexOfActivityToRemove].click();
    browser.pause(5000);
    activities = browser.$$("body ul li");
    let currentActivitiesAmount = activities.length;
    expect(currentActivitiesAmount).to.be.lessThan(initialActivitiesAmount);
  });
  it('Should verify the removed activity is not part of the list', function(){
    browser.url("http://webdriveruniversity.com/To-Do-List/index.html");
    let activities = browser.$$("body ul li");
    let removeButtons = browser.$$("body .fa-trash");
    let initialActivitiesAmount = activities.length;
    let indexOfActivityToRemove = getRandomInclusive(0, initialActivitiesAmount - 1);
    let labelOfActivityToRemove = activities[indexOfActivityToRemove].getText();
    activities[indexOfActivityToRemove].moveTo();
    removeButtons[indexOfActivityToRemove].click();
    browser.pause(5000);
    activities = browser.$$("body ul li");
    let activitiesLabels = activities.map(activity => activity.getText());
    expect(activitiesLabels).to.not.include(labelOfActivityToRemove);
  });
});
