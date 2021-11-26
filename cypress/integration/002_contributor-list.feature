Feature: Contributor list
    As a proud contributor to our experiment
    I want to add my name to a contributors list
    So that I can proudly display my prowess

    Background: Go home
        Given I go home

    Scenario: Should load on the home page
        Then I see a contributors list entitled "Contributors"

    Scenario Outline: Should show the name of each contributor
        Then I see "<name>" in the contributors list

        Examples:
            | name              |
            | Muriel Fizzbucket |
            | Andrei Tarkovsky  |
            | Andrew Gibson     |
