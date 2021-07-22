const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class DragDropPage extends Page {
    get dragA() { return $('#column-a') };
    get dragB() { return $('#column-b') };

    open () {
        return super.open('/drag_and_drop');
    }
}

module.exports = new DragDropPage();