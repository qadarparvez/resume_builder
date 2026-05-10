const REQUIREMENTS = [
  { id: 'devops', label: 'DevOps', aliases: ['devops', 'platform engineering', 'platform engineer'], weight: 1.0, skill: 'DevOps', category: 'platform', summaryPhrase: 'building dependable delivery workflows and production-ready platform capabilities' },
  { id: 'sre', label: 'SRE', aliases: ['site reliability', 'sre', 'reliability engineering'], weight: 1.2, skill: 'Site Reliability Engineering', category: 'reliability', summaryPhrase: 'improving service reliability, operability, and incident readiness across critical systems' },
  { id: 'incident', label: 'Incident Management', aliases: ['incident', 'incidents', 'incident response'], weight: 1.1, skill: 'Incident Response', category: 'reliability', summaryPhrase: 'leading production incident response and structured operational recovery' },
  { id: 'postmortem', label: 'Postmortems', aliases: ['postmortem', 'postmortems', 'post-incident review', 'blameless postmortem'], weight: 1.0, category: 'reliability' },
  { id: 'oncall', label: 'On-Call', aliases: ['on-call', 'on call', 'rotation'], weight: 0.9, category: 'reliability' },
  { id: 'mttr', label: 'MTTR', aliases: ['mttr'], weight: 0.8, category: 'reliability' },
  { id: 'performance', label: 'Performance Analysis', aliases: ['performance analysis', 'performance bottlenecks', 'performance'], weight: 1.0, category: 'performance', summaryPhrase: 'identifying bottlenecks and improving runtime performance under production load' },
  { id: 'scalability', label: 'Scalability', aliases: ['scaling', 'scalability'], weight: 0.9, category: 'performance' },
  { id: 'loadtesting', label: 'Load Testing', aliases: ['load testing', 'stress testing'], weight: 1.0, category: 'performance' },
  { id: 'capacity', label: 'Capacity Planning', aliases: ['capacity planning'], weight: 1.0, category: 'performance' },
  { id: 'hightraffic', label: 'High-Traffic Systems', aliases: ['high-traffic', 'high traffic', 'large-scale'], weight: 0.9, category: 'performance' },
  { id: 'dr', label: 'DR / HA', aliases: ['dr', 'disaster recovery', 'ha', 'high availability', 'fault-tolerant', 'fault tolerance'], weight: 1.0, category: 'reliability' },
  { id: 'observability', label: 'Observability', aliases: ['observability', 'telemetry'], weight: 1.2, skill: 'Observability', category: 'observability', summaryPhrase: 'strengthening observability through actionable monitoring, alerting, logging, and tracing' },
  { id: 'monitoring', label: 'Monitoring', aliases: ['monitoring', 'metrics'], weight: 1.0, skill: 'Monitoring', category: 'observability' },
  { id: 'alerts', label: 'Alerting', aliases: ['alerting', 'alerts'], weight: 0.9, category: 'observability' },
  { id: 'dashboards', label: 'Dashboards', aliases: ['dashboards', 'dashboard'], weight: 0.8, category: 'observability' },
  { id: 'logs', label: 'Logs', aliases: ['logs', 'logging'], weight: 0.8, category: 'observability' },
  { id: 'traces', label: 'Traces', aliases: ['traces', 'tracing'], weight: 0.8, category: 'observability' },
  { id: 'profiling', label: 'Profiling', aliases: ['profiling'], weight: 0.7, category: 'observability' },
  { id: 'prometheus', label: 'Prometheus', aliases: ['prometheus'], weight: 1.0, skill: 'Prometheus', category: 'observability' },
  { id: 'grafana', label: 'Grafana', aliases: ['grafana'], weight: 1.0, skill: 'Grafana', category: 'observability' },
  { id: 'loki', label: 'Loki', aliases: ['loki'], weight: 0.9, skill: 'Loki', category: 'observability' },
  { id: 'mimir', label: 'Mimir', aliases: ['mimir'], weight: 0.8, skill: 'Mimir', category: 'observability' },
  { id: 'elk', label: 'ELK/EFK', aliases: ['elk', 'efk', 'elasticsearch', 'elastic search', 'logstash', 'kibana'], weight: 1.0, skill: 'ELK / EFK', category: 'observability' },
  { id: 'opentelemetry', label: 'OpenTelemetry', aliases: ['opentelemetry', 'open telemetry'], weight: 1.1, skill: 'OpenTelemetry', category: 'observability' },
  { id: 'jaeger', label: 'Jaeger', aliases: ['jaeger'], weight: 0.9, skill: 'Jaeger', category: 'observability' },
  { id: 'tempo', label: 'Tempo', aliases: ['tempo'], weight: 0.9, skill: 'Tempo', category: 'observability' },
  { id: 'datadog', label: 'Datadog', aliases: ['datadog'], weight: 0.9, skill: 'Datadog', category: 'observability' },
  { id: 'dynatrace', label: 'Dynatrace', aliases: ['dynatrace'], weight: 0.9, skill: 'Dynatrace', category: 'observability' },
  { id: 'newrelic', label: 'New Relic', aliases: ['new relic', 'newrelic'], weight: 0.9, skill: 'New Relic', category: 'observability' },
  { id: 'sli_slo', label: 'SLI/SLO', aliases: ['sli', 'slis', 'slo', 'slos', 'error budget', 'error budgets'], weight: 1.1, skill: 'SLI / SLO', category: 'reliability' },
  { id: 'anomaly', label: 'Anomaly Detection', aliases: ['anomaly detection', 'anomaly'], weight: 0.9, skill: 'Anomaly Detection', category: 'observability' },
  { id: 'chaos', label: 'Chaos Engineering', aliases: ['chaos engineering', 'resilience testing'], weight: 1.0, skill: 'Chaos Engineering', category: 'reliability' },
  { id: 'docker', label: 'Docker', aliases: ['docker', 'containerized', 'containers'], weight: 1.0, skill: 'Docker', category: 'platform', summaryPhrase: 'deploying containerized workloads with dependable environment parity' },
  { id: 'kubernetes', label: 'Kubernetes', aliases: ['kubernetes', 'k8s'], weight: 1.0, skill: 'Kubernetes', category: 'platform', summaryPhrase: 'operating Kubernetes-based workloads with a focus on scalability and rollout safety' },
  { id: 'servicemesh', label: 'Service Mesh', aliases: ['service mesh'], weight: 0.9, skill: 'Service Mesh', category: 'platform' },
  { id: 'azure', label: 'Azure', aliases: ['azure', 'microsoft azure'], weight: 1.0, skill: 'Azure', category: 'platform', summaryPhrase: 'supporting Azure-based cloud infrastructure for production systems' },
  { id: 'aws', label: 'AWS', aliases: ['aws', 'amazon web services'], weight: 1.0, skill: 'AWS', category: 'platform', summaryPhrase: 'supporting AWS cloud infrastructure with operational discipline' },
  { id: 'gcp', label: 'GCP', aliases: ['gcp', 'google cloud', 'google cloud platform'], weight: 1.0, skill: 'GCP', category: 'platform', summaryPhrase: 'working across GCP-aligned cloud delivery environments' },
  { id: 'aks', label: 'AKS', aliases: ['aks', 'azure kubernetes service'], weight: 1.0, skill: 'AKS', category: 'platform' },
  { id: 'appservice', label: 'App Services', aliases: ['app services', 'app service'], weight: 0.9, skill: 'App Services', category: 'platform' },
  { id: 'functions', label: 'Functions', aliases: ['functions', 'azure functions'], weight: 0.9, skill: 'Functions', category: 'platform' },
  { id: 'apim', label: 'API Management', aliases: ['api management', 'api gateway', 'api gateways'], weight: 1.0, skill: 'API Management', category: 'platform' },
  { id: 'terraform', label: 'Terraform', aliases: ['terraform'], weight: 1.0, skill: 'Terraform', category: 'automation', summaryPhrase: 'automating infrastructure changes with Infrastructure as Code practices' },
  { id: 'iac', label: 'Infrastructure as Code', aliases: ['infrastructure as code', 'iac'], weight: 1.0, skill: 'Infrastructure as Code', category: 'automation', summaryPhrase: 'standardizing provisioning and change management through Infrastructure as Code' },
  { id: 'ansible', label: 'Ansible', aliases: ['ansible', 'configuration management'], weight: 1.0, skill: 'Ansible', category: 'automation', summaryPhrase: 'reducing operational toil through configuration automation and repeatable provisioning' },
  { id: 'selfhealing', label: 'Self-Healing', aliases: ['self-healing', 'self healing'], weight: 0.9, skill: 'Self-Healing Automation', category: 'automation' },
  { id: 'automation', label: 'Automation', aliases: ['automation', 'automate', 'automated'], weight: 0.9, skill: 'Automation', category: 'automation' },
  { id: 'cicd', label: 'CI/CD', aliases: ['ci/cd', 'cicd', 'continuous integration', 'continuous delivery', 'pipelines', 'pipeline'], weight: 1.1, skill: 'CI/CD', category: 'automation', summaryPhrase: 'designing CI/CD pipelines that improve release speed, quality, and deployment consistency' },
  { id: 'gitops', label: 'GitOps', aliases: ['gitops'], weight: 1.0, skill: 'GitOps', category: 'automation', summaryPhrase: 'using GitOps approaches to improve deployment consistency and control' },
  { id: 'jenkins', label: 'Jenkins', aliases: ['jenkins'], weight: 0.9, skill: 'Jenkins', category: 'automation' },
  { id: 'githubactions', label: 'GitHub Actions', aliases: ['github actions'], weight: 0.9, skill: 'GitHub Actions', category: 'automation' },
  { id: 'azuredevops', label: 'Azure DevOps', aliases: ['azure devops'], weight: 1.0, skill: 'Azure DevOps', category: 'automation' },
  { id: 'bicep', label: 'Bicep', aliases: ['bicep'], weight: 0.8, skill: 'Bicep', category: 'automation' },
  { id: 'security', label: 'Security', aliases: ['security', 'secure', 'compliance', 'hardening'], weight: 1.0, skill: 'Security Best Practices', category: 'security', summaryPhrase: 'embedding practical security controls into platform engineering workflows' },
  { id: 'iam', label: 'IAM', aliases: ['iam', 'identity and access management'], weight: 0.9, skill: 'IAM', category: 'security' },
  { id: 'rbac', label: 'RBAC', aliases: ['rbac', 'role based access control'], weight: 0.9, skill: 'RBAC', category: 'security' },
  { id: 'secrets', label: 'Secrets Management', aliases: ['secrets', 'secrets management', 'vault', 'key vault'], weight: 0.9, skill: 'Secrets Management', category: 'security' },
  { id: 'sama', label: 'SAMA Compliance', aliases: ['sama'], weight: 1.0, skill: 'SAMA Compliance', category: 'security' },
  { id: 'dataresidency', label: 'Data Residency', aliases: ['data residency'], weight: 0.9, skill: 'Data Residency', category: 'security' },
  { id: 'linux', label: 'Linux', aliases: ['linux', 'unix'], weight: 0.9, skill: 'Linux', category: 'platform', summaryPhrase: 'supporting Linux-based environments with practical operational troubleshooting' },
  { id: 'networking', label: 'Networking', aliases: ['networking', 'network', 'routing', 'switching', 'connectivity'], weight: 0.9, skill: 'Networking', category: 'platform', summaryPhrase: 'handling core networking concerns as part of production platform operations' },
  { id: 'loadbalancing', label: 'Load Balancing', aliases: ['load balancing', 'load balancer'], weight: 0.9, skill: 'Load Balancing', category: 'platform' },
  { id: 'nginx', label: 'Nginx', aliases: ['nginx', 'reverse proxy'], weight: 0.8, skill: 'Nginx', category: 'platform' },
  { id: 'python', label: 'Python', aliases: ['python'], weight: 0.8, skill: 'Python', category: 'automation' },
  { id: 'bash', label: 'Bash', aliases: ['bash', 'shell scripting', 'shell'], weight: 0.8, skill: 'Bash', category: 'automation' },
  { id: 'powershell', label: 'PowerShell', aliases: ['powershell'], weight: 0.8, skill: 'PowerShell', category: 'automation' },
  { id: 'go', label: 'Go', aliases: ['go'], weight: 0.8, skill: 'Go', category: 'automation' },
  { id: 'microservices', label: 'Microservices', aliases: ['microservices', 'distributed systems', 'distributed architecture'], weight: 1.0, skill: 'Microservices', category: 'platform' },
  { id: 'eventdriven', label: 'Event-Driven Architecture', aliases: ['event-driven', 'event driven'], weight: 0.9, skill: 'Event-Driven Architecture', category: 'platform' },
  { id: 'kafka', label: 'Kafka', aliases: ['kafka'], weight: 0.9, skill: 'Kafka', category: 'platform' },
  { id: 'documentation', label: 'Documentation / Mentoring', aliases: ['documentation', 'knowledge transfer', 'mentor', 'mentoring', 'mentorship'], weight: 0.8, skill: 'Documentation', category: 'leadership' },
  { id: 'banking', label: 'Banking / FinTech', aliases: ['banking', 'bank', 'payments', 'fintech', 'core banking', 'payment platforms'], weight: 1.0, skill: 'Banking Platforms', category: 'leadership', summaryPhrase: 'supporting regulated or business-critical domains with strong operational discipline' },
  { id: 'cost', label: 'Cost Optimization', aliases: ['cost optimization', 'cost optimisation', 'cost management'], weight: 0.8, skill: 'Cost Optimization', category: 'platform' }
];

