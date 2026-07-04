# CSS Isolation Strategy

The extension uses custom prefixed class names and ids such as:
```txt
acext-dark-ss
```

Naming explanation:

- acext → Auto Clicker Extension
- ss → Security Selector

Purpose:

- prevent website styles from overriding extension UI styles
- isolate extension styling from external pages
- keep consistent appearance across different websites
- reduce CSS conflicts inside complex web applications

This is especially important because the extension works directly inside third-party websites and CRM systems with large existing style systems.