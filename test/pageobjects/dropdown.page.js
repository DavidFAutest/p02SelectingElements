//fix dropdown test

const Page = require('./page');

class dropdownPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdownlist() {
        return $('#dropdown');
    }
    open() {
        return super.open('dropdown');
    }
}

    module.exports = new dropdownPage();