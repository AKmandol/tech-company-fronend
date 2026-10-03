import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    Boxes,
    Check,
    Clock,
    Cloud,
    Code2,
    Cpu,
    Database,
    GraduationCap,
    Handshake,
    Headphones,
    HeartPulse,
    Landmark,
    Layers,
    MessageCircle,
    Palette,
    Plug,
    Rocket,
    ShieldCheck,
    ShoppingCart,
    Smartphone,
    Truck,
    Users,
    Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

/* -------------------------------------------------------------------------- */
/*  Data (edit these)                                                         */
/* -------------------------------------------------------------------------- */

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Scalable web applications, APIs and business platforms.',
        overview:
            'From customer portals to complex internal platforms, we build web products that stay fast, secure and easy to maintain as your business grows.',
        features: [
            'Custom web apps and SaaS platforms',
            'REST and GraphQL API development',
            'Admin dashboards and internal tools',
            'Performance, SEO and security hardening',
        ],
        tags: ['Laravel', 'React', 'Node.js'],
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description:
            'Modern mobile applications focused on usability and performance.',
        overview:
            'We design and ship mobile apps that feel native, respond instantly and keep users coming back, on iOS, Android or both.',
        features: [
            'Cross-platform apps with a single codebase',
            'Offline support and push notifications',
            'Secure authentication and payments',
            'App Store and Google Play release support',
        ],
        tags: ['React Native', 'Flutter', 'Swift'],
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Thoughtful user experiences and modern interfaces.',
        overview:
            'Good design removes friction. We research your users, test ideas early and craft interfaces that are clear, accessible and on brand.',
        features: [
            'User research, journeys and wireframes',
            'Interactive prototypes and usability tests',
            'Design systems and component libraries',
            'Accessible, responsive visual design',
        ],
        tags: ['Figma', 'Prototyping', 'Design systems'],
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        description:
            'Deployment, infrastructure, automation and performance optimization.',
        overview:
            'We take the pain out of shipping software with automated pipelines, reliable infrastructure and monitoring that catches problems early.',
        features: [
            'CI/CD pipelines and release automation',
            'Cloud setup, migration and cost optimization',
            'Containers, Kubernetes and infrastructure as code',
            'Monitoring, logging and incident response',
        ],
        tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
        icon: Database,
        title: 'CRM Solutions',
        description: 'Custom business systems designed around your workflow.',
        overview:
            'Instead of bending your process to fit a generic tool, we build CRM and business systems that match the way your team actually works.',
        features: [
            'Lead, customer and pipeline management',
            'Workflow automation and approvals',
            'Reporting dashboards and analytics',
            'Integration with email, billing and support tools',
        ],
        tags: ['Custom CRM', 'Automation', 'Reporting'],
    },
    {
        icon: Plug,
        title: 'API Integration',
        description:
            'Reliable integration with third-party services and platforms.',
        overview:
            'We connect your systems so data flows where it is needed, with clear error handling, retries and logging you can trust.',
        features: [
            'Payment, SMS, email and shipping gateways',
            'ERP, CRM and accounting system sync',
            'Webhooks and real-time event handling',
            'Documentation and long-term maintenance',
        ],
        tags: ['REST', 'Webhooks', 'OAuth'],
    },
];

