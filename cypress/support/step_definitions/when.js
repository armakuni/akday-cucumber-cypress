import { When } from "cypress-cucumber-preprocessor/steps";
import * as navigation from "../../step_implementations/navigation";
import * as actions from "../../step_implementations/actions";

When("I go home", navigation.goHome);

When("I press the widget {string} button {int} times", actions.multiPressButton)

When("I press calculator buttons", actions.pressCalculatorButtons);
