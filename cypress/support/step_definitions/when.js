import { When } from "cypress-cucumber-preprocessor/steps";
import { GoHome } from "../../step_implementations/navigation";

When("I go home", GoHome);
