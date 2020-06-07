const sinon = require('sinon');
const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');

const makeGetUser = require('./getUser');

const dataAccess  = {
    getUser: () => {},
}
let result;
const sandBox = sinon.createSandbox();
const getUserStub = sandBox.stub(dataAccess, 'getUser')


/*const test = () => {
    return getUserStub.callsFake(details => {
        for (const key in details) {
            if(!details[key]) {
                return "false"
            }
        }

        return "true"
    });
}*/

getUserStub.callsFake(details => {
    for (const key in details) {
        if(!details[key]) {
            return "false"
        }
    }

    return "true"
});

Given("We have an API", () => {});

When("We provide id {string}", async (id) => {
    const getUser = makeGetUser({
        dataAccess: dataAccess,
    });
    result = await getUser({id});
});

Then("We get the result {string}", (res) => {
    expect(res).to.be.equal(result);
});