Feature: Updating user
  User will be updated in the database

  Scenario Outline: Update User
    Given We have an API
    When We provide name "<name>" , age "<age>", userCode "<userCode>" and id "<id>"
    Then We get the result "<result>"

  Examples:
  | name    | age | userCode | id | result |
  | Jaymin  | 20  | USER2    | 2  | true   |
  | Sarang  |     | USER3    | 3  | false  |