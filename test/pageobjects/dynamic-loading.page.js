const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class DynamicLoadingPage extends Page {
    get btnStart() { return $('#start button') }
    get textFinish() { return $('#finish h4') }
    get elementLoading() { return $('#loading') }

    open () {
        return super.open('/dynamic_loading/1');
    }
}

module.exports = new DynamicLoadingPage();