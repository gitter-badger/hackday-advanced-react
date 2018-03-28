# Exercise

In this exercise we will improve our Wizard component.

# Step 1 - Header and footer

Improve your Wizard component.
It should accept two other props, `header` and `footer`.
Those are render props and should provide the same props as the ones provided to the children (`Wizard.Step`).

* `step: number`
* `numberOfSteps: number`
* `nextStep: func`
* `previousStep: func`
* `selectStep: func`

Look in the `App.js` to see how it is used.

# Step 2 - Controlled Wizard

Now, our Wizard component is uncontrolled for the moment.
It manages its state by itself. It would be nice if we could control it.
It would be even better if the component could handle both cases.

To make this happen, change your Wizard component so that it accepts to more props (optional)

* `step: number`
* `onChangeStep: (index: number) => undefined`

If the component receives those props, it becomes controlled.
The `step` props tells it which step to render.
And the `onChangeStep` props needs to be called when the user wants to change the current step.

Once your implementation is working, lets hook it up with a `Route` from react-router.
The Route needs to control the Wizard so that `/0` renders the first step, `/1` renders the second step, etc.
