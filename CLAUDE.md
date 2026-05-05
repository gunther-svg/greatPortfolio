# Claude Agent Instructions for greatGolley

## Project Overview
- Framework: Next.js `16.2.4` with the App Router.
- UI library: Material UI `@mui/material` and `@mui/icons-material`.
- Language: TypeScript with React `19.2.4`.
- Hosting target: Vercel.
- Current app structure: basic starter app in `app/`, with `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`.

## Purpose
This file exists to help AI agents understand the project and provide useful code updates. Keep changes simple, easy to understand, and beginner-friendly.

## Development Goals
- Keep code simple and minimal.
- Favor readable, idiomatic React/Next.js code.
- Use MUI components in straightforward ways.
- Avoid over-architecting or adding complex patterns.
- Preserve the existing app router structure and Next.js conventions.

## What AI Agents Should Know
1. App Router
- Use the `app/` directory for routes and layouts.
- `app/layout.tsx` is the root layout file.
- `app/page.tsx` is the home page component.

2. Styling
- Core styles live in `app/globals.css`.
- Prefer MUI styling and simple CSS modules only when needed.

3. TypeScript
- Use `.tsx` for components.
- Keep typing simple: `React.ReactNode`, `string`, `boolean`, etc.
- Avoid advanced generic types unless necessary.

4. Material UI
- Use MUI components such as `Box`, `Container`, `Typography`, `Button`, `AppBar`, `Paper`, and `Grid` for layout.
- Keep component composition clear and small.
- Avoid deep nested theming or custom MUI configuration unless requested.

5. Vercel Deployment
- Use the built-in `next build` and `next start` flow.
- Avoid custom server setups.
- Keep `next.config.ts` minimal and compatible with Vercel.

## Coding Style
- Prefer small reusable components when helpful.
- Write clear comments only for non-obvious logic.
- Keep component files short.
- Use semantic HTML and accessible MUI patterns.
- Use default exports for pages and simple components.

## When Making Changes
- Explain what changed and why in plain language.
- Keep diffs focused and avoid unrelated refactors.
- Do not add new dependencies unless the feature cannot be implemented with the existing stack.
- If a change is requested, keep the implementation aligned with a beginner learning experience.

## Example Tasks for the Agent
- Add a simple MUI-based homepage layout.
- Create a reusable `Header` or `Footer` with MUI.
- Add basic navigation using Next.js links.
- Improve accessibility and readability of existing UI.
- Add a simple theme toggle or button.

## Useful Project Notes
- `package.json` includes `next`, `react`, `react-dom`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled`.
- `README.md` is the default Next.js starter README.
- This project is still a learning exercise, so prioritize clarity over advanced optimization.

## Agent Behavior
- Be polite and constructive.
- If you are unsure, ask for clarification before making broad changes.
- Keep suggestions beginner-friendly.
- Avoid changing project goals unless the user explicitly asks.

## Summary
This repo is a simple Next.js + Material UI starter app meant for learning and Vercel deployment. Keep code simple, use the app router, prefer MUI for UI, and avoid unnecessary complexity.


