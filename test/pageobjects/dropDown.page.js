const Page = require('../pageobjects/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class DropDownList extends Page {
    get selectOption() { return $('#dropdown')};
   
    open() {
        return super.open('/dropdown');
    }
}
module.exports  = new DropDownList();
