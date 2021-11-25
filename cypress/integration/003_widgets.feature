Feature: Have a list of widgets
    As the host of the AK day experiment
    I want to create an area where widgets can be created
    So that we have a place for people to try creating something from scratch


    Scenario: Holder for widgets
        Given I go home
        Then the "article.widget-holder" element exists
        And the heading for "article.widget-holder" should be "Widgets"
