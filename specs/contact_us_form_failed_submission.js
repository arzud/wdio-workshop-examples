import { expect } from 'chai';

describe('Should verify failed submission of CONTACT US form', function(){
    it('Should attempt submission of form with all field empty', function(){
        browser.url('http://webdriveruniversity.com/Contact-Us/contactus.html');
        let submitButton = browser.$('body input[type=submit');
        let expectedErrorMessages = 'Error: all fields are required\nError: Invalid email address';
        submitButton.click();
        let errorMessages = browser.$('body');
        expect(errorMessages.getText()).to.equal(expectedErrorMessages);
    });
});