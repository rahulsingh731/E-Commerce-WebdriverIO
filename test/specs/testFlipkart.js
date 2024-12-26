describe('Flipkart Search test', () => {
    it('Check if website is opening & Verify the title', async () => {

        await browser.url('https://www.flipkart.com/');
        await browser.maximizeWindow();
        await browser.pause(5000);
        await expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        // console.log('Title is: ' + await browser.getTitle());
        await browser.saveScreenshot('./screenshots/step-1.png');
    });
    it('Search for a product & verify if page is loaded', async () => {
        const searchBox = await $('input[name="q"]');
        const iph = await $('span.BUOuZu span');
        await searchBox.setValue('iPhone 16 pro max');  
        await browser.keys('Enter');
        await browser.pause(5000);
        await  expect(browser).toHaveTitle('IPhone 16 Pro Max- Buy Products Online at Best Price in India - All Categories | Flipkart.com');
        await expect(iph).toHaveText('iPhone 16 pro max');
        await browser.saveScreenshot('./screenshots/step-2.png');
    });
    it('Verify the product category', async () => {
        const cat = await $('a.hEjLuS');
        await expect(cat).toHaveText('Mobiles');
        await browser.saveScreenshot('./screenshots/step-3.png');
    });

    it('Select the Minimum Price filter', async () => {
        const minPrice = await $('div.suthUA select');
        await minPrice.selectByIndex(1);
        await browser.pause(5000);
        const selectedoption = await minPrice.$('option:checked');
        const selectedoptionText = await selectedoption.getText();
        await expect(selectedoptionText).toBe('₹10000');
        await browser.saveScreenshot('./screenshots/step-4.png');
    });
    it('Select the Maximum Price filter', async () => {
        const maxPrice = await $('div.tKgS7w select');
        await maxPrice.selectByIndex(1);
        await browser.pause(5000);
        const selectedoption = await maxPrice.$('option:checked');
        const selectedoptionText = await selectedoption.getText();
        await expect(selectedoptionText).toBe('₹20000');
        await browser.saveScreenshot('./screenshots/step-5.png');
    });
    it('Check if the Phone is selected & navigated to new tab', async() => {
        const phone = $('//div[contains(text(),"128 GB")]');
        await phone.click();
        await browser.pause(5000);
        const tabs = await browser.getWindowHandles();
        await browser.switchToWindow(tabs[1]);
        await browser.pause(5000);
        const textbox = $('div.Z8JjpR');
        await expect(textbox).toHaveText('Sold Out');
        await browser.saveScreenshot('./screenshots/step-6.png');
        await browser.pause(2000);
        await browser.switchToWindow(tabs[0]);
    });
    it('Check if Hover action on TVs is done', async() => {
        const tv = await $('//span[contains(text(),"TVs")]');
        const samsung = await $('//a[contains(text(),"Samsung")]');
        await tv.moveTo();
        await browser.pause(5000);
        await browser.saveScreenshot('./screenshots/step-7.png');
        browser.waitUntil(async () => {
            return await samsung.isDisplayed();
        }, 5000, 'Samsung is not displayed');
        await samsung.click();
        await browser.pause(5000);
        await expect(browser).toHaveTitle('Samsung TV Online at Best Price at Flipkart | 26-Dec-24');
        await browser.saveScreenshot('./screenshots/step-8.png');  
        
    });


});