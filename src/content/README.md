# Content Layer Architecture

The `/src/content/` directory contains localized text configurations for the SpaceProbe Website v2 pages.

## Guidelines

- All textual headers, copy body blocks, and CTA labels must reside in this directory.
- Avoid hardcoding text inside layout or visual presentation components.
- By segmenting copy, we ensure future headless CMS integrations require minimal component refactoring.

## Intended Structure

When page development begins, create files matching `<domain-name>.content.ts` or `<page-name>.content.ts`:

- `src/content/home.content.ts`
- `src/content/about.content.ts`
- `src/content/solutions.content.ts`
- `src/content/resources.content.ts`

Each content file must implement the `PageContent` interface defined in `@/types/content`.
