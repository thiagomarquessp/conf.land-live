// spec.js
describe('Register new user', function() {
    beforeAll(function() { 
      browser.waitForAngularEnabled(false);
      browser.get('https://automacaocombatista.herokuapp.com/users/new');
    });
    
    it('Validate if elements are present', function() {
      var firstName = element(by.name('user[name]'));
      var lastName = element(by.name('user[lastname]'));
      var userAddress = element(by.name('user[address]'));
      var userUniversity = element(by.name('user[university]'));
      var userProfile = element(by.name('user[profile]'));
      var userGender = element(by.name('user[gender]'));
      var userAge = element(by.name('user[age]'));
      var registerBtn = element(by.name('commit'));
      var backBtn = element(by.css('.waves-light'));
      
      expect(firstName.isPresent()).toBe(true);
      expect(lastName.isPresent()).toBe(true);
      expect(userAddress.isPresent()).toBe(true);
      expect(userUniversity.isPresent()).toBe(true);
      expect(userProfile.isPresent()).toBe(true);
      expect(userGender.isPresent()).toBe(true);
      expect(userAge.isPresent()).toBe(true);
      expect(registerBtn.isPresent()).toBe(true);
      expect(backBtn.isPresent()).toBe(true);
    });

    it('Validate buutton colors', function() {
      var btnRegister = element(by.css('.btn.green'))
      var btnBack = element(by.css('.btn.red'))
      expect(btnRegister.getCssValue('background-color')).toEqual("rgba(76, 175, 80, 1)");
      expect(btnBack.getCssValue('background-color')).toEqual("rgba(244, 67, 54, 1)");
    }); 


    it('Name error messages', function() {
      element(by.name('user[email]')).sendKeys('thiagomp@gmail.com')
      element(by.name('commit')).click();

      var nameErrorMessage = element(by.css('#error_explanation li'));
      expect(nameErrorMessage.getText()).toEqual('Name translation missing: pt-BR.activerecord.errors.models.user.attributes.name.blank');
    });

    it('Invalid Email error messages', function() {
      element(by.name('user[name]')).sendKeys('Thiago');
      element(by.name('user[email]')).clear();
      element(by.name('user[email]')).sendKeys('thiagomp')
      element(by.name('commit')).click();

      var nameErrorMessage = element(by.css('#error_explanation li'));
      expect(nameErrorMessage.getText()).toEqual('Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid');
    });


    it('Register new user with success', function() {
      element(by.name('user[lastname]')).sendKeys('Pereira');
      element(by.name('user[email]')).clear();
      element(by.name('user[email]')).sendKeys('thiagomp@gmail.com')
      element(by.name('user[address]')).sendKeys('Rua Test')
      element(by.name('user[university]')).sendKeys('Lisboa Teste')
      element(by.name('user[profile]')).sendKeys('Teste')
      element(by.name('user[gender]')).sendKeys('Testete')
      element(by.name('user[age]')).sendKeys('12')
      element(by.name('commit')).click();

      var success = element(by.css('.light-green'));
      expect(success.getText()).toEqual('Usuário Criado com sucesso');

      element.all(by.css('.col.s12.center p')).then(function(items) {
        expect(items.length).toBe(8);
        expect(items[0].getText()).toBe('Nome: Thiago');
      });
    });
  });
  