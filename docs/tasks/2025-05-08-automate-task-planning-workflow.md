# Task: Automate and Document the Task Planning Workflow

## Commit 1: ✅ feat: Create CLI/script to generate new task plan files (7b3142e)
**Description:**
Implement a TypeScript CLI or script (e.g., `scripts/generateTaskPlan.ts`) that, when run, prompts the user for a task name and creates a new file in `docs/tasks/` named `<YYYY-MM-DD-task-name>.md`. The script should read context from `docs/PRD.md`, `docs/TECH_STACK.md`, and `notes.md` to pre-populate the file with the required structure as defined in `.cursor/rules/req-task.mdc`. Use the `fs` and `inquirer` packages for file operations and user prompts. Ensure the script is executable via `pnpm` and `tsx` as per project standards.

**Verification:**
- Run `pnpm tsx scripts/generateTaskPlan.ts` and confirm it prompts for a task name and creates a correctly named file in `docs/tasks/`.
- Check that the generated file includes the required Markdown structure and references content from `docs/`.
- Verify the script works on a clean clone of the repo with only documented dependencies.

---

## Commit 2: feat: Integrate context extraction from docs/ into task plan generation
**Description:**
Enhance the CLI/script to automatically extract and summarize relevant context from `docs/PRD.md`, `docs/TECH_STACK.md`, and `notes.md` to pre-fill the task plan file. The summary should appear at the top of the generated file, providing background for the planned commits. Use file reading and basic Markdown formatting to include key points from each doc.

**Verification:**
- Run the script and confirm the generated task file includes a context summary section with content from each relevant doc.
- Manually compare the summary to the source docs to ensure accuracy and relevance.

---

## Commit 3: feat: Add semantic commit title and verification step templates
**Description:**
Update the script to insert semantic commit titles (e.g., `feat:`, `fix:`, `docs:`) and detailed verification steps for each planned commit, following the structure in `.cursor/rules/req-task.mdc`. Ensure the script enforces the inclusion of file paths, commands, and explicit verification instructions for each step.

**Verification:**
- Generate a new task plan and confirm each commit section includes a semantic title and a detailed, actionable verification step.
- Check that the output matches the required format in `.cursor/rules/req-task.mdc`.

---

## Commit 4: docs: Document the task planning workflow in project docs
**Description:**
Create or update a documentation file (e.g., `docs/TASK_PLANNING.md`) to explain the automated task planning workflow, including how to use the CLI/script, the required structure for task files, and how context is extracted from project docs. Reference `.cursor/rules/req-task.mdc` and provide usage examples.

**Verification:**
- Confirm the documentation file exists and clearly explains the workflow, script usage, and file structure.
- Ask a team member to follow the documentation and generate a task plan successfully.

---

## Commit 5: test: Add unit tests for the task plan generation script
**Description:**
Write unit tests for the CLI/script using Vitest, covering user prompts, file creation, context extraction, and error handling. Place tests in `scripts/__tests__/generateTaskPlan.test.ts` as per project standards. Ensure tests cover edge cases (e.g., missing docs, invalid input).

**Verification:**
- Run `pnpm vitest` and confirm all tests pass.
- Intentionally break the script to ensure tests fail as expected.

--- 