import {
    Cloud,
    Code2,
    Layers,
    Palette,
    Plug,
    TrendingUp,
} from 'lucide-react';

import Laravel from '@/assets/images/blog/laravel.webp';
import Design from '@/assets/images/blog/design-workflow-process.webp';
import React from '@/assets/images/blog/REACT.webp';
import Api from '@/assets/images/blog/api.png';
import CiCd from '@/assets/images/blog/ci-cd.png';
import Ux from '@/assets/images/blog/ux-design-principles.avif';

export const posts = [
    {
        slug: 'building-scalable-laravel-applications',
        title: 'Building scalable Laravel applications',
        category: 'Technology',
        excerpt:
            'Practical habits that keep a Laravel codebase fast and easy to change as your product and team grow.',
        date: '2026-09-18',
        readTime: 7,
        author: { name: 'Jane Smith', role: 'Lead Software Engineer' },
        tags: ['Laravel', 'PHP', 'Architecture'],
        color: '#ef4444',
        icon: Code2,
        image: Laravel,
        featured: true,
        content: [
            {
                type: 'p',
                text: 'Laravel makes it easy to ship quickly, but speed early on can turn into friction later. The good news is that a handful of habits keep an application healthy as traffic, features and developers are added.',
            },
            { type: 'h', text: 'Draw boundaries early' },
            {
                type: 'p',
                text: 'Group code by business capability (billing, orders, accounts) rather than by technical type. When each area owns its models, actions and policies, changes stay local and new teammates find things faster.',
            },
            { type: 'h', text: 'Move slow work to queues' },
            {
                type: 'p',
                text: 'Anything the user does not need to wait for, such as sending email, generating PDFs or syncing with third parties, belongs in a queue. Dispatching after the database transaction commits avoids jobs that run before the data exists.',
            },
            {
                type: 'code',
                text: "ProcessInvoice::dispatch($order)\n    ->onQueue('billing')\n    ->afterCommit();",
            },
            { type: 'h', text: 'A short checklist before launch' },
            {
                type: 'list',
                items: [
                    'Add database indexes for every column you filter or sort by',
                    'Cache expensive reads and invalidate them deliberately',
                    'Eager load relationships to avoid N+1 queries',
                    'Track slow queries and failed jobs from day one',
                ],
            },
            {
                type: 'quote',
                text: 'Scalability is mostly the result of many small, boring decisions made consistently.',
            },
            {
                type: 'p',
                text: 'None of this requires a rewrite. Start with the slowest page or the noisiest job, measure it, improve it and repeat. Over time the codebase stays calm even as the product grows.',
            },
        ],
    },
    {
        slug: 'designing-better-business-workflows',
        title: 'Designing better business workflows',
        category: 'Business',
        excerpt:
            'How to map, simplify and automate the processes your team relies on every day.',
        date: '2026-09-04',
        readTime: 6,
        author: { name: 'Michael Brown', role: 'Product Manager' },
        tags: ['Workflow', 'Automation', 'Strategy'],
        color: '#0891b2',
        icon: TrendingUp,
        image: Design,
        content: [
            {
                type: 'p',
                text: 'Most inefficiency in a company is invisible. It hides in handoffs, duplicate data entry and approvals that wait in someone’s inbox. Better workflows start with making that work visible.',
            },
            { type: 'h', text: 'Map before you automate' },
            {
                type: 'p',
                text: 'Sit with the people who do the work and draw each step as it really happens, including the workarounds. Automating a confusing process only makes the confusion faster.',
            },
            { type: 'h', text: 'Simplify, then automate' },
            {
                type: 'list',
                items: [
                    'Remove steps that exist only out of habit',
                    'Combine approvals that always go to the same person',
                    'Capture data once and reuse it everywhere',
                    'Automate the repetitive parts, keep humans for decisions',
                ],
            },
            {
                type: 'quote',
                text: 'The best workflow is the one your team does not have to think about.',
            },
            {
                type: 'p',
                text: 'Measure cycle time and error rates before and after the change. Those two numbers will tell you whether the new process is genuinely better.',
            },
        ],
    },
    {
        slug: 'modern-react-architecture',
        title: 'Modern React architecture',
        category: 'Technology',
        excerpt:
            'A feature-based structure that keeps large React applications understandable and testable.',
        date: '2026-08-21',
        readTime: 8,
        author: { name: 'Alex Johnson', role: 'Frontend Engineer' },
        tags: ['React', 'Frontend', 'Architecture'],
        color: '#2563eb',
        icon: Layers,
        image: React,
        content: [
            {
                type: 'p',
                text: 'As a React app grows, folders like components and hooks turn into junk drawers. A feature-based structure keeps related code together and makes the app easier to navigate.',
            },
            { type: 'h', text: 'Organize by feature' },
            {
                type: 'code',
                text: 'src/\n  features/\n    billing/\n      components/\n      hooks/\n      api.js\n    accounts/\n  components/   # shared UI only\n  lib/          # helpers',
            },
            { type: 'h', text: 'Keep state close to where it is used' },
            {
                type: 'p',
                text: 'Local state first, then context for a small subtree, and a data-fetching library for server state. Reach for global stores only when several distant parts of the app truly share the same data.',
            },
            {
                type: 'list',
                items: [
                    'Treat server data as a cache, not as app state',
                    'Build small, composable components',
                    'Co-locate tests with the feature they cover',
                    'Lazy-load routes to keep the first load fast',
                ],
            },
            {
                type: 'p',
                text: 'The goal is not a perfect folder tree. It is a codebase where a new teammate can find, change and test a feature without reading the whole app.',
            },
        ],
    },
    {
        slug: 'api-design-that-ages-well',
        title: 'API design that ages well',
        category: 'Technology',
        excerpt:
            'Versioning, error handling and naming choices that save you from painful breaking changes.',
        date: '2026-08-07',
        readTime: 6,
        author: { name: 'David Kim', role: 'Senior Backend Engineer' },
        tags: ['API', 'Backend', 'Design'],
        color: '#db2777',
        icon: Plug,
        image: Api,
        content: [
            {
                type: 'p',
                text: 'An API is a promise. Once other systems depend on it, every change has a cost, so the choices you make early matter more than they seem.',
            },
            { type: 'h', text: 'Make change safe' },
            {
                type: 'list',
                items: [
                    'Version from the start, for example /v1/orders',
                    'Only add fields, never rename or remove them quietly',
                    'Use consistent, predictable names across endpoints',
                    'Document deprecations and give clients time to move',
                ],
            },
            { type: 'h', text: 'Treat errors as part of the design' },
            {
                type: 'p',
                text: 'Return clear status codes and a stable error format with a machine-readable code and a human-readable message. Good errors turn support tickets into self-service fixes.',
            },
            {
                type: 'quote',
                text: 'If integrators have to guess, the API is unfinished.',
            },
            {
                type: 'p',
                text: 'Finally, make requests idempotent where money or inventory is involved. Retries are a fact of life, and your API should handle them gracefully.',
            },
        ],
    },
    {
        slug: 'ci-cd-without-the-drama',
        title: 'CI/CD without the drama',
        category: 'DevOps',
        excerpt:
            'Turn risky release nights into routine, automated deployments your whole team trusts.',
        date: '2026-07-24',
        readTime: 5,
        author: { name: 'Omar Hassan', role: 'DevOps Engineer' },
        tags: ['CI/CD', 'Automation', 'Cloud'],
        color: '#ea580c',
        icon: Cloud,
        image: CiCd,
        content: [
            {
                type: 'p',
                text: 'Teams that dread releases usually deploy rarely, and rare deploys are bigger and riskier. The cure is to make deploying small, frequent and boring.',
            },
            { type: 'h', text: 'The pipeline in four steps' },
            {
                type: 'list',
                items: [
                    'Run tests and linters on every pull request',
                    'Build one artifact and promote it through environments',
                    'Deploy automatically to staging, with approval to production',
                    'Make rollback a single click',
                ],
            },
            { type: 'h', text: 'Watch what you ship' },
            {
                type: 'p',
                text: 'Dashboards and alerts close the loop. When a release causes errors, you want to know in minutes, not from a customer. Pair every deploy with health checks and clear ownership.',
            },
            {
                type: 'quote',
                text: 'Confidence comes from automation, not from careful hands.',
            },
        ],
    },
    {
        slug: 'ux-principles-for-business-software',
        title: 'UX principles for business software',
        category: 'Design',
        excerpt:
            'Why internal tools deserve great design, and the principles that make complex software feel simple.',
        date: '2026-07-10',
        readTime: 6,
        author: { name: 'Priya Patel', role: 'UX Researcher' },
        tags: ['UX', 'UI', 'Design systems'],
        color: '#7c3aed',
        icon: Palette,
        image: Ux,
        content: [
            {
                type: 'p',
                text: 'Business software is used for hours every day, so small frustrations add up quickly. Thoughtful design here is not decoration. It is saved time and fewer mistakes.',
            },
            { type: 'h', text: 'Principles that matter most' },
            {
                type: 'list',
                items: [
                    'Show the most common action first and make it obvious',
                    'Keep forms short and validate as people type',
                    'Use plain language instead of internal jargon',
                    'Design for keyboard use and fast, repeated tasks',
                ],
            },
            {
                type: 'quote',
                text: 'Complex does not have to mean complicated.',
            },
            {
                type: 'p',
                text: 'Test with real users early, even with a rough prototype. Ten minutes watching someone use your screen will teach you more than a week of debate.',
            },
        ],
    },
];

export const categories = ['All', ...new Set(posts.map((post) => post.category))];

export const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

export const initials = (name) =>
    name
        .split(' ')
        .map((part) => part[0])
        .join('');
