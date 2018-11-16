// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['specs.js'],
    capabilities: {
      'browserName': 'chrome'
    },
    suites: {
      register: 'tests/e2e/register/register.js',
      validations: 'tests/e2e/validations/validations.js'
    }  
  }