# 15. Field Pathology

> [SCENE SLOT — Aravind: a pathology you watched first-hand, in your own engagements or a team near you. The engagement that quietly became permanent, the hack that surfaced months later, the engineer who burned out — whichever you saw closest. What the early signals were, who noticed, what it cost. Two to four paragraphs; it will open this chapter.]

Medicine names its diseases so that clinicians can recognize them from signs, before the patient can articulate what is wrong. This chapter does the same for field engineering. Seven pathologies, each with a detection signal — something observable in the artifacts and the numbers, not in anyone's intentions. That last distinction matters. Nobody sets out to run a pathology. Every one of the seven begins as a reasonable response to local pressure, which is why intentions are useless as a diagnostic and signals are the spine of this chapter. If you see the signal, you have the problem, whatever the org chart says.

## The Permanent Resident

The engagement that never ends. **Signal: no exit date, or serial extensions without re-chartering.**

The historical case is older than the FDE title. In SAP's early era, as Thomas Otter has written, engineers worked directly on customer mainframes — forward deployment before the name. SAP's winning move was to leave: generalize the learnings into product and hand implementation to partners. Otter's warning from that history — chapter 3 quotes it in full — is the cleanest statement of this pathology's mechanism: billing turns the engineer's real client into the project rather than the product. A resident engineer becomes load-bearing in the customer's operations, the customer pays to keep them, everyone's quarter looks fine — and the engineer has stopped being a forward deployment and become an outsourced employee with better equity.

> [SCENE SLOT — Aravind: an engagement that would not end — yours or one you watched from nearby. What kept it alive: the renewal that was easier than the exit, the dependency nobody would name, the person who had become load-bearing. One or two paragraphs.]

The method's defenses are the exit-date rule and the re-chartering ritual, and the signal hides in their paperwork. One extension is an engagement learning something. Three extensions on the same charter is a residency wearing a disguise, visible to anyone who reads the record.

## The Ghost Consultant

Engagements that leave no product trace. **Signal: an empty Ledger; Extraction Rate at zero.**

This is the pathology that dissolves the discipline's identity. The one point on which every serious account of FDE agrees — Qureshi's memoir, Ganesh's field guide, the a16z analyses, the critics — is that the productization loop is what separates this work from consulting. A team that ships outcome after outcome while the platform stays the same width has kept the travel and dropped the loop: in one analyst's phrase, a services business with software attached. The ghost is comfortable. Customers are happy, revenue arrives, and each engagement can plead uniqueness. Only the portfolio view catches it, which is why Extraction Rate exists and why zero for two consecutive quarters is a policy, not a backlog.

The counter-case is the founding one. Palantir's field work looked like consulting in 2016; extracted and productized into Foundry, it compounded into software margins. Same activity at the edge — the difference was whether anything came back.

## The Demo Treadmill

Showcases running on slides and staged data. **Signal: First Proof never lands; production access is always next month.**

The bright line this pathology erases is the one OpenAI's head of forward deployment, Colin Jarvis, draws when distinguishing his function from solutions architecture: FDEs write code on customer infrastructure with customer tooling; architects build prototypes offline. The treadmill is an FDE team drifting across that line one reasonable concession at a time — the sandbox because procurement is slow, the synthetic data because legal is reviewing, the slide because this week's build broke. Each concession is defensible. The accumulation is a team doing pre-sales theater under a delivery banner, running loops that spin without touching the ground.

The treadmill is also the failure most often blamed on the customer, and sometimes that is even true — which is why the method's response is procedural rather than moral: the two-week proof rule forces the access confrontation into week two, renegotiated loudly in the Charter, instead of letting it dissolve into months of amiable pretending.

## The Diluted Badge

The FDE title on solutions-architect work. **Signal: the role fails the bright-line test.**

By 2026, with FDE postings up several hundred percent year over year, The Pragmatic Engineer's reporting found listings under the title that broke down to roughly a quarter coding, half integration meetings, and the rest status calls — in the newsletter's judgment, indistinguishable from a solutions architect. The same reporting flagged a second-order signal: labs standing up FDE functions in separate legal entities, without the core company's equity — an org-chart way of saying *not core talent*.

