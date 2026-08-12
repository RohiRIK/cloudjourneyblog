# Blog Post Image Prompts
# Style: Nano Banana — cyberpunk/retrofuturism, bold flat colors, neon accents,
# clean geometric shapes, dark near-black backgrounds, minimal, slightly surreal.
# No text in images. No gradients. Hard edges. Neon against darkness.
# Send each prompt to Gemini (gemini.google.com) → select Imagen 3 model.
# Save results to: public/images/blog/<slug>.png
#
## Generation Checklist
#- [x] 1. zero-trust-is-not-a-product.png
#- [x] 2. conditional-access-in-practice.png
#- [x] 3. endpoint-hardening-zero-trust-control.png
#- [X] 4. zero-trust-for-ai-agents.png
#- [X] 5. identity-first-security.png
#- [x] 6. vibe-coding-ai-workflows.png
#- [x] 7. homelab-docker-swarm.png
#- [x] 8. claude-code-config.png
#- [x] 9. netlogon-rpc-sealing-playbook.png
#- [x] 10. fleetwatch-from-script-to-system.png
#- [x] 11. claude-code-config-v2.png
#- [x] 12. claude-code-daily-workflow.png
#- [x] 13. phishing-resistant-mfa-rollout.png
#- [x] 14. smart-offboarding-orchestration.png
#- [x] 15. jumpcloud-to-intune-migration.png
#- [x] 16. device-inventory-pipeline.png
#- [x] 17. hibob-hr-automation.png
#- [x] 18. claude-code-config-v3.png
#- [x] 19. cross-platform-compliance-architecture.png
#- [x] 20. ai-driven-soc-assistant.png
#- [x] 21. entra-join-readiness-checklist.png
#- [x] 22. google-workspace-entra-federation.png
#- [x] 23. gcp-casb-shadow-it-migration.png
#- [x] 24. zero-trust-retrospective.png
#- [x] 25. robot-army-personal-lab.png
#- [x] 26. new-environment-setup.png
#- [x] 27. zero-trust-program-energy-sector.png
#- [x] 28. hr-lifecycle-automation.png
#- [x] 29. stremio-mediafusion-realdebrid.png
#- [x] 30. passkey-deadline.png
#- [x] 31. docker-cve-2026-34040.png
#
## 29. stremio-mediafusion-realdebrid.png
#
# **Concept:** STREAMING STACK WITH DEBRID problem type.
#
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.
#
# Center composition: Three interconnected geometric nodes representing the stack:
#   - LEFT NODE (electric blue): Stremio Client — a hexagon with a play button icon inside, representing the media center
#   - CENTER NODE (neon green): MediaFusion Plugin — a pentagon with a puzzle piece icon, representing the addon that aggregates sources
#   - RIGHT NODE (amber): Real-Debrid Service — an octagon with a cloud and shield icon, representing the debrid service that caches and delivers via CDN
#
# From each node, neon lines flow downward to a central SECURITY LAYER:
#   - OAuth Device Flow (cyan shield with device/code icon)
#   - Token Scoping (purple checkmark over limited scope)
#   - CDN Delivery (green downward arrow to a fast server)
#   - No P2P Exposure (orange shield with no peer icons)
#
# Below the security layer: a CHECKLIST grid with checkmarks in neon colors:
#   [ ] Secure auth (device code)
#   [ ] Token encryption
#   [ ] No IP exposure
#   [ ] HTTPS only
#   [ ] Cached delivery
#
# Color palette: near-black background, flow nodes in electric blue/neon green/amber, security elements in cyan/purple/green/orange, checklist in neon-white on dark gray. Subjects fill the frame. Minimal. Gallery-worthy.
#
# ---
## 32. third-party-oauth-identity.png
#
**Concept:** AUTHENTICATION FLOWS / TOKEN SECURITY problem type.
# Third-party integrations require secure OAuth/OIDC flows with proper token handling, least privilege scoping, and platform-specific hardening for Azure AD/Entra ID and Google Cloud service accounts.
#
#
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.
#
# Center composition: Three interconnected geometric nodes representing authentication flows:
#   - LEFT NODE (electric blue): Authorization Code Flow with PKCE — a hexagon with a shield icon inside, representing public clients (SPAs, mobile)
#   - CENTER NODE (neon green): Device Authorization Flow — a pentagon with a device/code icon, representing IoT/CLI tools  
#   - RIGHT NODE (amber): Client Credentials Flow — an octagon with a server/database icon, representing server-to-server
#
# From each node, neon lines flow downward to a central SECURITY LAYER:
#   - PKCE + State validation (cyan shield with checkmark)
#   - Token validation (purple checkmark over aud/iss claims)
#   - Scope minimization (green downward arrow reducing scope breadth)
#   - Credential storage (orange key going into a vault)
#
# Below the security layer: a CHECKLIST grid with checkmarks in neon colors:
#   [ ] Proper flow selection
#   [ ] PKCE/State validation  
#   [ ] Token hygiene
#   [ ] Least privilege scopes
#   [ ] Secure credential storage
#   [ ] Platform-specific hardening
#
# Color palette: near-black background, flow nodes in electric blue/neon green/amber, security elements in cyan/purple/green/orange, checklist in neon-white on dark gray. Subjects fill the frame. Minimal. Gallery-worthy.
#
---
## 33. intune-autopatch-with-scripts.png
#
**REGENERATED 2026-08-03** — original generation was a duplicate of mediafusion-device-auth.png (same md5); replaced with a unique image. Prompt used:
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.
# Subject: automated patch deployment - a central geometric cloud control node at top sending glowing sync pulses down neon lines to a fleet of flat monitor/server terminal cubes below, each terminal with a small progress gauge arc and a tiny green checkmark badge appearing on the first cube, conveying managed automatic patching across many devices. Neon green, cyan, and violet palette. Square composition, 1024x1024 PNG.
#
**Concept:** INTEUNE AUTOPATCH + SCRIPTS problem type.
# Windows Autopatch automates Windows and Microsoft 365 updates; Intune update policies control deployment rings; PowerShell remediation scripts verify and remediate patch compliance.
#
#
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.
#
# Center composition: Three interconnected geometric nodes representing the patching flow:
#   - LEFT NODE (electric blue): Windows Autopatch service — a hexagon with a cloud and arrow icon, representing automated update service
#   - CENTER NODE (neon green): Intune update policies — a pentagon with a gear and shield icon, representing update rings and compliance policies
#   - RIGHT NODE (amber): PowerShell remediation scripts — an octagon with a terminal/script icon, representing detection and remediation scripts
#
# From each node, neon lines flow downward to a central SECURITY LAYER:
#   - Update rings (cyan shield with circular arrows)
#   - Compliance policies (purple shield with checkmark)
#   - Detection scripts (green terminal with checkmark)
#   - Remediation scripts (orange terminal with wrench)
#
# Below the security layer: a DEVICE GRID with checkmarks in neon colors:
#   [ ] Device enrolled in Autopatch
#   [ ] Update rings configured
#   [ ] Detection script deployed
#   [ ] Remediation script ready
#   [ ] Compliance verified
#
# Color palette: near-black background, flow nodes in electric blue/neon green/amber, security elements in cyan/purple/green/orange, checklist in neon-white on dark gray. Subjects fill the frame. Minimal. Gallery-worthy.
#
---
## 34. mediafusion-device-auth.png
#
**Concept:** MEDIAFUSION OAUTH DEVICE FLOW problem type.
#
MediaFusion implements OAuth 2.0 device authorization grant (RFC 8628) for services like RealDebrid, Premiumize, DebridLink, and Seedr, enabling secure authentication on input-constrained devices.
#
**Prompt:**#
Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.#
#
Center composition: Three interconnected geometric nodes representing the device flow:#
#   - LEFT NODE (electric blue): Device Code Request — a hexagon with device/code icons, representing the initial request to provider#
#   - CENTER NODE (neon green): User Code Display — a pentagon with user/code and phone/laptop icons, showing code display on secondary device#
#   - RIGHT NODE (amber): Token Polling & Storage — an octagon with polling arrows and encrypted token/vault icons, representing background polling and secure storage#
#
From each node, neon lines flow downward to a central SECURITY LAYER:#
#   - User Code Brute Force Protection (cyan shield with lock)#
#   - Device Code Entropy (purple shield with dice)#
#   - Phishing Protection (green shield with checkmark over URL)#
#   - Polling Rate Limiting (orange shield with clock)#
#   - Token Encryption (yellow key going into vault)#
#
Below the security layer: a FLOW DIAGRAM with neon arrows:#
#   [Device Code Request] → [Display User Code] → [User Authorizes on Phone] → [Poll for Token] → [Receive & Encrypt Token] → [Embed in Manifest URL]#
#
Color palette: near-black background, flow nodes in electric blue/neon green/amber, security elements in cyan/purple/green/orange/yellow, flowchart arrows in neon-white. Subjects fill the frame. Minimal. Gallery-worthy.#
#
---

