---
description: Learn how to contribute to Minehut.xyz
sidebar_position: 2
---

# Contribute

## About markdown

Markdown is a simple markup language that is used for formatting text with simple syntax. We use this language because of its simplicity and popularity.

We use the built in hints offered by our documentation tool [Docusaurus](https://docusaurus.io/)

To create a hint use the following:

```md
:::type
Your Markdown
:::
```

:::info
You can use the following types for your hints: `note, tip, info, caution, danger`
:::

Inside the hints you can use any markdown you want.

### Hint examples

:::note
This is a `note` hint.
:::

:::tip
This is a `tip` hint.
:::

:::info
This is a `info` hint.
:::

:::caution
This is a `caution` hint.
:::

:::danger
This is a `danger` hint.
:::

#### Source

```md
:::note
This is a `note` hint.
:::

:::tip
This is a `tip` hint.
:::

:::info
This is a `info` hint.
:::

:::caution
This is a `caution` hint.
:::

:::danger
This is a `danger` hint.
:::
```

## How to contribute

You can contribute to minehut.xyz by making a [pull request at our GitHub](https://github.com/TeamMH/minehut.xyz). You will need a GitHub account for this.

## How to make a pull request

To create a file click on `Add new file` in the the directory you want to create the file 

:::tip
A file in `/docs/example.md` would route to `/example`

A file in `/docs/category/page.md` would route to `/category/page`
:::

To create a category just create a folder in the `docs` directory and then create a `.md` file. Inside that file paste the following template:

```md
---
description: Page description
author: Optional spot to place who wrote this article
---

<-- 
    Make sure to only have 1 main header (#) in your page, you can have as many sub-headers as you want
-->
# Title

## Section 1

Text

## Section 2

:::info
Example hint
:::

Text
```

The entire page can be made in Markdown. Once you're finished with it click `Propose new file`