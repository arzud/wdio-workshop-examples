import { expect } from 'chai';

describe('Should verify the add option of the list', function(){
    it('Should verify the amount of activities increases on addition', function(){
        browser.url('http://webdriveruniversity.com/To-Do-List/index.html');
        let activities = browser.$$('body ul li');
        let addActivityTextbox = browser.$('body input');
        let initialActivitiesAmount = activities.length;
        addActivityTextbox.setValue('Go to the QA Test Automation workshop');
        browser.keys('Enter');
        activities = browser.$$('body ul li');
        let currentActivitiesAmount = activities.length;
        expect(currentActivitiesAmount).to.be.greaterThan(initialActivitiesAmount);
    });
    it('Should verify the added activity is part of the list', function(){
        browser.url('http://webdriveruniversity.com/To-Do-List/index.html');
        let activities = browser.$$('body ul li');
        let addActivityTextbox = browser.$('body input');
        let addedActivity = 'Go to the QA Test Automation workshop';
        addActivityTextbox.setValue(addedActivity);
        browser.keys('Enter');
        activities = browser.$$('body ul li');
        let activitiesLabels = activities.map(activity => activity.getText());
        expect(activitiesLabels).to.include(addedActivity);
    });
});