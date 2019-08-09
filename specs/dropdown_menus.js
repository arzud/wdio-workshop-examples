import { getRandomInclusive } from '../helpers/number';
import { expect } from 'chai';

describe('Should verify the functionality of dropdowns', function(){
    it('Should verify the desired option for each dropdown is displayed as selected', function(){
        browser.url('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        let dropdowns = browser.$$('body select[id*=dropdowm-menu]'); 
        dropdowns.forEach(dropdown => {
            let options = dropdown.$$('option');
            let desiresOptionIndex = getRandomInclusive(0, options.length -1);
            let desiresOption = options[desiresOptionIndex].getText();
            dropdown.selectByIndex(desiresOptionIndex);
            let selected = browser.execute(dropdown => dropdown.selectedOptions[0].text, dropdown);
            expect(selected).to.equal(desiresOption);
        });
    });
});