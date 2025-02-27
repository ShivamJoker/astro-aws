---
layout: ../../layouts/DocsLayout.astro
section: Start Here
title: Getting Started
---

# Getting Started

## What is Astro AWS

Astro AWS is an [Astro](https://astro.build/) SSR adapter and constructs for deploying your Astro application to AWS.

## Start your first Astro project

Create a new Astro project using the `create-astro` CLI then add the Astro AWS adapter.

### Using NPM

```sh
npm create astro@latest
npx astro add @astro-aws/adapter
```

### Using Yarn

```sh
yarn create astro@latest
yarn astro add @astro-aws/adapter
```

### Using PNPM

```sh
pnpm create astro@latest
pnpm astro add @astro-aws/adapter
```

## Build your Astro project

### Using NPM

```sh
npm run build
```

### Using Yarn

```sh
yarn build
```

### Using PNPM

```sh
pnpm run build
```

## Start your first AWS CDK project

### Create a new AWS CDK project using the CDK cli.

```sh
npm i -g aws-cdk

mkdir my-cdk-project
cd my-cdk-project

cdk init app --language typescript
```

### Add the `@astro-aws/constructs` package

```sh
npm i @astro-aws/constructs
```

### Modify `lib/hello-cdk-stack.ts` to contain the following

```ts
import { Stack } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import { AstroAWSConstruct } from "@astro-aws/constructs";

export interface HelloCdkStackProps extends StackProps {}

export class HelloCdkStack extends Stack {
	public constructor(scope: Construct, id: string, props: HelloCdkStackProps) {
		super(scope, id, props);

		new AstroAWSConstruct(this, "AstroAWSConstruct", {
			output: "server",
			websitePath: "../my-astro-project",
		});
	}
}
```

### Deploy your cdk project

```sh
cdk deploy
```
