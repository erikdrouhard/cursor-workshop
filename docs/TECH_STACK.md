# Tech Stack

## 1. Project Overview & Goals (Informed by PRD)
The project is a Cursor workshop led by John Lindquist, focused on improving the developer experience with Cursor through custom rules, keyboard shortcuts, and automation. The primary goals influencing technology choices are speed of development, extensibility, automation, and seamless integration with AI models and developer tools.

## 2. Core Languages & Runtimes
- Backend/automation scripts: TypeScript (run with tsx)
- Node.js (runtime)
- No dedicated frontend framework (project is focused on developer tooling and automation)
- pnpm as the package manager

## 3. Frameworks & Libraries (Backend)
- No full backend framework; project relies on Node.js and TypeScript for scripting and automation.
- Key libraries:
  - Vitest (testing)
  - @biomejs/biome (formatting/linting)
  - tsx (TypeScript runner)
  - GitHub CLI (for repository automation)
  - Scriptkit/Raycast (for workflow automation)
- Best practices:
  - Use dependency injection where possible for testability.
  - Keep scripts modular and under 200 lines for maintainability.
  - Use environment variables for configuration (never hardcode secrets).

## 4. Frameworks & Libraries (Frontend)
- Not applicable; no dedicated frontend framework or UI component library is used in this project.
- Best practices:
  - If UI is added in the future, prefer React with TypeScript for type safety and component reusability.
  - Use a modern component library (e.g., shadcn/ui or Material UI) if UI needs arise.

## 5. Database & Data Storage
- No database or persistent data storage is required for this project.
- Best practices:
  - If data storage is needed in the future, prefer SQLite or PostgreSQL for structured data, and use environment-based configuration for connection strings.
  - For caching, consider Redis if performance bottlenecks are identified.

## 6. Infrastructure & Deployment
- No cloud infrastructure or deployment platform is required; project is intended for local developer use and automation.
- Version control and collaboration via Git and GitHub.
- Best practices:
  - Use GitHub Actions for CI if automated testing or linting is needed.
  - Use .env files for local configuration and never commit secrets to version control.
  - Document setup steps in a README for easy onboarding.

## 7. APIs & Integrations
- Integrates with AI models (GPT-4.1, Gemini 2.5 Pro) for enhanced automation and reasoning.
- Uses GitHub CLI for repository operations.
- Scriptkit/Raycast for custom workflow automation.
- Best practices:
  - Use official SDKs or APIs where available.
  - Handle API errors gracefully and log failures for troubleshooting.
  - Secure API keys using environment variables and never expose them in code.

## 8. Development Tools & Standards
- Version control: Git
- Repository hosting: GitHub
- Linting/formatting: @biomejs/biome
- Testing: Vitest
- TypeScript execution: tsx
- Package management: pnpm
- Best practices:
  - Enforce code formatting and linting in CI.
  - Use pre-commit hooks for linting and tests (e.g., with lint-staged and husky).
  - Write unit tests for all critical logic and automation scripts.
  - Keep documentation up to date.

## 9. Security Considerations
- Follow the OWASP Top 10 for all scripts and automation:
  - Validate all inputs, especially if user-supplied or from external sources.
  - Never commit secrets or credentials to version control; use environment variables and .env files (excluded via .gitignore).
  - Keep dependencies up to date and use tools like `pnpm audit` or `npm audit` to check for vulnerabilities.
  - Use least privilege principle for any API keys or tokens.
  - Regularly review and rotate credentials.
  - If handling sensitive data, use encryption at rest and in transit (e.g., HTTPS for API calls).
  - Use code scanning tools (e.g., GitHub Advanced Security, Snyk) for dependency and codebase vulnerability detection.

## 10. Rationale & Alternatives Considered
- TypeScript and Node.js were chosen for their popularity, flexibility, and strong ecosystem for developer tooling.
- pnpm is preferred for its speed and efficient package management.
- Vitest and @biomejs/biome are used for modern, fast testing and code quality enforcement.
- No database or frontend framework is used, as the project is focused on automation and developer experience rather than building a web application.
- AI model integration (GPT-4.1, Gemini 2.5 Pro) is prioritized for advanced automation and reasoning capabilities.
- Alternatives considered:
  - npm and yarn were considered for package management but pnpm was chosen for performance.
  - Jest was considered for testing but Vitest was chosen for speed and modern features.
  - ESLint/Prettier were considered but @biomejs/biome provides an all-in-one solution. 