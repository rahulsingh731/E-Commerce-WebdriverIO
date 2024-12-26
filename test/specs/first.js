describe('Demo Tests', function () {
    it('My First Test', async () => {
        browser.url('https://www.google.com');
        await $('[name="q"]').setValue('webdriverio');
        await $('[name="btnK"]').click();

        await browser.pause(20000);
    });
});
