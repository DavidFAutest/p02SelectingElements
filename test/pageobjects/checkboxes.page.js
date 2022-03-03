const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkboxHeading() {
        //tag name selector method
        return $('<h3 />');
    }

    get checkbox2() {
        //xPath selector method
        return $('//form/input[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();
