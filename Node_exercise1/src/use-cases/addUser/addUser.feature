Feature: Adding user
  User will be added to the database

  Scenario Outline: Add User
    Given We have an API
    When We provide name "<name>" , age "<age>", and userCode "<userCode>"
    Then We get the result "<result>"

  Examples:
  | name    | age | userCode | result |
  | Jaymin  | 20  | USER2    | true   |
  | Sarang  |     | USER3    | false  |