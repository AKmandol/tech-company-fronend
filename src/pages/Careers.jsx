import PageHero from '@/components/common/PageHero';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    Briefcase,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    Clock,
    GraduationCap,
    HeartPulse,
    Laptop,
    MapPin,
    Rocket,
    Wallet,
} from 'lucide-react';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  Data (edit these)                                                         */
/* -------------------------------------------------------------------------- */

const APPLY_EMAIL = 'careers@yourcompany.com';

const jobs = [
    {
        id: 'senior-laravel-developer',
        title: 'Senior Laravel Developer',
        department: 'Engineering',
        type: 'Full Time',
        location: 'Dhaka / Hybrid',
        experience: '4+ years',
        summary:
            'Design and build reliable APIs and business platforms that our clients depend on every day.',
        responsibilities: [
            'Build and maintain scalable Laravel applications and REST APIs',
            'Design database schemas and optimize slow queries',
            'Review code and mentor mid-level developers',
            'Work with product and design to shape features from idea to release',
        ],
        requirements: [
            '4+ years of professional experience with PHP and Laravel',
            'Strong knowledge of MySQL or PostgreSQL',
            'Experience with queues, caching and automated testing',
            'Clear written and spoken English',
        ],
    },
    {
        id: 'frontend-react-developer',
        title: 'Frontend React Developer',
        department: 'Engineering',
        type: 'Full Time',
        location: 'Remote',
        experience: '2+ years',
        summary:
            'Turn thoughtful designs into fast, accessible interfaces used by real customers.',
        responsibilities: [
            'Build responsive UI with React, TypeScript and Tailwind CSS',
            'Turn Figma designs into reusable, well-tested components',
            'Improve performance, accessibility and developer experience',
            'Collaborate closely with backend engineers on API design',
        ],
        requirements: [
            '2+ years of experience building production React apps',
            'Solid HTML, CSS and modern JavaScript fundamentals',
            'Comfortable with Git and code review workflows',
            'An eye for detail and pride in polished work',
        ],
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        department: 'Design',
        type: 'Full Time',
        location: 'Dhaka',
        experience: '3+ years',
        summary:
            'Shape product experiences that feel simple on the surface and are carefully considered underneath.',
        responsibilities: [
            'Lead research, wireframing, prototyping and visual design',
            'Create and maintain our design system in Figma',
            'Run usability tests and turn findings into improvements',
            'Present and explain design decisions to clients and teammates',
        ],
        requirements: [
            '3+ years of product or web design experience',
            'A portfolio that shows your process, not just final screens',
            'Strong grasp of accessibility and responsive design',
            'Comfortable working directly with developers',
        ],
    },
    {
        id: 'qa-engineer',
        title: 'QA Engineer',
        department: 'Quality',
        type: 'Full Time',
        location: 'Dhaka / Hybrid',
        experience: '2+ years',
        summary:
            'Protect product quality with thoughtful test plans and dependable automation.',
        responsibilities: [
            'Write test plans, cases and bug reports',
            'Automate regression tests for web and API flows',
            'Join planning sessions to catch issues early',
            'Track quality metrics and share improvement ideas',
        ],
        requirements: [
            '2+ years in manual and automated testing',
            'Experience with tools such as Playwright, Cypress or Postman',
            'Good understanding of the software development lifecycle',
            'Curious mindset and strong attention to detail',
        ],
    },
];

const departments = ['All', ...new Set(jobs.map((job) => job.department))];

const stats = [
    [String(jobs.length), 'Open positions'],
    ['50+', 'Teammates'],
    ['3', 'Work modes'],
    ['4', 'Steps to hire'],
];

const benefits = [
    {
        icon: Wallet,
        title: 'Competitive pay',
        description:
            'Fair salaries reviewed every year, plus performance bonuses and festival allowances.',
    },
    {
        icon: Laptop,
        title: 'Flexible work',
        description:
            'Choose office, hybrid or remote depending on the role. We measure results, not hours at a desk.',
    },
    {
        icon: GraduationCap,
        title: 'Learning budget',
        description:
            'Yearly budget for courses, books and conferences, plus time to actually use it.',
    },
    {
        icon: HeartPulse,
        title: 'Health coverage',
        description:
            'Medical insurance for you and support for your wellbeing when life gets busy.',
    },
    {
        icon: CalendarDays,
        title: 'Generous time off',
        description:
            'Paid annual, sick and public holidays so you can rest and come back energized.',
    },
    {
        icon: Rocket,
        title: 'Real growth',
        description:
            'Clear career paths, regular feedback and mentors who want to see you move up.',
    },
];

const process = [
    ['Apply', 'Send your CV or portfolio. We read every application.'],
    ['Intro call', 'A relaxed 30-minute chat about you, the role and the team.'],
    [
        'Skills review',
        'A practical task or portfolio walkthrough that reflects real work.',
    ],
    [
        'Final interview',
        'Meet the team, ask anything you like and receive our decision quickly.',
    ],
];

