import { ResultsPage } from '../Pages/resultsPage';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export = function () {
    let results = new ResultsPage();

    this.Then(/^Google logo should be displayed$/, () => {
        return expect(results.firstResultLink.isDisplayed()).to.eventually.equal(true);
    });

}