const EXPERIENCE_THEMES = [
  {
    key: 'reliability',
    fallbackTitle: 'Senior SRE / Reliability Engineer',
    categories: ['reliability'],
    leadBullet: 'Led production reliability efforts across critical services, coordinating response, recovery, and follow-up actions during high-severity operational events.'
  },
  {
    key: 'observability',
    fallbackTitle: 'Observability / Performance Engineer',
    categories: ['observability', 'performance'],
    leadBullet: 'Built observability and performance tooling that improved visibility into latency, system behavior, failure modes, and runtime bottlenecks.'
  },
  {
    key: 'platform',
    fallbackTitle: 'Platform / Infrastructure Engineer',
    categories: ['platform', 'security'],
    leadBullet: 'Improved cloud-native platform foundations spanning infrastructure, networking, security controls, and service deployment patterns.'
  },
  {
    key: 'automation',
    fallbackTitle: 'Automation / DevOps Engineer',
    categories: ['automation', 'leadership'],
    leadBullet: 'Reduced operational toil through automation, CI/CD improvements, documentation, and close collaboration with engineering teams.'
  }
];

const GENERIC_FALLBACK_BULLETS = [
  'Partnered with engineering and product stakeholders to translate delivery requirements into stable, production-ready implementation plans.',
  'Improved operational consistency by standardizing workflows, documenting repeatable practices, and reducing manual effort across environments.',
  'Troubleshot production issues end to end, accelerating diagnosis and restoration while improving long-term platform reliability.',
  'Strengthened service resilience through automation, safer deployments, and pragmatic operational improvements.'
];

