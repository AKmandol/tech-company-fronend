import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Compass,
    Globe2,
    Hammer,
    Handshake,
    Lightbulb,
    Mail,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * `image` is optional. Leave it empty and a gradient avatar with initials
 * is shown. `socials` keys are all optional: only the ones you fill in
 * are rendered.
 */
const members = [
    {
        name: "Atikul Haider",
        role: "Chief Executive Officer",
        department: "Leadership",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/atikulrahman",
            twitter: "https://x.com/atikulrahman",
            email: "atikul@example.com",
        },
    },
    {
        name: "Amlan Kumar Mandol",
        role: "Lead Software Engineer",
        department: "Engineering",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/amlankumarmandol",
            github: "https://github.com/amlankumarmandol",
            email: "amlan@example.com",
        },
    },
    {
        name: "Abir Ahmed Pranjal",
        role: "Jr. Software Engineer",
        department: "Design",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/rajibahmed",
            twitter: "https://x.com/rajibahmed",
        },
    },
    {
        name: "Mithun Das",
        role: "Product Manager",
        department: "Product",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/michaelbrown",
            email: "michael@example.com",
        },
    },
    {
        name: "Susmoy Biswas",
        role: "Senior Backend Engineer",
        department: "Leadership",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/sarahlee",
            github: "https://github.com/sarahlee",
        },
    },
    {
        name: "Masum Billah",
        role: "Digital Marketing Specialist",
        department: "Engineering",
        image: "",
        socials: {
            github: "https://github.com/davidkim",
            linkedin: "https://linkedin.com/in/davidkim",
        },
    },
    {
        name: "Priya Patel",
        role: "UX Researcher",
        department: "Design",
        image: "",
        socials: {
            linkedin: "https://linkedin.com/in/priyapatel",
            twitter: "https://x.com/priyapatel",
        },
    },
    {
        name: "Omar Hassan",
        role: "DevOps Engineer",
        department: "Engineering",
        image: "",
        socials: {
            github: "https://github.com/omarhassan",
            linkedin: "https://linkedin.com/in/omarhassan",
            email: "omar@example.com",
        },
    },
];

const departments = ["All", "Leadership", "Engineering", "Design", "Product"];

const highlights = [
    {
        icon: Lightbulb,
        title: "Experienced people, clear thinking",
        description:
            "Senior engineers and designers who have shipped real products and know when to keep things simple.",
    },
    {
        icon: Globe2,
        title: "One team across time zones",
        description:
            "Overlapping hours, written-first communication and shared tooling keep work moving every day.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable from kickoff to launch",
        description:
            "Predictable delivery, honest updates and a team that stays with your product long after release.",
    },
];

const values = [
    {
        icon: Handshake,
        title: "Clients first",
        description:
            "We start every project by listening. The best solution is the one that fits your goals, not the one that is easiest for us to build.",
    },
    {
        icon: Target,
        title: "Aim high",
        description:
            "We take on hard problems with confidence, test ideas early and are not afraid to change direction when the evidence says so.",
    },
    {
        icon: Users,
        title: "Grow together",
        description:
            "Knowledge is shared openly. We review each other’s work, celebrate wins as a team and lift each other through the tough parts.",
    },
    {
        icon: TrendingUp,
        title: "Own the result",
        description:
            "From the first commit to the final release, we take responsibility for quality, deadlines and the outcomes we promise.",
    },
    {
        icon: Hammer,
        title: "Care about craft",
        description:
            "Clean code, thoughtful design and careful testing are not extras. They are how we show respect for the people using our work.",
    },
    {
        icon: Compass,
        title: "Keep learning",
        description:
            "Technology moves quickly. We make time to explore, experiment and improve so our clients always benefit from current best practice.",
    },
];

/* -------------------------------------------------------------------------- */
/*  Social icons (inline so they work in every lucide-react version)          */
/* -------------------------------------------------------------------------- */

const brandPaths = {
    linkedin:
        "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    twitter:
        "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
};

function BrandIcon({ name }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
        >
            <path d={brandPaths[name]} />
        </svg>
    );
}

