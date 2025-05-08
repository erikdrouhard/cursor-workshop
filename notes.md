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


---

## tools for mocking up ideas for a front-end or trying to 'copy' a design

- Chrome Single File
-- <https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle?hl=en>

- Create a template from this website. 
- AI with canvas in them.
-- ChatGPT, lovable, gemini, claude etc
-- just paste a screen shot and the html, just recreate it in the canvas.

- Cleanshot screenshot tool.
<https://cleanshot.com/>

- A scrape and a screenshot.

---

## Other ways to use Cursor
- .config files
- Config project to run and install a certain thing
- Let's them just install and fail


-----

### RepoMix
<https://repomix.com/>

Repomix CLI can colocate and concat files together as context. It's kind of like repo prompt but it's a CLI.
- Creates a new file with the context it bundles.
- You can have it just copy to clipboard to include in the next prompt. 

- a lot are just running the tool with --help to get an idea of what can be done.

- For me to investigate: repomix vs repo prompt

- he's using repomix to create a gist for yabai window manager

---

## Tailwind config keeps failing

- favorite solution is searching for github examples
- req-ghx tool!
- <https://github.com/johnlindquist/ghx>

- <https://github.com/AgentDeskAI/browser-tools-mcp>
- Wait for cursor to include these types of tools natively


---

{
    "key": "ctrl+shift+alt+cmd+f3",
    "command": "composer.addfilestocomposer"
  },


--

"yes please continue to the end of the task without asking me for help or confirmation."

---

## MCPs in the background

- mcp-cursor-tool-starter
gh repo clone johnlindquist/mcp-cursor-tool-starter


- Want the model to avoid the grepping and discovery as much as possible. 

- You want that done up front.
- so when it becomes time to do the task you can focus the model on just doing it instead of figuring out how to implement and excute. 


---

## Zoom chat comment:
- Sounds like a good practice is to make sure to “prep” the AI and front load as much context as possible early on. Is that the right way to think about it
- People that can just sit down and describe in great detail what the expected outcome is will be set for the future.
- The people who build the app first and then try to describe it will get stuck and have a harder time moving forward..

---

- Easier to backtrack when the model is failing in a worktree. 

---

- Gitingest 
- Repomix
- Next.js templates

-- 

Never hesitate to throw stuff away and start over with the model. 

- Very important to course correct early and often.

- Clicking in the explorer and adding to the context shortcut is very useful.

- Summarize the function and ask the purpose and how to refactor it for a specific use case

- You want to save the agent from doing things that you know how to do or automate. 

- Focusing the model helps it do better.

---


cmd + shift + p "new search editor"

---

- Slick tool but you need to put in your own api keys
<https://www.task-master.dev/>
- He thinks cursor will have this type of tool built in soon.

--- 

- Do a brain dump of idea via @notes mode
- Then PRD via req-prd.mdc
- Then make TECH_STACK doc
- Then do mermaid diagrams?
- Then maybe google gemini for deeper look
- Then do man-structure.mdc to create STRUCTURE.md
- Then "whats next" via req-next.mdc
- Then choose task. Then req-task.mdc to plan task
- Then make new git working tree `req-wt.mdc`
- Then exec task with `req-exec.mdc`
- Iterate through prompts til done
- The PR via `req-pr.md`
- Then merge PR and go back to main
- Go back to "whats next" and continue

----

Planning → Deep Research → cursor rules and notes → Repeat

(To frontload context)

Then execute -> Re-evaluate  -> Go back to first loop

—

Rough idea


---

cmd + shift + v is the paste raw shortcut instead of taking line numbers 

<https://www.cursor.com/security>
