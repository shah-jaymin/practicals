const sinon = require('sinon');
const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');

const dataAccess  = {
    deleteUser: () => {},
}
let result;
const sandBox = sinon.createSandbox();
const deleteUserStub = sandBox.stub(dataAccess, 'deleteUser')


const test = () => {
    return deleteUserStub.callsFake(details => {
        for (const key in details) {
            if(!details[key]) {
                return "false"
            }
        }

        return "true"
    });
}

Given("We have an API", () => {});

When("We provide id {string}", (id) => {
    const deleteUser = test();
    result = deleteUser({id})
});

Then("We get the result {string}", (res) => {
    expect(res).to.be.equal(result);
});