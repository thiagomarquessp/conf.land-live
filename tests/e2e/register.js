// spec.js
describe('Register new user', function() {
    it('Register new user with success', function() {
        var faker = require('faker');
        var name = faker.name.findName();
      browser.waitForAngularEnabled(false);
      browser.get('https://automacaocombatista.herokuapp.com/users/new');
      element(by.name('user[name]')).sendKeys(name);
      element(by.name('user[lastname]')).sendKeys('Pereira');
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
      
      browser.driver.sleep(5000);
    });
  });
  