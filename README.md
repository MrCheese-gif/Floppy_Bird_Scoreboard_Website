# High score website

This is the high score leaderboard for the floppy bird game. It is currently hosted using Netlify at [floppy bird high scores](https://floppybirdhighscores.netlify.app)

## How it works

This website uses NocoDB for the backend.

```mermaid
flowchart LR
A[NocoDB] --> B[Website JavaScript Backend]
B -->|sorting data| C["Website frontend (Leaderboard)"]
```

The api keys and NocoDB url are seperately entered in netlify as environment variables. That is why we have the `netlify/functions` directory with `scores.js` inside.
