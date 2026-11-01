# SLM Mimir — Kimi Work and current Kimi Code Desktop/CLI

Public free beta 0.2.0-beta.5-obfuscated.1, Build 5. This package follows the provider's own plugin and agent format. It installs one coordinator skill and seven role contracts/profiles, using the host's real separate agents. It does not change your selected model or ask you to configure seven roles manually.

## Install

For Kimi Work, use its official Custom plugin / built-in Plugin Builder registration route for the already-native kimi.plugin.json package, preserve its code and role contents, then Plugins -> Personal -> Install. The same native format is recognised by Work and Code. Kimi Code Settings -> Plugins -> custom source, or /plugins install <extracted-plugin-directory-or-ZIP-URL>. Start a new session or /reload. The manifest auto-registers seven agents and loads the coordinator skill as text without executing it.

## Use

In a fresh supported session ask: "Use SLM Mimir to build ..." or "Use SLM Mimir to audit ...". Engineering, Mathematics, Auditor, Red Team, Optimiser, Verification and Strategist run sequentially. Seven passes completes the task. Only an actual finding triggers repair; no artificial repair exercise is included.

## Requirements and terms

Use an existing authenticated host account with native agent and file/command capability, Node.js 20+, authorised project/evidence storage and sufficient provider allowance. Organisation restrictions still apply. This proprietary beta has no Mimir subscription fee or automatic paid conversion. Share unmodified copies with LICENSE intact. Customer files/outputs remain editable. Official directory listing approval is separate from a custom installation.

This build has not been live-run on target models: the owner requested documentation and non-model package validation only. See PROVIDER_SUPPORT.json in the release for the precise verification layer.

## Official sources

- https://www.kimi.com/code/docs/en/kimi-code-cli/customization/plugins.html
- https://www.kimi.com/code/docs/en/kimi-code-cli/customization/agents.html