const DEFAULT_TECH = ['Cloud Platforms', 'CI/CD', 'Automation', 'Monitoring', 'Linux', 'Agile Delivery'];

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9+/.\-\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function detectRequirements(jobDescription) {
  const normalized = normalize(jobDescription);

  return REQUIREMENTS
    .map((requirement) => ({
      ...requirement,
      matched: requirement.aliases.some((alias) => normalized.includes(alias))
    }))
    .filter((requirement) => requirement.matched)
    .sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label));
}

function inferTrack(detectedRequirements) {
  const infraScore = detectedRequirements.reduce((score, requirement) => {
    if (['platform', 'automation', 'observability', 'reliability', 'security', 'performance'].includes(requirement.category)) {
      return score + requirement.weight;
    }
    return score;
  }, 0);

  return infraScore >= 2 ? 'devops' : 'fullstack';
}

function getDominantClouds(detectedRequirements) {
  return detectedRequirements
    .filter((requirement) => ['aws', 'azure', 'gcp'].includes(requirement.id))
    .map((requirement) => requirement.label);
}

function buildSummary(detectedRequirements, track) {
  const topPhrases = detectedRequirements
    .filter((requirement) => requirement.summaryPhrase)
    .slice(0, 4)
    .map((requirement) => requirement.summaryPhrase);

  const clouds = getDominantClouds(detectedRequirements);
  const cloudSegment = clouds.length
    ? ` across ${clouds.join(', ')} environments`
    : '';

  const skillHighlights = detectedRequirements
    .filter((requirement) => requirement.skill)
    .slice(0, 6)
    .map((requirement) => requirement.skill)
    .join(', ');

  const roleLabel = track === 'devops' ? 'Senior SRE / DevOps engineer' : 'Senior Full-Stack engineer';
  const coreText = topPhrases.length
    ? topPhrases.join(', ')
    : 'delivering reliable systems with strong engineering discipline and operational ownership';

  return `${roleLabel} experienced in ${coreText}${cloudSegment}. Brings hands-on strengths in ${skillHighlights || 'cloud platforms, automation, observability, and incident response'}, with a track record of improving reliability, delivery quality, and production readiness in collaboration with engineering teams.`;
}

