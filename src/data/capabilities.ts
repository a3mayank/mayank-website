export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const capabilities: CapabilityItem[] = [
  {
    id: 'websites',
    title: 'Modern Websites & Web Platforms',
    description: 'Engineering responsive, high-converting websites, web applications, and digital platforms. Built with Next.js 15/16, React 19, Tailwind CSS, sub-second Core Web Vitals, automated SEO schemas, and headless CMS integrations.',
    skills: ['Next.js 15/16', 'React 19 & TypeScript', 'Tailwind CSS', 'Core Web Vitals & SEO', 'Headless CMS', 'Responsive UI/UX']
  },
  {
    id: 'mobile-app',
    title: 'Mobile-App Engineering',
    description: 'Cross-platform mobile engineering with React Native and Expo. Building smooth 60fps experiences with offline-first synchronization, local SQLite, and native bridges.',
    skills: ['React Native', 'Expo', 'Offline Sync', 'iOS & Android CI/CD', 'Native Performance']
  },
  {
    id: 'system-design',
    title: 'System Design & Distributed Systems',
    description: 'Architecting resilient, horizontally scalable microservices that handle high throughput, fail gracefully, and maintain low latency. Practical experience from MakeMyTrip and Better.com.',
    skills: ['Event-Driven Architecture', 'Kafka / Redis', 'Database Sharding', 'Microservices', 'High Availability']
  },
  {
    id: 'agentic-ai',
    title: 'AI Agents & Agentic AI',
    description: 'Building autonomous, tool-calling multi-agent systems with state machines, structured outputs, memory compaction, and deterministic guardrails for real-world business workflows.',
    skills: ['LangGraph', 'LlamaIndex', 'Function Calling', 'Deterministic Guardrails', 'Multi-Agent Handoffs']
  },
  {
    id: 'forward-deployed',
    title: 'Forward Deployed Engineering (FDE)',
    description: 'Working directly with founders and technical leaders to translate business objectives into production software rapidly, maintaining architectural cleanliness and speed.',
    skills: ['Rapid Prototyping', 'Product Architecture', 'Technical Roadmapping', 'Client Integration']
  },
  {
    id: 'secured-backend',
    title: 'Secured Backend Architecture',
    description: 'Zero-trust backend engineering designed for strict compliance. Implementing OAuth2/OIDC, mTLS, encryption at rest and in transit, and role-based access control.',
    skills: ['OAuth2 / OIDC', 'mTLS & Zero-Trust', 'RBAC & ABAC', 'API Gateways', 'SOC2 Compliance']
  },
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Setting up production environments on AWS/GCP with Infrastructure-as-Code, container orchestration with Kubernetes, and automated multi-stage CI/CD pipelines.',
    skills: ['AWS / GCP', 'Kubernetes & Docker', 'Terraform', 'GitHub Actions', 'Datadog / Prometheus']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Intelligent Systems',
    description: 'Integrating LLMs into production applications with hybrid RAG, vector databases (pgvector, Pinecone), multimodal OCR extraction, and latency optimization.',
    skills: ['Hybrid RAG', 'pgvector & Pinecone', 'Document OCR', 'Prompt Engineering', 'Structured JSON Output']
  }
];
