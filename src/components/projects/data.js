import {
    Cloud,
    Database,
    GraduationCap,
    Plug,
    ShoppingCart,
    Smartphone,
} from 'lucide-react';

import Marketplace from '@/assets/images/projects/ecom2.jpg';
import Doctor from '@/assets/images/projects/doctor.png';
import Web from '@/assets/images/projects/learnign.png';
import Dev from '@/assets/images/projects/devops.png';
import CRM from '@/assets/images/projects/crm3.webp';
import Api from '@/assets/images/projects/api.png';

export const projects = [
    {
        slug: 'shopnest-marketplace',
        title: 'ShopNest Marketplace',
        client: 'ShopNest Ltd.',
        category: 'Web Development',
        industry: 'E-commerce',
        year: '2025',
        duration: '5 months',
        team: '6 people',
        services: ['Web Development', 'UI/UX Design', 'API Integration'],
        tagline:
            'A multi-vendor marketplace that handles thousands of daily orders.',
        summary:
            'ShopNest wanted to move from a single-store website to a full marketplace where independent sellers could list products, manage orders and get paid automatically.',
        challenge:
            'The existing site could not support multiple sellers, slowed down during sales and required manual order tracking. The team needed a scalable platform without pausing day-to-day sales.',
        solution:
            'We built a modular Laravel and React platform with seller dashboards, automated payouts and a fast search experience. The launch was rolled out in stages so the business kept selling throughout.',
        features: [
            'Seller onboarding and product management dashboard',
            'Real-time inventory and order tracking',
            'Automated commission and payout calculation',
            'Fast product search with filters and suggestions',
        ],
        results: [
            { value: '3x', label: 'Faster page loads' },
            { value: '120+', label: 'Sellers onboarded' },
            { value: '+42%', label: 'Conversion rate' },
        ],
        tech: ['Laravel', 'React/Vue', 'MySQL', 'Redis', 'AWS'],
        testimonial: {
            quote: 'They understood our business quickly and delivered a platform that handled our biggest sale without a hiccup.',
            name: 'Nadia Rahman',
            role: 'Head of Product, ShopNest',
        },
        liveUrl: '',
        image: Marketplace,
        color: '#2563eb',
        icon: ShoppingCart,
    },
    {
        slug: 'careconnect-app',
        title: 'CareConnect',
        client: 'CareConnect Health',
        category: 'Mobile Development',
        industry: 'Healthcare',
        year: '2025',
        duration: '4 months',
        team: '5 people',
        services: ['Mobile Development', 'UI/UX Design', 'Cloud & DevOps'],
        tagline: 'A patient app for booking doctors, reports and follow-ups.',
        summary:
            'CareConnect needed a simple mobile app that lets patients find doctors, book appointments and access their reports from anywhere.',
        challenge:
            'Patients relied on phone calls for bookings, which led to long queues, missed appointments and heavy load on front-desk staff.',
        solution:
            'We delivered a cross-platform app with live availability, reminders and secure report access, backed by an API that connects to the clinic’s existing systems.',
        features: [
            'Doctor search with live appointment slots',
            'Push and SMS appointment reminders',
            'Secure access to prescriptions and reports',
            'Video consultation booking',
        ],
        results: [
            { value: '-35%', label: 'Missed appointments' },
            { value: '25k+', label: 'App downloads' },
            { value: '4.8', label: 'Average store rating' },
        ],
        tech: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
        testimonial: {
            quote: 'Our front desk is calmer, and patients love how easy booking has become.',
            name: 'Dr. Imran Hossain',
            role: 'Medical Director, CareConnect Health',
        },
        liveUrl: '',
        image: Doctor,
        color: '#0d9488',
        icon: Smartphone,
    },
    {
        slug: 'learnloop-redesign',
        title: 'LearnLoop Redesign',
        client: 'LearnLoop Academy',
        category: 'UI/UX Design',
        industry: 'Education',
        year: '2024',
        duration: '10 weeks',
        team: '3 people',
        services: ['UI/UX Design', 'Web Development'],
        tagline:
            'A redesigned learning platform that keeps students engaged.',
        summary:
            'LearnLoop’s students were dropping out of courses early. The goal was a clearer, more motivating learning experience across web and mobile.',
        challenge:
            'Navigation was confusing, progress was hard to see and the interface felt dated, which made it difficult for new learners to get started.',
        solution:
            'After interviews and usability tests, we created a new design system, simplified the learning flow and added progress tracking, streaks and clear next steps.',
        features: [
            'Redesigned onboarding and course discovery',
            'Progress tracking with milestones and streaks',
            'Accessible, responsive design system',
            'Dark mode and mobile-first layouts',
        ],
        results: [
            { value: '+58%', label: 'Course completion' },
            { value: '-40%', label: 'Support tickets' },
            { value: '2x', label: 'Weekly active learners' },
        ],
        tech: ['Figma', 'Design systems', 'React/Vue', 'Tailwind CSS'],
        testimonial: {
            quote: 'The new experience feels effortless. Our students finally know exactly where to go next.',
            name: 'Farhana Akter',
            role: 'Founder, LearnLoop Academy',
        },
        liveUrl: '',
        image: Web,
        color: '#7c3aed',
        icon: GraduationCap,
    },
    {
        slug: 'cloudshift-migration',
        title: 'CloudShift Migration',
        client: 'Stackly',
        category: 'Cloud & DevOps',
        industry: 'SaaS',
        year: '2025',
        duration: '3 months',
        team: '4 people',
        services: ['Cloud & DevOps', 'API Integration'],
        tagline:
            'Zero-downtime move to the cloud with automated deployments.',
        summary:
            'Stackly was running on aging servers with manual releases. We moved the platform to the cloud and automated the entire delivery process.',
        challenge:
            'Deployments took hours, outages were frequent and infrastructure costs kept rising without any visibility into why.',
        solution:
            'We containerized the application, built CI/CD pipelines, introduced infrastructure as code and added monitoring and alerting, all without customer downtime.',
        features: [
            'Containerized services on managed Kubernetes',
            'Automated CI/CD with instant rollbacks',
            'Infrastructure as code for repeatable environments',
            'Dashboards and alerts for performance and cost',
        ],
        results: [
            { value: '99.98%', label: 'Uptime' },
            { value: '-30%', label: 'Infrastructure cost' },
            { value: '10x', label: 'Faster deployments' },
        ],
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
        testimonial: {
            quote: 'We went from nervous release nights to shipping several times a day with confidence.',
            name: 'Rafiq Ahmed',
            role: 'CTO, Stackly',
        },
        liveUrl: '',
        image: Dev,
        color: '#ea580c',
        icon: Cloud,
    },
    {
        slug: 'routewise-crm',
        title: 'RouteWise CRM',
        client: 'RouteWise Logistics',
        category: 'CRM Solutions',
        industry: 'Logistics',
        year: '2024',
        duration: '6 months',
        team: '5 people',
        services: ['CRM Solutions', 'Web Development', 'API Integration'],
        tagline:
            'A custom CRM that connects sales, dispatch and customer support.',
        summary:
            'RouteWise managed customers, quotes and deliveries across spreadsheets and email. They needed one system built around their real workflow.',
        challenge:
            'Information was scattered, quotes were slow and nobody had a clear view of shipment status or customer history.',
        solution:
            'We designed a custom CRM with pipelines, quote automation, shipment tracking and reporting, integrated with their existing fleet software.',
        features: [
            'Lead and customer pipeline management',
            'Automated quotes and approval workflows',
            'Live shipment status inside each customer record',
            'Management dashboards and exportable reports',
        ],
        results: [
            { value: '-60%', label: 'Quote turnaround time' },
            { value: '+28%', label: 'Repeat customers' },
            { value: '15 hrs', label: 'Saved per week' },
        ],
        tech: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
        testimonial: {
            quote: 'Everything our team needs is finally in one place, and it works exactly the way we do.',
            name: 'Shamim Khan',
            role: 'Operations Manager, RouteWise',
        },
        liveUrl: '',
        image: CRM,
        color: '#0891b2',
        icon: Database,
    },
    {
        slug: 'paybridge-integration',
        title: 'PayBridge Integration Hub',
        client: 'PayBridge Finance',
        category: 'API Integration',
        industry: 'Fintech',
        year: '2025',
        duration: '4 months',
        team: '4 people',
        services: ['API Integration', 'Web Development', 'Cloud & DevOps'],
        tagline:
            'One secure layer that connects banks, wallets and accounting.',
        summary:
            'PayBridge needed a dependable way to connect multiple payment providers, banks and accounting tools without rewriting its core product.',
        challenge:
            'Each provider had its own format, failure modes and security rules. Point-to-point connections were fragile and hard to maintain.',
        solution:
            'We built a central integration hub with a unified API, retries, idempotency, webhooks and detailed logging, with strong security controls throughout.',
        features: [
            'Unified API for multiple payment providers',
            'Automatic retries and idempotent requests',
            'Real-time webhooks and reconciliation',
            'Audit logs and role-based access control',
        ],
        results: [
            { value: '12', label: 'Providers connected' },
            { value: '99.9%', label: 'Successful transactions' },
            { value: '-70%', label: 'Integration time' },
        ],
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'OAuth'],
        testimonial: {
            quote: 'Adding a new provider used to take weeks. Now it takes days, and it just works.',
            name: 'Tanvir Islam',
            role: 'Engineering Lead, PayBridge Finance',
        },
        liveUrl: '',
        image: Api,
        color: '#db2777',
        icon: Plug,
    },
];

export const categories = ['All', ...new Set(projects.map((p) => p.category))];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
