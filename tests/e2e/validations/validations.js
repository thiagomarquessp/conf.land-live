// spec.js
global.LoginValidations = require('./validationsPage');

describe('Login form validations', function() {
  beforeAll(function() { 
    browser.waitForAngularEnabled(false);
  });

  it('Validate the login form size', function() {
    LoginValidations.get();
    expect(size_username.getAttribute('size')).toEqual('20');
    expect(size_password.getAttribute('size')).toEqual('20');
  });

  it('Validate username error message to login', function() {
    LoginValidations.setName('erroruser');
    LoginValidations.setPass('errorpwd');
    LoginValidations.btnLogin();
    browser.wait(alertPresent.textToBePresentInElement($('.response'), 'ERROR: Invalid username. '), 5000);
  });

  it('Validate password error message to login', function() {
    element(by.name('log')).clear();
    LoginValidations.setName('test');
    LoginValidations.btnLogin();
    browser.wait(alertPresent.textToBePresentInElement($('.response'), 'ERROR: The password you entered for the username test is incorrect.'), 5000);
  });
});
  