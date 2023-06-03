---
pin_order: 8
title: Designing a “white-label” e-commerce web app
description: Streamlining development and deployment with a monorepo
image: https://www.suhanwijaya.com/images/designing-white-label-web-app-cover.jpg
tags: javascript,webdev,monorepo,ecommerce
date: '2023-06-03'
---

<figure>
    <img src="/images/designing-white-label-web-app-cover.jpg">
</figure>

***

A big challenge we had to tackle recently was to scale up our existing e-commerce web application which has been designed for a single retailer brand, to deploy multiple storefronts for various retailers that sign up for our “white label” service. 

In addition, our solution needs to account for several requirements and constraints:
- avoid major rewrites and maintain code reusability
- address internationalization and localization specific to each retailer
- address theming and branding specific to each retailer
- allow for various degrees of customization and extensibility of features
- a deployment strategy that scales with the number of retailers

***

### Monorepo Structure

<figure>
    <img src="/images/designing-white-label-web-app-monorepo-structure.png">
</figure>


A monorepo structure refers to a single repository that houses multiple applications. In our case, each retailer has its own application (`app`), that consumes either retailer-specific libraries (`lib`), or shared libraries that are reusable across retailers.

1. One `app` per retailer:
    - Each retailer has its own dedicated app within the monorepo. 
    - The retailer app does not contain any components, services, or business logic. It instead configures dependency injection and wires up libs, based on retailer-specific configs.
    - Retailer-specific environment variables and configs are managed within the respective app, ensuring a tailored experience for each retailer.
2. One retailer-specific `lib` per retailer:
    - Code that is unique to each retailer lives in this `lib`, comprising approximately 10-20% of the overall code.
    - Examples of retailer-specific code include internationalization/localization content, branding color schemes and typography, and any business logic particular to the retailer.
    - These retailer-specific libraries must adhere to a common interface, enabling easy integration into shared libraries and components.
3. Multiple shared `lib`s reusable across retailers:
    - Shared libraries constitute the majority of the codebase, accounting for approximately 80-90% of the overall code.
    - These shared libraries contain reusable code that can be utilized by all retailers, ensuring consistency and promoting code reusability.
    - By default, new features are implemented within shared libraries to enable seamless inheritance across retailers.

***

### Broad Strategy

<figure>
    <img src="https://media.tenor.com/HnurQKt7zSQAAAAC/jim-carrey-jim-carrey-typing.gif">
</figure>

To efficiently manage code within the monorepo structure, here’s the general strategy that governs where features are implemented and how the code is organized.

1. Shared libraries for common features:
    - Unless explicitly specified, new features are implemented within shared libraries, allowing all retailers, including future retailers, to inherit these features by default.
    - This approach ensures consistency across all retailers and simplifies maintaining feature parity.
2. Retailer-specific libraries for unique features:
    - If there is a clear distinction in business logic between retailers, or a feature is particular to a retailer, it is implemented within retailer-specific libraries.
    - Retailer-specific libraries follow the same interface requirements, enabling seamless integration with shared libraries and components.
    - For instance, each retailer must have a `Logo` component. The shared `TopNav` component imports the appropriate `Logo` component based on the compile configurations defined in the retailer app.
3. Flexibility in code organization:
    - Depending on the complexity of retailer-specific logic, code organization within retailer-specific libraries can be high-level or low-level.
    - For example, we can create a distinct `TopNav` component for each retailer to display a retailer-specific logo.
    - Alternatively, all retailers can use a shared `TopNav` component that has common UI features, while importing a retailer-specific `Logo` component.

***

### Deployment Mechanism

<figure>
    <img src="/images/designing-white-label-web-app-deploy-chart.png">
</figure>

Efficient deployment is crucial to propagate updates correctly across retailers and to avoid unnecessary deployments. The logic is essentially this:

1. Perform code change analysis between the most recent commit and the last commit that triggered a successful production deployment. 
2. If updates were made only to retailer-specific code, only deploy that particular retailer storefront.
3. If updates were made to code that’s shared across all or some retailers, only deploy the retailer storefronts with changed dependencies. 
4. Rinse and repeat. 

Thanks for reading. I may dive into the code in a future(ish 😅) article.