Feature: Deleting user
  User will be deleted from the database

  Scenario Outline: Delete User
    Given We have an API
    When We provide id "<id>"
    Then We get the result "<result>"

  Examples:
  | id | result |
  | 1  | true   |
  |    | false  |