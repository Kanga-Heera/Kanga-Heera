# Talha Yaqoob

### Cybersecurity · Detection Engineering · Security Automation

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
