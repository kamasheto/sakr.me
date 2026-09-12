---
title: '🦮 Keep your agents on leash'
description: 'Keep your agents on leash and avoid them from running wild with nono.'
pubDate: '2026-09-12'
heroImage: '/post-heroes/leash.png'
---

For some time now I've been using `nono` to sandbox my agents the hard way. But there was no easy way to keep my agents profile in sync/granular per project.

I had a converstation with a colleague about nono recently, and he mentioned that he uses a custom bash script that helps with setting up profiles and running claude with nono through the tool. That sparked my interest in publishing `leash`

Leash does two* simple things:
1. Allows you to create a `.nono_ignore` file in your project directory to specify which files and directories should be ignored by nono when running your agent (`.gitignore` syntax)
2. Provides a command line interface to run your agent with nono using a project based `nono` profile (stored in `./.nono` within your project dir, and is regenerated every time `.nono_ignore` is modified)
3. Bonus: has a `./leash install` command to symlink into your `~/.local/bin` for easy access.

> Head over to the repository to give it a shot, feature requests, or if you're feeling inspired, create a PR: https://github.com/kamasheto/leash
