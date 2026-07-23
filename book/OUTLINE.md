# Frontier — Book Outline

*Frontier: An Opinionated Method for Forward Deployed Engineering*

Three parts. Part I makes the case and gives the theory. Part II is the method — the Guide expanded into practice, pattern by pattern, with stories. Part III is for the people who run and buy this work. Every chapter opens with a scene (STYLE.md: stories first); scenes marked [SCENE-NEEDED] want a story from Aravind's engagements, gathered as each chapter is drafted.

Drafting order: Part II, then Part I, then Part III.

---

## Part I — The Frontier (why this work exists)

**1. The Job.** A working definition by portrait: what a forward deployed engineer actually does in a week, and the FDE test that separates this job from the three trades it gets mistaken for. [SCENE-NEEDED: a day mid-engagement — the messiest, most representative one.]

**2. Where This Came From.** Palantir invents the role out of necessity (classified customers, unshareable data) and for a purpose: to get its platform implemented quickly inside customers who couldn't do it themselves — the role was always platform-first, never bespoke-build. Delta and Echo; more field engineers than product engineers until 2016; Foundry built from the residue of a thousand deployments; the AI era makes the model everyone's problem. Sources are public and cited.

**3. The Consulting Question.** The jab that never dies — "you're just consultants with equity." The honest answer: sometimes yes, and the difference is auditable. The productization loop and outcome ownership as the two structural differences; Otter's SAP history as the cautionary parallel; the 2026 dilution of the FDE title and why semantic precision is a defense, not pedantry.

**4. Why Being There Works.** The theory chapter, Fowler register. Context scarcity; requirements documents as lossy compression; the demo-to-production gap and why probabilistic systems widened it; deliberate overfit with systematic generalization as an economic strategy, not a compromise.

**5. The Method at Altitude.** FDE is the discipline; Frontier is an opinionated method for it. The five values, the ten principles, the one diagram, and a map of Part II. What Frontier refuses to be: a certification, a liturgy, a services playbook.

## Part II — The Method (how Frontier works)

**6. The Team.** Four accountabilities: Frontier Engineer, Field Strategist, Core Counterpart, Customer Sponsor. Why the Field Strategist is the role everyone drops and regrets; what "same technical bar as core" means in hiring practice; how the accountabilities compress into fewer people at smaller scale. [SCENE-NEEDED: an engagement where the adoption/politics half was the hard half.]

**7. The Engagement.** The time-box as the method's spine. The Charter: outcome, exit date, graduation criteria, sponsor — one page, signed at Landing. Why exits beat residencies; what re-chartering means; "an engagement without an exit date is a services contract discovering itself." Pattern-form practices: Chartering, Re-chartering. [SCENE-NEEDED: an engagement end — clean or not.]

**8. Landing.** Week one. Access before opinions; read the real data before the requirements; map systems, people, and politics as one terrain. The first-48-hours discipline. Pattern-form practices: the Data Walk, the Terrain Map. [SCENE-NEEDED: Aravind's first days at the health insurer — what the data showed that the briefing didn't.]

**9. First Proof.** The two-week rule and why it is the engagement's ignition. Small is fine, real is mandatory — and assembly beats construction: the platform's existing capability aimed at the customer's data, field code only where the platform stops. Picking the first proof for maximum context yield, not maximum impressiveness; what to do when production access stalls (renegotiate, loudly); what a from-scratch First Proof tells you about your product. Pattern-form practices: First Proof selection, Platform-First Assembly, the Access Escalation.

**10. The Loop.** The heartbeat: Showcase, discuss, ship again. Working software only; the Sponsor in the room; the Scorecard as the running answer to "is this working?"; feedback triage without losing the outcome. This chapter formalizes Aravind's own rhythm (analyze → show outcomes → discuss → next version). Pattern-form practices: the Showcase, Scorecard-keeping, Feedback Triage. [SCENE-NEEDED: a showcase that changed the engagement's direction.]

**11. The Ledger.** Overfitting as a logged decision, not a secret. What goes in (every deliberate edge-hack, every generalization candidate), what a Ledger entry looks like, how the Ledger turns "technical debt" from a lament into an asset register. Pattern-form practices: Ledger-keeping, the Overfit Decision.

**12. Graduation and Extraction.** Ending on time against criteria; handing the system to its owners; the Extraction Review within two weeks — generalize, defer, or discard, decided not defaulted; the quarterly portfolio review; the Core Counterpart's side of the bargain. The flywheel made explicit: each extraction widens the platform, each widening shortens the next engagement — the Foundry story retold at team scale. Pattern-form practices: the Handoff, the Extraction Review.

