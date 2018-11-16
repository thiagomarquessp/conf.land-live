# Conf-Land Live Code - Simple Test

How to install Protractor

1. Install Java

```ruby
sudo add-apt-repository ppa:webupd8team/java

sudo apt-get update

sudo apt-get install oracle-java8-installer
```

2. Install Node and Firefox & Chrome Drivers

```ruby
- curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
- sudo apt-get install jq nodejs curl -qy
- npm install -g geckodriver
- npm install -g chromedriver
```

3. Install Protractor and Execute Webdriver

```ruby
npm install -g protractor
webdriver-manager update  -- Update webdriver
webdriver-manager start -- Execute selenium server
```

Config example file

```ruby
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};
```

Execute tests

```ruby
protractor conf.js
```

API Doc

```ruby
http://www.protractortest.org/#/api?view=webdriver.By.css

References:

https://github.com/angular/protractor/blob/master/docs/tutorial.md
```
