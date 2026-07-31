import React from "react";
import Head from "next/head";
import "../app/globals.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Keep this file in sync with ~/job/resume/master.md, which generates the PDF.
// Everything below is data. Edit the arrays, not the markup.

const SUMMARY =
  "Software engineer with production experience across backend services and the Linux infrastructure they run on. I run a freelance development business, co-founded a developer tool written in Rust and TypeScript, and administer the multi-tenant server my client work is deployed to.";

const EXPERIENCE = [
  {
    org: "Orpheus",
    role: "Backend Engineer, Co-founder",
    dates: "January 2026 – Present",
    location: "Remote",
    blurb:
      "Version control for digital audio workstation projects. Git handles these badly because DAW files are large binaries with no stable identity inside them, so a one note change looks like a whole file rewrite.",
    points: [
      "Own the Convex backend schema and the track mutations, including server side validation of everything written to the database.",
      "Contributed to the design for diffing DAW projects, grounded in measurement rather than assumption. A single note edit localizes to 1 of roughly 1,800 binary events and a 143 to 167 byte patch, while opaque plugin blobs account for up to 76 percent of file bytes.",
      "Contributed to the architecture of flparse, a Rust crate that parses FL Studio's binary event stream and re-encodes it byte exactly across every test fixture.",
      "Four contributor monorepo, 376 commits. TypeScript, Rust, Convex, Bun, Turborepo, Nix.",
    ],
  },
  {
    org: "Virtual Vince",
    role: "Founder, Software Engineer",
    dates: "February 2024 – Present",
    location: "Stratford, ON",
    blurb:
      "Independent development business building and operating production systems for clients in health, arts, education and e-commerce.",
    points: [
      "Provision and administer a multi tenant Ubuntu Server VPS end to end, from a bare install through HestiaCP, user accounts, DNS, firewall rules and my own backup routines. It hosts several independent sites.",
      "Wrote 11 WordPress plugins in PHP that create pages, navigation, layouts, forms and content programmatically, putting site structure under version control instead of in a sequence of manual admin actions.",
      "Built an audit log plugin with its own database table, a schema version key for migrations, configurable account exclusions, and exact diff capture for every content edit alongside plugin and publishing events.",
      "Ship and maintain Next.js, TypeScript and Tailwind applications, including one client on a monthly hosting and maintenance retainer.",
      "Run ChironAI, an AI enablement service covering team training, agent setup and business process automation.",
    ],
  },
  {
    org: "Daniel Digital",
    role: "Developer, Contract",
    dates: "June 2021 – October 2023",
    location: "Canada",
    blurb:
      "Development for a digital marketing consultancy serving clients across North America. Part time and intermittent alongside school, contracted per project.",
    points: [
      "Built client websites and web applications using HTML, CSS, Python, React and Next.js.",
      "Handled server deployments and releases for client projects.",
      "Worked directly with clients on requirements and change requests.",
    ],
  },
  {
    org: "Telus",
    role: "Sales Representative",
    dates: "October 2023 – January 2024",
    location: "Stratford, ON",
    blurb: null,
    points: [
      "Consultative sales of connectivity and hardware products, translating technical product differences for non technical customers.",
    ],
  },
];

const CLIENT_WORK = [
  {
    name: "Elizabeth Gardens Creative Collective",
    stack: "Ubuntu Server, HestiaCP, PHP, WordPress, MySQL",
    url: "https://creativecollectiveonline.com/",
    note: "Community arts organization on a multi tenant VPS I provision and administer end to end. 11 custom plugins including an audit log capturing the exact diff of every content change.",
  },
  {
    name: "Radiant Roots Vitality",
    stack: "Next.js, TypeScript, Tailwind",
    url: "https://www.radiantrootsvitality.com/",
    note: "Health practice site with Google Maps and a Fullscript storefront handoff. Hosted and maintained on a monthly retainer.",
  },
  {
    name: "Exploding Paint Brushes",
    stack: "LAMP, WordPress, MySQL",
    url: "https://explodingpaintbrushes.com/",
    note: "Artist portfolio and storefront, a separate tenant on the same VPS, managed independently. Custom backend work and MySQL query tuning on a LAMP stack.",
  },
  {
    name: "K2E Canada",
    stack: "Shopify, Liquid",
    url: "https://www.k2e.ca/",
    note: "Professional education storefront with custom Liquid.",
  },
  {
    name: "My YAYBI Way",
    stack: "Next.js, TypeScript, Tailwind, Shopify Storefront",
    url: "https://myyaybiway.me/",
    note: "Custom front end pulling live products, images and metadata from a Shopify storefront.",
  },
];

