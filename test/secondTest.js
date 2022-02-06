const { Builder, By, Key } = require('selenium-webdriver');
//const assert = require ("assert");
var should = require('chai').should();


//describe
describe('add another todo tests', function () {
  //it block
  it('successfully adds another todo application', async function () {
    //async function example(){

    //launch the browser
    let driver = await new Builder().forBrowser('firefox').build();

    //navigate to app location
    await driver.get('https://lambdatest.github.io/sample-todo-app');

    //add a to-do
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Learn Selenium', Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using node
    //assert.strictEqual(todoText, "Learn Js");

    //assert using chai should
    todoText.should.equal('Learn Selenium');

    //close browser
    await driver.quit();

    //};
    //example()
  });
});

// //async function example(){

// //launch the browser
// let driver = await new Builder().forBrowser("firefox").build();

// //navigate to app location
// await driver.get("https://lambdatest.github.io/sample-todo-app")

// //add a to-do
// await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

// //assert
// let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
//   return value
// });

// //assert using node
// //assert.strictEqual(todoText, "Learn Js");

// //assert using chai should
// todoText.should.equal("Learn Selenium");

// //close browser
// await driver.quit();

// //};
// //example()
