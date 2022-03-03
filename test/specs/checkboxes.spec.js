const checkboxesPage = require('../pageobjects/checkboxes.page');

describe('Checkbox page', () => {
    it('should open checkboxes page', async () => {
        await  checkboxesPage.open();
    });
});

describe('My Checkbox application', () => {
    it('should contain a heading', async () => {
        await expect(checkboxesPage.checkboxHeading).toBeExisting();
    });
});

describe('Checkbox 2', () => {
    it('should exist', async () => {
        await expect(checkboxesPage.checkbox2).toBeExisting();
    });
});

describe('Checkbox 2 click', () => {
    it('it should click the checkbox', async () => {
        await  checkboxesPage.open();
        //.click to make click
        await (checkboxesPage.checkbox2).click()
        //browser.pause makes it wait for 2 seconds
        await browser.pause(2000);
    });
});

