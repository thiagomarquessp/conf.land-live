// conf.js
exports.config = {
    //framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['specs.js'],
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['show-fps-counter=true']
      }
    },
    suites: {
      register: 'tests/e2e/register.js',
    }  
  }