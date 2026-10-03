import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Calendar,
    Check,
    Clock,
    Lightbulb,
    Quote,
    Target,
    Users,
} from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';

import ProjectCover from '@/components/projects/ProjectCover';
import { getProject, projects } from '@/components/projects/data';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

function Meta({ icon: Icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={17} />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                </p>
                <p className="text-sm font-semibold">{value}</p>
            </div>
        </div>
    );
}

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = getProject(slug);

    // Jump to the top when moving between projects.
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    if (!project) {
        return (
            <section className="mx-auto max-w-xl px-4 py-32 text-center">
                <h1 className="text-3xl font-bold">Project not found</h1>
                <p className="mt-3 text-muted-foreground">
                    The case study you are looking for does not exist or has
                    been moved.
                </p>
                <Link
                    to="/projects"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
                >
                    <ArrowLeft size={17} />
                    Back to projects
                </Link>
            </section>
        );
    }

    // Same-category projects first, then the rest.
    const related = projects
        .filter((item) => item.slug !== project.slug)
        .sort(
            (a, b) =>
                Number(b.category === project.category) -
                Number(a.category === project.category),
        )
        .slice(0, 3);

    return (
        <div>
            {/* Header */}
            <section className="relative overflow-hidden border-b">
                <div className="absolute left-1/2 top-0 -z-10 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                    >
                        <ArrowLeft size={16} />
                        All projects
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 max-w-3xl"
                    >
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                {project.category}
                            </span>
                            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {project.industry}
                            </span>
                        </div>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            {project.title}
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-muted-foreground">
                            {project.tagline}
                        </p>

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                            >
                                Visit live site
                                <ArrowUpRight size={17} />
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-12 overflow-hidden rounded-3xl border bg-muted p-2 shadow-2xl"
                    >
                        <div className="aspect-[16/8] overflow-hidden rounded-2xl">
                            <ProjectCover project={project} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Body */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:gap-16 lg:px-8">
                    {/* Main column */}
                    <div className="min-w-0 space-y-16">
                        <motion.div {...fadeUp}>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Overview
                            </p>
                            <p className="mt-3 text-lg leading-8">
                                {project.summary}
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <motion.div
                                {...fadeUp}
                                className="rounded-2xl border bg-card p-7"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Target size={24} strokeWidth={1.6} />
                                </div>
                                <h2 className="mt-5 text-xl font-bold">
                                    The challenge
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            <motion.div
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="rounded-2xl border bg-card p-7"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Lightbulb size={24} strokeWidth={1.6} />
                                </div>
                                <h2 className="mt-5 text-xl font-bold">
                                    Our solution
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                    {project.solution}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div {...fadeUp}>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Key features
                            </p>
                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                What we delivered
                            </h2>

                            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-3 rounded-xl border bg-card p-4 text-sm leading-6"
                                    >
                                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div {...fadeUp}>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Results
                            </p>
                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                The impact
                            </h2>

                            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                {project.results.map((result) => (
                                    <div
                                        key={result.label}
                                        className="rounded-2xl border bg-muted/40 p-6 text-center"
                                    >
                                        <div className="text-4xl font-bold text-primary">
                                            {result.value}
                                        </div>
                                        <div className="mt-2 text-sm text-muted-foreground">
                                            {result.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.figure
                            {...fadeUp}
                            className="relative overflow-hidden rounded-3xl border bg-card p-8 sm:p-10"
                        >
                            <Quote
                                size={44}
                                strokeWidth={1.3}
                                className="text-primary/30"
                            />
                            <blockquote className="mt-4 text-xl font-medium leading-9">
                                {project.testimonial.quote}
                            </blockquote>
                            <figcaption className="mt-6">
                                <p className="font-semibold">
                                    {project.testimonial.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {project.testimonial.role}
                                </p>
                            </figcaption>
                        </motion.figure>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-24 lg:self-start">
                        <div className="rounded-2xl border bg-card p-6">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                Project at a glance
                            </h3>

                            <div className="mt-6 space-y-5">
                                <Meta
                                    icon={Users}
                                    label="Client"
                                    value={project.client}
                                />
                                <Meta
                                    icon={Calendar}
                                    label="Year"
                                    value={project.year}
                                />
                                <Meta
                                    icon={Clock}
                                    label="Duration"
                                    value={project.duration}
                                />
                                <Meta
                                    icon={Users}
                                    label="Team"
                                    value={project.team}
                                />
                            </div>

                            <div className="mt-7 border-t pt-6">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                    Services
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 border-t pt-6">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                    Technologies
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to={`/contact?service=${encodeURIComponent(project.category)}`}
                            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                        >
                            Start a similar project
                            <ArrowRight size={17} />
                        </Link>
                    </aside>
                </div>
            </section>

            {/* Related */}
            <section className="border-t bg-muted/30 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Keep exploring
                            </p>
                            <h2 className="mt-2 text-3xl font-bold">
                                More case studies
                            </h2>
                        </div>

                        <Link
                            to="/projects"
                            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
                        >
                            View all
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {related.map((item) => (
                            <Link
                                key={item.slug}
                                to={`/projects/${item.slug}`}
                                className="group overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                            >
                                <div className="aspect-[16/10] overflow-hidden border-b">
                                    <ProjectCover project={item} />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                        {item.category}
                                    </p>
                                    <h3 className="mt-1.5 text-lg font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                        {item.tagline}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
