# Product Requirements Document (PRD)

## 1. Core Functionality & Purpose
- The project is a Cursor workshop led by John Lindquist.
- Focuses on improving the developer experience with Cursor, including custom rules, keyboard shortcuts, and automation.
- Addresses the need for tighter feedback loops and more predictable model behavior when using AI models (e.g., GPT-4.1, Gemini 2.5 Pro).
<!-- TODO: What is the primary problem solved for the end-user? What is the core functionality required? -->

## 2. Key Technical Goals & Scope
- Integrate custom rules (e.g., via `npx get-rules`) for enhanced workflow customization.
- Enable keyboard shortcuts for custom modes and quick actions (e.g., quick commit, view repo, toggle editor type).
- Emphasize automation where possible ("if it can be automated it will be automated").
- Out of scope: Letting Cursor write configs by itself without user control; instead, use tools for config generation.
- **Tech Stack:**
  - Node.js
  - TypeScript
  - pnpm (package manager)
  - Vitest (testing)
  - @biomejs/biome (formatting/linting)
  - tsx (TypeScript runner)
  - GitHub CLI
  - Scriptkit/Raycast (for automation)
  - AI models: GPT-4.1, Gemini 2.5 Pro
<!-- TODO: What are the critical technical objectives (e.g., performance benchmarks, integrations, tech stack)? What is explicitly out-of-scope for this cycle? -->

## 3. User Interaction & Technical Design
- Primary user: Developer using Cursor for code editing and automation.
- Interaction via keyboard shortcuts, custom rules, and terminal commands.
- Utilizes tools like GitHub CLI, Scriptkit/Raycast, and AI models for extended functionality.
<!-- TODO: Are there UI mockups, API contracts, or user flows available? How do users interact with core features? -->

## 4. Essential Features & Implementation Details
- Customizable rules and keyboard shortcuts (e.g., for quick commit, repo view, toggling editor type).
- Integration with external tools (GitHub CLI, Scriptkit/Raycast).
- Manual control over features like specstory and PRD creation.
<!-- TODO: What are the must-have functionalities for the initial version? What are the high-level implementation considerations for each feature? -->

## 5. Acceptance Criteria & "Done" Definition
<!-- TODO: What are the specific, testable conditions for each key feature/user story to define "done"? -->

## 6. Key Technical Requirements & Constraints
- Must support integration with AI models (GPT-4.1, Gemini 2.5 Pro).
- Should allow for manual and automated workflows.
- Should not auto-save or auto-modify files like .specstory unless explicitly triggered by the user.
<!-- TODO: What are the non-negotiable technical requirements (platform, languages, frameworks, integrations)? What are the non-functional requirements and constraints (performance, scalability, security, reliability, infrastructure, budget)? -->

## 7. Success Metrics (Technical Viewpoint)
<!-- TODO: How will the development team measure technical success post-deployment (system stability, error rates, performance metrics, etc.)? -->

## 8. Development Logistics & Lookahead
- There is a risk that features like specstory will become native to Cursor, potentially making custom implementations obsolete.
- Assumption: Users prefer manual control over automation for critical actions (e.g., config generation, file modification).
- Future consideration: Extensibility for new tools and AI model integrations.
<!-- TODO: What are the significant technical risks or dependencies and initial mitigation thoughts? What major assumptions could derail development if incorrect? What future development considerations exist for the current design? --> 