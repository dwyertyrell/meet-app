Feature: Specify Number of Events
  Scenario: When user hasn't specified a number, 32 events are shown by default
    Given the user hasn't changed any event settings
    When the user opens the events list
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user is viewing the events list
    When the user selects to show a different number of events
    Then the specified number of events should be displayed