const PROJECTS = [
  {
    name: "terraform-k3s-aws",
    stack: "Terraform, Kubernetes, AWS, Go",
    url: "https://github.com/VirtualVince/terraform-k3s-aws",
    note: "Single node Kubernetes cluster provisioned end to end with Terraform. VPC, security group and EC2 node running k3s via cloud-init, with a Go service behind an ingress. SSH access fails closed rather than defaulting to 0.0.0.0/0.",
  },
  {
    name: "Distributed Systems Practice",
    stack: "Go",
    url: "https://github.com/VirtualVince/Interview",
    note: "Six primitives with full test suites run under the race detector. Raft leader election, a Bitcask style log structured key value store with CRC and crash recovery, a consistent hash ring, vector clocks, a bounded worker pool, and a token bucket rate limiter.",
  },
  {
    name: "CIFAR-10 Regularization Study",
    stack: "Python, TensorFlow",
    url: "https://github.com/VirtualVince/cifar10-regularization-study",
    note: "A controlled four model comparison isolating what dropout, L2 weight decay and augmentation each contribute to generalization. An overparameterized 12M parameter dense baseline reaches roughly 45 percent validation accuracy, a three block CNN combining all three exceeds 80.",
  },
  {
    name: "Employee Management System",
    stack: "Node.js, Apollo GraphQL, MongoDB, Angular",
    url: "https://github.com/VirtualVince/employee-management-system",
    note: "Enforces authorization per resolver off a JWT resolved context and returns coded GraphQL errors so clients branch on stable codes rather than message strings.",
  },
  {
    name: "r3builds",
    stack: "C++, Arduino",
    url: "https://github.com/VirtualVince/R3Builds",
    note: "Ten embedded builds covering GPIO and timing, debounce, PWM, UART, ADC, I2C, SPI, a closed sensor to actuator control loop, a finite state machine, and IR protocol decode into actuation.",
  },
];

const SKILLS = [
  {
    category: "Infrastructure & Operations",
    items: ["Linux", "Ubuntu Server", "HestiaCP", "DNS", "Firewalls", "Backups", "AWS", "Azure", "GCP", "Vercel"],
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Kafka", "Keycloak"],
  },
  {
    category: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python", "C++", "C#", "Java", "PHP", "SQL", "Lua"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Apollo GraphQL", "ASP.NET", "Convex", "REST"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "Embedded",
    items: ["Arduino", "C for microcontrollers", "I2C", "SPI", "UART"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub Actions", "Neovim", "Bun", "Turborepo", "Nix"],
  },
];

const Section = ({ title, children }) => (
  <>
    <h5 className="text-center underline text-[18px] py-4 text-black dark:text-white">
      {title}
    </h5>
    {children}
  </>
);

const LinkedItem = ({ item }) => (
  <div className="py-3">
    <p className="italic">
      <span className="font-bold not-italic text-black dark:text-white">
        {item.name}
      </span>
      <span className="px-2">|</span>
      <span className="text-gray-600 dark:text-gray-400">{item.stack}</span>
    </p>
    <p className="py-1 text-sm">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="underline text-[#3e37ff] dark:text-[#8fa6ff] break-all"
      >
        {item.url.replace(/^https?:\/\//, "")}
      </a>
    </p>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.note}</p>
  </div>
);

const Resume = () => {
  return (
    <>
      <Head>
        <title>Vincente Sequeira | Resume</title>
        <meta
          name="description"
          content="Vincente Sequeira, software engineer working on backend services and the Linux infrastructure they run on."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px] text-black dark:text-white">
        <h2 className="text-center">Resume</h2>

        <div className="bg-[#d0d4d6] dark:bg-[#1a1a1a] my-4 p-4 w-full flex justify-between items-center rounded">
          <h2 className="text-center">Vincente Sequeira</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/vince-sequeira-1824b4245/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/VirtualVince"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Backend Systems <span className="px-1">|</span> Linux Infrastructure{" "}
              <span className="px-1">|</span> Embedded
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Backend Systems</p>
            <p className="py-2">Linux Infrastructure</p>
            <p>Embedded</p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{SUMMARY}</p>

        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto py-2">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow-md"
              >
                <h6 className="font-bold text-[16px] mb-2 text-[#5651e5] dark:text-[#8fa6ff]">
                  {group.category}
                </h6>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 dark:bg-[#2a2a2a] rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Professional Experience">
          <div className="py-2">
            {EXPERIENCE.map((job) => (
              <div key={job.org} className="py-4">
                <p className="italic">
                  <span className="font-bold not-italic text-black dark:text-white">
                    {job.org}
                  </span>
                  <span className="px-2">|</span>
                  {job.role}
                  <span className="px-2">|</span>
                  {job.dates}
                  <span className="px-2">|</span>
                  {job.location}
                </p>
                {job.blurb && (
                  <p className="py-1 text-gray-700 dark:text-gray-300">{job.blurb}</p>
                )}
                <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-gray-700 dark:text-gray-300">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Client Work">
          <div className="py-2">
            {CLIENT_WORK.map((item) => (
              <LinkedItem key={item.name} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="py-2">
            {PROJECTS.map((item) => (
              <LinkedItem key={item.name} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="py-2 pb-10">
            <p className="italic">
              <span className="font-bold not-italic text-black dark:text-white">
                George Brown College, Toronto
              </span>
              <span className="px-2">|</span>Advanced Diploma, Computer Programming
              and Analysis
              <span className="px-2">|</span>2026
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-gray-700 dark:text-gray-300">
              <li>Dean&apos;s List, final semester.</li>
              <li>
                Coursework included Developer Operations, deploying a containerized
                application to AWS using Terraform, Kubernetes, Jenkins CI, Kafka and
                Keycloak.
              </li>
              <li>
                Applied Machine Learning, Full Stack Development, Mobile Application
                Development, Data Structures and Algorithms, System Analysis and
                Testing, Linux Essentials.
              </li>
            </ul>

            <p className="pt-5 italic">
              <span className="font-bold not-italic text-black dark:text-white">
                Harvard University
              </span>
              <span className="px-2">|</span>CS50x, Introduction to Computer Science
            </p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Resume;
