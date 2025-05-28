Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default
    Given the user is viewing the events list
    When the events are loaded
    Then all event details should be hidden
    And only event titles should be visible

  Scenario: User can expand an event to see details
    Given the user is viewing the events list
    And an event is collapsed
    When the user clicks on "show details" button for an event
    Then the event details should be displayed

  Scenario: User can collapse an event to hide details
    Given the user is viewing the events list
    And an event is expanded showing its details
    When the user clicks on "hide details" button for the event
    Then the event details should be hidden