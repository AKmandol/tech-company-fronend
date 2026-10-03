import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { COMPANY, LAST_UPDATED } from '@/components/legal/config';

/**
 * A section's `content` is a list. Each item is either:
 *   'A paragraph of text'
 *   { list: ['Bullet one', 'Bullet two'] }
 */
function Content({ item }) {
    if (typeof item === 'string') {
        return (
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                {item}
            </p>
        );
    }

    return (
        <ul className="mt-4 space-y-2.5">
            {item.list.map((entry) => (
                <li
                    key={entry}
                    className="flex gap-3 text-[15px] leading-7 text-muted-foreground"
                >
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    {entry}
                </li>
            ))}
        </ul>
    );
}

export default function LegalLayout({
    icon: Icon,
    eyebrow,
    title,
    intro,
    sections,
    otherPage,
}) {
    const [active, setActive] = useState(sections[0].id);

    // Highlight the section currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-15% 0px -75% 0px' },
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div>
            {/* Heading */}
            <section className="relative overflow-hidden border-b">
                <div className="absolute left-1/2 top-0 -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                            <Icon size={15} />
                            {eyebrow}
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            {title}
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
                            {intro}
                        </p>

                        <p className="mt-5 text-sm text-muted-foreground">
                            Last updated:{' '}
                            <span className="font-medium text-foreground">
                                {LAST_UPDATED}
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Body */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-16 lg:px-8">
                    {/* Table of contents */}
                    <aside className="hidden lg:block">
                        <nav
                            aria-label="On this page"
                            className="sticky top-28"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                On this page
                            </p>

                            <ul className="mt-4 space-y-1 border-l">
                                {sections.map((section, index) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            className={[
                                                '-ml-px block border-l-2 py-1.5 pl-4 text-sm transition',
                                                active === section.id
                                                    ? 'border-primary font-medium text-primary'
                                                    : 'border-transparent text-muted-foreground hover:text-foreground',
                                            ].join(' ')}
                                        >
                                            {index + 1}. {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Content */}
                    <article className="min-w-0">
                        {sections.map((section, index) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-28 border-b py-8 first:pt-0 last:border-b-0"
                            >
                                <h2 className="text-xl font-bold sm:text-2xl">
                                    <span className="mr-2 text-primary">
                                        {index + 1}.
                                    </span>
                                    {section.title}
                                </h2>

                                {section.content.map((item, itemIndex) => (
                                    <Content key={itemIndex} item={item} />
                                ))}
                            </section>
                        ))}

                        {/* Contact card */}
                        <div className="mt-6 rounded-2xl border bg-muted/40 p-7">
                            <h3 className="text-lg font-bold">
                                Questions about this page?
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Reach out and we will be happy to help.
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                >
                                    <Mail size={16} />
                                    {COMPANY.email}
                                </a>

                                <Link
                                    to={otherPage.path}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                                >
                                    {otherPage.label}
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
