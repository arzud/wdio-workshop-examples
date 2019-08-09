import { getRandomInclusive } from "../helpers/number";
import { expect } from 'chai';

describe('Should verify the functionality of radio buttons', function(){
    it('Should verify the desired option is marked as selected', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let radioButtons = browser.$$('body #radio-buttons input[type=radio');
        let desiredOptionIndex = getRandomInclusive(0, radioButtons.length -1);
        let desiredOption = radioButtons[desiredOptionIndex].getValue();
        radioButtons[desiredOptionIndex].click();
        expect(radioButtons[desiredOptionIndex].isSelected(), `Expected desired option (${desiredOption}) to be marked as selected. Please check that it is not.`).to.be.true;
    });
});