function buildSkills(detectedRequirements, track) {
  const seen = new Set();
  const skills = [];

  detectedRequirements.forEach((requirement) => {
    const skillName = requirement.skill || requirement.label;
    if (skillName && !seen.has(skillName)) {
      seen.add(skillName);
      skills.push(skillName);
    }
  });

  if (!skills.length && track === 'devops') {
    return ['Cloud Infrastructure', 'Automation', 'Monitoring', 'Docker', 'Kubernetes', 'Linux'];
  }

  if (!skills.length) {
    return ['JavaScript', 'Node.js', 'React', 'REST APIs', 'PostgreSQL', 'Docker'];
  }

  return skills;
}

function buildExperienceTemplates(track, detectedRequirements) {
  const observabilityScore = detectedRequirements
    .filter((requirement) => ['observability', 'monitoring', 'prometheus', 'grafana', 'elk', 'loki', 'mimir', 'opentelemetry', 'jaeger', 'tempo', 'datadog', 'dynatrace', 'newrelic'].includes(requirement.id))
    .reduce((sum, requirement) => sum + requirement.weight, 0);
  const azureScore = detectedRequirements
    .filter((requirement) => ['azure', 'aks', 'azuredevops', 'appservice', 'functions', 'apim'].includes(requirement.id))
    .reduce((sum, requirement) => sum + requirement.weight, 0);

  if (track === 'fullstack') {
    return [
      { title: 'Senior Full-Stack Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Full-Stack Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Backend Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Software Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' }
    ];
  }

  if (observabilityScore >= 3.5) {
    return [
      { title: 'Senior SRE / Observability Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Platform Reliability Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Observability Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Cloud Operations Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' }
    ];
  }

  if (azureScore >= 2.5) {
    return [
      { title: 'Senior Azure DevOps Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Cloud Platform Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Infrastructure Automation Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
      { title: 'Production Operations Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' }
    ];
  }

  return [
    { title: 'Senior SRE / Reliability Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
    { title: 'Platform Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
    { title: 'DevOps Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' },
    { title: 'Cloud Operations Engineer', company: '[Company Name]', duration: '[Start Date] - [End Date]' }
  ];
}

function buildTechPool(detectedRequirements) {
  const seen = new Set();
  const techs = [];

  detectedRequirements.forEach((requirement) => {
    const name = requirement.skill || requirement.label;
    if (name && !seen.has(name)) {
      seen.add(name);
      techs.push(name);
    }
  });

  return techs.length ? techs : DEFAULT_TECH;
}

function requirementMention(requirement) {
  return requirement.skill || requirement.label;
}

function requirementBullet(requirement) {
  const item = requirementMention(requirement);

  const explicit = {
    postmortem: 'Led post-incident reviews and follow-up actions that improved operational learning and reduced the likelihood of repeat failures.',
    oncall: 'Participated in on-call support and strengthened production readiness by improving diagnostics, escalation paths, and operational playbooks.',
    mttr: 'Improved MTTR by refining monitoring, alert quality, and diagnostic workflows used during production incidents.',
    performance: 'Investigated performance bottlenecks across services and infrastructure, improving latency, efficiency, and runtime stability.',
    scalability: 'Addressed scaling challenges by improving service behavior, deployment patterns, and infrastructure readiness for growing workloads.',
    loadtesting: 'Supported load and stress testing activities to validate production behavior under peak traffic and failure scenarios.',
    capacity: 'Contributed to capacity planning by aligning infrastructure readiness with expected traffic patterns, growth, and resilience targets.',
    dr: 'Improved fault tolerance, disaster recovery readiness, and high-availability patterns across critical services and infrastructure components.',
    alerts: 'Refined alerting logic to reduce noise, improve signal quality, and accelerate operational response during incidents.',
    dashboards: 'Built operational dashboards that made system behavior, service health, and risk areas easier to interpret for engineers and stakeholders.',
    logs: 'Improved centralized logging coverage to accelerate root-cause analysis and reduce troubleshooting time during live incidents.',
    traces: 'Expanded request trace visibility to improve diagnosis of cross-service latency, dependency issues, and production failures.',
    profiling: 'Used runtime profiling insights to identify hotspots, inefficient execution paths, and opportunities for performance improvement.',
    opentelemetry: `Implemented OpenTelemetry-based instrumentation to improve end-to-end trace coverage, telemetry consistency, and service-level visibility.`,
    jaeger: 'Used Jaeger-style distributed tracing workflows to analyze cross-service request paths and troubleshoot latency or failure patterns.',
    tempo: 'Integrated Tempo-style trace aggregation into observability workflows to improve diagnosis of request flow and dependency issues.',
    datadog: 'Supported Datadog-driven observability use cases for metrics, dashboards, alerting, and faster triage during production events.',
    dynatrace: 'Worked with Dynatrace-style monitoring practices to improve application visibility, anomaly detection, and performance analysis.',
    newrelic: 'Applied New Relic-style observability workflows to improve service health visibility and accelerate operational troubleshooting.',
    sli_slo: 'Defined SLIs, SLOs, and error-budget-aware monitoring guardrails to improve visibility into reliability expectations and service behavior.',
    anomaly: 'Implemented anomaly detection checks to surface abnormal service behavior earlier and support proactive incident response.',
    chaos: 'Used resilience and failure-testing practices to validate recovery paths, expose weak points, and improve fault tolerance.',
    servicemesh: 'Supported service-mesh-oriented traffic management and service-to-service reliability patterns in containerized environments.',
    appservice: 'Maintained application hosting patterns similar to App Services with attention to deployment reliability, runtime health, and operational support.',
    functions: 'Supported event-driven and function-style workloads with attention to deployment consistency, observability, and operational safeguards.',
    apim: 'Worked with API gateway and API management patterns to improve routing control, security posture, and production traffic handling.',
    azuredevops: 'Improved Azure DevOps-style delivery workflows to standardize build, release, and infrastructure automation practices.',
    bicep: 'Applied Bicep-style infrastructure templating concepts to improve repeatability and environment consistency in cloud provisioning.',
    iam: 'Applied IAM-aware access control principles to support secure platform operations and least-privilege access patterns.',
    rbac: 'Improved RBAC policies to align operational access with security and governance requirements.',
    secrets: 'Supported secrets-management practices that reduced configuration risk and improved secure delivery workflows.',
    sama: 'Worked within SAMA-aligned governance expectations by incorporating controls relevant to regulated platform operations and observability.',
    dataresidency: 'Accounted for data-residency considerations in platform design and observability workflows for regulated environments.',
    loadbalancing: 'Improved load-balancing and traffic distribution patterns to strengthen availability, fault isolation, and service responsiveness.',
    nginx: 'Configured Nginx and reverse-proxy layers to improve request routing, service exposure, and traffic handling reliability.',
    go: 'Built or maintained automation and operational tooling in Go to support platform workflows and production diagnostics.',
    microservices: 'Supported microservices and distributed-system workflows with a focus on reliability, interface clarity, and operational coordination.',
    eventdriven: 'Worked with event-driven integration patterns to improve resilience, decoupling, and operational visibility across services.',
    kafka: 'Supported Kafka-backed messaging patterns with attention to throughput, resilience, and production monitoring.',
    documentation: 'Documented operational practices and mentored engineers on debugging, reliability, and production best practices.',
    banking: 'Supported business-critical and regulated environments where reliability, control, and production discipline were non-negotiable.',
    cost: 'Improved cloud cost awareness by aligning platform decisions with utilization patterns, operational efficiency, and scaling needs.'
  };

  if (explicit[requirement.id]) {
    return explicit[requirement.id];
  }

  if (requirement.category === 'observability') {
    return `Built and improved ${item}-based observability workflows to strengthen monitoring coverage, diagnostics, and production visibility.`;
  }

  if (requirement.category === 'automation') {
    return `Used ${item} to reduce manual effort, improve environment consistency, and strengthen delivery automation.`;
  }

  if (requirement.category === 'platform') {
    return `Applied ${item} within cloud and platform operations to improve service resilience, deployment safety, and runtime stability.`;
  }

  if (requirement.category === 'security') {
    return `Incorporated ${item} practices into platform workflows to improve governance, secure operations, and production readiness.`;
  }

  if (requirement.category === 'reliability') {
    return `Applied ${item} practices to improve recovery readiness, operational control, and service reliability under production conditions.`;
  }

  return `Applied ${item} in day-to-day engineering workflows to improve operational maturity and production reliability.`;
}

function unique(items) {
  return Array.from(new Set(items));
}

function joinList(items) {
  if (!items.length) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

function mentionOf(requirement) {
  return requirement.skill || requirement.label;
}

function buildThemeBullets(theme, detectedRequirements, usedIds) {
  const byId = new Map(detectedRequirements.map((requirement) => [requirement.id, requirement]));
  const has = (id) => byId.has(id);
  const present = (ids) => ids.filter((id) => has(id)).map((id) => mentionOf(byId.get(id)));

  const bullets = [theme.leadBullet];

  if (theme.key === 'reliability') {
    if (has('incident') || has('oncall') || has('postmortem') || has('mttr')) {
      const reliabilityParts = [];
      reliabilityParts.push('Led high-severity incident response');
      if (has('oncall')) {
        reliabilityParts.push('participated in on-call support');
      }
      reliabilityParts.push('improved operational recovery through sharper diagnostics');
      if (has('mttr')) {
        reliabilityParts.push('reduced MTTR through more focused troubleshooting');
      }
      if (has('postmortem')) {
        reliabilityParts.push('drove structured post-incident reviews');
      }
      bullets.push(`${reliabilityParts.join(', ')}.`);
    }
    if (has('sli_slo') || has('alerts') || has('monitoring')) {
      bullets.push(`Defined and refined ${joinList(present(['sli_slo', 'alerts', 'monitoring']))} practices to improve service visibility, reliability guardrails, and escalation quality.`);
    }
    if (has('dr') || has('chaos') || has('scalability') || has('hightraffic')) {
      bullets.push(`Strengthened resilience through ${joinList(present(['dr', 'chaos', 'scalability', 'hightraffic']))} practices, improving platform behavior under failure and peak-load conditions.`);
    }
    if (has('documentation') || has('banking') || has('sama') || has('dataresidency')) {
      bullets.push(`Supported production governance with ${joinList(present(['documentation', 'banking', 'sama', 'dataresidency']))} aligned practices, helping teams operate reliably in controlled environments.`);
    }
  }

  if (theme.key === 'observability') {
    const telemetryStack = present(['opentelemetry', 'prometheus', 'grafana', 'elk', 'loki', 'mimir', 'jaeger', 'tempo', 'datadog', 'dynatrace', 'newrelic']);
    if (telemetryStack.length) {
      bullets.push(`Built and refined observability workflows using ${joinList(telemetryStack.slice(0, 11))}, improving visibility into service health, latency, errors, and dependency behavior.`);
    }
    if (has('dashboards') || has('logs') || has('traces') || has('profiling') || has('anomaly')) {
      bullets.push(`Improved production insight through ${joinList(present(['dashboards', 'logs', 'traces', 'profiling', 'anomaly']))}, enabling faster diagnosis and more proactive operational response.`);
    }
    if (has('performance') || has('loadtesting') || has('capacity')) {
      bullets.push(`Used ${joinList(present(['performance', 'loadtesting', 'capacity']))} practices to identify bottlenecks, validate runtime behavior, and prepare systems for growth.`);
    }
  }

  if (theme.key === 'platform') {
    const cloudStack = present(['aws', 'azure', 'gcp', 'kubernetes', 'docker', 'aks', 'servicemesh']);
    if (cloudStack.length) {
      bullets.push(`Operated cloud-native workloads across ${joinList(cloudStack.slice(0, 7))}, with emphasis on safe deployments, service resilience, and stable runtime behavior.`);
    }
    if (has('linux') || has('networking') || has('loadbalancing') || has('nginx')) {
      bullets.push(`Applied deep platform fundamentals in ${joinList(present(['linux', 'networking', 'loadbalancing', 'nginx']))} to improve traffic handling, connectivity, and production debugging.`);
    }
    if (has('microservices') || has('eventdriven') || has('kafka')) {
      bullets.push(`Supported distributed application patterns using ${joinList(present(['microservices', 'eventdriven', 'kafka']))}, improving interoperability and operational visibility across service boundaries.`);
    }
  }

  if (theme.key === 'automation') {
    const automationStack = present(['terraform', 'iac', 'ansible', 'cicd', 'gitops', 'jenkins', 'githubactions', 'azuredevops', 'bicep']);
    if (automationStack.length) {
      bullets.push(`Improved engineering throughput with ${joinList(automationStack.slice(0, 8))}, reducing manual work and increasing delivery consistency across environments.`);
    }
    if (has('python') || has('bash') || has('powershell') || has('go')) {
      bullets.push(`Used ${joinList(present(['python', 'bash', 'powershell', 'go']))} for automation, diagnostics, and operational tooling that reduced toil and improved repeatability.`);
    }
    if (has('selfhealing')) {
      bullets.push('Introduced self-healing automation patterns to reduce repetitive operational effort and speed recovery from common runtime failures.');
    }
    if (has('security') || has('iam') || has('rbac') || has('secrets') || has('apim') || has('appservice') || has('functions') || has('cost')) {
      bullets.push(`Integrated ${joinList(present(['security', 'iam', 'rbac', 'secrets', 'apim', 'appservice', 'functions', 'cost']))} considerations into delivery workflows to improve governance, runtime safety, and sustainable operations.`);
    }
  }

  detectedRequirements.forEach((requirement) => {
    const bulletText = bullets.join(' ');
    const normalizedBulletText = normalize(bulletText);
    const covered = [requirement.label, requirement.skill, ...requirement.aliases]
      .filter(Boolean)
      .map(normalize)
      .some((marker) => normalizedBulletText.includes(marker));
    if (covered) {
      usedIds.add(requirement.id);
    }
  });

  return bullets.slice(0, 5);
}

function buildExperienceSections(detectedRequirements, track) {
  const templates = buildExperienceTemplates(track, detectedRequirements);
  const techPool = buildTechPool(detectedRequirements);
  const usedIds = new Set();
  const fallbackQueue = detectedRequirements.slice();

  return EXPERIENCE_THEMES.map((theme, index) => {
    const template = templates[index] || {
      title: theme.fallbackTitle,
      company: '[Company Name]',
      duration: '[Start Date] - [End Date]'
    };

    let bullets = buildThemeBullets(theme, detectedRequirements, usedIds);

    while (bullets.length < 5 && fallbackQueue.length) {
      const nextRequirement = fallbackQueue.find((requirement) => !usedIds.has(requirement.id));
      if (!nextRequirement) {
        break;
      }
      bullets.push(requirementBullet(nextRequirement));
      usedIds.add(nextRequirement.id);
    }

    while (bullets.length < 5) {
      bullets.push(GENERIC_FALLBACK_BULLETS[(bullets.length - 1) % GENERIC_FALLBACK_BULLETS.length]);
    }

    const themeTech = unique(
      detectedRequirements
        .filter((requirement) => theme.categories.includes(requirement.category))
        .map((requirement) => requirementMention(requirement))
    );

    const technologies = themeTech.length >= 3
      ? themeTech.slice(0, 7)
      : unique([...themeTech, ...techPool]).slice(0, 7);

    return {
      ...template,
      bullets,
      technologies
    };
  });
}

function buildResumeText(summary, skills, experiences) {
  return [
    summary,
    skills.join(' '),
    experiences.map((experience) => [
      experience.title,
      experience.company,
      experience.duration,
      experience.bullets.join(' '),
      experience.technologies.join(' ')
    ].join(' ')).join(' ')
  ].join(' ');
}

function requirementCoverageScore(summary, skills, experiences, requirement) {
  const summaryText = normalize(summary);
  const skillsText = normalize(skills.join(' '));
  const experienceText = normalize(
    experiences.map((experience) => `${experience.title} ${experience.bullets.join(' ')} ${experience.technologies.join(' ')}`).join(' ')
  );
  const markers = [requirement.label, requirement.skill, ...requirement.aliases].filter(Boolean).map(normalize);

  const inSummary = markers.some((marker) => summaryText.includes(marker));
  const inSkills = markers.some((marker) => skillsText.includes(marker));
  const inExperience = markers.some((marker) => experienceText.includes(marker));
  const sectionsMatched = [inSummary, inSkills, inExperience].filter(Boolean).length;

  if (inExperience && inSkills) return 1;
  if (sectionsMatched === 3) return 1;
  if (sectionsMatched === 2) return 0.92;
  if (sectionsMatched === 1) return 0.55;
  return 0;
}

function calculateMatchAnalysis(detectedRequirements, summary, skills, experiences) {
  const totalWeight = detectedRequirements.reduce((sum, requirement) => sum + requirement.weight, 0) || 1;
  const scoredRequirements = detectedRequirements.map((requirement) => ({
    requirement,
    coverage: requirementCoverageScore(summary, skills, experiences, requirement)
  }));
  const weightedCoverage = scoredRequirements.reduce((sum, item) => sum + (item.requirement.weight * item.coverage), 0);
  const keywordCoverage = weightedCoverage / totalWeight;

  const completeExperienceCount = experiences.filter((experience) => experience.bullets.length >= 4 && experience.bullets.length <= 6).length;
  const structureScore = (
    (summary ? 1 : 0) +
    (skills.length ? 1 : 0) +
    (experiences.length === 4 ? 1 : 0) +
    (completeExperienceCount / 4)
  ) / 4;

  const varietySignals = new Set([
    ...skills,
    ...experiences.flatMap((experience) => experience.technologies)
  ]);
  const varietyScore = Math.min(1, varietySignals.size / 14);

  const percentage = Math.round(((keywordCoverage * 0.82) + (structureScore * 0.1) + (varietyScore * 0.08)) * 100);

  return {
    percentage,
    keywordCoverage: Math.round(keywordCoverage * 100),
    structureScore: Math.round(structureScore * 100),
    varietyScore: Math.round(varietyScore * 100),
    matchedKeywords: scoredRequirements.filter((item) => item.coverage >= 0.9).map((item) => item.requirement.label),
    missingKeywords: scoredRequirements.filter((item) => item.coverage < 0.9).map((item) => item.requirement.label),
    totalRelevantKeywords: detectedRequirements.length,
    bulletCounts: experiences.map((experience) => experience.bullets.length)
  };
}

function generateResumeContent(jobDescription) {
  const detectedRequirements = detectRequirements(jobDescription);
  const track = inferTrack(detectedRequirements);
  const summary = buildSummary(detectedRequirements, track);
  const skills = buildSkills(detectedRequirements, track);
  const experiences = buildExperienceSections(detectedRequirements, track);
  const match = calculateMatchAnalysis(detectedRequirements, summary, skills, experiences);

  return {
    summary,
    skills,
    experiences,
    detectedKeywords: detectedRequirements.map((requirement) => requirement.label),
    track,
    match
  };
}

module.exports = {
  generateResumeContent
};
