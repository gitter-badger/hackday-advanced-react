# Exercise

The goal of this exercise is to build a generic Wizard component.

The `App.js` shows you on example of usage of this component.
You goal is to implement it in the `Wizard.js` file.

The Wizard component is a compound component.
The children to use for this component is a series of Step components.
It will only render the active Step and not all of them.

The Step component expects a function as children and needs to provide relevant information:

* The index of the step: `step: number`
* The the total number of steps `numberOfSteps: number`
* A function to go to the previous step `previousStep: func`
* A function to go to the next step `nextStep: func`
* A function to go to a specific step `selectStep: func`
