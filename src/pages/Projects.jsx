import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Briefcase, Quote, Layers, Code2, Smartphone, Check, } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import ProjectCover from '@/components/projects/ProjectCover';
import { categories, projects } from '@/components/projects/data';

const stats = [
    ['100+', 'Projects delivered'],
    ['6', 'Industries served'],
    ['12+', 'Countries reached'],
    ['98%', 'Client satisfaction'],
];

const methodologies = [
    {
        id: 'agile',
        label: 'Agile Scrum',
        icon: Layers,
        title: 'Deliver value early with',
        highlight: 'Agile Scrum',
        description:
            'Work is broken into short sprints with clear goals. You see progress every couple of weeks, give feedback early and can change direction without losing momentum.',
        points: [
            '2-week sprints with a working demo',
            'Transparent backlog and priorities',
            'Regular retrospectives to keep improving',
        ],
        diagram: {
            type: 'cycle',
            center: 'Agile',
            items: ['Plan', 'Sprint', 'Review', 'Retro'],
        },
    },
    {
        id: 'devops',
        label: 'DevOps',
        icon: Code2,
        title: 'Flexibility & Continuous Collaboration with',
        highlight: 'DevOps',
        description:
            'DevOps combines development and operations into a smooth process, improving teamwork and productivity. It breaks barriers, simplifies workflows and focuses on fast, continuous software delivery.',
        points: [
            'Automated testing and deployment',
            'Faster, safer and more frequent releases',
            'Monitoring that feeds back into planning',
        ],
        diagram: { type: 'infinity' },
    },
    {
        id: 'rad',
        label: 'RAD',
        icon: Smartphone,
        title: 'Go from idea to prototype fast with',
        highlight: 'Rapid Development',
        description:
            'Rapid Application Development puts working prototypes in your hands quickly. You test real screens early, and we refine them together until the product fits.',
        points: [
            'Clickable prototypes in days, not months',
            'Continuous feedback from real users',
            'Ideal for MVPs and evolving requirements',
        ],
        diagram: {
            type: 'cycle',
            center: 'RAD',
            items: ['Scope', 'Prototype', 'Feedback', 'Deliver'],
        },
    },
];

function InfinityDiagram() {
    const d =
        'M 200 130 C 160 40, 60 40, 60 130 C 60 220, 160 220, 200 130 C 240 40, 340 40, 340 130 C 340 220, 240 220, 200 130 Z';

    return (
        <svg
            viewBox="0 0 400 260"
            className="w-full max-w-md"
            role="img"
            aria-label="DevOps infinity loop: plan, code, build, test, release, deploy, operate, monitor"
        >
            <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
                className="text-primary/15"
            />
            <motion.path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
            />

            <g textAnchor="middle" fill="currentColor">
                <text
                    x="128"
                    y="128"
                    fontSize="26"
                    fontWeight="800"
                    className="text-foreground"
                >
                    Dev
                </text>
                <text
                    x="128"
                    y="150"
                    fontSize="10"
                    className="text-muted-foreground"
                >
                    Plan · Code
                </text>
                <text
                    x="128"
                    y="164"
                    fontSize="10"
                    className="text-muted-foreground"
                >
                    Build · Test
                </text>

                <text
                    x="272"
                    y="128"
                    fontSize="26"
                    fontWeight="800"
                    className="text-foreground"
                >
                    Ops
                </text>
                <text
                    x="272"
                    y="150"
                    fontSize="10"
                    className="text-muted-foreground"
                >
                    Release · Deploy
                </text>
                <text
                    x="272"
                    y="164"
                    fontSize="10"
                    className="text-muted-foreground"
                >
                    Operate · Monitor
                </text>
            </g>
        </svg>
    );
}

