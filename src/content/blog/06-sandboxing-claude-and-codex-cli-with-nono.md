---
title: '📦 Sandbox claude and codex cli with nono'
description: ''
pubDate: '2026-05-07'
heroImage: '/post-heroes/nono.png'
---
Coding agents are becoming kinda scary. They have access to everything, and anything. And in their attempt to making our lives easier, can have horrific effects.

I've come across [nono](https://nono.sh/) recently and have enjoyed the peace of mind of being in control of the access I'm giving up, at a level that goes beyond just "trusting the agent has your best interest in mind". If you run your coding agents through the CLI, using nono to sandbox on a kernel-level is pretty much a must.

Inspired by [this post](https://www.lotharschulz.info/2026/05/02/secure-your-terminal-a-trust-but-verify-sandbox-for-claude-code/), I've made my own `zsh` wrapper for both `claude` and `codex` so that running either automatically wraps them up in `nono`.


```zsh
# ~/.zshrc
_NONO__CLAUDE_CMD_ARGS=()
_NONO__CODEX_CMD_ARGS=(--sandbox danger-full-access --ask-for-approval on-request)

_nono_wrapper() {
  local agent="$1"
  shift
  local -n config="NONO_${agent:u}"
  local net_args=("--block-net")
  local agent_args=()
  for arg in "$@"; do
    if [[ "$arg" == "--net" ]]; then
      net_args=()
    else
      agent_args+=("$arg")
    fi
  done
  nono run -v --allow-cwd --profile "${agent}" "${net_args[@]}" -- "${agent}" "${(P@)${agent:u}_CMD_ARGS}" "${agent_args[@]}"
}

claude() { _nono_wrapper claude "$@" }
codex()  { _nono_wrapper codex  "$@" }
```
--

```json
// ~/.config/nono/profiles/claude.json
{
  "meta": { "name": "claude" },
  "extends": "claude-code",
  "workdir": {
    "access": "readwrite"
  },
  "filesystem": {
    "read": [
      "$HOME/.claude/skills",
      "$HOME/.claude/agents",
      "$HOME/.claude/plugins"
    ]
  }
}
```
--

```json
// ~/.config/nono/profiles/codex.json
{
  "meta": { "name": "codex" },
  "workdir": {
    "access": "readwrite"
  },
  "filesystem": {
    "read": [
      "$HOME/.codex/skills"
    ]
  }
}
```
--
### Example usage:
```bash
> claude 
# runs claude with network access blocked by default

> claude --net
# runs claude with network access enabled

> codex
# samesame but codex

> codex --net
# you get the drill
```


Running `claude` or `codex` the first time allows installing the specific wrappers for them, so nono stays agnostic from whichever version of the agent you're running. Codex is particularly needy for read access to more hidden library folders, but nono updates your profile per run. Eventually your profile is complete enough to let codex run smoothly.

Happy (and safe) coding!
