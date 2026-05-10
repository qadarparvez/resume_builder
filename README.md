# Resume Content Generator

A simple local Node.js + Express web application that generates ATS-friendly resume content from a pasted job description.

The app uses a rule-based generator. No database, authentication, or paid API key is required.

## Features

- Two-column layout
- Paste a job description into a large textarea
- Generate resume content with:
  - professional summary
  - skills section
  - 4 professional experiences
  - 4 to 6 bullet points per experience
  - relevant technologies for each experience
- Match scoring with:
  - percentage progress bar
  - keyword coverage
  - structure completeness
  - content variety
  - covered vs weak or missing JD keywords
- Rule-based keyword detection for:
  - DevOps
  - Docker
  - Kubernetes
  - Azure
  - AWS
  - CI/CD
  - Jenkins
  - Terraform
  - Ansible
  - monitoring
  - security
  - Node.js
  - React
  - PostgreSQL
  - Linux
  - Nginx
- Clean local Docker workflow

## Folder Structure

```text
resume-content-generator/
├── .dockerignore
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── server.js
└── src/
    └── generator.js
```

## Run Locally With Docker

From inside the project folder:

```bash
docker compose up --build
```

The app will be available at:

```text
http://localhost:3000
```

## Run Locally Without Docker

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## How It Works

1. The browser sends the pasted job description to `POST /api/generate`.
2. The server analyzes the text for known keywords.
3. The generator builds:
   - a tailored summary
   - a matching skills section
   - four ATS-friendly experience entries
   - a resume-to-JD match score
4. The frontend renders the result on the right side of the page.

If no important keywords are detected, the generator falls back to generic software/devops content.
If the JD contains tools or practices the generator does not explicitly cover, the score drops and those items appear in the weak or missing list.

## Example Usage

Paste a job description such as:

```text
We are hiring a DevOps Engineer to manage Docker and Kubernetes workloads, build CI/CD pipelines, automate infrastructure with Terraform and Ansible, and strengthen monitoring across AWS and Azure environments.
```

Expected behavior:

- the app detects `DevOps`, `Docker`, `Kubernetes`, `CI/CD`, `Terraform`, `Ansible`, `AWS`, `Azure`, and `monitoring`
- the output emphasizes cloud infrastructure, automation, observability, and release reliability

## Notes

- The generator is intentionally rule-based for local use.
- The output is designed to be a strong starting point, not a final source of truth.
- You can extend `src/generator.js` with more keywords, resume tracks, or bullet templates later.
