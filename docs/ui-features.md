# UI Features

## Drag & Drop Panel

Implemented with:

```txt
useDrag
```

Features:

- draggable extension window
- viewport boundary calculations
- saved panel position

## Theme Switching

Features:

- Light theme
- Dark theme
- dynamic UI styles
- accessibility-aware focus colors

## Hide / Show System

The panel can be hidden without removing application state.

Uses conditional rendering:
```bash
{isVisible && <Component />}
```