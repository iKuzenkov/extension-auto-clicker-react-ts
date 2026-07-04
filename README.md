# Safe Auto Clicker — Smart Mouse Click Automation for Any Website

---

# Chrome Web Store

## Safe Auto Clicker — Smart Mouse Click Automation for Any Website

Chrome Web Store:
https://chromewebstore.google.com/detail/mgadnfjigmdiljhffhjlopjfibddkneh

500+ active users per week

---

# Video Overview

Project overview and architecture explanation video:

https://youtu.be/rK2RbL6nOBo

Language: Ukrainian

The video includes:

- real use case demonstration on Salesforce CRM
- React + TypeScript architecture overview
- Redux Toolkit flow
- custom hooks explanation
- timer engine logic
- drag & drop implementation
- Fetch API integration
- testing examples
- accessibility considerations

---

# Overview

Safe Auto Clicker is a Chrome extension built with React and TypeScript that automates mouse clicks on any website.

The extension is designed for repetitive UI actions:

- CRM systems
- refresh buttons
- internal dashboards
- repetitive browser interactions
- workflow automation

The user can select any element on a webpage and automatically trigger clicks using a custom timer interval.

---

# Main Features

- Select any DOM element on a website
- Automated clicking with configurable delay
- Start / Stop / Reset controls
- Draggable extension panel
- Light / Dark theme
- Accessibility improvements (a11y)
- Persistent UI state
- Countdown until next click
- Click counter
- Fetch API integration
- Dev mode for fast local development
- Tested business logic with Jest

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- SCSS
- Vite

## State Management

- Redux Toolkit
- React Redux

## Routing

- React Router

## Testing

- Jest

---

# Project Purpose

The extension solves a simple but real problem:

Many CRM systems and dashboards require repetitive user actions such as:

- refreshing pages
- updating tasks
- confirming actions
- clicking UI buttons repeatedly

The extension allows the user to automate these actions directly in the browser.

Example shown in the project video:

- a task was created inside Salesforce CRM
- the extension automatically clicked the refresh button
- the task appeared without manual interaction

---

# Documentation

- [Architecture](./docs/architecture.md)
- [CSS Isolation Strategy](./docs/css-isolation.md)
- [Target Selection System](./docs/target-selection-system.md)
- [Auto Click Engine](./docs/auto-click-engine.md)
- [UI Features](./docs/ui-features.md)
- [Accessibility](./docs/accessibility.md)
- [Redux Toolkit Structure](./docs/redux-toolkit-structure.md)
- [Fetch API Integration](./docs/fetch-api-integration.md)
- [Testing](./docs/testing.md)
- [Development Mode](./docs/development.md)

---

# Local Development

```bash
# Clone repository
git clone https://github.com/iKuzenkov/extension-auto-clicker-react-ts.git

# Open project folder
cd extension-auto-clicker-react-ts

# Install dependencies
npm install

# Start development mode
npm run dev
```

Important

If the Chrome extension version is already enabled in the browser,
disable the installed extension before running dev mode.

Both versions use the same application entry and can conflict with each other during development.

---

# Scripts

```bash
npm run dev
npm run build
npm run lint
npm run lint:fix
npm run preview
npm run format
npm run lint:css
npm run lint:css:fix
npm run test
npm run type-check
npm run done
```

# Summary

Safe Auto Clicker is a real-world automation extension focused on:

- practical browser automation
- reusable React architecture
- clean separation of UI and logic
- maintainable TypeScript code
- business-oriented functionality

The project was built not only as a technical exercise, but also as a practical productivity tool inspired by real CRM workflow experience.