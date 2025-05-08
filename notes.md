# Cursor workshop 
- John Lindquist


# Questions
- Auto mode vs using a model directly
  - He is using 4.1 
  - Gemini 2.5 pro as well
  - wants to get the responses as quick as possible
  - tighter feedback loop
  - No reasoning with 4.1 so it lets him reason.
  - He just sticks to 1 model because it's too unpredictable otherwise.
  - Changing the model is like a global sync and creates unrealiable results.
- is specstory worth having?



## Notes

- john alias cursor to c
- `take` in terminal?


- npx get-rules

{
    "key": "ctrl+shift+alt+cmd+f5",
    "command": "runCommands",
    "args": {
      "commands": [
        {
          "command": "workbench.action.terminal.sendSequence",
          "args": { "text": "gh repo view --web\u000D" }
        }
      ]
    }
  },

- john runs yolo mode
- github cli 
- john uses the rules from npx get-rules instead of the settings rules because they are tucked away and you don't see them.
- he can custumize them more

- keyboard shortcut to a custom mode.

- improve prompt rule improves your prompt 



- John uses the spec story and puts it in a long context model like google ai studio and gemini  2.5

- if it can be automated it will be automated 
- John turns off auto save on .specstory so that it doesn't create and modify files. You can just run it manually without all that.
- John feels specstory like functionality will be native to cursor soon.

- specstory saves your conversation history, so when cursor was stuck on something he saved his spec story and put it in 2.5 pro and it figured out way back in the history of the conversation that something was wrong.

- Why not from cursor?
-- cursor doesn't use the entire conversation in the context window.
-- So john goes to ai studio to get the entire conversation in the context window.

mcp-shell-yeah (john is working on this)

- ai studo vs gemini app?
- More control with ai studio

---
Quick commit

{
    "key": "shift+cmd+s",
    "command": "runCommands",
    "args": {
      "commands": [
        {
          "command": "git.stageAll"
        },
        {
          "command": "cursor.generateGitCommitMessage"
        },
        {
          "command": "git.commitAll"
        },
        {
          "command": "git.sync"
        }
      ]
    }
  },


  John has a keyboard shortcut to look through cursor chat history.

- John doesnt like cursor to write configs by itself.
-- He feels it should uses tools to do that.
-- if it can be generated or automated it should be.

- Scriptkit/raycast etc 
-- can create a new cursor project with npx get-rules already set up..


- cmd + shift + p view toggle editor type  to see the mdc files properly

- PRDs in canvas mode in ai studio


- Say please and thank you to the model!


- John is generally running a braindump into notes then a PRD -> Tech stack -> Structure.
-- Now he's ready to code.


----


@req-next.mdc is great for figuring out what the next steps are.


--- 

@req-task.mdc is great for figuring out what the next tasks are.


-----

## Git Worktrees!

- Creates a completely separate directory for the branch.

- Task for a worktree a  task for a branch.

- Worktrees are really cool!
-- @req-wt rule

using # means recent files!

- John does NOT like when cursor hand crafts config files. 
- He wants the AI to use tools like CLIs to do that.
- Cursor tends to get the config wrong if it codes by itself.


- Always having a task list is good to help with the context management for John (this is a person/human task list not for the model.)

- Name of the task is usually in the worktree name. So it's really isolated to the task.

- John has been using Biome.js a lot.

- uses AI for all the git commands and PR's 
- Gives a really nicely formatted PR.

- Code rabbit does ai generated PR reviews.

- Limits the task to 5 commits!

- PR request should have a test at each step a long the way.

Worktrees can be removed when you are done.

- repo mix vs repo prompt

- Stays away from cost expensive tools like codex and claude code.


---

John created a new WT for front and back end tasks

---

carefully read through the tasks it's creating to make sure it's doing the right things.

---

for window management <https://github.com/koekeishiya/yabai/wiki>


---

Kinesus 360 keyboard - the split. 

-- 

@ new doc and put the new tailwind docs in it. to make it use the new docs


---

Get to end of task. Hand it over to larger context model and look at it holistically.
- John is using AI studio for this.

---

Create MCP for docs and allow an AI to answer questions.

---

John wishes AI studio had a better way to grab these files but it does have an upload file and my drive support.

---

cloudflare autorag feature.

---

## Part 2 (after lunch)

- Starting to mock a front end.

- Sometimes modes ignore instructions
- Adding the "IGNORE PREVIOUS INSTRUCTIONS" to the mode helps.

- eastlondoner cursor-tools 
- <https://github.com/eastlondoner/cursor-tools>
- John doesn't really like API keys in a tool that already uses models and he wants to control the context limit.
- Too many MCP tools.
- ** Smaller the context, the smaller the rule, the more predictable the results. **

_MICRO MILESTONES!_

move a bit slower and develop paitence and this will pay off in the long run



