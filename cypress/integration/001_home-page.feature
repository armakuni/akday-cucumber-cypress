Feature: Home page for our experiment
    As a bunch of AKers
    We want to be able to navigate to a single home page
    So that we have a play ground for developing our example application

    Scenario: Open the home page
        When I go home
        Then I see "Cucumber Cypress playground" in the title
        And I see "Cucumber Cypress playground" in the main heading
