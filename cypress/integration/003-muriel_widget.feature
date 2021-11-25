Feature: Muriel's widget
    As Muriel
    I would like to show a counter widget
    As an example of how to add widgets

    Background: go home
        Given I go home
        And this feature is about "muriels-widget"

    Scenario: Initial layout of the widget
        Then the widget heading is "Muriel's Widget"
        And the widget counter displays 0
        And the widget contains
            | selector | content |
            | button   | +       |
            | button   | -       |

    Scenario: The plus button should increment the counter
        When I press the widget "+" button 2 times
        Then the widget counter displays 2

    Scenario: The plus button should decrement the counter
        When I press the widget "+" button 4 times
        And I press the widget "-" button 1 times
        Then the widget counter displays 3
