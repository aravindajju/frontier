# 18. The Economics

Every argument about field-engineering economics eventually reaches the same exhibit: Palantir, which looked like a consultancy in 2016 and reported software margins by 2023 on the strength of the product its field work had built — chapter 2 tells the story. The skeptics of 2016 read the income statement correctly and the strategy wrongly. The field expense was not the cost structure; it was the construction site.

That is the bull case, and it is real. This chapter's job is to state it honestly — including the conditions under which it fails, which are most conditions.

## Margin for moat, stated fairly

Joe Schmidt's essay on services-led growth gives the strategy its cleanest formulation: stop optimizing gross margin percentage in the early years and optimize total gross profit growth plus ownership of the customer's data layer. The precedent he cites is instructive because it predates the FDE label: Salesforce, ServiceNow, and Workday went public with gross margins in the fifties and low sixties — implementation-heavy, service-entangled — and matured into the mid-to-high seventies as the product absorbed what the services had been doing. The trade has a shape: accept low margins early, in exchange for positions (mission-critical workflows, resident data) from which high margins are later collected.

Frontier's contribution to the strategy is the mechanism that makes the trade collectible. The margin recovery is not automatic aging; it is extraction, compounding. Every Ledger item generalized into the platform moves some work from marginal cost (an engineer's weeks, spent per customer) to fixed cost (a capability, built once). The Extraction Rate metric is, read financially, the speed at which your margin structure is improving. A field function with a healthy Extraction Rate is a factory converting services revenue into product assets. A field function with an Extraction Rate of zero is a consultancy, whatever the pitch deck says — and Thomas Otter's warning names the usual cause: put the field engineer on a billable meter and their real client becomes the project, not the product. The billing model is the strategy, whether or not anyone wrote it down.

## The Margin Mirage

This book names it the Margin Mirage: field costs quietly parked where they flatter the product's unit economics. It sits outside the Guide's field catalog because it is not committed in the field at all — it is the one pathology committed mostly by executives, which is why it gets its treatment here.

The mechanics are mundane. Field engineering is expensive and sits ambiguously between cost of revenue and sales cost, so the temptation is to classify by narrative: engagements that end in expansion get called sales (inflating CAC but protecting gross margin), engagements that keep a customer live get called success or R&D (protecting both headline numbers at once). Marc Andrusko's gatekeeping essay identifies the downstream damage: companies quietly building consulting firms while reporting software economics, with the truth arriving at the worst possible time — diligence.

The honest treatment follows the Charter. An engagement chartered to make a specific customer's deployment work is cost of revenue for that customer; margin takes the hit, visibly. Field time spent on extraction — generalizing Ledger items into platform — is R&D, because that is literally what it is. The one-third rule then has a financial reading on top of its product reading: if more than a third of your deployments need heavy field effort for the same class of problem, your reported gross margin is misstated by the cost of a product gap, and the correction belongs in the roadmap, not in the expense classification.

## What agent leverage changes

The classical FDE economics assumed the field unit was a pod — several engineers, months, one account. That assumption set the deal-size floor: Andrusko's arithmetic warned that a company with a hundred-thousand-dollar median deal copying a multi-million-dollar deployment motion is quietly building a consulting firm, because the pod's cost consumes the contract.

Machine leverage moves the floor without repealing the arithmetic. The method's own cadences — one or two engineers, six to twelve weeks, First Proof inside a fortnight — are agent-era numbers; a platform plus an agent-assisted engineer now covers ground that took a pod half a year. The consequences run in order: smaller engagement cost, therefore viable field engineering at deal sizes that could not previously carry it, therefore more engagements per engineer per year, therefore — this is the compounding step — more turns of the extraction flywheel per unit of payroll. The fixed time-box does quiet work here too: an engagement that cannot find its outcome in twelve agent-leveraged weeks is exposed quickly and cheaply, where the pod-era version consumed two quarters before anyone conceded.

What leverage does not change: the floor exists. Some deals cannot fund even two engineers for six weeks, and the fit gates — deal size among them — are still the first economic question. Leverage lowers the threshold; it does not abolish the category of customers you should serve with product and partners instead.

## Buying and selling the engagement

Wu's prescription for the commercial wrapper matches the method's shape closely enough to adopt nearly wholesale: milestone-based engagements priced against outcomes rather than time — her three-to-six-month window being the one term Frontier tightens, to the six-to-twelve-week box that agent-era arithmetic makes normal. The Charter is the term sheet — the outcome, the exit date, the graduation criteria are the milestones — and the discipline cuts both ways. The vendor cannot drift into open-ended billable presence, because the exit date is contractual. The customer cannot drift into treating the field team as free staff augmentation, because the scope is an outcome, not a queue. Time-and-materials pricing, by contrast, is the Permanent Resident anti-pattern with an invoice attached: every incentive it creates points toward staying.

## What the board should ask

Four questions, one per quarter, answerable from artifacts the method already produces.

**What is the Extraction Rate, and what shipped because of it?** Zero for two consecutive quarters means the strategy has silently become consulting; the answer should name platform capabilities, not sentiments.

**What is the Graduation Rate?** Engagements that end on their chartered dates are the evidence that field costs are temporary by design. A falling rate is the Permanent Resident appearing in aggregate before it appears in any account review.

**Where are field costs booked, and would we book them the same way if a buyer were reading?** The Margin Mirage question, asked before diligence asks it.

**Is the one-third rule breached, and if so, what is the product plan?** The board-level form of the referendum: heavy repeated field effort is a measurement of product incompleteness, and the response it demands is a roadmap item, not a hiring requisition.

A field function that survives four quarters of those questions is the 2016-Palantir position: expensive, deliberate, and building an asset. One that cannot answer them is the thing the skeptics accused Palantir of being — with the difference that this time the skeptics are right.
