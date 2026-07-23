# Appendix E. Skills and Study

The role's bar is stated in chapter 6; this appendix is for the engineer trying to reach or hold it. Eight skills, each with why it matters in this job specifically, what to read, and how to practice. The books are stable; check publication years and prefer current editions. Reading is the smaller half — every skill here decays without field use, which is why each section ends with practice, not pages.

## 1. Engineering generalism

The field never hands you a clean stack. Generalism for this job is five sub-skills, not one virtue.

**Systems and data fundamentals.** Kleppmann's *Designing Data-Intensive Applications* is the spine — read it with a warehouse open, not on a beach. *Software Engineering at Google* (free online) shows how a core product organization thinks, which the field engineer must understand to extract into one. MIT's *Missing Semester* (free) patches the unglamorous glue: shell, git internals, debugging tooling.

**Production hardening.** Nygard's *Release It!* is the most field-relevant engineering book in this appendix — stability patterns, bulkheads, circuit breakers, written from consulting war stories that read like engagements. The Google SRE book (free) for operating discipline; Gregg's *Systems Performance* for the day the customer says "it's slow" and nothing else.

**Living in other people's systems.** Feathers' *Working Effectively with Legacy Code* for changing code you didn't write and can't fully test. Bellotti's *Kill It with Fire* for modernizing enterprise systems without pretending you'll rewrite them. Fowler's *Patterns of Enterprise Application Architecture* for the vocabulary of the applications you'll be reading — layering, records, mappers, the shapes enterprise code actually takes. Hohpe and Woolf's *Enterprise Integration Patterns* for the messaging seams between those applications: dated examples, permanent vocabulary. Agans' *Debugging: The 9 Indispensable Rules* — thin, old, and the best systematic treatment of finding faults in unfamiliar systems.

**Architecture judgment under a time-box.** Ousterhout's *A Philosophy of Software Design* for complexity judgment — it directly serves the Overfit Decision. Richards and Ford's *Fundamentals of Software Architecture* for trade-off literacy. Ford, Parsons, and Kua's *Building Evolutionary Architectures* for the discipline this method quietly depends on: architecture that tolerates change, checked by fitness functions rather than review-board opinion — which is what edge code must be if it is ever to generalize into the platform. Nygard's original blog post on architecture decision records is enough ADR theory; the Ledger descends from it.

**Continuous breadth.** Julia Evans' zines and blog for the fastest patch to any single infrastructure gap — and the right tone for field explanations. Dan Luu's essays and curated postmortem collections: reading other people's production failures is cheap field experience.

**Practice.** Build something end-to-end monthly — data in, product out, deployed, monitored. Integrate against a real third-party API's sandbox, auth flow included. Take a messy public dataset from raw dump to queryable model in a day. Read one incident postmortem a week the way pilots read accident reports.

## 2. Data craft

Discovery starts in the data, and the data is always worse than briefed. The Data Walk (chapter 8) assumes SQL fluency and fearlessness in a strange warehouse. dbt's free learning materials teach the modeling mindset; the rest is repetition on genuinely messy datasets — public claims, procurement, or health data, not curated tutorials.

**Practice.** Weekly: one dataset you've never seen, one hour, three findings the metadata didn't tell you.

## 3. Model literacy

An engineer tuning probabilistic systems in production should know what sits beneath the API. Géron's *Hands-On Machine Learning* covers classical machine learning and deep learning in one practical volume — enough to know when a problem doesn't need a language model at all, which the field rediscovers weekly. Alammar and Grootendorst's *Hands-On Large Language Models* covers transformers, embeddings, and retrieval-augmented generation with unusual visual clarity — the right single book for the generative layer most engagements now build on. Raschka's *Build a Large Language Model (From Scratch)* is the deeper option for engineers who want the mechanics under their fingers.

**Practice.** Build one small classical model on customer-shaped tabular data and one RAG pipeline over a messy document corpus; eval both; notice which failure modes each hides.

## 4. The AI-native layer

Eval construction, agentic system design, context engineering — chapter 13's territory, and part of the technical bar, not a specialization. Eval construction is the most underdeveloped skill in the field and the most differentiating. Anthropic's "Building Effective Agents" essay and the OpenAI Cookbook for design patterns; promptfoo and Inspect documentation for the harness craft; Chip Huyen's *AI Engineering* for the production view, including retrieval systems at scale.

**Practice.** Take a system you've built and construct its eval suite from real cases until the suite catches something a demo missed. Repeat until that stops surprising you.

## 5. Discovery in ambiguity

What people say they need and what their data shows they need are different documents; the skill is extracting the second without disrespecting the first. Fitzpatrick's *The Mom Test* is the best short book on non-leading customer conversations. Basecamp's *Shape Up* (free) teaches problem-shaping under an appetite, which is the Charter's outcome question in different clothes.

**Practice.** In your next three discovery conversations, ask only about what happened, never about what they want. Compare what you learn.

## 6. Status dynamics and institutional politics

Palantir handed its field engineers Keith Johnstone's *Impro* — a theater book — to teach status reading, and it remains the canon choice for a reason. Maister's *The Trusted Advisor* teaches the counselor-not-vendor posture the Sponsor relationship needs. The Terrain Map (chapter 8) is where this skill becomes an artifact.

**Practice.** After every meeting, write down who held status, who deferred, and what each person was protecting. Check your reads against the Field Strategist's.

## 7. Communication across altitudes

The same Showcase must land for a claims adjuster and a vice president. Minto's *The Pyramid Principle* for executive-facing structure. Doumont's *Trees, Maps, and Theorems* for technical articulation — the most rigorous treatment of structuring a message for an audience, written for engineers and scientists. The Heath brothers' *Made to Stick* for why some explanations survive the meeting and most don't. Berkun's *Confessions of a Public Speaker* for delivery: honest about nerves, rooms, and what practice actually looks like. The real training is the Loop itself: a weekly demonstration to a mixed room, on the record, with a number on screen.

**Practice.** Before each Showcase, write the one sentence each audience in the room should remember. If two audiences need the same sentence, you haven't thought about one of them.

## 8. Commercial literacy

Understanding margins, deal economics, and procurement separates the engineer who gets invited to the account conversation from the one who doesn't. Read the essays this book's Part III argues with: Schmidt's "Trading Margin for Moat," Andrusko's "The Palantirization of Everything," Wu's economics critique, Otter's SAP-history essay. Read the first-hand accounts regardless of role: Qureshi's "Reflections on Palantir" and Ganesh's "Definitive Guide to Forward Deployed Engineering."

**Practice.** For your current engagement, work out what it costs your company, what the contract pays, and where those numbers land on the books. If you can't, ask — the asking is the practice.
