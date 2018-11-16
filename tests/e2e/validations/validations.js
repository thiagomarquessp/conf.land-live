// spec.js
describe('Create Account validations', function() {
    it('Validate the alert with display none', function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://automationpractice.com');
      element(by.css('.login')).click();
      
      var alert = element(by.css('.alert-danger'));
      expect(alert.getAttribute('style')).toEqual('display: none;');
      element(by.css('button#SubmitCreate')).click();

    });

    it('Validate the message and element is present at moment of submit create account button', function() {
      var alertPresent = protractor.ExpectedConditions;
      browser.wait(alertPresent.textToBePresentInElement($('.alert-danger li'), 'Invalid email address.'), 5000);

    });
  });
  