Feature: filter events by city
  Scenario: When user hasn’t searched for a city, show upcoming events from all cities
    Given I am on the events page
    When the user opens the app
    Then I should see upcoming events from all cities

  Scenario: User should see a list of suggestions when they search for a city
    Given the user is on the main page
    When the user starts typing in the city search box
    Then the user should see a list of suggested cities that match what they've typed

  Scenario: User can select a city from the suggested list
    Given the user was typing in the city search box
    And the list of suggested cities is displayed
    When the user selects a city from the list
    Then their city should be changed to that city
    And the user should receive a list of upcoming events in that city
  