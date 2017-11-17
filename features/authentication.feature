Feature: Authentication

  @login
  Scenario: Log in to the website
    Given I visit the homepage
     When I login with my credentials
     Then I will see the My Collection page
