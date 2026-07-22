# 1. The Job

> [SCENE SLOT — Aravind: a day mid-engagement — the messiest, most representative one. Candidate prompts: the day at the health insurer or the financing org that had all of it — a data surprise in the morning, a tense meeting at noon, shipped code by evening. Needed: what broke, who was in the room, what you actually did hour by hour. Two to four paragraphs; I will edit for rhythm.]

There is a kind of engineer who works inside other people's companies. Not visiting — working. They have a badge for a building their employer doesn't own, credentials on a network their employer doesn't run, and a standing meeting with people who appear on no org chart they belong to. They ship production code into that environment, against that customer's real data, and they are paid by the software company whose product they carry with them.

The title, most often, is Forward Deployed Engineer. The name comes from the military: a forward-deployed unit is stationed in the theater, near the action, instead of at headquarters. The job comes from a simple observation that this book will spend several chapters defending: for a certain class of software, the distance between the vendor's headquarters and the customer's reality is where projects die, and the cheapest way to close that distance is to put an engineer on the other side of it.

## A week in the field

What the job actually consists of is best shown at the scale of a week. The one that follows is a composite — assembled from documented accounts of the work and from the author's own engagements — and any single week will bend around whatever is on fire. The proportions are the point.

Monday is data. Something in the customer's warehouse doesn't match what last week's showcase assumed — a claims feed changed format, or a table that was supposed to be authoritative turns out to be a copy someone stopped updating in March. You find this out not from a ticket but because you looked. An agent profiles the affected tables while you read the pipeline code; by afternoon you know whether this is an hour's patch or the week's real work.

Tuesday is building. The platform your company sells does most of what this customer needs; your job is the last mile — the connector their thirty-year-old policy system requires, the eval suite that proves the model's answers against their historical cases, the workflow screen their operations team will actually use. You work with agents the way the previous generation worked with IDEs: constantly and unremarkably. The volume of code produced would have taken a small team a month, a few years ago. Most of it is glue, and you are not sentimental about that, because the glue is where the outcome lives.

Wednesday there is a meeting that has nothing to do with engineering and everything to do with whether the engagement survives. A department head has realized your system touches their team's workflow. Your counterpart — the one who owns adoption and politics, the role this book calls the Field Strategist — has been expecting this for two weeks and knows what the department head needs to hear, and from whom. You attend, mostly to answer one technical question honestly. The meeting matters more than anything you will build this week.

Thursday is the Showcase. The customer's sponsor — the executive who owns the outcome — watches the system run against live data. The eval score is on screen next to the business number it drives. Two pieces of feedback would each consume a month; you take them, and by Friday's triage one is in next week's build, one is written down as evidence for a future engagement, and nobody was told a comfortable yes.

Friday you write. An entry in the engagement's Ledger recording the shortcut you took Tuesday and what it assumes. A note to the product team: that connector is the second one of its kind this quarter, and the platform should probably own it. This is the part of the week most likely to be skipped, and the part this method exists to protect — it is where a customer project quietly becomes product knowledge.

## The three neighbors

Every description of this job eventually collides with three adjacent trades, and the collisions are where the definition lives.

The first neighbor is the solutions engineer or solutions architect: pre-sales, demo-oriented, skilled at building the prototype that wins the deal. An honorable trade — and a different one. The solutions engineer's artifact runs on anonymized data in a sandbox and is finished when the contract signs. The forward deployed engineer's artifact runs on real data in production and is finished when the outcome lands.

The second neighbor is staff augmentation: an engineer rented to the customer, working the customer's backlog under the customer's direction. Also honorable, also different. The distinction is accountability. A staff-aug engineer owes the customer effort against a ticket queue. A forward deployed engineer owes them an outcome — a number the customer's executives track, named in writing before the work began.

The third neighbor is the one that stings: consulting. The consultant embeds, learns the domain, builds the bespoke system, bills the hours. From the customer's side of the table, week to week, the resemblance is real. The difference — chapter 3 takes the question seriously enough to give it a full chapter — is what happens to the work afterward. A consultant's learning walks out the door with the consultant. A forward deployed engineer's learning is owed to a product: extracted, generalized, folded into the platform so the next customer needs less field engineering than this one did.

Frontier compresses these three collisions into a test. Work is Forward Deployed Engineering only if all three of these hold: **production code in the customer's environment, against real data** — not offline prototypes, not sandboxes. **Ownership of a named business outcome** — not a deliverables list, not a satisfaction score. **An obligation to leave a trace in the product** — extraction as a duty, not a bonus. This book calls it the bright-line test, and it does its best work not in definitional arguments but inside companies: it is how a team, or the engineer deciding whether to take the job, checks what a role actually is regardless of what the posting called it.

## Why this job, now

The role is two decades old — chapter 2 tells that history — but it was a niche practice until roughly 2023, and then it wasn't. Job postings for forward deployed engineers grew several hundred percent year over year; the AI labs built field teams; so did most of the companies selling AI systems into enterprises.

The reason is in the nature of what is being sold. Probabilistic systems demo brilliantly and deploy stubbornly. A model that performs on curated examples must still be made to perform on this customer's data, inside this customer's systems, at a reliability their operations can live with — and that tuning cannot be done from headquarters, because the thing being tuned against exists only at the customer. At the same time, the economics of field engineering changed from the builder's side: an engineer working with AI agents produces what a small team used to, which means the intense, expensive, one-customer attention this model demands stopped requiring a small team. The job sits exactly at the intersection: engineers who build AI systems, with AI systems, in the one place the systems can be made real.

That intersection is where this book's method lives. Forward Deployed Engineering is the discipline — anyone doing work that passes the bright-line test is doing it, method or no method. Frontier is one opinionated way to do it well: a time-boxed engagement with an exit date, a weekly loop of working software shown to the outcome's owner, a written record that turns field shortcuts into product signal, and four numbers that tell you whether any of it is working. The rest of Part I is the argument for why. Part II is the method itself. Part III is for the people who fund it, staff it, and host it.

The place to start is where the job started: with a company whose customers could not be served any other way.
