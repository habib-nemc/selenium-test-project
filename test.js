const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
async function runTest(){
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    driver.get("https://demo.evershop.io/");
    await driver.manage().window().fullscreen();
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("nike", Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//span[contains(text(), 'Nike react phantom run flyknit 2')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'S')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'Black')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@name=('qty')]")).clear();
    await driver.findElement(By.xpath("//input[@name=('qty')]")).sendKeys(2);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//span[contains(text(), 'ADD TO CART')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[contains(text(), 'VIEW CART') and @href='/cart']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='/checkout']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('note')).sendKeys("Please check well before deliver");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//span[contains(text(), 'Save')]")).click();
    await driver.sleep(5000);

    driver.quit();
    
}
runTest();


























