**13. Machine Leverage.** The AI-native chapter, and the reason Frontier's cadences are set where they are. Building with AI code assistants and agents at the customer: what agent-assisted velocity makes possible in a six-week box, and what it makes dangerous. The agent boundary as Charter material — data boundaries for model context, human review gates, audit trails in regulated environments. Evals as the Scorecard for probabilistic systems: why "it worked in the showcase" is an anecdote and an eval score is a state; building the eval suite from the customer's real cases during Landing and the Loop. The two failure modes: the engineer who won't use the leverage (hand-building what agents do better) and the one who won't govern it (agents loose on customer systems). Pattern-form practices: the Agent Boundary, the Eval Suite, Agent-Speed Iteration. [SCENE-NEEDED: an engagement moment where agent leverage or an eval caught something a demo would have hidden.]

**14. Engineering at the Edge.** The build-craft chapter: production-grade defined as a falsifiable checklist (the operational meaning of the FDE test's first criterion); testing at the edge — evals for the probabilistic layer, thin deterministic tests for glue, test where the Ledger says risk lives; the Deploy Path (CI/CD from week one, part of First Proof); the Security Floor (secrets, least privilege, data boundaries, dependency hygiene; regulated-domain tailoring); architecture decisions as Ledger entries. Pattern-form practices: the Deploy Path, the Security Floor.

**15. The Four Metrics.** Time to First Proof, Loop Time, Graduation Rate, Extraction Rate — what each detects, how each is gamed, and why gaming them is self-reporting. DORA as the model: metrics as the discipline's anchor. Early-calibration thresholds, labeled as such — and how agent-assisted velocity resets what "good" looks like on the first two.

**16. Field Pathology.** The seven anti-patterns, one story each: the Permanent Resident, the Ghost Consultant, the Demo Treadmill, the Diluted Badge, the Silent Overfit, the Burned Hero, the Greenfield Reflex. Detection signals as the chapter's spine — if you see the signal, you have the problem, whatever the org chart says. [SCENE-NEEDED: at least one first-hand pathology story.]

## Part III — Running It (for leaders and customers)

**17. Should You Do This At All?** The four fit gates (mission-criticality, deal size, workflow commonality, data gravity); the honest cases where the answer is a better product or a partner channel; the one-third rule as an ongoing referendum on product quality.

**18. Building the Function.** The hiring profile (startup-CTO generalism plus the AI-native layer: agentic system design, eval construction, context engineering; curious hustlers over credentials); interviews that test for it; compensation and why field engineers keep product-engineer equity; reporting lines and the dual-reporting debate; rotation as retention policy, not perk.

**19. The Economics.** Margin for moat, stated honestly: what the field function costs, where those costs belong on the books (the Margin Mirage anti-pattern), when the trade is worth it, and the Salesforce/ServiceNow precedent of margins that started low and climbed. How agent leverage changes engagement economics — smaller teams, shorter boxes, more engagements per engineer. Milestone-based engagement economics; what boards should ask.

**20. The Customer's Chair.** The book's audience turn: how to be a good host to a field team, what a customer should demand (a Charter, a Sponsor seat at Showcases, an exit date, an agent boundary they understand), what good looks like at week two and week six, and the customer's own anti-patterns — the access stall, the requirements relapse, the shadow backlog.

**21. Scaling, and the Function's Own Graduation.** Portfolios, playbooks, and the point of the whole exercise: the field function shrinks the need for itself as extractions accumulate. What "success" looks like at year three; Ramp/OpenAI-era scaling patterns; the function as permanent scaffolding is the failure mode.

**22. A Method That Stays Small.** Governance and versioning: how Frontier changes, the removal-matches-addition commitment, the succession note, and an invitation — run it, measure it, report back.

## Appendices

- **A. The Frontier Manifesto** (reprint)
- **B. The Frontier Guide** (reprint, versioned separately)
- **C. Templates** — the Charter, a Ledger entry, the Scorecard (one page each)
- **D. The Practitioner's Toolkit** — tool categories with selection criteria and mid-2026 named examples; the starter engagement repo (templates/engagement-repo/)
- **E. Glossary**
- **F. Sources and Further Reading** — the Palantir accounts, the analyses, the methodological ancestors
