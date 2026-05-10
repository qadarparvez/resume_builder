const jobDescriptionEl = document.getElementById('jobDescription');
const generateButtonEl = document.getElementById('generateButton');
const loadExampleButtonEl = document.getElementById('loadExampleButton');
const copyButtonEl = document.getElementById('copyButton');
const statusMessageEl = document.getElementById('statusMessage');
const outputEl = document.getElementById('output');

const exampleDescription = `We are hiring a DevOps Engineer to build CI/CD pipelines, manage Docker and Kubernetes workloads, automate infrastructure with Terraform and Ansible, strengthen monitoring with Prometheus and Grafana, and support Azure and AWS-based environments.`;

function setStatus(message, type = 'neutral') {
  statusMessageEl.textContent = message;
  statusMessageEl.dataset.type = type;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildExperienceMarkup(experience) {
  const bullets = experience.bullets
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join('');

  const technologies = experience.technologies
    .map((tech) => `<span class="chip">${escapeHtml(tech)}</span>`)
    .join('');

  return `
    <article class="experience-card">
      <div class="experience-head">
        <div>
          <h4>${escapeHtml(experience.title)}</h4>
          <p class="company-line">${escapeHtml(experience.company)}</p>
        </div>
        <span class="duration">${escapeHtml(experience.duration)}</span>
      </div>
      <ul class="bullet-list">${bullets}</ul>
      <div class="chip-row">${technologies}</div>
    </article>
  `;
}

function buildChips(items, className = 'chip') {
  if (!items.length) {
    return '<span class="chip subtle">None</span>';
  }

  return items
    .map((item) => `<span class="${className}">${escapeHtml(item)}</span>`)
    .join('');
}

function renderResult(data) {
  const skills = data.skills
    .map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`)
    .join('');

  const detected = data.detectedKeywords.length
    ? buildChips(data.detectedKeywords, 'chip subtle')
    : '<span class="chip subtle">Generic</span>';

  const matchedKeywords = buildChips(data.match.matchedKeywords);
  const missingKeywords = buildChips(data.match.missingKeywords, 'chip warning');

  const experiences = data.experiences.map(buildExperienceMarkup).join('');

  outputEl.innerHTML = `
    <section class="result-section">
      <div class="match-card">
        <div class="match-card-head">
          <div>
            <p class="section-label">Resume To JD Match</p>
            <h3 class="match-score">${escapeHtml(String(data.match.percentage))}%</h3>
          </div>
          <div class="match-stats">
            <p><strong>${escapeHtml(String(data.match.keywordCoverage))}%</strong> keyword coverage</p>
            <p><strong>${escapeHtml(String(data.match.structureScore))}%</strong> structure completeness</p>
            <p><strong>${escapeHtml(String(data.match.varietyScore))}%</strong> content variety</p>
          </div>
        </div>
        <div class="progress-track" aria-label="Resume match score">
          <div class="progress-fill" style="width: ${escapeHtml(String(data.match.percentage))}%"></div>
        </div>
        <p class="match-note">
          This estimate is based on the full set of detected job-description requirements, how many of those requirements are explicitly reflected in the generated content, and whether the output has complete resume structure.
        </p>
        <div class="coverage-grid">
          <div>
            <p class="section-label">Covered Keywords</p>
            <div class="chip-row">${matchedKeywords}</div>
          </div>
          <div>
            <p class="section-label">Still Weak / Missing</p>
            <div class="chip-row">${missingKeywords}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="result-section">
      <div class="meta-row">
        <div>
          <p class="section-label">Detected Focus</p>
          <div class="chip-row">${detected}</div>
        </div>
        <div>
          <p class="section-label">Suggested Track</p>
          <p class="track-pill">${escapeHtml(data.track.toUpperCase())}</p>
        </div>
      </div>
    </section>

    <section class="result-section">
      <p class="section-label">Professional Summary</p>
      <p class="summary-text">${escapeHtml(data.summary)}</p>
    </section>

    <section class="result-section">
      <p class="section-label">Skills</p>
      <div class="chip-row">${skills}</div>
    </section>

    <section class="result-section">
      <p class="section-label">Professional Experience</p>
      <div class="experience-grid">${experiences}</div>
    </section>
  `;

  outputEl.classList.remove('hidden');
}

async function generateContent() {
  const jobDescription = jobDescriptionEl.value.trim();

  if (!jobDescription) {
    setStatus('Add a job description before generating content.', 'error');
    outputEl.classList.add('hidden');
    outputEl.innerHTML = '';
    return;
  }

  generateButtonEl.disabled = true;
  setStatus('Generating resume content...', 'working');

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobDescription })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate content.');
    }

    renderResult(data);
    setStatus('Resume content generated successfully.', 'success');
  } catch (error) {
    outputEl.classList.add('hidden');
    outputEl.innerHTML = '';
    setStatus(error.message, 'error');
  } finally {
    generateButtonEl.disabled = false;
  }
}

async function copyOutput() {
  if (outputEl.classList.contains('hidden')) {
    setStatus('Generate content first, then copy it.', 'error');
    return;
  }

  const text = outputEl.innerText.trim();

  try {
    await navigator.clipboard.writeText(text);
    setStatus('Generated content copied to clipboard.', 'success');
  } catch (_error) {
    setStatus('Copy failed in this browser. Select and copy the text manually.', 'error');
  }
}

generateButtonEl.addEventListener('click', generateContent);
loadExampleButtonEl.addEventListener('click', () => {
  jobDescriptionEl.value = exampleDescription;
  setStatus('Example job description loaded.', 'neutral');
});
copyButtonEl.addEventListener('click', copyOutput);
