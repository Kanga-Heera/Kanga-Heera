# Talha Yaqoob

### SOC & Incident Response

My security portfolio focuses on two practical problems: deciding which detection rules need review, and turning exposed-secret findings into actionable triage.

## Featured projects

### [mechanic — Detection Rule Maintenance Triage](https://github.com/Kanga-Heera/mechanic)

A Python tool for reviewing Sigma detection rules. It examines rule logic for fragility and git history for maintenance signals, then explains which rules deserve attention.

- Parses Sigma rules into logic trees and reports malformed files without stopping the entire batch.
- Filters bulk mechanical commits when assessing rule maintenance.
- Reports fragility and staleness separately, with explanations and limitations.
- Offers a CLI and a local web interface for reviewing findings.

**Explore:** [Source and overview](https://github.com/Kanga-Heera/mechanic) · [Quickstart](https://github.com/Kanga-Heera/mechanic/blob/master/QUICKSTART.md) · [Reported evaluation results](https://github.com/Kanga-Heera/mechanic/blob/master/RESULTS.md)

### [LeakWatch — Secret Exposure Monitoring](https://github.com/Kanga-Heera/LeakWatch)

A self-hosted Python application for detecting exposed credentials in public sources and prioritizing findings for review.

- Combines pattern matching and entropy checks with risk scoring.
- Attributes findings using CODEOWNERS or file commit history.
- Provides a FastAPI service with API-key authentication, retention controls, and trend reporting.
- Documents source-access restrictions, validation behavior, and data handling in its threat model.

**Explore:** [Source and setup](https://github.com/Kanga-Heera/LeakWatch) · [Threat model](https://github.com/Kanga-Heera/LeakWatch/blob/main/docs/THREAT_MODEL.md) · [Synthetic test fixtures](https://github.com/Kanga-Heera/LeakWatch-Test-Repository)

## Technical themes in this portfolio

`Python` · `Sigma` · `Detection Rule Analysis` · `Git History Analysis` · `FastAPI` · `Credential Exposure Triage` · `Security Documentation`

The linked repositories contain implementation details, setup instructions, and stated limitations. Project features and reported results should be assessed in that context.

## Connect

[LinkedIn](https://www.linkedin.com/in/talha-yaqoob-76185b359/) · [GitHub](https://github.com/Kanga-Heera)

## Experience & education

- **Air University:** Bachelor's degree in Cybersecurity, September 2024-present; expected graduation 2028.
- **NASTP:** Intern, July-August 2026; on-site in Rawalpindi, with IT infrastructure listed on LinkedIn.
- **ITSOLERA PVT LTD:** SOC Analyst Intern; part-time, remote.
- **Cyber Academy:** SOC Intern, August-September 2025.
- **TryHackMe:** Independent blue-team lab practice since March 2025, including SOC L1 work covering host logs, malicious documents and emails, and attack-chain reconstruction.

## Investigation & writing portfolio

[Explore seven original write-ups and project posts](writing/README.md), including Detectmare, Volt Typhoon, Conti, Active Directory learning notes, and the thinking behind mechanic and LeakWatch.

[Read my professional profile](profile/linkedin-profile.md) for the source-backed experience summary and skills listed on LinkedIn.

## Portfolio website

[Explore the interactive portfolio](https://kanga-heera.github.io/Kanga-Heera/) — selected projects, field notes, education, and experience.

## SOC, malware analysis & recognition

Hands-on work described in my resume includes Wazuh deployments, Windows Event ID and Sysmon investigations, alert triage, IOC identification, incident documentation, and malware analysis with IDA Pro and Ghidra.

- **Wazuh / Windows Server lab:** manager-agent monitoring, event logs, File Integrity Monitoring, and alert workflows.
- **Practical Malware Analysis:** 7+ labs covering reverse engineering, unpacking, persistence, and C2 behavior.
- **Broadway Pizza recognition:** Certificate of Recognition for website security and vulnerability-testing contributions, dated September 1, 2026. [View certificate](docs/assets/broadway-recognition.pdf).

[Full experience, skills, training, and source notes](profile/linkedin-profile.md)
