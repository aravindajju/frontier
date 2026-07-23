# 14. The Four Metrics

DevOps never got a canonical text. The word was coined at a 2009 conference, and for a decade every vendor and job board redefined it at will. What finally anchored the discipline was not a manifesto but a measurement program: the DORA research, condensed in *Accelerate* (Forsgren, Humble, Kim, 2018) into four metrics — deployment frequency, lead time, change failure rate, time to restore. The four keys did what no doctrine had managed. They let an organization know whether it was actually improving, and they were designed as two pairs — speed and stability — so that neither could be optimized by quietly sacrificing the other.

Frontier copies that design on purpose. The method's rules say what a team commits to; the four metrics say whether the commitments are being kept. Two of them measure the engagement's speed — Time to First Proof and Loop Time. Two measure its integrity — Graduation Rate and Extraction Rate. Each detects a different failure, each can be gamed, and each act of gaming leaves fingerprints on one of the others. That interlock is the point. A single metric is a target; four cross-checking ones are an instrument panel.

One caution before the numbers themselves. These are steering instruments, not performance reviews. The moment a number decides someone's bonus, Goodhart's law collects its fee and the instrument goes dark. Publish all four to the team weekly; read trends at the portfolio level; never rank engineers by them.

## Time to First Proof

Days from Landing to working software on the customer's real data, in their environment.

The definition carries its own guards. *Real data* excludes the staged demo. *Their environment* excludes the prototype on your laptop. What remains measures three things at once: how fast the customer can grant access, how much of the outcome the platform already covers, and how well Landing was run. Notice what it mostly doesn't measure — raw engineering speed. With the platform underneath and an agent-assisted toolchain, the build half of a First Proof is days of work. The number is dominated by access negotiation and platform coverage, which is exactly why leadership should watch it: a portfolio whose Time to First Proof is drifting upward is telling you about platform gaps or a broken access playbook, and both are fixable above the engagement level.

The obvious gaming is to relax "real" — declare victory on a subset, a sandbox, a demonstration. The number improves and the engagement pays. A faked First Proof enters the Loop with nothing true to iterate on, the Scorecard stays flat, and by week four the treadmill is visible in the other instruments. That is the pattern to expect from all four metrics: gaming one is self-reporting, because the number you faked stops predicting the number you didn't.

Directional threshold, early calibration: inside two weeks, and trending toward one as platform coverage grows. When it slips, the cause is almost always access — say so in the renegotiation.

## Loop Time

Median days from Showcase feedback to the shipped next version.

Of the four, this is the number the field team controls most directly. Time to First Proof is partly hostage to the customer; Graduation Rate settles once per engagement; Extraction Rate belongs half to the core. Loop Time is yours, weekly. Chapter 10 made the argument: a team whose Loop Time is under a week is steering, and a team whose Loop Time stretches past two is being steered — by integration friction, by approval queues, by its own overbuilding — whatever the status report says.

The gaming is to ship something trivial every week and call it a version. The defense is already in the room: the Showcase is public, the Sponsor is present, and the Scorecard is on screen. A sponsor who watches three weeks of cosmetic change stops attending, and a Scorecard that doesn't move while Loop Time looks healthy is the contradiction announcing itself. Loop Time counts only what the Scorecard can feel.

Agent velocity resets this threshold more than any other. A weekly loop was honest ambition when versions were hand-built. With an agent toolchain, the build cost of a version has collapsed, and a Loop Time stuck above a week now points at the environment — approvals, data access, review queues — or at overconstruction, not at engineering capacity. Directional threshold, early calibration: under a week, trending toward days.

## Graduation Rate

The share of engagements that end on their Charter's exit date with the graduation criteria met.

This number measures chartering honesty as much as delivery. It fails in both directions. A low rate means the team overpromises at Landing or drifts mid-engagement. A perfect rate is its own signal — criteria written soft enough to be unfailable, which converts the Charter from a constitution into a press release. Healthy portfolios live in between and can point to the misses: this one re-chartered in week three when the Data Walk contradicted the briefing, that one graduated two weeks late because a merger froze the customer's IT calendar.

The gaming is the late re-charter — moving the goalposts at week nine and recording a graduation. The method's defense is procedural: re-chartering is a public act with a paper trail, agreed with the Sponsor, and a portfolio whose engagements re-charter serially is displaying the Permanent Resident's signature in its own records. The number can be dressed up; the record of how it was achieved cannot.

Directional threshold, early calibration: four in five. The remaining fifth, examined one by one at the quarterly review, teaches more than the four that landed.

## Extraction Rate

Ledger items generalized into the product, per quarter.

The fourth number is deliberately not the field team's alone — it measures the relationship between edge and core, and it is the Core Counterpart's name on it as much as the engineer's. It exists because the Ghost Consultant is invisible at engagement scale. Any single engagement can plead uniqueness; a portfolio that ships outcomes all year while the platform stays exactly the same width has a name in chapter 15, and this number is how the condition surfaces before the year is spent.

The gaming is inflation — counting a renamed config file or a copied utility as an extraction. The audit is built into the flywheel: an extraction claims to widen the platform, and a wider platform must eventually show up as falling Time to First Proof on the engagements that follow. The first number checks the fourth. Palantir remains the reference case: field work productized into Foundry took the company from looking like a consultancy in 2016 to software margins near eighty percent by 2023 (Qureshi's account, chapter 2). That transformation is what a real, sustained Extraction Rate compounds into.

Directional threshold, early calibration: above zero every quarter, without exception. Zero for one quarter is a backlog; zero for two is a policy.

## Reading the panel together

The pairs balance each other the way DORA's did. Speed without integrity: Time to First Proof and Loop Time look excellent, Graduation Rate and Extraction Rate rot — a fast treadmill. Integrity without speed: careful charters, dutiful extractions, and engagements that take a quarter to show anything real — a research group with travel budget. The method wants all four, and the tension between the pairs is load-bearing: it is what makes the panel hard to satisfy with anything except the actual behavior.

The thresholds in this chapter are labeled early calibration because that is what they are — the author's field experience and the public record, not a dataset. DORA earned its benchmarks from years of survey data across thousands of organizations; Frontier's equivalent does not exist yet. The numbers themselves are the commitment; the thresholds will move as field reports accumulate, and chapter 21 says how to send yours.

What will not move is the design intent. Frontier's rules were written to be falsifiable, and the four metrics are the instrument that makes fake adoption detectable — including, and especially, to the team running it on itself.
