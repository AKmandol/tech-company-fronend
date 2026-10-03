import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ArrowRight,
    Calendar,
    Check,
    Clock,
    Link2,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import PostCover from '@/components/blog/PostCover';
import { formatDate, initials } from '@/components/blog/data';

function Block({ block }) {
    switch (block.type) {
        case 'h':
            return (
                <h3 className="mt-10 text-2xl font-bold tracking-tight">
                    {block.text}
                </h3>
            );

        case 'list':
            return (
                <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 leading-7 text-foreground/80"
                        >
                            <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Check size={12} strokeWidth={3} />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            );

        case 'quote':
            return (
                <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6 text-lg font-medium italic leading-8">
                    {block.text}
                </blockquote>
            );

        case 'code':
            return (
                <pre className="mt-6 overflow-x-auto rounded-2xl border bg-muted p-5 text-sm leading-6">
                    <code>{block.text}</code>
                </pre>
            );

        default:
            return (
                <p className="mt-5 text-[17px] leading-8 text-foreground/80">
                    {block.text}
                </p>
            );
    }
}

export default function PostModal({ post, related, onClose, onSelect }) {
    const scrollRef = useRef(null);
    const [copied, setCopied] = useState(false);

    // Reading progress inside the modal
    const { scrollYProgress } = useScroll({ container: scrollRef });
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    // Close with Escape
    useEffect(() => {
        const onKey = (event) => event.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    // Lock the page behind the modal
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

    // Start at the top whenever the article changes
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: 0 });
        setCopied(false);
    }, [post.slug]);

    async function copyLink() {
        const url = `${window.location.origin}${window.location.pathname}?post=${post.slug}`;

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked; ignore silently.
        }
    }

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="post-title"
            className="fixed inset-0 z-[60] overflow-y-auto bg-black/60 backdrop-blur-sm"
        >
            {/* Reading progress */}
            <motion.span
                style={{ scaleX: progress }}
                className="fixed inset-x-0 top-0 z-30 h-1 origin-left bg-primary"
            />

            {/* Close button */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close article"
                className="fixed right-4 top-4 z-30 flex size-11 items-center justify-center rounded-full border bg-background/90 shadow-lg backdrop-blur transition hover:bg-muted sm:right-6 sm:top-6"
            >
                <X size={20} />
            </button>

            <div
                className="flex min-h-full items-start justify-center sm:p-6 sm:py-10"
                onMouseDown={(event) =>
                    event.target === event.currentTarget && onClose()
                }
            >
                <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-3xl overflow-hidden bg-background shadow-2xl sm:rounded-3xl sm:border"
                >
                    <div className="aspect-[16/8] overflow-hidden border-b">
                        <PostCover post={post} />
                    </div>

                    <div className="px-6 pb-10 pt-8 sm:px-12">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            {post.category}
                        </span>

                        <h1
                            id="post-title"
                            className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                        >
                            {post.title}
                        </h1>

                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            {post.excerpt}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y py-5">
                            <div className="flex items-center gap-3">
                                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                    {initials(post.author.name)}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold">
                                        {post.author.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {post.author.role}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar size={15} />
                                    {formatDate(post.date)}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock size={15} />
                                    {post.readTime} min read
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={copyLink}
                                className="ml-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:border-primary/50 hover:text-primary"
                            >
                                {copied ? <Check size={15} /> : <Link2 size={15} />}
                                {copied ? 'Link copied' : 'Copy link'}
                            </button>
                        </div>

                        {/* Article body */}
                        <div>
                            {post.content.map((block, index) => (
                                <Block key={index} block={block} />
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="mt-10 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 rounded-2xl bg-primary p-7 text-primary-foreground">
                            <h4 className="text-xl font-bold">
                                Need help with something like this?
                            </h4>
                            <p className="mt-2 text-sm leading-6 opacity-85">
                                Our team is happy to talk through your project
                                and suggest the best approach.
                            </p>
                            <Link
                                to="/contact"
                                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:opacity-90"
                            >
                                Talk to our team
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Related */}
                    {related.length > 0 && (
                        <div className="border-t bg-muted/30 px-6 py-8 sm:px-12">
                            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                Keep reading
                            </h4>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                {related.map((item) => (
                                    <button
                                        key={item.slug}
                                        type="button"
                                        onClick={() => onSelect(item.slug)}
                                        className="group flex gap-4 rounded-2xl border bg-card p-3 text-left transition duration-300 hover:border-primary/40 hover:shadow-lg"
                                    >
                                        <div className="size-20 shrink-0 overflow-hidden rounded-xl">
                                            <PostCover post={item} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                                {item.category}
                                            </p>
                                            <p className="mt-1 line-clamp-2 text-sm font-semibold">
                                                {item.title}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.article>
            </div>
        </motion.div>
    );
}