const techCategories = [
    {
        name: 'Frontend',
        items: [
            'React',
            'Next.js',
            'TypeScript',
            'Vue.js',
            'Tailwind CSS',
            'Framer Motion',
        ],
    },
    {
        name: 'Backend',
        items: [
            'Laravel',
            'PHP',
            'Node.js',
            'Express',
            'Python',
            'GraphQL',
        ],
    },
    {
        name: 'Mobile',
        items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    },
    {
        name: 'Cloud & DevOps',
        items: [
            'AWS',
            'Docker',
            'Kubernetes',
            'GitHub Actions',
            'Terraform',
            'Nginx',
        ],
    },
    {
        name: 'Data',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
];

const reasons = [
    {
        icon: BadgeCheck,
        title: 'Experienced engineers',
        description:
            'Senior people lead every project, so you get sound decisions and clean, maintainable code.',
    },
    {
        icon: Zap,
        title: 'Fast, predictable delivery',
        description:
            'Short iterations, regular demos and honest updates keep projects on time and on budget.',
    },
    {
        icon: ShieldCheck,
        title: 'Security by default',
        description:
            'Secure coding practices, code review and testing are built into every stage, not added at the end.',
    },
    {
        icon: Users,
        title: 'A partner, not a vendor',
        description:
            'We take time to understand your business and challenge ideas when there is a better way.',
    },
    {
        icon: Headphones,
        title: 'Support after launch',
        description:
            'Monitoring, maintenance and improvements continue long after the first release.',
    },
    {
        icon: Clock,
        title: 'Transparent communication',
        description:
            'One point of contact, clear timelines and overlapping working hours across time zones.',
    },
];

const stats = [
    ['100+', 'Projects delivered'],
    ['10+', 'Years of experience'],
    ['40+', 'Clients worldwide'],
    ['24h', 'Average response time'],
];

const models = [
    {
        icon: Rocket,
        title: 'Fixed-Scope Project',
        bestFor: 'Well-defined products and MVPs',
        points: [
            'Clear scope, timeline and price',
            'Milestone-based delivery',
            'Ideal when requirements are stable',
        ],
    },
    {
        icon: Users,
        title: 'Dedicated Team',
        bestFor: 'Long-term products that keep evolving',
        popular: true,
        points: [
            'Engineers who work only on your product',
            'Scale the team up or down as needed',
            'Full control of priorities',
        ],
    },
    {
        icon: Handshake,
        title: 'Time & Materials',
        bestFor: 'Changing requirements and ongoing work',
        points: [
            'Pay only for the time used',
            'Maximum flexibility to change direction',
            'Monthly reporting and transparent hours',
        ],
    },
];

const industries = [
    { icon: Landmark, name: 'Fintech & Banking' },
    { icon: HeartPulse, name: 'Healthcare' },
    { icon: ShoppingCart, name: 'E-commerce & Retail' },
    { icon: Truck, name: 'Logistics' },
    { icon: GraduationCap, name: 'Education' },
    { icon: Cpu, name: 'SaaS & Startups' },
];

/* -------------------------------------------------------------------------- */
/*  Small helpers                                                             */
/* -------------------------------------------------------------------------- */

const contactLink = (service) =>
    service ? `/contact?service=${encodeURIComponent(service)}` : '/contact';

function SectionHeading({ eyebrow, title, description, center }) {
    return (
        <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 leading-7 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}


/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Services() {
    const [techTab, setTechTab] = useState(techCategories[0].name);
    const activeTech = techCategories.find((c) => c.name === techTab);

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                            <Boxes size={15} />
                            Our services
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Software services that
                            <span className="text-primary"> move your business forward.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            From the first idea to a reliable product in
                            production, we design, build and run the digital
                            systems your business depends on.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                to={contactLink()}
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                            >
                                Get a free consultation
                                <ArrowRight size={17} />
                            </Link>

                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 rounded-xl border bg-background px-6 py-3 font-semibold transition hover:bg-muted"
                            >
                                Explore services
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* All service details */}
            <section id="services" className="py-20 sm:py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Everything you need to build and grow"
                        description="Six core services that cover the full life of a digital product, from design to deployment and beyond."
                    />

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.article
                                    key={service.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: (index % 2) * 0.1,
                                    }}
                                    className="group flex flex-col rounded-3xl border bg-background p-7 text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon size={28} strokeWidth={1.6} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold">
                                                {service.title}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-primary">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                        {service.overview}
                                    </p>

                                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-2.5 text-sm leading-5"
                                            >
                                                <Check
                                                    size={16}
                                                    className="mt-0.5 shrink-0 text-primary"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex flex-1 flex-wrap items-end justify-between gap-4 border-t pt-5">
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            to={contactLink(service.title)}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                                        >
                                            Discuss this service
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        center
                        eyebrow="Technologies we use"
                        title="Modern tools, chosen for the job"
                        description="We pick proven technologies that fit your goals, team and budget, never the other way around."
                    />

                    <div
                        className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border bg-background p-1.5"
                        role="tablist"
                        aria-label="Technology categories"
                    >
                        {techCategories.map((category) => (
                            <button
                                key={category.name}
                                type="button"
                                role="tab"
                                aria-selected={techTab === category.name}
                                onClick={() => setTechTab(category.name)}
                                className={[
                                    'rounded-xl px-4 py-2 text-sm font-medium transition',
                                    techTab === category.name
                                        ? 'bg-primary text-primary-foreground shadow'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                                ].join(' ')}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTech.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="mt-10 flex flex-wrap justify-center gap-3"
                        >
                            {activeTech.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-2xl border bg-background px-6 py-3.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-lg"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Why choose us */}
            <section className="py-20 sm:py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why choose us"
                        title="A team you can rely on"
                        description="Skills matter, but so do communication, honesty and follow-through. Here is what working with us looks like."
                    />

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;

                            return (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: (index % 3) * 0.1,
                                    }}
                                    className="group rounded-2xl border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                                >
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon size={28} strokeWidth={1.6} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold">
                                        {reason.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {stats.map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-2xl border bg-muted/40 p-6 text-center"
                            >
                                <div className="text-3xl font-bold text-primary">
                                    {value}
                                </div>
                                <div className="mt-1 text-xs font-medium text-muted-foreground">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement models */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        center
                        eyebrow="Engagement models"
                        title="Work with us the way that suits you"
                        description="Every business is different. Choose the model that matches your goals, budget and pace."
                    />

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {models.map((model, index) => {
                            const Icon = model.icon;

                            return (
                                <motion.div
                                    key={model.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.1,
                                    }}
                                    className={[
                                        'relative flex flex-col rounded-3xl border bg-background p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
                                        model.popular
                                            ? 'border-primary shadow-lg shadow-primary/10'
                                            : 'hover:border-primary/40',
                                    ].join(' ')}
                                >
                                    {model.popular && (
                                        <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                            Most popular
                                        </span>
                                    )}

                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Icon size={28} strokeWidth={1.6} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold">
                                        {model.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Best for: {model.bestFor}
                                    </p>

                                    <ul className="mt-6 flex-1 space-y-3">
                                        {model.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex gap-2.5 text-sm"
                                            >
                                                <Check
                                                    size={16}
                                                    className="mt-0.5 shrink-0 text-primary"
                                                />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={contactLink(model.title)}
                                        className={[
                                            'mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition',
                                            model.popular
                                                ? 'bg-primary text-primary-foreground hover:opacity-90'
                                                : 'border hover:bg-muted',
                                        ].join(' ')}
                                    >
                                        Get a quote
                                        <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 sm:py-24 bg-muted/30">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        center
                        eyebrow="Industries"
                        title="Experience across many sectors"
                    />

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                        {industries.map((industry) => {
                            const Icon = industry.icon;

                            return (
                                <div
                                    key={industry.name}
                                    className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition duration-300 hover:border-primary/40 hover:shadow-lg"
                                >
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="text-sm font-semibold sm:text-base">
                                        {industry.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Floating quick-contact button (remove if you already have a chat widget) */}
            <Link
                to={contactLink()}
                aria-label="Talk to us"
                className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-105 sm:px-5"
            >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">Talk to us</span>
            </Link>
        </div>
    );
}
