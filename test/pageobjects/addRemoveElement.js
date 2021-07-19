const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class AddRemoveElemetsPage extends Page {
    get addElement() { return $('//*[@id="content"]/div/button') }
    get deleteElement() { return $('//*[@id="content"]/div/div/button') }

    open () {
        return super.open('/add_remove_elements/');
    }
}

module.exports = new AddRemoveElemetsPage();