const socialLabels = {
    linkedin: "LinkedIn",
    github: "GitHub",
    twitter: "X (Twitter)",
    email: "Email",
};

function SocialLinks({ name, socials }) {
    const entries = Object.entries(socials ?? {});

    if (!entries.length) return null;

    return (
        <div className="flex items-center gap-2">
            {entries.map(([key, value]) => (
                <a
                    key={key}
                    href={key === "email" ? `mailto:${value}` : value}
                    target={key === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={`${name} on ${socialLabels[key]}`}
                    className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                    {key === "email" ? (
                        <Mail size={16} />
                    ) : (
                        <BrandIcon name={key} />
                    )}
                </a>
            ))}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Member card                                                               */
/* -------------------------------------------------------------------------- */

function MemberCard({ member }) {
    const initials = member.name
        .split(" ")
        .map((part) => part[0])
        .join("");

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="group overflow-hidden rounded-2xl border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative aspect-[4/4.4] overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-primary/5">
                {member.image ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex size-full items-center justify-center">
                        <div className="flex size-28 items-center justify-center rounded-full border-4 border-background bg-primary/10 text-3xl font-bold text-primary shadow-lg transition duration-500 group-hover:scale-110">
                            {initials}
                        </div>
                    </div>
                )}

                <span className="absolute left-3 top-3 rounded-full border bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {member.department}
                </span>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    {member.role}
                </p>

                <div className="mt-4 border-t pt-4">
                    <SocialLinks name={member.name} socials={member.socials} />
                </div>
            </div>
        </motion.article>
    );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Team() {
    const [active, setActive] = useState("All");

    const visible =
        active === "All"
            ? members
            : members.filter((member) => member.department === active);

    return (
        <div>
            <section className="relative overflow-hidden bg-muted/30">
                <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Our Team
                        </p>

                        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            The people behind
                            <span className="text-primary">
                                {" "}
                                every product.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Engineers, designers and product thinkers who care
                            about the details and about the people who use what
                            we build.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3"
                    >
                        {[
                            ["50+", "Team members"],
                            ["12", "Countries served"],
                            ["4.9", "Client rating"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-2xl border bg-background/90 p-4 shadow-sm backdrop-blur"
                            >
                                <div className="text-2xl font-bold text-primary">
                                    {value}
                                </div>
                                <div className="mt-1 text-xs font-medium text-muted-foreground">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                Meet the team
                            </p>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Talented people, one shared goal
                            </h2>
                        </div>

                        <div
                            className="flex flex-wrap gap-2"
                            role="tablist"
                            aria-label="Filter team by department"
                        >
                            {departments.map((department) => (
                                <button
                                    key={department}
                                    type="button"
                                    role="tab"
                                    aria-selected={active === department}
                                    onClick={() => setActive(department)}
                                    className={[
                                        "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                                        active === department
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
                                    ].join(" ")}
                                >
                                    {department}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {visible.map((member) => (
                                <MemberCard key={member.name} member={member} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <section className="bg-muted/30 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        A team you can build on
                    </h2>

                    <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="group flex gap-4 rounded-xl border bg-background p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                                    >
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon size={22} strokeWidth={1.6} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.figure
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="overflow-hidden rounded-2xl border bg-background p-2 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                                    alt="Our team working together"
                                    className="aspect-[4/3] w-full rounded-xl object-cover"
                                />
                            </div>
                            <figcaption className="mt-4 text-center text-base text-muted-foreground">
                                Great products come from people who trust each
                                other.
                            </figcaption>
                        </motion.figure>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-20 sm:py-24">
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Our values
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        How we show up.
                    </h2>

                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        The principles that shape how we work together and how
                        we work with you.
                    </p>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: (index % 3) * 0.1,
                                    }}
                                    className="group flex flex-col rounded-2xl border bg-card p-7 text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                                >
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon size={28} strokeWidth={1.6} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                                        {value.description}
                                    </p>

                                    <div className="mt-6 h-0.5 w-full overflow-hidden rounded-full bg-border">
                                        <div className="h-full w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
