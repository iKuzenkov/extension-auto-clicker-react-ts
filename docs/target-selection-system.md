# Core Features

## Target Selection System

The user clicks:

```txt
🎯 Select Target
```

After that:

- the extension waits for a click on the webpage
- the clicked DOM element is stored inside Redux state
- this element becomes the target for automation

Main files:

```txt
useSaveElement
handleElementClick
```
The project intentionally stores the actual DOM element inside Redux state.

This approach was chosen because many modern websites dynamically change selectors and DOM structures, making selector-based targeting unreliable in some real-world cases.

The project also explores selector-based approaches and explains their limitations in the video overview.