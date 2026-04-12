# Specification: PussyWorker Refactoring & Feature Expansion

## 1. Authentication

**Goal:** Implement a robust auth system using Firebase Authentication and `react-hook-form`.

### Functional Requirements:

- **Providers:** Google OAuth and Email/Password.
- **Persistence:** Sessions must persist until manual logout or cache clearing.
- **Modules:**
  - `Login`: Standard login form.
  - `Registration`: Account creation via Google or Email.
  - `Password Recovery`: Email-based reset flow.

---

## 2. Calendar & Task Management (Main View - `/`)

**Goal:** A dual-widget dashboard containing a Calendar and a Smart To-Do List.

### A. Calendar Widget

- **View:** Table-like grid representing days of the month.
- **Interactions:**
  - Month navigation (Prev/Next).
  - Category filtering (show/hide tasks based on tags).
  - Cell Preview: Display task titles within the corresponding date cell.
- **UI:** Collapsible/expandable side panel.

### B. Task List Widget

- **Structure:** Three distinct sections:
  1. Today
  2. Tomorrow
  3. Next 7 Days
- **Features:**
  - **Status Toggle:** Checkbox to flip task completion status in Firestore.
  - **Drag & Drop:** Reorder tasks in sections using `@dnd-kit`.
  - **Task Creation:** Dialog/Modal for adding tasks (Fields: Title, Description, Priority, Date).
  - **Filtering:** Global category filter.

---

## 3. Search Page (`/search`)

**Goal:** A clean, minimal search interface designed for a "Start Page" experience.

- **Visuals:** Centered search bar with an ASCII art image displayed below it.
- **Suggestions:**
  - Active on focus.
  - Displays search history (stored in LocalStorage).
  - Options to select a suggestion or delete it from history.
- **Execution:** On Enter/Submit, redirect to Google Search results in a same window.

---

## 4. Data Structure & Firestore

**Current State:** There is a document-per-entry model to leverage Firestore's native indexing and query performance.

### 4.1. Users Collection

Stores global user settings.

    Document ID: {uid}

    Fields:
        settings: Object containing user-defined categories.

### 4.2. Schedule Collection (Main Data)

Unified collection for all calendar items, enabling efficient range queries.

    Document ID: Auto-generated UUID.

    Fields:
        userId: string (Owner ID for security rules).
        date: Timestamp (Firestore native format for "start/end" range queries).
        title: string.
        description: string.
        priority: string (default or important)
        category: string (ID referencing a category in users settings).
        status: "todo" | "done" (Task-specific state).
        order: number (For manual DnD sorting within sections).

### 4.3. Key Benefits 

- Efficient Range Queries: Fetching tasks for a specific month or the "Next 7 Days" list using where("date", ">=", start).
