# Cookie Clicker Mode
## Overview

The Cookie Clicker mode allows the extension to generate a user-defined number of clicks over a specified period of time.

Unlike many browser auto clickers that rely on fixed intervals, this mode calculates the required delay automatically.

### Features
- User-defined number of clicks
- Automatic delay calculation
- Works with extremely high click rates
- Uses the same timer engine as the standard click mode
- Stable recursive timer implementation
- Fully integrated with Redux Toolkit state management

### Delay calculation
```bash
delay = totalTime / clicks
```
Example:
```bash
300000 ms
10 clicks

↓

30000 ms between clicks
```

Why such an implementation?
- Stores the exact number of clicks
- Doesn't use setInterval
- Reuses useTimerLogic
- Easily scales