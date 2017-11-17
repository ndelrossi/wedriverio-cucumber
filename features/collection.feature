Feature: Collection

  Background:
    Given I visit the homepage
      And I login with my credentials

  @add
  Scenario: Add a book to collection
     When I browse for the book "Cloud Atlas"
      And I select the first result
      And I add the book to my collection
     Then I will see "Cloud Atlas" in my collection