/* -------------------------------------------------------------------------- */
/*  Job card                                                                  */
/* -------------------------------------------------------------------------- */

function Meta({ icon: Icon, children }) {
    return (
        <span className="inline-flex items-center gap-1.5">
            <Icon size={14} className="text-primary" />
            {children}
        </span>
    );
}

function JobCard({ job, open, onToggle, index }) {
    const mailto = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
        `Application: ${job.title}`,
    )}`;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className={[
                'overflow-hidden rounded-2xl border bg-card text-card-foreground transition duration-300',
                open
                    ? 'border-primary/40 shadow-xl'
                    : 'hover:border-primary/30 hover:shadow-lg',
            ].join(' ')}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="flex w-full items-start gap-4 p-6 text-left"
            >
                <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        {job.department}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold">{job.title}</h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {job.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                        <Meta icon={Briefcase}>{job.type}</Meta>
                        <Meta icon={MapPin}>{job.location}</Meta>
                        <Meta icon={Clock}>{job.experience}</Meta>
                    </div>
                </div>

                <span
                    className={`mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        open
                            ? 'rotate-180 border-primary bg-primary text-primary-foreground'
                            : 'text-muted-foreground'
                    }`}
                >
                    <ChevronDown size={18} />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="border-t bg-muted/30 p-6">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wider">
                                        What you’ll do
                                    </h4>
                                    <ul className="mt-4 space-y-3">
                                        {job.responsibilities.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                            >
                                                <CheckCircle2
                                                    size={16}
                                                    className="mt-1 shrink-0 text-primary"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wider">
                                        What we’re looking for
                                    </h4>
                                    <ul className="mt-4 space-y-3">
                                        {job.requirements.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                            >
                                                <CheckCircle2
                                                    size={16}
                                                    className="mt-1 shrink-0 text-primary"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a
                                href={mailto}
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                            >
                                Apply for this role
                                <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Careers() {
    const [department, setDepartment] = useState('All');
    const [openId, setOpenId] = useState(jobs[0].id);

    const visible =
        department === 'All'
            ? jobs
            : jobs.filter((job) => job.department === department);

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                            <Wallet size={15} />
                            Careers
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Build the future with us
                            <span className="text-primary"> great together.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Join a team that enjoys solving difficult problems and building meaningful products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-muted/30">
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
                    {stats.map(([value, label], index) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="rounded-2xl border bg-card p-5 text-center"
                        >
                            <div className="text-3xl font-bold text-primary">
                                {value}
                            </div>
                            <div className="mt-1 text-xs font-medium text-muted-foreground">
                                {label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why join us */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Why join us
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            A workplace that takes care of its people
                        </h2>
                        <p className="mt-4 leading-7 text-muted-foreground">
                            Good work needs good conditions. Here is what you
                            can expect when you join the team.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.div
                                    key={benefit.title}
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
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open positions */}
            <section
                    id="positions"
                    className="bg-muted/30 py-20 sm:py-24"
                >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Open positions
                            </p>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Find your next role
                            </h2>
                        </div>

                        <div
                            className="flex flex-wrap gap-2"
                            role="tablist"
                            aria-label="Filter roles by department"
                        >
                            {departments.map((name) => (
                                <button
                                    key={name}
                                    type="button"
                                    role="tab"
                                    aria-selected={department === name}
                                    onClick={() => setDepartment(name)}
                                    className={[
                                        'rounded-full border px-4 py-1.5 text-sm font-medium transition',
                                        department === name
                                            ? 'border-primary bg-primary text-primary-foreground'
                                            : 'bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                    ].join(' ')}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {visible.map((job, index) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    index={index}
                                    open={openId === job.id}
                                    onToggle={() =>
                                        setOpenId(
                                            openId === job.id ? null : job.id,
                                        )
                                    }
                                />
                            ))}
                        </AnimatePresence>

                        {!visible.length && (
                            <p className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">
                                No open roles in this department right now.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Hiring process */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Hiring process
                        </p>
                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Simple, fair and transparent
                        </h2>
                        <p className="mt-4 leading-7 text-muted-foreground">
                            We respect your time. You will always know where
                            you stand and what comes next.
                        </p>
                    </div>

                    <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {process.map(([title, text], index) => (
                            <motion.li
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.1,
                                }}
                                className="relative rounded-2xl border bg-card p-6"
                            >
                                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                    {index + 1}
                                </span>
                                <h3 className="mt-5 text-lg font-bold">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {text}
                                </p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Open application CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12">
                        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative max-w-3xl">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Don’t see the right role?
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 opacity-85">
                                We are always happy to meet talented people.
                                Send us your CV and tell us how you would like
                                to contribute.
                            </p>

                            <a
                                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
                                    'Open application',
                                )}`}
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 font-semibold text-foreground transition hover:opacity-90"
                            >
                                Send open application
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
