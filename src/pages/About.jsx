import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

import StorySection from '@/components/about/StorySection';

import Atik from '@/assets/images/us/atik.png';
import Akm from '@/assets/images/us/akm.JPEG';
import Rajib from '@/assets/images/us/rajib.jpeg';
import Mithun from '@/assets/images/us/mithun.jpg';

const stats = [
    {
        value: '10+',
        label: 'Years of Experience',
    },
    {
        value: '100+',
        label: 'Projects Delivered',
    },
    {
        value: '40+',
        label: 'Clients Worldwide',
    },
];

const team = [
    {
        name: 'Atikul Haider',
        role: 'Chief Executive Officer',
        image: Atik,
    },
    {
        name: 'Amlan Kumar Mandol',
        role: 'Sr. Software Engineer',
        image: Akm,
    },
    {
        name: 'Abir Ahmed pranjal',
        role: 'Jr. Software Engineer',
        image: Rajib,
    },
    {
        name: 'Mithun Das',
        role: 'Product Manager',
        image: Mithun,
    },
];

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            About Us
                        </p>

                        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Building technology that creates meaningful
                            <span className="text-primary"> business impact.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                            We are a technology company focused on building
                            reliable digital products, modern business systems
                            and thoughtful experiences that help organizations
                            grow.
                        </p>
                    </motion.div>

                    {/* Main image + floating stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative mx-auto mt-12 max-w-5xl"
                    >
                        <div className="overflow-hidden rounded-3xl border bg-muted p-2 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                                alt="Modern technology office"
                                className="aspect-[16/8] w-full rounded-2xl object-cover"
                            />
                        </div>

                        <div className="relative mx-auto mt-[-25px] grid max-w-3xl grid-cols-1 gap-3 px-4 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border bg-background/95 p-5 text-center shadow-lg backdrop-blur"
                                >
                                    <div className="text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>

                                    <div className="mt-1 text-xs font-medium text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Story sections */}
            <StorySection
                eyebrow="What We Do"
                title="Technology built around real business needs."
                description={[
                    'We design and develop digital products that combine strong engineering with clear user experiences.',
                    'Our work ranges from custom web platforms and business applications to APIs, integrations and scalable cloud solutions.',
                    'Rather than forcing every organization into the same technology stack, we build systems around the actual needs of the business.',
                ]}
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
                imageAlt="Modern commercial building"
            />

            <div className="bg-muted/20">
                <StorySection
                    eyebrow="Global Perspective"
                    title="Trusted Worldwide."
                    description={[
                        'Technology has made it possible for teams, customers and businesses to work together regardless of location.',
                        'We build products with this global mindset, focusing on reliability, accessibility, maintainability and long-term growth.',
                        'From internal business systems to customer-facing platforms, every product is designed to work beyond a single moment or market.',
                    ]}
                    image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
                    imageAlt="Global technology network"
                    reverse
                />
            </div>

            <StorySection
                eyebrow="Our Vision"
                title="A vision to redefine connectivity."
                description={[
                    'We believe technology should make complicated processes easier and connect people with the information they need.',
                    'Our goal is to create software that feels simple on the surface while being thoughtfully engineered underneath.',
                    'That means clean interfaces, dependable systems and products that can evolve as businesses grow.',
                ]}
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
                imageAlt="Technology and connectivity"
            />

            {/* Leadership message */}
            <section className="bg-muted/20 py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Leadership Message
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Technology should solve problems, not create more of them.
                        </h2>

                        <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground">
                            <p>
                                We started with a simple idea: businesses
                                deserve technology that actually works for
                                them.
                            </p>

                            <p>
                                Every product we build is an opportunity to
                                make a process simpler, a team more productive
                                and a customer experience better.
                            </p>

                            <p>
                                We are committed to long-term partnerships,
                                continuous improvement and engineering with
                                purpose.
                            </p>
                        </div>

                        <div className="mt-7">
                            <p className="font-semibold">
                                Atikul Rahman
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Chief Executive Officer
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-sm"
                    >
                        <div className="overflow-hidden rounded-3xl border bg-background p-2 shadow-xl">
                            <img
                                src={Atik}
                                alt="Company leadership"
                                className="aspect-[4/5] w-full rounded-2xl object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team preview */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Our People
                            </p>

                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Leadership Team
                            </h2>

                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                A group of engineers, designers and business
                                thinkers working together to build useful
                                products.
                            </p>
                        </div>

                        <Link
                            to="/team"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                        >
                            Meet the full team
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                }}
                                className="group overflow-hidden rounded-2xl border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-primary/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="size-full object-cover rounded-full p-15 transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <h3 className="font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
                                <CheckCircle2 size={17} />
                                Let's build something useful
                            </div>

                            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                                Have a challenge worth solving?
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 opacity-85">
                                Tell us what you're trying to build, improve
                                or automate.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 font-semibold text-foreground transition hover:opacity-90"
                            >
                                Start a Conversation
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
