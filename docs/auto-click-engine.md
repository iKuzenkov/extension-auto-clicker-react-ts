# Core Features

## Auto Click Engine

Main logic:

```txt
useTimerLogic
```
Flow:

- User clicks Start
- Validation runs
- Timer loop starts
- Stored element receives .click()
- Process repeats recursively

The project uses setTimeout recursion instead of setInterval.

Why:

- avoids overlapping executions
- easier cleanup
- more predictable timer flow
- safer for repeated side effects

Example structure:

```bash
setTimeout(() => {
selectedElement.click();
tick();
}, delay);
```

# Input Validation

Validation is implemented with:
```txt
useInputValidation
```

The project validates:

- hours
- minutes
- seconds

Input fields accept only numeric values using RegExp validation.

Example:
```txt
/^\d*$/;
```
Purpose:

- prevent invalid characters
- keep controlled inputs stable
- allow empty string input during editing

# Countdown System

The extension includes:

- countdown until next click
- live timer updates
- formatted time display

Main hook:
```text
useTimeUntilNextClick
```
Features:

- interval cleanup
- time normalization
- dynamic UI updates

# Controls
## Start
- validates selected target
- validates timer input
- starts click automation
## Stop
- stops timer execution
- clears active timeout
- preserves selected element and user data
## Reset
- resets Redux state to initial values
- clears timer state
- resets UI status
