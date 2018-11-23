var LoginValidations = function() {
    var nameInput = element(by.name('log'));
    var passInput  = element(by.name('pwd'));
    var loginbtn = element(by.name('submit'));
    
    global.size_username = element(by.css('input[name="log"]'));
    global.size_password = element(by.css('input[name="pwd"]'));
    global.alertPresent = protractor.ExpectedConditions;

    this.get = async function() {
      await browser.get('http://store.demoqa.com/products-page/your-account/');
    };
  
    this.setName = async function(name) {
      await nameInput.sendKeys(name);
    };

    this.setPass = async function(pass) {
      await passInput.sendKeys(pass);
    };

    this.btnLogin = async function() {
        await loginbtn.click();
    };
  };
  module.exports = new LoginValidations();