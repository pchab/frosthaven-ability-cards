This is a [Next.js](https://nextjs.org/) project to track your ability cards for the game FrostHaven.
The latest version of this application is hosted [here](https://frosthaven-ability-cards.vercel.app).

## Features

- Choose your class
- Choose your class ability cards
- Enhance cards
- Tracks Discard / Lost / Active Effects
- Allow short (with reroll) and long rests.
- Undo / Redo
- Gloomhaven secretary connection

I haven't unlocked all the classes in the physical game yet, but I'll be adding them as I go.
If you want to add a class, please open an issue or a PR.
See [PR #17](https://github.com/pchab/frosthaven-ability-cards/pull/17) for an example.

## Getting Started

First, install then run the development server:

```bash
npm run install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can use [http://localhost:3000/test](http://localhost:3000/test) to visualize the cards.

## [Gloomhaven Secretary](https://gloomhaven-secretary.de/)

You can connect to a Gloomhaven Secretary server.
It allows you to set your initiative and automatically end your turn on GHS when you click the "End Turn" button.
