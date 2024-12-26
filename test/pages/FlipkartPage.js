class FlipkartPage {
    get searchBox() { return $('input[name="q"]'); }
    get searchResult() { return $('span.BUOuZu span'); }
    get category() { return $('a.hEjLuS'); }
    get minPrice() { return $('div.suthUA select'); }
    get maxPrice() { return $('div.tKgS7w select'); }
    get phone() { return $('//div[contains(text(),"128 GB")]'); }
    get soldOutText() { return $('div.Z8JjpR'); }
    get tv() { return $('//span[contains(text(),"TVs")]'); }
    get samsung() { return $('//a[contains(text(),"Samsung")]'); }

    open() {
        browser.url('https://www.flipkart.com');
    }

    maximizeWindow() {
        browser.maximizeWindow();
    }

    pause(time) {
        browser.pause(time);
    }

    saveScreenshot(filename) {
        browser.saveScreenshot(`./screenshots/${filename}`);
    }

    async searchProduct(product) {
        await this.searchBox.setValue(product);
        await browser.keys('Enter');
    }

    getSearchResult() {
        return this.searchResult;
    }

    getCategory() {
        return this.category;
    }

    async selectMinPrice(index) {
        await this.minPrice.selectByIndex(index);
    }

    getSelectedMinPrice() {
        return this.minPrice.$('option:checked').getText();
    }

    async selectMaxPrice(index) {
        await this.maxPrice.selectByIndex(index);
    }

    getSelectedMaxPrice() {
        return this.maxPrice.$('option:checked').getText();
    }

    async selectPhone() {
        await this.phone.click();
    }

    async switchToNewTab() {
        const tabs = await browser.getWindowHandles();
        await browser.switchToWindow(tabs[1]);
    }

    async switchToMainTab() {
        const tabs = await browser.getWindowHandles();
        await browser.switchToWindow(tabs[0]);
    }

    getSoldOutText() {
        return this.soldOutText;
    }

    async hoverOnTVs() {
        await this.tv.moveTo();
    }

    async waitForSamsung() {
        await browser.waitUntil(async () => {
            return await this.samsung.isDisplayed();
        }, 5000, 'Samsung is not displayed');
    }

    async clickSamsung() {
        await this.samsung.click();
    }
}

module.exports = new FlipkartPage();
