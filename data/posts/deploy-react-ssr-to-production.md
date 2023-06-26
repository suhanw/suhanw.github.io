---
pin_order: 7
title: Deploy React SSR to Production
description: How to deploy a React SSR app on Google Cloud Platform
image: https://cdn-images-1.medium.com/max/955/1*i7eATXxurPAPCyLIJ4X5xw.png
tags: nodejs,technology,javascript,react
canonical_url: https://javascript.plainenglish.io/deploy-react-ssr-to-production-26350e9985d1
date: '2021-06-02'
---

<figure>
	<img src='https://cdn-images-1.medium.com/max/955/1*i7eATXxurPAPCyLIJ4X5xw.png'>
</figure>

This is the sequel to [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering), so check that out if you haven’t already.

Let’s deploy a basic React SSR app on Google Cloud Platform (GCP).

In this article, I’ll deploy a _Web Application Server_, upload webpack bundles to _Cloud Storage_, and serve those bundles via _CDN._ I’m using the italicized terms as defined in this excellent article, [Web Architecture 101](https://engineering.videoblocks.com/web-architecture-101-a3224e126947) by [Jonathan Fulton](https://medium.com/u/d05e0fdb8e4f).

Let’s accomplish this in two parts.

_Part 1: Build and start the app locally._

_Part 2: Deploy to the cloud._

***

### Part 1: Build and start the app locally

Here’s the big picture:

1. Transpile client-side and server-side bundles via webpack.
2. Start a static server to serve the client-side bundles.
3. Start the server-side bundle as the Web Application Server.

For reference, here’s the [Github repo](https://github.com/suhanw/blog-react-ssr/tree/local-build) for the code used in this section.

***

#### React component

Let’s create a simple React component App, which renders our favorite greeting with some basic styles, as well as a button that displays an alert dialog when clicked. We will render this component on the server-side and hydrate it on the client-side.

<script src='https://gist.github.com/suhanw/22786482aae23f82852b3fa15faf46e0.js'></script>

<script src='https://gist.github.com/suhanw/ff1f2997761dbec42ae3a80b7c7bdca2.js'></script>

***

#### webpack configs

Instead of using `webpack-dev-server` to build the client-side bundles in memory (like in [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering)), we’ll be writing the bundle output into files, and starting a local static server to serve those files. Note the annotated lines below.

<script src='https://gist.github.com/suhanw/a8805ba3726a51525c5df782374e8a54.js'></script>

Annotations of the code comments above:

**[A]** Save client-side bundle output to `./build/client`

**[B]** Write JavaScript code into .`/scripts/bundle.js`

**[C]** Write CSS code into `./styles/bundle.css`

The other settings are not super relevant to what we’re trying to accomplish here, but more details can be found in [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering).

***

#### HTML response

While the HTML markup will be server-side rendered, we need to make sure the bundled JS and CSS files are downloaded on the client-side to “hydrate” the markup.

<script src='https://gist.github.com/suhanw/9951fb3e09f6628cbf9d92deeced204e.js'></script>

Annotations of the code comments above:

**[A]** This turns the React component App into an HTML string, which we then insert into the div with the ID **“ssr-app”**. I.e., the SSR-ed markup.

**[B]** This loads the CSS code to style the DOM elements in our SSR-ed markup.

**[C]** This loads the JS code to “hydrate” the markup with interactivity. In this example, it attaches the click handler to the button.

**[D]** This is the local static server that serves the client-side bundles.

Cool, cool, cool. 

***

#### Build and start scripts

Let’s define several npm scripts to build and start our app locally. Think of these as the steps to get our app up and running.

<script src='https://gist.github.com/suhanw/dd77beae65b50b16ccb5b52471889394.js'></script>

- `build:client` — This tells webpack to build the client-side code and save the bundle output in `./build/client`.
- `build:server` — This tells webpack to build the server-side code and save the bundle output to `./build/server/bundle.js`.
- `prebuild` — This uses [rimraf](https://github.com/isaacs/rimraf) to delete the `./build` folder.
- `build` — Runs `build:client` and `build:server` in parallel.
- `start:client` — This serves `./build/client` as static files on `http://localhost:5000`, using the aptly named library [serve](https://github.com/vercel/serve). Note that this is the `cdnHost` we insert into the HTML response above.
- `start:server` — This starts the Express server on `http://localhost:3000`.
- `start:local` — Runs `start:client` and `start:server` in parallel.

***

#### Putting it all together

In the terminal, let’s run the npm scripts in the following order:

1. `npm run build`
2. `npm run start:local`

Our SSR app is now up and running on `http://localhost:3000`! 🎉

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*V8TXde5Bpc_OoTeQdbxf6A.png'>
</figure>

Clicking the button should trigger the alert dialog! 🙌

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*BEf6jWA_6lIFmEcohfV_iw.png'>
</figure>

***

### Part 2: Deploy to the cloud

We’ll now replicate what we just did locally, **in the cloud!**

<figure>
	<img src='https://cdn-images-1.medium.com/max/800/1*OuRPNKuAgKXQ3QdqmQg1AA.jpeg'><figcaption>Source: <a href="https://www.reddit.com/r/ProgrammerHumor/comments/6cer5t/what_are_clouds_made_of/">Reddit</a></figcaption>
</figure>

***

Again, here’s the big picture:

1. Use GCP Cloud Build to execute the following build steps.
2. Transpile client-side and server-side bundles via webpack.
3. Upload the client-side bundles to GCP Cloud Storage, which will be served as static files over CDN.
4. Deploy the server-side bundle to GCP App Engine as the Web Application Server.

For reference, here’s the [Github repo](https://github.com/suhanw/blog-react-ssr/tree/deploy) for the code used in this section.

For this section, I’m assuming that you have some level of familiarity with GCP, including the fact that you’ve already signed up for an account.

**Please note there may be billing charges when you use GCP products/services!**

Take a deep breath, and here we go!

***

#### Create a new GCP project

Go to [IAM & Admin > Manage Resources](https://console.cloud.google.com/cloud-resource-manager) and create a new project. Let’s name this project `react-ssr`.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*B6FjoiNPtXTgX-Vk5Omz5Q.png'>
</figure>

Make sure the newly created project `react-ssr` is selected.

<figure>
	<img src='https://cdn-images-1.medium.com/max/886/1*YI9ou1Rw8kWTpYI0jVfNLQ.png'>
</figure>

***

#### Cloud Storage

Create a storage bucket to upload the client-side bundles. These will be served as static files via an actual CDN powered by GCP.

Go to [Cloud Storage > Browser](https://console.cloud.google.com/storage/browser) and create a new bucket. Let’s name it `react-ssr` to be consistent. Use default settings for the rest of the options.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*UwWWbp08J6epNBxrEWM04g.png'>
</figure>

Once the bucket is created, you should see something like this.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*_IiXV2fWTfO8BbRHhlVv3w.png'>
</figure>

Drill into the `react-ssr` bucket, click on the `Configuration` tab, edit the `Permissions > Access Control`, and set it to `Fine-grained`.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*sFMSu2uMbC1-WYUsCwNdeA.png'>
</figure>

Click on the `Permissions` tab, click on `Permissions > ADD`, and add the user `allUsers` with the role `Storage Legacy Object Reader` , to make the files in this storage bucket publicly readable.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*ISIl3e0ZNeMKDPQ6FEkAHQ.png'>
</figure>

***

#### App Engine

This service will manage containerization and scaling. For the purpose of this illustration, this simply means our app will be available over the interwebs via a URL.

Go to [App Engine > Dashboard](https://console.cloud.google.com/appengine) and create a new application. Pick your region accordingly.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*O9q2NgvplKYs1VVkZrYIgQ.png'>
</figure>

Once the application is created successfully, you should see something like this on your dashboard.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*-mIN_9raxln55U01vorf1A.png'>
</figure>

Next, enable the [App Engine Admin API](https://console.cloud.google.com/marketplace/product/google/appengine.googleapis.com).

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*2iwXnlM4VkSZqFlLJLJFfg.png'>
</figure>

Once enabled, you should see something like this.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*vcphMFF-51oB037BZOqOHg.png'>
</figure>

Next, we need to define the [runtime settings](https://cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml), via the `app.yaml` file in our codebase, for our Node.js app to be hosted on App Engine.

<script src='https://gist.github.com/suhanw/16eadcd1612d8810d467748a24e0a07e.js'></script>

Annotations of the code comments above:

**[A]** This tells App Engine the Node.js version you want to use for your app.

**[B]** This sets the runtime environment variable `NODE_ENV` with the value “production”, which we can access in our code via `process.env.NODE_ENV`.

Lastly, App Engine starts the app by running `npm start`, so let’s add that npm script to our `package.json`.

<script src='https://gist.github.com/suhanw/b18b7ddf97de7cc5504ca1d4e995a8d3.js'></script>

***

#### Cloud Build

We’ll be using Cloud Build to automate the app deployment every time we push commits to the source code repo.

First, let’s enable the [Cloud Build API](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com).

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*zJkXHOirjJRdPVAMRxslkA.png'>
</figure>

Once enabled, you should see something like this.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*bod8If6hZiqZUsxaru9sqg.png'>
</figure>

Next, go to [Cloud Build > Settings](https://console.cloud.google.com/cloud-build/settings/) and set the status of the **App Engine Admin** role and the **Service Account User** role to  **Enabled**.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*pTHGjblMZkCIwocb68Brtw.png'>
</figure>

For the purpose of this illustration, just think of the [Cloud Build service account](https://cloud.google.com/build/docs/securing-builds/configure-access-for-cloud-build-service-account) as the bot that automagically executes our build steps, uploads files to Cloud Storage, and deploys to App Engine.

Lastly, we define the series of build steps to deploy our app to the cloud in the `cloudbuild.yaml` file in our codebase. Cloud Build will execute these steps in consecutive order.

<script src='https://gist.github.com/suhanw/dbd9b4f22c06232f505eb2f115e4c346.js'></script>

Annotations of the code comments above:

**[A]** This runs `npm install` to install all our dependencies in the cloud, just like we would when we’re starting a new project locally.

**[B]** This runs `npm run build` to transpile our client-side and server-side bundles via webpack, and save the output to `./build`, with build-time environment variable `NODE_ENV` set to “production”, which we can access in our code via `process.env.NODE_ENV`.

**[C]** This uploads the files in the `./build` directory to the Cloud Storage bucket `react-ssr/build` which we created previously.

**[D]** This sets the Cloud Build [timeout to 1600s](https://cloud.google.com/build/docs/deploying-builds/deploy-appengine#configuring_the_deployment) and deploys the app to App Engine.

Lastly, let’s kick off automated builds every time we push a new git commit to the source repo by creating a build trigger. Go to [Cloud Build > Triggers](https://console.cloud.google.com/cloud-build/triggers), and create a trigger. Let’s name it `deploy-react-ssr`, and select Push to a branch as the repo event to kick off the automated build.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*qpkAeSZV7sXbJvzQEKiVJQ.png'>
</figure>

Select the source code repo which includes the build config file `cloudbuild.yaml`. Specify the regular expression for the branch that will start the trigger. In my example, I want to trigger the automated build every time I push commits to the `deploy` branch.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*aPRWHuXI3UOeitXH1WnzZA.png'>
</figure>

Once the trigger is successfully created, you should see something like this.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*Uz13gIx_Ya_jEBYHSrxcNQ.png'>
</figure>

***

#### HTML response

Similar to Part 1 above, we need to make sure the bundled JS and CSS files are downloaded on the client-side to “hydrate” the SSR-ed markup. The annotated lines below are slightly different from those in Part 1.

<script src='https://gist.github.com/suhanw/f636755485cf72d5a61a153e6e952b23.js'></script>

Annotations of the code comments above:

**[A]** In production, App Engine will set the `process.env.PORT` environment variable to the port that receives HTTP requests over the interwebs.

**[B]** In production, this is the static server that serves the client-side bundles uploaded to Cloud Storage. Note: there are additional steps to actually enable the Cloud CDN service, but not super relevant to this illustration.

***

#### Putting it all together

You’re still here? Awesome!

Here’s the workflow that brings all of the above together:

1. Push a commit to the `deploy` branch in the source code repo.

2. The commit triggers Cloud Build to kick off an automated build. Go to [Cloud Build > History](https://console.cloud.google.com/cloud-build/builds) for the history of builds and the associated commits.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*3VWR5S8bI6_9MByrOIaCTA.png'>
</figure>

3. In a given build, the steps defined in `cloudbuild.yaml` are executed.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*NrsX2l3eRuuSJk4ECQ_xUA.png'>
</figure>

4. The client-side bundles are uploaded to Cloud Storage.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*zCz2fUu95c-HifUJM2v00A.png'>
</figure>

5. The Web Application Server is deployed to App Engine.

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*s2vmSGUimC8gVj1kluDpgA.png'>
</figure>

6. The SSR app is now up and running in the cloud! 😍

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*M-8Atpg9mjcJqhJIkRlEfQ.png'>
</figure>

***

### Resources

- [Cloud Build: Building Node.js applications](https://cloud.google.com/build/docs/building/build-nodejs?hl=en)
- [Cloud Build: Automated static website publishing with Cloud Build](https://cloud.google.com/community/tutorials/automated-publishing-cloud-build)
- [Cloud Build: Creating GitHub App triggers](https://cloud.google.com/build/docs/automating-builds/create-github-app-triggers)
- [App Engine: Building a Node.js app on App Engine](https://cloud.google.com/appengine/docs/standard/nodejs/building-app)
- [App Engine: Using Cloud Storage](https://cloud.google.com/appengine/docs/standard/nodejs/using-cloud-storage)
- [Cloud Storage: Accessing Public Data](https://cloud.google.com/storage/docs/access-public-data#api-link)

***

### Read More

- [Use GitHub Actions to Deploy a Next.js SSG Site](https://www.suhanwijaya.com/posts/use-github-actions-deploy-nextjs-ssg-site)
- [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering)
- [Decouple Data from UI with React Hooks](https://www.suhanwijaya.com/posts/decouple-data-from-ui-with-react-hooks)
