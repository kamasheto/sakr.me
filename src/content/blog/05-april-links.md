---
title: '🪎 April Links'
description: ''
pubDate: '2026-04-26'
heroImage: '/placeholders/monthly-treasures.png'
---
While interviewing with DigitalService (excited to start in roughly a week!), I ran into [Andreas' Notes](https://notes.a13i.dev/) which inspired me to publish some of my own findings over time. Mostly for my own future reference, but also to share some of my thoughts on some of the cool tools and findings I come across. Here's my first edition.

* [Gandalf Password Reveal](https://gandalf.lakera.ai/baseline) is a nice tool that illustrates prompt injection in a playful way. Even though not every agent will have the power and access to reveal sensitive information, it's worth getting hands-on with trying to work-around prompt guard-rails with this tool to get an impression of how dangerous (and easy) it can be to give an agent unnecessary access even when we think it's told not to do harm.
* For some time I was unhappy with how my passwords are kind of all over the place - some in iCloud, and some in my Chrome profile. And since I am using a couple of Dia profiles, that too was a bit scattered in its own. I decided to use [Bitwarden](https://bitwarden.com/) which has an app, an iOS passwords integration, and even a web interface. It's open source, priced fairly, and does what it promises. Even though bitwarden offers the ability to also store my authenticator tokens, I chose against that - there's not a good reason for storing both your password and your authenticator tokens in the same place imo.
* The main driver for taking the step to solidify my passwords with a passwords manager is my quest in finding a decent 2FA authenticator to keep track of my tokens. I ended up using [Ente Auth](https://ente.com/auth/) which is also an open source 2FA authenticator, with a Mac app, an iOS app. ([This post](https://medium.com/@sahendra_/i-thought-my-accounts-were-secure-until-i-discovered-ente-auth-bitwarden-78c1100ed5e8) was the inspiration. And even when it sounds like a fishy advertisement, researching a bit into both Ente Auth and Bitwarden's authenticity made me make the call to port over.)
* I've been looking for a decent self-custodial wallet that is simple for cross-platform access, especially for cross-network coins and tokens. I used MEW until recently, but it still lacks support for portfolios showing up assets from different networks decently. [Exodus](https://www.exodus.com/) solved this. And it's beautiful at it.
* I was always having a difficult time deciding what to keep in my menu bar and what to remove. [Thaw](https://github.com/stonerl/Thaw) came to the rescue.
* I'm probably late to this party, but I've ported my notes to using [Obsidian](https://obsidian.md/). It's the note taking app Mac should have had.
* [jj](https://www.jj-vcs.dev/) is a git.. flavor? that seems quite the productivity booster. I call it a mask because it's not really a new VCS, it's merely a different take on git. It uses the same `.git` folder structure - so `git` users and `jj` users can use the same repo in parallel without issues. After using it for some time in one of my repos I decided to drop it and switch back to git simply because I was just too invested and used to git to need an "easier" version, but it's worth noting down since it's interface is pretty straight forward and might be something to consider picking up.
* [LiteLLM](https://github.com/BerriAI/litellm) is a simple gateway interface to unify your projects model access through a single API. It's designed to be a standalone service to enable your internal tools and services to access your corporate agents through a single gateway, but it can also be used to simplify your apps AI model usage through a common interface.


### Noteable mentions
These are not April findings, but since this is the first edition, here's a list of other cool gigs that make my life a tad easier:
* [iximiuz Labs](https://labs.iximiuz.com/) is a unique playground for DevOps and Platform Engineers. It's tutorials on steroids, coming from someone who speaks fluently with machines. With their challenge based approach, learning is focused and engaging.
* [Dia browser](https://www.diabrowser.com) browser tabs should be vertical by default. And AI at your fingertips is a given for 2026
* [cmux Terminal](https://www.cmux.dev/) is the mac terminal you didn't know you needed (also with vertical windows + horizontal tabs/window)
* [ZoneShare.app](https://zoneshare.app/) is the utility tool every wide-screen user needs
* [Rectangle.app](https://rectangleapp.com/) Window Management in macOS done right
* [MonitorControl](https://monitorcontrol.app/) for managing your external display brightness and volume the way you expect them
* [Mac Mouse Fix](https://macmousefix.com/en/) makes programming your mouse buttons a breeze
* [hstr](https://github.com/dvorka/hstr) is a TUI for your shell history