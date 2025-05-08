# Project Structure Best Practices

## 1. Directory Organization
- **Keep files small:** Limit files to 200 lines for maintainability and readability.
- **Organize by feature or domain:** Group scripts, rules, and automation by their purpose (e.g., `rules/`, `scripts/`, `automation/`).
- **Documentation:** Store all documentation in a dedicated `docs/` directory. Use subfolders (e.g., `docs/diagrams/`) for diagrams and technical docs.
- **Configuration:** Place configuration files (e.g., `.env`, `.biomerc`, `vitest.config.ts`) at the project root. Never commit secrets.

## 2. Code Quality & Standards
- **TypeScript:** Use TypeScript for all scripts and automation for type safety.
- **Linting/Formatting:** Enforce code style with `@biomejs/biome` and run it in CI.
- **Testing:** Use `vitest` for unit tests. Place tests alongside scripts or in a `__tests__/` directory.
- **Pre-commit hooks:** Use tools like `lint-staged` and `husky` to enforce linting and tests before commits.

## 3. Automation & Tooling
- **Package management:** Use `pnpm` for all dependencies and scripts.
- **Script execution:** Use `tsx` to run TypeScript scripts directly.
- **Automation:** Integrate with GitHub CLI, Scriptkit/Raycast, and AI models for workflow automation.
- **Environment variables:** Store secrets and config in `.env` (excluded from version control).

## 4. Documentation
- **README:** Maintain a clear `README.md` with setup, usage, and contribution guidelines.
- **Tech stack:** Document all major dependencies and rationale in `docs/TECH_STACK.md`.
- **PRD:** Keep a `docs/PRD.md` for product requirements and technical goals.
- **Diagrams:** Use `docs/diagrams/` for user flows and architecture diagrams (e.g., Mermaid).

## 5. Security
- **Never commit secrets:** Use `.env` and exclude it via `.gitignore`.
- **Dependency management:** Regularly audit dependencies with `pnpm audit`.
- **Principle of least privilege:** Restrict API keys and tokens to only what is necessary.

## 6. Extensibility & Future-Proofing
- **Manual control:** Prefer manual triggers for critical actions (e.g., config generation, file modification).
- **Modularity:** Write scripts and rules to be easily extended or replaced as project needs evolve.
- **Documentation:** Update docs as new tools or integrations are added.

---

_This file was generated based on current best practices and the contents of `docs/TECH_STACK.md`, `docs/PRD.md`, and `docs/diagrams/user-interactions.md`. Update as the project evolves._ 