# 4. Why Being There Works

Software's entire economic promise is that you build once and sell everywhere. Marginal cost near zero, engineers safely distant from customers, the product a wall between the two. Forward deployment spends against that promise deliberately: it puts expensive engineers on planes, one customer at a time, to do work that doesn't obviously repeat. Palantir ran more field engineers than product engineers until 2016. OpenAI, two decades later, rebuilt the same function within a year of having enterprise customers. Either two generations of sophisticated companies made the same expensive mistake, or being there pays for itself in some way the build-once model doesn't capture.

This chapter makes the argument that it pays, in four claims. Each one is stated so that it could be wrong — and the chapter ends with the conditions under which it is.

## Context is the scarce input

The first claim: enterprise software fails for missing context, not missing code.

Nabeel Qureshi, who spent eight years as a Palantir field engineer, compressed the insight into a phrase borrowed from the economist Tyler Cowen: context is that which is scarce. The code was never the constraint. By the mid-2010s, most of what an enterprise deployment needs — storage, pipelines, models, interfaces — existed as product or open source. What no product shipped with was the knowledge that the claims-intake table has a status field whose value `ACTIVE` means closed, that the nightly job everyone fears was written by a contractor who left in 2019, that the report driving executive decisions is quietly assembled by one analyst's spreadsheet. Deployments die on exactly these facts.

The standard mechanism for moving such facts to engineers is the requirements process, and the requirements process is lossy compression. Every hop — operator to analyst, analyst to project manager, project manager to document, document to distant engineer — discards detail, and the detail discarded is precisely the inconvenient kind, because inconvenient detail is what intermediate audiences smooth away to keep meetings short. The engineer at the end of the chain receives a clean fiction. She builds against it competently, and the build fails on contact with the facts that didn't survive compression.

There are two responses. Compress better: more workshops, longer documents, stricter sign-offs — the enterprise-software tradition, and a fair description of the requirements-heavy methods the Agile Manifesto was written against. Or stop compressing: move the engineer to where the context lives and let her read the raw material herself. That is the whole of forward deployment's first argument. The Data Walk of chapter 8 is this claim turned into a week-one discipline; the field whose name means the opposite of its contents is not an anecdote about bad data, it is the standard condition of the environments where outcomes live.

The claim would be false where context is thin or transmits well — where the product's install is genuinely self-serve, where customers resemble each other closely, where the data is clean and the workflows are documented. Such markets exist. Forward deployment is waste in them, which is why the fit gates of chapter 17 are part of the method and not an apology for it.

## The gap is where value dies

The second claim: the distance between a working demo and a working deployment is the graveyard of enterprise value, and whoever crosses it captures the learning.

The gap was always real. Salesforce, ServiceNow, and Workday all went public with gross margins in the fifties and sixties — services-heavy, implementation-bound — and spent a decade climbing toward eighty as their products absorbed what implementation kept teaching them. But probabilistic systems widened the gap into a canyon. A deterministic system that demos well will mostly run well; its failure modes are enumerable. An AI system that demos well has demonstrated one draw from a distribution. Its behavior on the customer's actual data — messier, older, differently shaped than anything in the demo — is an open empirical question, and the only laboratory that can answer it is the customer's own environment. Evals must be built from the customer's real cases; retrieval must be tuned against the customer's real corpus; agent behavior must be constrained by the customer's real permission structures.

This is why the FDE role, a Palantir curiosity for fifteen years, became one of the fastest-growing jobs in software the moment AI systems reached enterprise buyers. The work of crossing the gap cannot be done remotely from a spec, and it cannot be skipped: some organization will do it — the vendor's field team, a systems integrator, or the customer's own staff, failing slowly. The method's position is that the vendor should want that work, not tolerate it, because of the third claim.

## Overfit at the edge, generalize at the core

The third claim: solving one customer's problem exactly, then generalizing what repeats, is a better product-discovery engine than imagining what the market wants — provided the overfitting is deliberate and the generalization is systematic.

The proof of concept is Palantir's Foundry, a product assembled from what field teams kept re-building until the patterns were undeniable — chapter 2 tells that story in full. What matters to the theory is the flywheel it demonstrates: extraction widening the platform, the platform shrinking the last mile, each absorption making the next deployment shorter. That flywheel is the through-line of this book's second part, and it is why the Ledger and the Extraction Review exist as named machinery rather than good intentions.

State the trade-off honestly: this is the expensive path to product truth. A field engagement costs more than a user interview, and the risk it manages is different in kind. Interviews and surveys risk building the wrong thing efficiently; field engagements risk building the right thing for an audience of one. Frontier accepts the second risk and instruments against it — the extraction rule, the one-third rule, the Ghost Consultant anti-pattern are all controls on overfit that never generalizes. What the field engagement buys for its cost is evidence of a quality no interview produces: a paying customer's production system, running, is a requirements document that cannot lie.

The claim would be false where engagements don't repeat — where each customer's problem is genuinely singular. Then there is no residue to generalize, extraction rate falls to zero honestly, and what you are running is a consultancy. Chapter 17 treats this as a legitimate finding, not a failure of will.

## Machine leverage makes the box fit

The fourth claim: agent-assisted engineering is what makes the first three claims affordable inside a time-box.

The historical objection to forward deployment was unit economics: context-gathering, gap-crossing, and per-customer building are all labor, and labor at one-customer-at-a-time scale is what low-margin services firms are made of. The objection was sound. What changed is the output of one engineer. An engineer with a capable agent toolchain profiles an unfamiliar schema in hours, not days; generates the eighty-line overfit and its tests in an afternoon; holds the whole last mile in versioned, reviewable code rather than in heroic memory. The six-to-twelve-week engagement of chapter 7, run by one or two engineers rather than a project team, is not an aspiration — it is what the toolchain now makes normal, and the method's cadences are calibrated to it. The two-week proof rule reads as aggressive to anyone benchmarking hand-built velocity; against agent-assisted velocity it is generous, which is precisely why a missed proof deadline points at access, not engineering.

The leverage compounds with the subject matter. The systems Frontier teams deploy are mostly AI systems, and the same fluency that makes an engineer fast with agents is what the systems themselves demand: eval construction, context engineering, the governance of what a model may see and do. One skill set, exercised on both sides of the work. The Charter's agent boundary — what the toolchain may touch in the customer's environment, under whose review — is where this claim meets the customer's legitimate caution, and chapter 13 gives it a full treatment.

## What would make this wrong

A theory that cannot fail is a creed, so: forward deployment stops paying when any of the four claims breaks. Where context is thin, self-serve wins and the field team is overhead. Where the gap is narrow — deterministic products, clean integrations — solutions engineering covers it at a fraction of the cost. Where nothing repeats, there is no flywheel and you have priced a consultancy like a software company, which the market eventually notices. Where the leverage is refused — engineers hand-building what agents do better — the time-box stops fitting and the economics revert to the ones that made the historical objection sound.

Every one of these failures is observable, most of them in the four metrics of chapter 15. That is by design. The next chapter surveys the method built on these claims; the part that follows shows it in operation, one practice at a time. None of it asks to be believed. All of it asks to be measured.
