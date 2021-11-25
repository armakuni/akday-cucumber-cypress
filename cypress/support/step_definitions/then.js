import { Then } from "cypress-cucumber-preprocessor/steps";
import * as inspect from "../../step_implementations/inspection";

Then("I see {string} in the title", inspect.pageTitleShouldContain);

Then("I see {string} in the main heading", inspect.mainHeadingShouldContain);

Then("I see {string} in the contributors list", inspect.contributorsListShouldInclude);

Then("I see a contributors list entitled {string}", inspect.contributorsListShouldHaveTitle);
