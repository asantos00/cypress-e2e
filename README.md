# E2E tests with Cypress.io

From now on, no more excuses for your web app not to have E2E tests. Cypress enables you to write and run E2E tests with very few lines of code.

# Talk

## Presentation

## Introduction
It is a normal day, you just open JIRA, grab a task. You think a little bit about it, you open vscode and you start doing it. A couple of hours later your task is pretty much finished. You create your unit and integration tests for the cases you can recall. Everything seems fine, you push it, open a PR, approved, you merge it!

You QA sees your ticket, tests the flow you did, everything seems to work. It's friday, and we know that friday is "deploy to production day"... And you do it.

Mid-weekend your boss calls you saying that the user can't pay, the button is broken and you are losing money, world is ending.

Hopefully, none of us will be caught in a situation like this, to (hopefully) help with that, I'm giving this talk.

## Why?

I've already heard of e2e tests, they're always breaking and they're difficult to write and run. I don't wanna write them.

And that was my idea, and unfortunately is the idea that lots of people share. I hope to shake it a little bit by the end of this talk

## Cypress.io

Cypress.io is a e2e testing framework based on puppeteer, a node library to control chrome. There are many more. I've chosen Cypress for this talk because of how easy it is to setup and run e2e tests.

## So easy that I'm live coding

I've built a small demo application where users can buy football tickets for the 3 big teams in Portugal.
You can add tickets to cart, update them, remove from cart, and in the end, you can "buy" the tickets. And that's it.

## Live coding

- Start writing tests:

- Add items to cart (the hard way)
    - show runner

- Create new file to test the calculation
    - show Commands
    - show beforeEach

- Show running it on the command line

- Create branch with new tests and push to CI
    - Show circle CI integration

- Bonus: Image diffs
