const sinon = require('sinon');
const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');

const dataAccess  = {
    addUser: () => {},
}
let result;
const sandBox = sinon.createSandbox();
const addUserStub = sandBox.stub(dataAccess, 'addUser')


const test = () => {
    return addUserStub.callsFake(details => {
        for (const key in details) {
            if(!details[key]) {
                return "false"
            }
        }

        return "true"
    });
}

Given("We have api", () => {});

When("we provide name {string} , age {string}, and userCode {string}", (name, age, userCode) => {
    const addUser = test();
    result = addUser({name, age, userCode})
});

Then("We get the result {string}", (res) => {
    expect(res).to.be.equal(result);
})