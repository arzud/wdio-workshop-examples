import { expect } from 'chai';

describe('Should verify success submission of CONTACT US form', function(){
    it('Should attempt submission of form with all field filled', function(){
        browser.url('http://webdriveruniversity.com/Contact-Us/contactus.html');
        let testInputForTextFields = 'Test';
        let testInputForEmailAddressFields = 'test@test.com';
        let expectedSuccessMessage = 'Thank You for your Message!';
        let firstNameField = browser.$('body input[name=first_name]');
        let lastNameField = browser.$('body input[name=last_name]');
        let emailAddressField = browser.$('body input[name=email]');
        let commentsField = browser.$('body textarea[name=message]');
        let submitButton = browser.$('body input[type=submit');
        firstNameField.setValue(testInputForTextFields);
        lastNameField.setValue(testInputForTextFields);
        emailAddressField.setValue(testInputForEmailAddressFields);
        commentsField.setValue(testInputForTextFields);
        submitButton.click();
        let successMessage = browser.$('body #contact_reply h1');
        expect(successMessage.getText()).to.equal(expectedSuccessMessage);
    });
});