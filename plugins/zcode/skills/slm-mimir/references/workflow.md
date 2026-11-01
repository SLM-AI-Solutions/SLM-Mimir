# Workflow contract

This contract defines the SLM Mimir native public beta workflow. Historical project approvals are never acceptance of a new candidate.

The host supplies models, genuine agents, tools, permissions and project access. The plugin supplies instructions and local evidence validation. It does not create model accounts or provide an independent hosted agent engine.

## Candidate and evidence

Use explicit source scopes relative to the authorised project root. A scope is a file or directory, such as `["src", "tests", "package.json", "REQUIREMENTS.md"]`, saved as a JSON array. Save the customer's exact task/requirements in a file and include it in the frozen scope; the manifest explicitly identifies that file. Include every relevant implementation, dependency lockfile and configuration file. A directory scope detects added and deleted files recursively. A single-file scope cannot detect new sibling files, so prefer directory scopes where the task may add files. Exclude secrets, caches, volatile state and evidence by choosing scopes, not by silently skipping files. Disclose exclusions to reviewers. The candidate hash covers the sorted scope definitions, requirements path and sorted SHA256 file hashes. The manifest retains the canonical local source root, so it may disclose local paths and belongs in private evidence.

Use the bundled helper, with the skill-directory path resolved from the installed package:

```text
node evidence.mjs activate
node evidence.mjs freeze PROJECT_ROOT SCOPES.json REQUIREMENTS_RELATIVE_PATH CANDIDATE.json
node evidence.mjs verify CANDIDATE.json
node evidence.mjs init CANDIDATE.json EVIDENCE_ROOT ACTUAL_COORDINATOR_ID STATE.json
node evidence.mjs stage STATE.json
node evidence.mjs record STATE.json engineering.json
node evidence.mjs resume STATE.json
node evidence.mjs status STATE.json
```

Arguments with spaces need shell quoting. Output parent directories must already exist. Keep the manifest, state, report files and evidence outside candidate scopes. Freeze/init refuse to overwrite existing files. Never put project credentials in reports.

Run local free-beta activation before Engineering begins; no remote service or credentials are used. Engineering's start may precede candidate registration; the other roles start after their predecessor finishes. After Engineering freezes source, initialise a new run and record Engineering. `stage` checks the current candidate/evidence and returns the next role before dispatch. `record` validates the actual report at completion. Checkpoints use a stable local public-beta access identity, not a customer account or payment entitlement.

Each report is UTF-8 JSON under EVIDENCE_ROOT. Paths in the report and the report argument are relative to that root. Use this shape, substituting actual values and existing evidence files:

```json
{
  "schema": 1,
  "runId": "actual-run-id-returned-by-init",
  "role": "engineering",
  "agentId": "actual-host-agent-id",
  "candidateDigest": "64-character-lowercase-sha256",
  "startedAt": "2026-11-01T12:00:00.000Z",
  "finishedAt": "2026-11-01T12:05:00.000Z",
  "verdict": "pass",
  "findings": [],
  "commands": [{"command": "actual command", "exitCode": 0, "outputPath": "engineering-output.txt"}],
  "evidencePaths": ["engineering-output.txt", "engineering-assessment.txt"]
}
```

Valid role keys in order: `engineering`, `mathematics`, `auditor`, `redteam`, `optimiser`, `verification`, `strategist`. `commands` can be empty for a review that executes no commands, but its actual assessment must be a nonempty `evidencePaths` attachment. A finding has `description` and `status` (`open`, `resolved`, `rejected`), with reasoning in the assessment. A report verdict is `pass`, `fail` or `blocked`. An open finding or failed command blocks a pass. Failed/blocked reports are preserved and prevent further stages in that run. Describe test expectations and actual results; a zero exit code alone proves little.

The coordinator must verify IDs, observations, start/end times and source locations against genuine host tool activity before recording. Specialist IDs must be unique and differ from the coordinator. Reports alone cannot prove agent execution: JSON and local checkpoints are editable by the customer/operator. This helper detects accidental source/report changes and validates evidence consistency under a trusted operator model. It is not a signed host attestation system, anti-tampering boundary or strong copy protection.

## Recovery and mutations

State replacement uses a same-directory temporary file, flush and atomic rename. Fresh files are published without replacing existing state. A sibling `.lock` excludes concurrent writers. If a process dies leaving a lock, inspect its PID, actual process state and saved file; only the operator may remove the stale lock after confirming no writer is running. No command auto-deletes an unknown lock. Retain failed states and unfinished reports for diagnosis.

On resume, source and every recorded report/attachment are rehashed and the local beta access identity is checked. Revalidation also runs after awaited access-policy calls, before returning a progress decision or saving a new stage; a saved-state change during the check requires a fresh retry. Pending consequential external actions require actual host/service reconciliation, which this local ledger cannot perform automatically. Once source changes, preserve the old run and start a fresh candidate; all previous stage approvals are stale.

## Public beta and host qualification

This release is explicitly PUBLIC FREE BETA. No subscription, invitation, payment, signing receipt, licence endpoint or SLM Mimir account is needed. Anyone with a capable supported host can evaluate the release; five testers is a recruitment goal, not an enforced seat limit. No expiry or automatic paid conversion is imposed. The release's evaluation terms govern use. Future licensing/payment work is outside this beta.

The retained license.mjs utility and its isolated signature tests are legacy future-paid verifier code, not imported by the beta runtime and not required for activation or any stage. Its unconfigured endpoint cannot block the beta. No private signing key is distributed. Do not use that utility to claim implemented subscription enforcement.

Host qualification requires genuine native-agent execution, actual source/result delivery, failed-candidate and changed-candidate rejection, cancellation/resume and recovery on each recorded host/model/version. Documentation support or offline adapter checks are not runtime qualification. Preserve actual model/account prerequisites and unverified gaps in COMPATIBILITY.json. Do not claim universal model compatibility. Publish only the clean release assembly, not this development workspace's private evidence or handoffs.

## Normal completion

Run one normal seven-stage pass when Mimir is invoked. Seven passing stages completes the task: deliver the result and stop. Never introduce artificial defects, manufacture repair cycles, or rerun a passing candidate just to demonstrate recovery. Repair and renew reviews only for a genuine blocking finding or an actual source change. Optional improvements go in the assessment and must not turn a satisfactory result into a mandatory repair. Missing host capability is a blocker, never permission to simulate agents.
