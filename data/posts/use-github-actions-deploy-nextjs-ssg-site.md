---
pin_order: 1
title: Use GitHub Actions to Deploy a Next.js SSG Site
description: Automate all the things!
image: https://www.suhanwijaya.com/images/use-github-actions-deploy-nextjs-ssg-site.jpeg
tags: nextjs,technology,javascript,github
# canonical_url: https://medium.com/javascript-in-plain-english/how-to-decouple-data-from-ui-in-react-d6b1516f4f0b
author: Suhan Wijaya
date: '2021-09-24'
---

<figure>
	<img src='/images/use-github-actions-deploy-nextjs-ssg-site.jpeg'>
	<figcaption>Source: <a href="https://www.reddit.com/r/ProgrammerHumor/comments/f0ag3i/automation/">Reddit</a></figcaption>
</figure>

Let's use GitHub Actions to create a basic deployment pipeline for a Next.js SSG site hosted on Github Pages.

For reference, here’s the [Github repo](https://github.com/suhanw/suhanw.github.io) for the code used in this article.

***

### Optional Readings

This article will be laser-focused on setting up GitHub Actions, so I may gloss over technical details I consider ancillary. Here are some background readings if you're interested: 

- The [docs](https://nextjs.org/docs/advanced-features/static-html-export) on how to build an SSG site with Next.js. For the purpose of this article, AYNTK is to use the `next build` and `next export` commands to generate the files for a static site.

- The [docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) on how to publish a static site on GitHub Pages. For the purpose of this article, AYNTK is to commit and push the build files within the `docs` folder in the project root directory to deploy the site. 

- The [definitions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions) of the different components of a GitHub Actions pipeline. 

***

### Big Picture

Let's create a GitHub Actions pipeline to automate the following steps:

1. Check out the GitHub repo
2. Setup Node.js
4. Install dependencies (or use cache if no changes)
5. Build the files for the static site (or use cache if no changes)
3. Cache dependencies and source files
6. Commit and push the build files to repo

*** 

### Create a Workflow

GitHub Actions uses YAML syntax to define the events, jobs, and steps. These YAML files are stored in the code repository, in a directory called `.github/workflows`. So let's create a YAML file to define the deployment workflow. 

```yaml
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
```
Annotations of the code comments above:   

**[A]** Pushing a commit to the GitHub repo is the event that triggers the workflow.   
**[B]** Configures the job to run on a fresh Ubuntu Linux virtual machine hosted by GitHub (aka the Runner).   
**[C]** The [action](https://github.com/actions/checkout) to check out the repo and download the code into the Runner.   
**[D]** The [action](https://github.com/actions/setup-node) to install Node.js in the Runner, and allow us to run `npm` commands.   

***

Next, add the step to install the project dependencies in the Runner, which include the `next` package. 

```diff
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
+     - run: npm install # [E]
```

**[E]** Ah, our old friend.   

***

Now that the dependencies are installed, let’s add the step to build the static files. 
```diff
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
      - run: npm install # [E]
+     - run: npm run build # [F]
```

**[F]** What the heck is `build` you ask? It’s a script defined in `package.json` that runs: 
```bash
next build && next export -o docs
```
See the [docs](https://nextjs.org/docs/advanced-features/static-html-export). TL;DR, these are the Next.js commands to build the files for the SSG site, and export them to the `docs` folder. 

***

Lastly, add the step to commit and push the updates to the `docs` folder to the repo. 

```diff
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
      - run: npm install # [E]
      - run: npm run build # [F]
+     - uses: stefanzweifel/git-auto-commit-action@v4 # [G]
+       with:
+         commit_message: Automated publish
```

**[G]** This [action](https://github.com/marketplace/actions/git-auto-commit) will commit changes made in the Runner environment, and push the commit to the GitHub repo. The default commit message will be “Automated publish”.   

Now, pushing a change to the repo will automatically deploy my SSG site to GitHub Pages. 🎉

I can now stare at the pipeline in the [Actions tab of my GitHub repo](https://github.com/suhanw/suhanw.github.io/actions). 

***

### Caching

I realized that the job runs a fresh `npm install` every time I push a commit. So let's introduce caching so that a fresh install occurs only when `package-lock.json` changes. 

```diff
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
+     - uses: actions/cache@v2 # [H]
+       with:
+         path: ${{ github.workspace }}/node_modules
+         key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}
      - run: npm install # [E]
      - run: npm run build # [F]
      - uses: stefanzweifel/git-auto-commit-action@v4 # [G]
        with:
          commit_message: Automated publish
```

**[H]** This [action](https://github.com/actions/cache) caches the `node_modules` folder across builds, and makes the Runner use the cache as long as  `package-lock.json` doesn’t change. 

Additionally, noticed that `next build` issues the following warning about lack of caching. 

```
warn  - No build cache found. Please configure build caching for faster rebuilds. 
Read more: https://err.sh/next.js/no-cache
```

The warning links you to the [answer](https://nextjs.org/docs/messages/no-cache#github-actions) to fix it. Love it.

```diff
# ./.github/workflows/deploy.workflow.yml

name: deploy-workflow
on: [push] # [A]
jobs:
  deploy-job:
    runs-on: ubuntu-latest # [B]
    steps:
      - uses: actions/checkout@v2 # [C]
      - uses: actions/setup-node@v2 # [D]
        with:
          node-version: '12'
      - uses: actions/cache@v2 # [H]
        with:
-         path: ${{ github.workspace }}/node_modules
+         path: |
+           ${{ github.workspace }}/node_modules
+           ${{ github.workspace }}/.next/cache # [I]
-         key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}
+         # Generate a new cache whenever packages or source files change.
+         key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.js') }}
+         # If source files changed but packages didn't, rebuild from a prior cache. 
+         restore-keys: |
+           ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
      - run: npm install # [E]
      - run: npm run build # [F]
      - uses: stefanzweifel/git-auto-commit-action@v4 # [G]
        with:
          commit_message: Automated publish
```
**[I]** Next.js stores its cache in the `.next/cache` directory. This will persist the cache across builds for faster application rebuilds. E.g,, if I only updated my codebase but not the dependencies, this avoids re-bundling the dependencies. 

Improved deployment time by about ~30%! 🥰

***

### Read More 

- [Deploy React SSR to Production](https://www.suhanwijaya.com/posts/deploy-react-ssr-to-production)
- [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering)
- [Decouple Data from UI with React Hooks](https://www.suhanwijaya.com/posts/decouple-data-from-ui-with-react-hooks)

***

📫 _Let’s connect on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or _[_Twitter_](https://twitter.com/suhanw)_!_