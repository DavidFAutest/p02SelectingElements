const dropdownPage = require('../pageobjects/dropdown.page');

describe('My Dropdown application', () => {
    it('should click dropdown button and pause for 2 seconds', async () => {
        await dropdownPage.open();

        await expect (dropdownPage.dropdownlist).toBeExisting();
        await dropdownPage.dropdownlist.click();
        await browser.pause(2000);
    });
});