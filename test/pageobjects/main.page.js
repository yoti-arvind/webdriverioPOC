const Page = require('./page');

class MainPage extends Page {
    get listExamples () { return $$('ul li') };

    open () {
        return super.open('/');
    }

}
module.exports = new MainPage();