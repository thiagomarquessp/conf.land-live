// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['specs.js'],
    capabilities: {
      'browserName': 'chrome',
      chromeOptions: {
        args: [ "--headless", "--disable-gpu", '--window-size=1920,1080' ]
    }
  },
    suites: {
      register: 'tests/e2e/register/register.js',
      validations: 'tests/e2e/validations/validations.js'
    }  
  }