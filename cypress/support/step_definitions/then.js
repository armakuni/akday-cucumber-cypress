import { Then } from "cypress-cucumber-preprocessor/steps";
import { mainHeadingShouldContain, pageTitleShouldContain } from "../../step_implementations/inspection";

Then("I see {string} in the title", pageTitleShouldContain);

Then("I see {string} in the main heading", mainHeadingShouldContain);
