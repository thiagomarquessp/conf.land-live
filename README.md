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

Example

```ruby
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
```

Config example filhe

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
