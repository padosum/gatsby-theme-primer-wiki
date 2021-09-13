---
tags:
  - Dev
  - Format
---

# Foam File Format

This file is an example of a valid Foam file. Essentially it's just a markdown file with a bit of additional support for MediaWiki-style `[[wikilinks]]`.

Here are a few specific constraints, mainly because our tooling is a bit fragmented. Most of these should be eventually lifted, and our requirement should just be "Markdown with `[[wikilinks]]`:

- **The first top level `# Heading` will be used as title for the note.**
  - If not available, we will use the file name
- **File name should have extension `.md`**
  - This is a temporary limitation and will be lifted in future versions.
  - At least `.mdx` will be supported, but ideally we'll support any file that you can map to `Markdown` language mode in VS Code
- **In addition to normal Markdown Links syntax you can use `[[MediaWiki]]` links.** See [[wikilinks]] for more details.

[//begin]: # "Autogenerated link references for markdown compatibility"
[wikilinks]: ../wikilinks.md "Wikilinks"
[//end]: # "Autogenerated link references"