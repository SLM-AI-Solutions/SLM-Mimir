# SLM Mimir — ChatGPT Work and Codex; Chat installation/entry point

Public free beta 0.2.0-beta.5-obfuscated.1, Build 5. This package follows the provider's own plugin and agent format. It installs one coordinator skill and seven role contracts/profiles, using the host's real separate agents. It does not change your selected model or ask you to configure seven roles manually.

## Install

Add the supplied repository/local marketplace with the native Plugins interface, install slm-mimir, then start a fresh session. For local catalog setup: codex plugin marketplace add <repository-root>; codex plugin add slm-mimir@slm-mimir-multi-beta. Workspace sharing or public directory installation follows OpenAI publishing controls. Full seven-agent execution requires Work or Codex; ordinary Chat agent execution is not claimed.

## Use

In a fresh supported session ask: "Use SLM Mimir to build ..." or "Use SLM Mimir to audit ...". Engineering, Mathematics, Auditor, Red Team, Optimiser, Verification and Strategist run sequentially. Seven passes completes the task. Only an actual finding triggers repair; no artificial repair exercise is included.

## Requirements and terms

Use an existing authenticated host account with native agent and file/command capability, Node.js 20+, authorised project/evidence storage and sufficient provider allowance. Organisation restrictions still apply. This proprietary beta has no Mimir subscription fee or automatic paid conversion. Share unmodified copies with LICENSE intact. Customer files/outputs remain editable. Official directory listing approval is separate from a custom installation.

This build has not been live-run on target models: the owner requested documentation and non-model package validation only. See PROVIDER_SUPPORT.json in the release for the precise verification layer.

## Official sources

- https://learn.chatgpt.com/docs/agent-configuration/subagents
- https://developers.openai.com/plugins/build/plugins
