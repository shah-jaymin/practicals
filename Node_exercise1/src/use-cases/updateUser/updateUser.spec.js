const sinon = require('sinon');
const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');

const dataAccess  = {
    updateUser: () => {},
}
let result;
const sandBox = sinon.createSandbox();
const updateUserStub = sandBox.stub(dataAccess, 'updateUser')


const test = () => {
    return updateUserStub.callsFake(details => {
        for (const key in details) {
            if(!details[key]) {
                return "false"
            }
        }

        return "true"
    });
}

Given("We have an API", () => {});

When("We provide name {string} , age {string}, userCode {string} and id {string}", (name, age, userCode, id) => {
    const updateUser = test();
    result = updateUser({name, age, userCode, id})
});

Then("We get the result {string}", (res) => {
    expect(res).to.be.equal(result);
})