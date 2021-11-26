Feature: A scientific calculator
    As a person of limited intellectual ability
    I want to press buttons numbers and advanced symbols
    So that I can view a calculated result in pleasingly chunky numbers

    Background: Go home
        Given I go home
        And this feature is about "web-calculator"

    Scenario: Calculator basic layout
        Then there is a power on off button
        And there is a display-screen widget
        And the screen is showing 0

    @skip
    Scenario: Add numbers
        When I press calculator buttons
            | button |
            | 2      |
            | +      |
            | 3      |
            | =      |
        Then the screen shows 5
