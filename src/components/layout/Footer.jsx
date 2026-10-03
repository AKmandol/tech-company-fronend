import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Careers", path: "/careers" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
];

const serviceLinks = [
    { label: "Web Development", path: "/services" },
    { label: "AI Solutions", path: "/services" },
    { label: "UI/UX Design", path: "/services" },
    { label: "Mobile Development", path: "/services" },
    { label: "Digital Marketing", path: "/services" },
];

const resourceLinks = [
    { label: "Blog", path: "/blog" },
    { label: "Projects", path: "/projects" },
    { label: "Careers", path: "/careers" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "#",
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        href: "#",
        icon: FaGithub,
    },
    {
        label: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
    {
        label: "X",
        href: "#",
        icon: FaXTwitter,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { pathname } = useLocation();
    const isContactPage = pathname === "/contact";

    return (
        <footer
            className="
                relative overflow-hidden
                bg-slate-50 text-slate-900
                transition-colors duration-300
                dark:bg-[#070b12] dark:text-white
            "
        >
            {/* Top-left glow */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40 -top-40 h-[500px] w-[500px]
                    rounded-full
                    bg-blue-500/10 blur-[140px]
                    dark:bg-blue-600/30
                "
            />

            {/* Top-right glow */}
            <div
                className="
                    pointer-events-none absolute
                    -right-40 -top-40 h-[500px] w-[500px]
                    rounded-full
                    bg-cyan-500/10 blur-[140px]
                    dark:bg-blue-500/25
                "
            />

            {/* Center glow */}
            <div
                className="
                    pointer-events-none absolute
                    left-1/2 top-[300px]
                    h-[400px] w-[600px]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500/5 blur-[120px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* =====================================================
                    CTA
                ====================================================== */}
                {!isContactPage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="
                            border-b
                            border-slate-900/10
                            py-20 sm:py-24
                            dark:border-white/10
                        "
                    >
                        <div className="mx-auto max-w-4xl text-center">
                            <p
                                className="
                                    text-xs font-semibold uppercase tracking-[0.25em]
                                    text-primary
                                    sm:text-sm
                                "
                            >
                                Let's build something great
                            </p>

                            <h2
                                className="
                                    mx-auto mt-5 max-w-4xl
                                    text-4xl font-bold tracking-tight
                                    sm:text-5xl lg:text-6xl
                                "
                            >
                                Shape the future with
                                <span className="block text-primary">
                                    intelligent technology.
                                </span>
                            </h2>

                            <p
                                className="
                                    mx-auto mt-6 max-w-2xl
                                    text-sm leading-7
                                    text-slate-600
                                    dark:text-white/60
                                    sm:text-base
                                "
                            >
                                Have an idea, a challenge, or a product you want
                                to build? Let's turn it into a reliable digital
                                experience.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Link
                                    to="/contact?type=demo"
                                    className="
                                        group inline-flex items-center
                                        justify-center gap-2
                                        rounded-xl
                                        bg-slate-950 px-6 py-3.5
                                        text-sm font-semibold text-white
                                        shadow-lg shadow-blue-500/10
                                        transition-all duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-slate-800

                                        dark:bg-white
                                        dark:text-slate-950
                                        dark:hover:bg-blue-50
                                    "
                                >
                                    Get a Free Demo
                                    <ArrowUpRight
                                        size={17}
                                        className="
                                            transition-transform duration-300
                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                        "
                                    />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="
                                        inline-flex items-center justify-center
                                        rounded-xl
                                        border
                                        border-slate-900/15
                                        bg-white/60
                                        px-6 py-3.5
                                        text-sm font-semibold
                                        text-slate-900
                                        backdrop-blur-sm
                                        transition-all duration-300
                                        hover:-translate-y-0.5
                                        hover:border-primary/40
                                        hover:bg-primary/5

                                        dark:border-white/20
                                        dark:bg-white/[0.03]
                                        dark:text-white
                                        dark:hover:border-blue-400/50
                                        dark:hover:bg-blue-500/10
                                    "
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* =====================================================
                    MAIN FOOTER
                ====================================================== */}
                <div
                    className="
                        grid gap-12 py-16
                        md:grid-cols-2
                        lg:grid-cols-[1.5fr_1fr_1.2fr_1fr]
                        lg:gap-10
                    "
                >
                    {/* Brand */}
                    <FooterBrand />

                    {/* Company */}
                    <FooterColumn title="Company" links={companyLinks} />

                    {/* Services */}
                    <FooterColumn title="Services" links={serviceLinks} />

                    {/* Useful links */}
                    <FooterColumn title="Useful Links" links={resourceLinks} />
                </div>

                {/* =====================================================
                    BOTTOM BAR
                ====================================================== */}
                <div
                    className="
                        border-t
                        border-slate-900/10
                        py-6
                        dark:border-white/10
                    "
                >
                    <div
                        className="
                            flex flex-col gap-4
                            text-sm
                            text-slate-500
                            dark:text-white/45
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <p>© {currentYear} TechCompany. All rights reserved.</p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link
                                to="/privacy"
                                className="
                                    transition
                                    hover:text-slate-900
                                    dark:hover:text-white
                                "
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="
                                    transition
                                    hover:text-slate-900
                                    dark:hover:text-white
                                "
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                to="/contact"
                                className="
                                    transition
                                    hover:text-slate-900
                                    dark:hover:text-white
                                "
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/*
|--------------------------------------------------------------------------
| Footer Brand
|--------------------------------------------------------------------------
*/

function FooterBrand() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Link to="/" className="inline-flex items-center gap-2">
                <span
                    className="
                        flex size-10 items-center justify-center
                        rounded-xl
                        bg-primary
                        text-lg font-bold
                        text-primary-foreground
                        shadow-lg shadow-primary/20
                    "
                >
                    T
                </span>

                <span className="text-xl font-bold tracking-tight">
                    Tech
                    <span className="text-primary">Company</span>
                </span>
            </Link>

            <p
                className="
                    mt-6 max-w-sm
                    text-sm leading-7
                    text-slate-600
                    dark:text-white/55
                "
            >
                We build scalable digital products, modern business platforms
                and intelligent technology solutions for ambitious
                organizations.
            </p>

            <div className="mt-8">
                <p
                    className="
                        text-sm font-medium
                        text-slate-800
                        dark:text-white/80
                    "
                >
                    Follow Us
                </p>

                <div className="mt-4 flex gap-2">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="
                                    flex size-9 items-center justify-center
                                    rounded-lg
                                    border
                                    border-slate-900/10
                                    bg-white
                                    text-slate-500
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-primary/40
                                    hover:bg-primary/5
                                    hover:text-primary

                                    dark:border-white/10
                                    dark:bg-white/[0.03]
                                    dark:text-white/60
                                    dark:hover:border-blue-400/40
                                    dark:hover:bg-blue-500/10
                                    dark:hover:text-blue-400
                                "
                            >
                                <Icon size={15} />
                            </a>
                        );
                    })}
                </div>
            </div>

            <a
                href="mailto:hello@techcompany.com"
                className="
                    mt-6 inline-flex items-center gap-2
                    text-sm
                    text-slate-500
                    transition hover:text-primary
                    dark:text-white/60
                "
            >
                <Mail size={16} />
                hello@techcompany.com
            </a>
        </motion.div>
    );
}

/*
|--------------------------------------------------------------------------
| Footer Column
|--------------------------------------------------------------------------
*/

function FooterColumn({ title, links }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h3
                className="
                    text-sm font-semibold
                    text-slate-900
                    dark:text-white
                "
            >
                {title}
            </h3>

            <div className="mt-5 space-y-3.5">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.path}
                        className="
                            group flex items-center gap-1
                            text-sm
                            text-slate-500
                            transition duration-200
                            hover:text-slate-900

                            dark:text-white/55
                            dark:hover:text-white
                        "
                    >
                        <span>{link.label}</span>

                        <ArrowUpRight
                            size={13}
                            className="
                                translate-x-[-3px]
                                opacity-0
                                transition-all duration-200
                                group-hover:translate-x-0
                                group-hover:opacity-100
                            "
                        />
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