The badge dilutes for boring reasons — the title is hot, recruiting is hard, retitling is free. The cost lands on the discipline: when the word means everything it means nothing, and the people doing the actual work inherit the skepticism earned by the people who aren't. This book's response is the bright-line test, applied without sentiment: production code in the customer's environment, outcome ownership, product obligation. A role description that fails two of three is fine work under the wrong name. Chapter 3 called this semantic diffusion; this chapter's contribution is only the audit.

## The Silent Overfit

Edge hacks nobody recorded. **Signal: production incidents at the customer that the Ledger never predicted.**

Chapter 11 made the argument in full: at the edge, the shortcut is often the right call, and the sin is silence. The pathology is the argument's dark side arriving on schedule. The incident itself is rarely the expensive part. The expensive part is the archaeology — an engineer, often a different one, reverse-engineering intent from code months after the context evaporated — and the trust repair with a customer who has just learned their production system contained undocumented assumptions. The Ledger entry that would have prevented both takes five minutes at the moment of the decision and is impossible to reconstruct honestly afterward.

## The Burned Hero

One engineer carrying serial engagements without rotation. **Signal: rotation-rule violations, then resignation letters.**

The job's structure makes this pathology endemic rather than incidental. Qureshi's account of the Palantir years is three to four days a week on site, get on a plane first and ask questions later — and that was the version people stayed for. Add the modern texture: every engagement a new domain, new politics, new data mess; context-switching as the job description; the customer's urgency always in the room. Every published account of running FDE teams lands on the same mitigation, which is why it is a rule in this method and not a wellness suggestion. Ganesh built Palantir's Frontline program to rotate hundreds of engineers between field and product. Wu's operating recommendations make rotation standing policy. Frontier's version is the rotation rule: two consecutive engagements or six months, then the core.

The trap for leadership is treating this as a compensation problem. Pay retains the burned for a while; it does not unburn them. Rotation is not a perk beside the salary — it is how the method keeps its people, and, per principle 11, how the context they carry reaches the product at all.

## The Greenfield Reflex

Rebuilding at the edge what the platform already does. **Signal: engagement code that duplicates product capability; the platform team learning about workarounds from incident reports.**

Palantir's internal shorthand put the division cleanly: the core builds one capability for many customers; the field applies many capabilities to one customer. The reflex inverts the second half into *one customer, hand-built capabilities* — an engineer, unfamiliar with a corner of the platform or unconvinced by it, constructing from scratch what assembly would have delivered. The engagement slows, the code diverges from the product line, and Graduation hands the customer an artifact the platform team cannot support because they have never seen it.

Two accelerants deserve naming. The first is temperament: building feels like engineering and assembly feels like configuration, and the field attracts builders. The second is new: an agent toolchain makes greenfield construction feel nearly free, which removes the effort barrier that used to slow the reflex down. That the code was cheap to write does not make it cheap to own — the ownership cost arrives at Graduation and lands on someone else. The defenses are platform fluency as a hiring and onboarding requirement (chapter 17), the First Proof assembly stance (chapter 9), and the Ledger practice of logging every point where the platform stopped — which turns the honest version of this impulse into what it should have been all along: evidence for the platform roadmap.

## One root, seven expressions

Set the seven side by side and the family resemblance is plain. Each one is the engagement drifting from product to project — toward residency, toward services, toward theater, toward title inflation, toward silence, toward attrition, toward bespoke construction. The gravity is real and constant; Palantir felt it, and your team is not exempt because it read a book.

Which is why none of the defenses in this chapter are exhortations. They are artifacts and numbers — the Charter, the Ledger, the four instruments — plus one standing agenda item: the signals in this chapter belong on the quarterly portfolio review, read aloud, checked against the record. Pathologies survive by being nobody's job to notice. The method's answer is to make noticing a scheduled event.
