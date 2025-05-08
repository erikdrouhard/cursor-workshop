#!/usr/bin/env tsx
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

const TASKS_DIR = path.join(__dirname, '../docs/tasks');
const DOCS_DIR = path.join(__dirname, '../docs');
const NOTES_FILE = path.join(__dirname, '../notes.md');
const PRD_FILE = path.join(DOCS_DIR, 'PRD.md');
const TECH_STACK_FILE = path.join(DOCS_DIR, 'TECH_STACK.md');

function getTodayDate() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

async function main() {
  const { taskName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'taskName',
      message: 'Enter a short task name (kebab-case):',
      validate: (input: string) => !!input.trim() || 'Task name is required',
    },
  ]);

  const date = getTodayDate();
  const fileName = `${date}-${taskName}.md`;
  const filePath = path.join(TASKS_DIR, fileName);

  if (fs.existsSync(filePath)) {
    console.error(`Task file already exists: ${filePath}`);
    process.exit(1);
  }

  // Read docs for context
  const prd = fs.existsSync(PRD_FILE) ? fs.readFileSync(PRD_FILE, 'utf8') : '';
  const techStack = fs.existsSync(TECH_STACK_FILE) ? fs.readFileSync(TECH_STACK_FILE, 'utf8') : '';
  const notes = fs.existsSync(NOTES_FILE) ? fs.readFileSync(NOTES_FILE, 'utf8') : '';

  // Basic structure for now, will enhance in next commit
  const content = `# Task: ${taskName.replace(/-/g, ' ')}\n\n## Commit 1: <title>\n**Description:**\n<details>\n\n**Verification:**\n<steps>\n\n---\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

main(); 