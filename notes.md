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