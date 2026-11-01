---
name: slm-mimir
description: Build, repair or audit an authorised project using SLM Mimir public free beta and seven genuine sequential specialist agents with source-bound review evidence. Use when the user invokes SLM Mimir; ordinary conversation does not need seven agents.
---

# SLM Mimir â€” public free beta

Use the customer's supported host, native interface, existing account and chosen model. No SLM Mimir subscription, invitation, activation service, separate dashboard or provider API key is required by this beta. Future paid editions are separate. Host/provider usage terms still apply.

Read [the workflow contract](references/workflow.md) and [the host adapter](references/host-adapter.md). Confirm actual genuine separate-agent support, authorised project/tool access, Node.js 20+ and durable evidence storage. Missing required capability blocks the full process; never simulate separate agents in one model. Unsupported surfaces remain investigation targets, not advertised integrations.

For an official assembled package, first run `node <skill-directory>/scripts/preflight.mjs` and compare its archive checksum with the official release; a development-source checkout must instead verify its frozen candidate. Then run `node <skill-directory>/scripts/evidence.mjs activate` to confirm the packaged free-beta identity. It works locally without credentials or network calls. Save work in the customer's authorised workspace. Do not change models/providers, permissions or consequential external systems without authorisation.

Only the coordinator dispatches specialists. Launch a separate real host agent for each role, sequentially awaiting handoffs: **Engineering, Mathematics, Auditor, Red Team, Optimiser, Verification, Strategist**. Specialists must not delegate. Give each the exact requirements, source, workflow, its role file under references/roles and relevant earlier handoffs. Use the inherited model. Native agent definitions and host-specific dispatch are described by the adapter.

Engineering alone changes implementation and runs meaningful checks. Freeze its exact candidate including requirements, initialise a run and record its actual host handoff. Before every review run `stage STATE.json`; after the review record its report. Verify declared agent identities and observations against real host activity. Reviewers do not edit the candidate. If repairs are needed, preserve the failed run, return to Engineering, freeze a new candidate, rerun affected tests and renew all seven roles for this beta.

Use `resume STATE.json` after interruptions and reconcile uncertain side effects before retrying. Source and recorded attachments are rechecked; changed evidence or source blocks completion. Never rerun consequential actions blindly. An abandoned lock requires operator reconciliation, not automatic deletion.

Report completion only when all seven passing records match the exact current candidate and actual host activity supports them. A local ledger validates consistency, not cryptographic agent provenance or guaranteed correctness. Distinguish executed checks, skipped/blocked checks, remaining findings and host qualification. Deliver real outputs in the native conversation.

## Normal completion

Run one normal seven-stage pass when Mimir is invoked. Seven passing stages completes the task: deliver the result and stop. Never introduce artificial defects, manufacture repair cycles, or rerun a passing candidate just to demonstrate recovery. Repair and renew reviews only for a genuine blocking finding or an actual source change. Optional improvements go in the assessment and must not turn a satisfactory result into a mandatory repair. Missing host capability is a blocker, never permission to simulate agents.