function CycleDiagram({ center, items }) {
    const cx = 200;
    const cy = 130;
    const r = 78;
    const circumference = 2 * Math.PI * r;

    return (
        <svg
            viewBox="0 0 400 260"
            className="w-full max-w-md"
            role="img"
            aria-label={`${center} cycle: ${items.join(', ')}`}
        >
            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                className="text-primary/15"
            />
            <motion.circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                className="text-primary"
                transform={`rotate(-90 ${cx} ${cy})`}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * 0.02 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
            />

            <text
                x={cx}
                y={cy + 8}
                textAnchor="middle"
                fontSize="24"
                fontWeight="800"
                fill="currentColor"
                className="text-foreground"
            >
                {center}
            </text>

            {items.map((label, index) => {
                const angle = (-90 + (index * 360) / items.length) * (Math.PI / 180);
                const cosine = Math.cos(angle);
                const sine = Math.sin(angle);
                const x = cx + r * cosine;
                const y = cy + r * sine;

                const middle = Math.abs(cosine) < 0.3;
                const anchor = middle ? 'middle' : cosine > 0 ? 'start' : 'end';
                const lx = middle ? x : x + (cosine > 0 ? 22 : -22);
                const ly = middle ? (sine < 0 ? y - 20 : y + 30) : y + 5;

                return (
                    <g key={label}>
                        <circle
                            cx={x}
                            cy={y}
                            r="12"
                            fill="currentColor"
                            className="text-primary"
                        />
                        <text
                            x={x}
                            y={y + 4}
                            textAnchor="middle"
                            fontSize="12"
                            fontWeight="700"
                            fill="currentColor"
                            className="text-primary-foreground"
                        >
                            {index + 1}
                        </text>
                        <text
                            x={lx}
                            y={ly}
                            textAnchor={anchor}
                            fontSize="13"
                            fontWeight="600"
                            fill="currentColor"
                            className="text-foreground"
                        >
                            {label}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
        >
            <Link
                to={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
                <div className="relative aspect-[16/10] overflow-hidden border-b">
                    <ProjectCover project={project} />

                    <span className="absolute left-3 top-3 rounded-full border bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                        {project.industry}
                    </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                        {project.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t pt-4">
                        <div>
                            <span className="text-lg font-bold text-primary">
                                {project.results[0].value}
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                                {project.results[0].label}
                            </span>
                        </div>

                        <span className="flex size-9 items-center justify-center rounded-full border text-muted-foreground transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                            <ArrowUpRight size={17} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function Projects() {
    const [category, setCategory] = useState('All');

    const [methodId, setMethodId] = useState('devops');
    const method = methodologies.find((m) => m.id === methodId);

    const contactLink = (service) =>
    service ? `/contact?service=${encodeURIComponent(service)}` : '/contact';

    const visible =
        category === 'All'
            ? projects
            : projects.filter((project) => project.category === category);

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
                            <Briefcase size={15} />
                            Our work
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Products we’re
                            <span className="text-primary"> proud to have built.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            A selection of projects across web, mobile, cloud
                            and design. Open any case study to see the
                            challenge, our solution and the results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-muted/30">
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
                    {stats.map(([value, label]) => (
                        <div
                            key={label}
                            className="rounded-2xl border bg-background shadow-sm p-5 text-center"
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
            </section>

            {/* All projects */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Portfolio
                            </p>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                All projects
                            </h2>
                        </div>

                        <div
                            className="flex flex-wrap gap-2"
                            role="tablist"
                            aria-label="Filter projects by category"
                        >
                            {categories.map((name) => (
                                <button
                                    key={name}
                                    type="button"
                                    role="tab"
                                    aria-selected={category === name}
                                    onClick={() => setCategory(name)}
                                    className={[
                                        'rounded-full border px-4 py-1.5 text-sm font-medium transition',
                                        category === name
                                            ? 'border-primary bg-primary text-primary-foreground'
                                            : 'bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                    ].join(' ')}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {visible.map((project, index) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Methodologies */}
            <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24">
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Our methodologies
                        </p>
                        <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                            Achieving wins with{' '}
                            <span className="text-primary">
                                proven industry-standard methods
                            </span>
                        </h2>
                    </div>

                    <div
                        className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border bg-background p-1.5"
                        role="tablist"
                        aria-label="Methodologies"
                    >
                        {methodologies.map((item) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={methodId === item.id}
                                    onClick={() => setMethodId(item.id)}
                                    className={[
                                        'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition',
                                        methodId === item.id
                                            ? 'bg-primary text-primary-foreground shadow'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                                    ].join(' ')}
                                >
                                    <Icon size={16} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                        >
                            <div className="flex justify-center">
                                {method.diagram.type === 'infinity' ? (
                                    <InfinityDiagram />
                                ) : (
                                    <CycleDiagram
                                        center={method.diagram.center}
                                        items={method.diagram.items}
                                    />
                                )}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                                    {method.title}{' '}
                                    <span className="text-primary">
                                        {method.highlight}
                                    </span>
                                </h3>

                                <p className="mt-4 leading-7 text-muted-foreground">
                                    {method.description}
                                </p>

                                <ul className="mt-5 space-y-2.5">
                                    {method.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-3 text-sm"
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
                                    to={contactLink()}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                                >
                                    Book a Meeting
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Client stories
                        </p>
                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            What our clients say
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.figure
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.1,
                                }}
                                className="flex flex-col rounded-2xl border bg-card p-7"
                            >
                                <Quote
                                    size={30}
                                    className="text-primary/40"
                                    strokeWidth={1.5}
                                />

                                <blockquote className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                                    {project.testimonial.quote}
                                </blockquote>

                                <figcaption className="mt-6 border-t pt-4">
                                    <p className="font-semibold">
                                        {project.testimonial.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {project.testimonial.role}
                                    </p>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
