// spec.js
global.LoginValidations = require('./validationsPage');

describe('Login form validations', function() {
  beforeAll(function() { 
    browser.waitForAngularEnabled(false);
    LoginValidations.get();
  });

  it('The username field should have a size of 20 characters', function() {
    expect(size_password.getAttribute('size')).toEqual('20');
  });

  it('The password field should have a size of 20 characters', function() {
    expect(size_password.getAttribute('size')).toEqual('20');
  });

  it('Error message when the user put invalid username', function() {
    LoginValidations.setName('erroruser');
    LoginValidations.setPass('errorpwd');
    LoginValidations.btnLogin();
    browser.wait(alertPresent.textToBePresentInElement($('form[name="loginform"] .response'), 'ERROR: Invalid username. '), 5000);
  });

  it('error message when the user put an invalid password', function() {
    element(by.name('log')).clear();
    LoginValidations.setName('test');
    LoginValidations.btnLogin();
    browser.wait(alertPresent.textToBePresentInElement($('form[name="loginform"] .response'), 'ERROR: The password you entered for the username test is incorrect.'), 5000);
  });
});
  