import { Then } from "cypress-cucumber-preprocessor/steps";
import * as inspect from "../../step_implementations/inspection";

Then("I see {string} in the title", inspect.pageTitleShouldContain);

Then("I see {string} in the main heading", inspect.mainHeadingShouldContain);

Then("I see {string} in the contributors list", inspect.contributorsListShouldInclude);

Then("I see a contributors list entitled {string}", inspect.contributorsListShouldHaveTitle);

Then("the {string} element exists", inspect.elementBySelectorShouldExist);

Then("the heading for {string} should be {string}", inspect.headerContentShouldInclude);

Then("the widget heading is {string}", inspect.withWidgetChild("header").contentShouldBe);

Then("the widget counter displays {int}", inspect.withWidgetChild(".counter").contentShouldBe);

Then("the widget contains", inspect.widgetShouldContain);
