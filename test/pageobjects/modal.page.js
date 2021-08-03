const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class ModalPage extends Page {
    get ModalTitle () { return  $("//*[contains(text(),'This is a modal window')]") };
    get closeLink () { return $("//*[contains(text(),'click here')]") };
    get RetryLink () { return $("//*[@id='content']/div[1]/p[3]/a") };

    open() {
        return super.open('/entry_ad');
    }
}

module.exports = new ModalPage();