# Talha Yaqoob

### SOC & Incident Response

[Portfolio website](https://talha-yaqoob-security.lightbowl16384.chatgpt.site) · [LinkedIn](https://www.linkedin.com/in/talha-yaqoob-76185b359/)

## Malware Analysis

Original malware-analysis write-ups and binary-format notes. PDF archives assembled from LinkedIn's displayed pages are labelled in the index.

| Write-up | Focus |
| --- | --- |
| [PMA Lab 1.1](writeups/malware-analysis/pma-lab-1-1.pdf) | Introductory malware analysis |
| [PMA Lab 1.2](writeups/malware-analysis/pma-lab-1-2.pdf) | Foundational analysis and indicators |
| [PMA Lab 1.3](writeups/malware-analysis/pma-lab-1-3.pdf) | Static-analysis observations |
| [PMA Lab 5](writeups/malware-analysis/pma-lab-5.pdf) | DLL entry points, imports, DNS, and exports |
| [PMA Lab 6](writeups/malware-analysis/pma-lab-6.pdf) | Assembly control flow and Windows APIs |
| [PMA Lab 7](writeups/malware-analysis/pma-lab-7.pdf) | Service persistence, mutexes, and indicators |
| [PMA Lab 9.2](writeups/malware-analysis/pma-lab-9-2.pdf) | Debugging, filename checks, and obfuscated domains |
| [Portable Executable Format](writeups/malware-analysis/portable-executable-format.pdf) | Windows binary structure and reverse-engineering notes |

**[Browse Malware Analysis](writeups/malware-analysis/README.md)**

## TryHackMe Write-ups

Hands-on investigation notes, kept separate from projects and malware-analysis exercises.

| Write-up | Focus |
| --- | --- |
| [Detectmare](writeups/tryhackme/detectmare.pdf) | Detection-rule tuning |
| [Conti](writeups/tryhackme/conti-investigation.pdf) | Ransomware investigation |
| [Volt Typhoon](writeups/tryhackme/volt-typhoon-investigation.pdf) | Log analysis and threat investigation |
| [Boogeyman 3](writeups/tryhackme/boogeyman-3.pdf) | Persistence and credential-access investigation |
| [Typosquatters](writeups/tryhackme/typosquatters.pdf) | Malicious download and execution chain |
| [PaymentCollection1](writeups/tryhackme/paymentcollection1.pdf) | PowerShell, data staging, and exfiltration |
| [Phishing Unfolding / Alert Triage](writeups/tryhackme/covering-the-attack.pdf) | Alert review and attack-chain reconstruction |
| [Linux Threat Hunting](writeups/tryhackme/linux-threat-hunting.pdf) | Hidden files, shell changes, and scheduled tasks |

**[Browse TryHackMe Write-ups](writeups/tryhackme/README.md)**

## Projects

### [mechanic — Detection Rule Maintenance Triage](https://github.com/Kanga-Heera/mechanic)

A Python tool that examines Sigma rule logic and git history to help prioritize rule reviews. It reports fragility and staleness separately, with explanations and documented limitations.

[Source code](https://github.com/Kanga-Heera/mechanic) · [Quickstart](https://github.com/Kanga-Heera/mechanic/blob/master/QUICKSTART.md) · [Evaluation](https://github.com/Kanga-Heera/mechanic/blob/master/RESULTS.md) · [Development narrative](projects/mechanic-development-notes.pdf)

### [LeakWatch — Secret Exposure Monitoring](https://github.com/Kanga-Heera/LeakWatch)

A self-hosted Python/FastAPI application for detecting exposed credentials in public sources and prioritizing findings through risk scoring and ownership attribution.

[Source code](https://github.com/Kanga-Heera/LeakWatch) · [Threat model](https://github.com/Kanga-Heera/LeakWatch/blob/main/docs/THREAT_MODEL.md) · [Synthetic test fixtures](https://github.com/Kanga-Heera/LeakWatch-Test-Repository)

**[Browse Projects](projects/README.md)**
