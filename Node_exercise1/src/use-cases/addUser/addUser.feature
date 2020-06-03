Feature: Adding user
  User will be added to the database

  Scenario Outline: Add User
    Given We have api
    When we provide name "<name>" , age "<age>", and userCode "<userCode>"
    Then We get the result "<result>"

  Examples:
  | name    | age | userCode | result |
  | Jaymin  | 20  | 2        | true   |
  | sarang  |     | 3        | false  |