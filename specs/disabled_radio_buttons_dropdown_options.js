import { expect } from 'chai';

describe('Should verify the disabled options of radio buttons and dropdowns', function(){
    it('Should verify the radio button for Cabbage is disabled', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let cabbageRadioButton = browser.$('body #radio-buttons-selected-disabled input[value=cabbage]');
        expect(cabbageRadioButton.isEnabled(), 'Expected radio button for Cabbage to be disbaled. Please check that it is not').to.be.false;
    });
    it('Should verify the dropdown option for Orange is disabled', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let orangeDropdownOption = browser.$('body #fruit-selects option[value=orange]');
        expect(orangeDropdownOption.isEnabled(), 'Expected dropdown option for Orange to be disbaled. Please check that it is not').to.be.false;
    });
});