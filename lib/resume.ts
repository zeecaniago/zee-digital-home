export const profile = {
  name: "Zee Caniago",
  title: "Staff Software & Platform Engineer",
  location: "Vancouver, British Columbia",
  email: "zee.caniago@gmail.com",
  phone: "+1 604 339 2105",
  github: "https://github.com/zeecaniago",
  linkedin: "https://www.linkedin.com/in/zeecaniago",
  pdf: "/Zee_Caniago_Resume.pdf",
  summary: "Staff Software and Platform Engineer with 15+ years across software development, cloud infrastructure, and production operations. Builds automation for SaaS platforms, from infrastructure provisioning and deployment pipelines to secrets management and security controls. Partners with architecture, security, and delivery teams to improve reliability and make systems easier to operate.",
};

export const experience = [
  {
    company: "HP Inc",
    dates: "Jun 2021 – Present",
    roles: [{
      title: "Staff Software & Platform Engineer",
      dates: "Jun 2021 – Present",
      bullets: [
        "Led automation and deployment improvements for SaaS services, working with delivery teams to meet service reliability and release objectives.",
        "Built immutable Linux VM provisioning with Packer and Ansible, with Python-based infrastructure validation to support adoption by engineering teams.",
        "Delivered centralized secrets management using Vault, Ansible, and Terraform, aligned with HP Cybersecurity standards.",
        "Contributed to SOC 2 Type I and Type II audits by standardizing and automating controls, collecting evidence, and coordinating with engineering, security, and external auditors.",
        "Integrated Trivy vulnerability scanning into CI pipelines; automated policy enforcement and resource cleanup with AWS Lambda.",
        "Partnered with the Platform Architect on proofs of concept for consistent CI/CD patterns across Jenkins, GitHub, and TeamCity.",
        "Created internal tools, runbooks, and technical documentation to support team adoption and ongoing platform maintenance.",
      ],
    }],
  },
  {
    company: "Global Relay",
    dates: "Jun 2020 – Jun 2021",
    roles: [{
      title: "Software / DevOps Engineer II",
      dates: "Jun 2020 – Jun 2021",
      bullets: [
        "Automated monthly patching and infrastructure provisioning for 150+ Windows Server and CentOS hosts using Ansible and scripting.",
        "Modernized CI/CD with Jenkins, Ansible, Bash, and Python; integrated Artifactory promotion and SonarQube analysis, and moved services to Docker and Kubernetes.",
        "Implemented an authenticating HTTP/SOCKS proxy and standardized host aliases, fully qualified domain names, and domain locations.",
      ],
    }],
  },
  {
    company: "Sycle.net",
    dates: "Apr 2012 – May 2020",
    roles: [
      {
        title: "DevOps / Release Engineer",
        dates: "Jan 2017 – May 2020",
        bullets: [
          "Led rolling deployments that eliminated late-night releases, saving more than $100,000 annually in deployment costs.",
          "Automated build, test, and deployment workflows across 17 production, 23 staging, and 50+ development and testing environments.",
          "Contributed to a Google Cloud disaster recovery solution and led adoption of Elasticsearch and Redis to improve application performance and resilience.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "Apr 2012 – Jan 2017",
        bullets: ["Built patient recovery pathways, invoicing and quoting, appointment management, financial reporting, and background processing for a global hearing-care SaaS platform using PHP, MySQL, and JavaScript."],
      },
    ],
  },
];

export const earlyExperience = [
  { company: "Cackleberries", title: "Software Engineer", dates: "Dec 2011 – Apr 2012" },
  { company: "Real Estate Channel", title: "Software Engineer", dates: "Dec 2010 – Dec 2011" },
  { company: "Simon Fraser University", title: "Software Engineer · Co-op", dates: "Mar – Aug 2009" },
  { company: "Shell Canada Ltd", title: "System Analyst · Co-op", dates: "Sep – Dec 2008" },
];

export const expertise = [
  { name: "Cloud platforms", skills: "AWS, Azure, Google Cloud" },
  { name: "Infrastructure", skills: "Terraform, Ansible, Packer, Docker, Kubernetes" },
  { name: "Delivery", skills: "Jenkins, TeamCity, GitHub, GitLab CI, Bamboo" },
  { name: "Security", skills: "Vault, Trivy, SOC 2 controls" },
  { name: "Languages", skills: "Python, Go, Bash, JavaScript, PHP" },
  { name: "Systems", skills: "Linux, Windows Server, Nginx, HAProxy, Squid" },
  { name: "Data", skills: "MySQL, MongoDB, Redis, Elasticsearch" },
  { name: "Operations", skills: "ELK, New Relic, disaster recovery, rolling deployments" },
  { name: "Pipeline tooling", skills: "Artifactory, SonarQube, Git, Bash, Python" },
];

export const education = { degree: "Bachelor of Applied Science", school: "Simon Fraser University", year: "2010" };
