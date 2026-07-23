# Style Guide

Every file in this repo gets reviewed against this document before it merges. The guide exists because this book competes for shelf space with Kent Beck, Martin Fowler, the Scrum Guide, and the Google SRE book. Readers of those authors can smell filler from a page away.

## Voice

Two registers, chosen by chapter type:

- **Conceptual chapters** (definitions, theory, economics): Martin Fowler's register. Calm, precise, analytical. Define a term before using it. When two schools of thought exist, present both and say which one this book takes and why.
- **Practice chapters** (the method in action): Kent Beck's and Ryan Singer's register. Direct, second person where natural, grounded in a specific scene. "You are three weeks into the engagement and the customer's data is worse than anyone admitted" beats any abstract framing.

Always first-person practitioner. The author has done this work. Write from the deployment, not from the library.

## Stories first

Model: the Google SRE book and *The Phoenix Project*. Those books made operations compelling by narrating what went wrong before naming what to do. Follow the same shape:

- Open a chapter with a scene, not a definition. Extract the principle from the story; never bolt a story onto a principle.
- The book's scenes use a recurring fictional cast — Advik and Adit (engineers), Mara and Priya (Field Strategists), and three customers: Meridian National Bank, Cascade Health, Granite Mutual. They are composites built from real practice and the documented record, disclosed up front in "A Note on the Stories." Fiction changes none of the craft rules below, and it adds one: the world stays consistent. Same sponsors, same numbers, same week counts across chapters; a new scene must fit the established threads or change them everywhere.
- Stories are specific: dates, durations, team sizes, what the dashboard showed, what the customer said. Vague stories ("a large enterprise struggled with adoption") persuade no one.
- One story per point. A story that illustrates three points illustrates none.
- Keep the analytical spine visible: after the story, state the principle plainly in one or two sentences a reader can quote without the story.

## Numbers over adjectives

Model: DORA and SRE. DORA anchored an entire movement in four measurable outcomes; SRE made its rules falsifiable (the 50% toil cap, error budgets). Copy the posture:

- Prefer a measurable statement to a qualitative one wherever the practice allows. "Ship to production within the first two weeks" beats "ship early".
- Every named practice should say what you would measure to know it is working.
- When the book defines an operating rule, make it falsifiable: someone must be able to check whether a team follows it.

## Sentences

- Default to short declarative sentences. One idea per sentence.
- Vary rhythm. A page of uniform 12-word sentences reads as machine output.
- Active voice unless the actor is genuinely unknown or irrelevant.
- No rhetorical questions.
- No sentence that could be deleted without losing information.

## Words

Banned outright: delve, leverage (as a verb), robust, crucial, seamless, holistic, journey, empower, unlock, supercharge, game-changing, cutting-edge, best-in-class, utilize, foster, streamline, "in today's fast-paced world", "it's important to note", "at the end of the day".

Suspect on sight (justify or cut): ensure, enable, drive (transitive), key (as adjective), critical, comprehensive, powerful.

Plain replacements win: use, not utilize; help, not facilitate; start, not commence.

## Structure

- No symmetric bullet triads. If every list you write has three items of matching length, you are patterning, not thinking.
- No stat chains — fragments strung together with middle dots or dashes ("6 weeks · 5 values · 11 principles"). The pattern performs information without carrying any. If the numbers matter, give them a sentence; if they don't, cut them.
- Bullets carry facts. Arguments get paragraphs.
- No section that exists to mirror another section. Structure follows content.
- Headers name their content plainly. No clever-only headers, no colon-subtitle headers ("Deployment: A Journey of Discovery").

## Claims and evidence

- Every claim gets an example, a number, or a named source. A claim with none of these gets cut or marked as opinion.
- "It depends" is allowed only when followed by what it depends on.
- State trade-offs with their context of applicability. A recommendation without a stated context is dogma.
- Distinguish what we know from field experience, what we take from published sources, and what is conjecture. The reader should never have to guess which is which.

## Terms

- Every coined term gets a definition at first use and an entry in the glossary.
- Coin few terms. Ten or fewer for the whole methodology. A term earns its place only if the concept recurs and no existing word serves.
- Defend terms against drift: if a chapter uses a defined term loosely, fix the chapter, not the definition.

## Practices

Write each named practice in pattern form:

1. **Context** — when you would reach for this
2. **Problem** — the tension the practice resolves
3. **Forces** — why the obvious answers fail
4. **Solution** — what to do, concretely enough to execute Monday morning
5. **Consequences** — what it costs, what it breaks, when to stop

Label each practice with an evidence level: **proven** (used repeatedly in the field by the author or documented sources), **promising** (used successfully but narrowly), **experimental** (reasoned but unproven). Do not promote a label without new evidence.

## The read-aloud test

Before a chapter is done, read it aloud. Cut anything you would be embarrassed to say to a colleague across a desk. If a paragraph sounds like a press release, a LinkedIn post, or a model's default cadence, rewrite it from the scene it describes: what actually happened, who said what, what broke.
