# Project: Lazy Worker (PussyWorker)

## Overview

A high-performance web application for task management and workflow optimization, built with a modern React stack. The project is currently undergoing a structural refactoring of the data model and Firestore integration.

## Tech Stack

- **Framework:** React 19 (Functional Components, Hooks)
- **State Management:** MobX 6 (Observer pattern)
- **Language:** TypeScript 6.x (Strict mode)
- **Backend/DB:** Firebase 12 (Firestore, Hosting, Auth)
- **Build Tool:** Vite (utilizing rolldown-vite for enhanced performance)
- **Styling:** Sass (SCSS) + Radix UI
- **Forms & Validation:** React Hook Form
- **Navigation:** React Router Dom v7

## Core Architectural Principles

1. **MobX Integration:**
   - Use `makeAutoObservable` for stores.
   - UI components must be wrapped in `observer`.
   - _Note:_ Code before the first `await` in actions does NOT require `runInAction`.
2. **Data Fetching:** - Direct Firebase SDK v12 integration.
3. **UI/UX:**
   - Accessible components via Radix UI.
   - Complex drag-and-drop interactions for task sorting.
   - Skeleton screens for loading states.

## Project Structure (Context for AI)

- `src/assets/`: Images, ascii images source.
- `src/components/`: Reusable big UI components (like accordion).
- `src/configs/`: Configuration files for application, libraries.
- `src/enums/`: Common ang global enums which used all over the application.
- `src/hooks/`: Custom React hooks (including react-use patterns).
- `src/interfaces/`: Common ang global interfaces which used all over the application.
- `src/layouts/`: Top-level structural components (wrappers) that provide some logic (auth checking for example) or components (navigation layout).
- `src/modules/`: Self-contained, isolated, independent, and reusable feature-level components.
- `src/pages/`: Thin container components that serve as routing entry points, composing layouts and modules without containing internal logic.
- `src/services/`: Firebase initialization and Firestore CRUD operations.
- `src/store/`: MobX domain stores.
- `src/styles/`: SCSS global files (theme variables, reset styles, shared mixins).
- `src/ui/`: Reusable small UI components (like Toast, Link)
- `src/utils/`: Global utility functions. One file - one utils

## Current Goals (Refactoring Phase)

1. **Data Model Update:** Completely rewrite the `PussyWorker` entity and related task structures.
2. **Firestore Schema Migration:** Transition from old flat structures to more scalable nested or relational collections.
3. **Type Safety:** Ensure end-to-end type safety from Firestore documents to MobX stores and UI components.
4. **Logic Expansion:** Implement new functional modules without breaking existing drag-and-drop and calendar logic.

## AI Guidelines

- Follow the migration plan outlined in `spec.md` (once created).
- Prioritize code consistency with existing MobX stores.
- Always check `@interfaces/` when modifying data structures. Try to reuse already exist interfaces, types and enums.
