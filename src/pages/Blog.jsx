import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock,
    Mail,
    Search,
} from 'lucide-react';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router';

import PostCover from '@/components/blog/PostCover';
import PostModal from '@/components/blog/PostModal';
import {
    categories,
    formatDate,
    initials,
    posts,
} from '@/components/blog/data';

/* -------------------------------------------------------------------------- */
/*  Post card                                                                 */
/* -------------------------------------------------------------------------- */

function PostCard({ post, index, onOpen }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            onClick={() => onOpen(post.slug)}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
        >
            <div className="aspect-[16/10] overflow-hidden border-b">
                <PostCover post={post} />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Clock size={13} />
                        {post.readTime} min read
                    </span>
                </div>

                <h2 className="mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {initials(post.author.name)}
                        </span>
                        <div>
                            <p className="text-xs font-semibold">
                                {post.author.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                                {formatDate(post.date)}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            onOpen(post.slug);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                        Read
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

/* -------------------------------------------------------------------------- */
/*  Newsletter                                                                */
/* -------------------------------------------------------------------------- */

function Newsletter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | done

    async function handleSubmit(event) {
        event.preventDefault();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setStatus('sending');

        // TODO: replace with your real subscribe API call.
        await new Promise((resolve) => setTimeout(resolve, 800));

        setStatus('done');
        setEmail('');
    }

    return (
        <section className="pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl" />

                    <div className="relative grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
                                <Mail size={17} />
                                Newsletter
                            </div>

                            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                                Get new articles in your inbox
                            </h2>

                            <p className="mt-3 max-w-md leading-7 opacity-85">
                                One short email when we publish something
                                useful. No spam, unsubscribe any time.
                            </p>
                        </div>

                        <div>
                            {status === 'done' ? (
                                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-5">
                                    <CheckCircle2 size={26} />
                                    <p className="font-medium">
                                        Thanks for subscribing! Check your
                                        inbox soon.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="flex flex-col gap-3 sm:flex-row"
                                >
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            placeholder="you@example.com"
                                            aria-label="Email address"
                                            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/60 focus:border-white/60"
                                        />
                                        {error && (
                                            <p
                                                className="mt-2 text-xs"
                                                role="alert"
                                            >
                                                {error}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90 disabled:opacity-60"
                                    >
                                        {status === 'sending'
                                            ? 'Subscribing...'
                                            : 'Subscribe'}
                                        <ArrowRight size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Blog() {
    const [params, setParams] = useSearchParams();
    const [category, setCategory] = useState('All');
    const [query, setQuery] = useState('');

    // The open article lives in the URL (?post=slug), so the page never
    // changes. Refreshing or sharing the link reopens the same article,
    // and the browser Back button closes it.
    const activeSlug = params.get('post');
    const activePost = posts.find((post) => post.slug === activeSlug);

    const openPost = useCallback(
        (slug) => setParams({ post: slug }, { preventScrollReset: true }),
        [setParams],
    );

    const closePost = useCallback(
        () => setParams({}, { preventScrollReset: true }),
        [setParams],
    );

    const featured = posts.find((post) => post.featured) ?? posts[0];

    const search = query.trim().toLowerCase();
    const visible = posts.filter((post) => {
        const matchesCategory = category === 'All' || post.category === category;
        const matchesSearch =
            !search ||
            [post.title, post.excerpt, ...post.tags]
                .join(' ')
                .toLowerCase()
                .includes(search);

        return matchesCategory && matchesSearch;
    });

    const related = activePost
        ? posts
              .filter((post) => post.slug !== activePost.slug)
              .sort(
                  (a, b) =>
                      Number(b.category === activePost.category) -
                      Number(a.category === activePost.category),
              )
              .slice(0, 2)
        : [];

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
                            <BookOpen size={15} />
                            Blog
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Ideas, insights and
                            <span className="text-primary"> technology.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Articles about software development, technology and
                            digital business, written by the people who build
                            it.
                        </p>

                        <div className="relative mx-auto mt-8 max-w-lg">
                            <Search
                                size={18}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                            />
                            <input
                                type="search"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search articles..."
                                aria-label="Search articles"
                                className="w-full rounded-2xl border bg-background/90 py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none backdrop-blur transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* All articles */}
            <section className="py-20 sm:py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Latest
                            </p>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                All articles
                            </h2>
                        </div>

                        <div
                            className="flex flex-wrap gap-2"
                            role="tablist"
                            aria-label="Filter articles by category"
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
                        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {visible.map((post, index) => (
                                <PostCard
                                    key={post.slug}
                                    post={post}
                                    index={index}
                                    onOpen={openPost}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {!visible.length && (
                        <p className="mt-12 rounded-2xl border bg-card p-10 text-center text-muted-foreground">
                            No articles match your search. Try a different
                            keyword or category.
                        </p>
                    )}
                </div>
            </section>

            <section className="pt-24">
                <Newsletter />
            </section>

            {/* Article reader (same page, no redirect) */}
            <AnimatePresence>
                {activePost && (
                    <PostModal
                        key="post-modal"
                        post={activePost}
                        related={related}
                        onClose={closePost}
                        onSelect={openPost}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