---
## securing-ai-agents.png
#
**Concept:** SECURING AI AGENTS: THREAT MODEL + GUARDRAILS problem type.
#
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.
#
# Center composition: A shield shaped like a hexagonal grid protecting a stylized AI agent node (a robot head with gears) from incoming threat vectors (lightning bolts, code injection symbols). From the shield, neon lines flow to security layers: identity verification (shield with OIDC token), runtime sandbox (container with lock), egress allowlist (network node with checkmark), prompt integrity (JSON envelope with checkmark).
#
# Below the security layer: a CHECKLIST grid with checkmarks in neon colors:
#   [ ] Least‑privilege credentials
#   [ ] Runtime sandboxing
#   [ ] Egress allow‑list
#   [ ] Prompt‑integrity wrappers
#   [ ] Audit logging
#
# Color palette: near-black background, shield in electric blue, threat vectors in red, security layers in neon green/purple/orange, checklist in neon‑white on dark gray. Subjects fill the frame. Minimal. Gallery-worthy.
#
#
---
## 35. smb-over-quic-and-entra-app-proxy.png
#
# [ ] Unique hero for SMB over QUIC and Entra Application Proxy
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text, letters, numbers, logos, or watermarks in image. Square 1:1 composition.
# A precise split-screen security access scene: on the left, a cobalt-blue Windows file cabinet connected to a bright cyan QUIC packet stream that exits through a UDP port gateway and enters a violet shielded remote laptop; on the right, an amber legacy browser window behind a compact on-premises connector node, linked by a green identity token path to a protected user portal. The two halves meet at a thin white identity boundary, but never merge into one generic network tunnel. Small abstract certificate, shield, and policy glyphs only. Palette: cobalt blue, cyan, violet, amber, neon green, near-black. Clean architectural diagram, no generic padlock wall, no text.
#
---
## 36. azure-waf-detection-to-prevention.png
#
# [ ] Unique hero for Azure WAF Detection to Prevention
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text, letters, numbers, logos, or watermarks in image. Square 1:1 composition.
# A single angular web gateway in the center transforms from an open cyan scanning grid on the left into a solid magenta-and-orange enforcement barrier on the right. Legitimate geometric request packets pass through a narrow verified path while hostile red shards are inspected, then diverted into a small quarantine tray. Behind the gateway are three tiny log bars and a precise adjustable rule dial with no labels. Palette: cyan, electric blue, magenta, orange, red, near-black. The concept is controlled tuning and measured promotion, not a generic firewall or padlock. Clean minimal security operations illustration.
#
---
## 37. auditable-human-approval-gates-for-ai-agents.png
#
# [ ] Unique hero for auditable Human Approval Gates for AI Agents
# Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text, letters, numbers, logos, or watermarks in image. Square 1:1 composition.
# A small violet autonomous agent node proposes three branching action cards toward a central human approval console represented only by a calm white hand silhouette pressing one green confirmation circle. An immutable amber audit trail of connected square event blocks runs beneath the console to a separate blue execution worker, with a red stop-switch node clearly isolated at the edge. Show separation of proposal, human authorization, audit evidence, and execution. Palette: violet, electric blue, neon green, amber, red, near-black. Minimal governance diagram, no robot face, no generic shield, no text.
#
