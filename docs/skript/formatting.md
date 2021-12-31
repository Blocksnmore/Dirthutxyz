---
description: Learn how to format your text in Skript.
sidebar_position: 6
---

# Formatting

## Coloring

You can set the color of your text two ways: color codes, and hex codes. There are 16 color codes: 

| Code | Color       | Code | Color       |
| ---- | ----------- | ---- | ----------- |
| &0   | Black       | &8   | Dark Gray   | 
| &1   | Dark Blue   | &9   | Light Blue  |
| &2   | Dark Green  | &a   | Light Green |
| &3   | Aqua        | &b   | Light Blue  |
| &4   | Dark Red    | &c   | Light Red   |
| &5   | Dark Purple | &d   | Light Purple|
| &6   | Gold        | &e   | Yellow      |
| &7   | Light Gray  | &f   | White       |

You can use these color codes by putting a "&" and then the number/letter right after. You can use hex codes by putting "&lt;\#\#", a hex code \(a 6 digit hexadecimal string\), and a closing "&gt;".

## Markdown

You can change the style of your text by making it bold, italics, obfuscated, and more! There are 6 'markdown codes':

| Code | Style         | Code | Style         |
| ---- | ------------- | ---- | ------------- |
| &k   | Obfuscated    | &n   | Underline     | 
| &l   | Bold          | &o   | Italics       |
| &m   | Strikethrough | &r   | Reset         |

You can use these the same way you'd use color codes.

## Text Attributes

With text attributes, you are able to do many things, for example, text that brings you to a link when clicked, or text that makes the player execute a command when clicked! There are 4 types of attributes: url, cmd, suggest command, and tooltip. This is what each one does: url; Requests to open a link in the user's browser when clicked cmd; Makes the user execute a command when clicked \(Note that you must put a / before the command name to make the command execute, otherwise the player will say the name in chat.\) suggest command; When clicked, it opens the user's chat and puts a command when clicked, but does not automatically execute it. tooltip; When hovering over text, a blurb of text will appear.

In order to use them, you wanna put "." In order to prevent future text from having the attribute, put a "" \(or ""\) in front of the text you want to have the attributes.

Here are some images of the attributes in action:

![](/img/cmd.png) ![](/img/suggest.png) ![](/img/url.png) ![](/img/tooltip.png)
