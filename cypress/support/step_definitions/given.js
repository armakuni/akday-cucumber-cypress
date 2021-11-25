import { Given } from "cypress-cucumber-preprocessor/steps";
import * as context from "../../step_implementations/context";

Given("this feature is about {string}", context.isAbout);
