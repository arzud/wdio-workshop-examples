import { expect } from 'chai';

describe('Should verify the functionality of checkboxes', function(){
    it('Should verify Option 3 is marked as selected by default', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let option3 = browser.$('body input[value=option-3');
        expect(option3.isSelected(), 'Expected Option 3 to be marked as selected. Please check that it is not').to.be.true;
    });

    it('Should verify that each checkbox marked as not selected can marked as selected', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let checkboxes = browser.$$('body input[type=checkbox');
        checkboxes.forEach((checkbox, index) => {
            if(!checkbox.isSelected()){
                checkbox.click();
                expect(checkbox.isSelected(), `Expected Option ${index + 1} to be marked as selected. Please check that it is not`).to.be.true;
            }
        });
    });

    it('Should verify that each checkbox marked as selected can marked as not selected', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let checkboxes = browser.$$('body input[type=checkbox');
        checkboxes.forEach((checkbox, index) => {
            if(checkbox.isSelected()){
                checkbox.click();
                expect(checkbox.isSelected(), `Expected Option ${index + 1} to be marked as not selected. Please check that it is not`).to.be.false;
            }
        });
    });
});