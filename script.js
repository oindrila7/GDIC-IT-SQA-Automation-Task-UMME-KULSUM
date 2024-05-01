const {Builder, By, Select} = require('selenium-webdriver');

async function start() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();

        await driver.get('https://cal.green-delta.com/motor-insurance/');
        await driver.sleep(2000);

        // step a
        await driver.findElement(By.id('searchIcon')).click();
        await driver.findElement(By.name('phrase')).sendKeys('motor');
        await driver.sleep(2000);

        // step b (i)
        await driver.findElement(By.name('getMotorQuoteButton')).click();
        await driver.sleep(2000);

        await driver.executeScript("window.scrollTo(0, 0)");
        await driver.sleep(2000);

        // step b (iii)
        let dropdown1 = await driver.findElement(By.id('motorProductName'));
        let select1 = await new Select(dropdown1);
        await select1.selectByValue('Car');
        await driver.sleep(2000);

        // step b (iii)
        let dropdown2 = await driver.findElement(By.id('vehicleType'));
        let select2 = await new Select(dropdown2);
        await select2.selectByValue('Private');
        await driver.sleep(2000);

        // step b (ii)
        await driver.findElement(By.name('bikeccvalue')).sendKeys('100000');
        await driver.sleep(2000);

        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        await driver.sleep(2000);

        // step b (v)
        await driver.findElement(By.xpath('//ul[@class="footer-bottom-list"]/li/a[text()="Terms of Use"]')).click();
        await driver.sleep(2000);

        // step b (vi)
        await driver.navigate().back();
        await driver.sleep(2000);

        await driver.executeScript("window.scrollTo(0, 0)");
        await driver.sleep(2000);

        console.log('Successfully completed the actions.');
    } catch(err) {
        console.error('An error occurred:', err);
    } finally {
        await driver.quit();
    }
}

start();
