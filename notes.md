Tried creating new user in ubuntu, adding to sudo wheel for privileges. Found out that switching users (su) to them means all my bash.rc commands are gone, files and folders are gone. So I'd need to find a way to move that all over to new user.
now, Im in the auth branch. Next steps are to review what I was working on, and continue it, then merge to main.
chown  change owner. wow that makes a lot of sense. I always thought of that as chowing down on food or something.

Updates:
I'm on wsl. I tried installing a new instance of vscode and there's an informational popup that I should install vscode on windows instead of within my wsl. Leading me to a rabbit hole of how to make everything play nice within my setup.

come to find out after a good chunk of reseach: my main goal was to make it so that it didn't look like root user was doing the commits on my github. All the extra steps of creating a new user, setting them up as sudo priveledge, etc. was good practice, but unnessesary for me on my personal computer.

so removing vscode from wsl, going back to root, I simply set my git config and boom, done.

sheesh.

confirmed on github that I YinYang117 authored and committed. Excellent