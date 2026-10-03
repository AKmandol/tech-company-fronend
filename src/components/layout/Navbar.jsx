import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
} from 'framer-motion';
import {
    ArrowUpRight,
    Briefcase,
    ChevronDown,
    Info,
    Menu,
    Users,
    X,
    ShieldCheck,
    FileText
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

import Logo from '@/components/common/Logo';
import ThemeToggle from '@/components/common/ThemeToggle';

const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

const companyLinks = [
    {
        name: 'About Us',
        path: '/about',
        icon: Info,
        description: 'Our story, mission and values',
    },
    {
        name: 'Team',
        path: '/team',
        icon: Users,
        description: 'Meet the people behind our work',
    },
    {
        name: 'Careers',
        path: '/careers',
        icon: Briefcase,
        description: 'Open roles and life at our company',
    },
    {
        name: 'Privacy Policy',
        path: '/privacy',
        icon: ShieldCheck,
        description: 'Our privacy practices and policies',
    },
    {
        name: 'Terms of Service',
        path: '/terms',
        icon: FileText,
        description: 'Our terms of service and agreements',
    },
];

const indicator = { type: 'spring', stiffness: 380, damping: 30 };

/* -------------------------------------------------------------------------- */
/*  Desktop link with a sliding active pill                                   */
/* -------------------------------------------------------------------------- */

function DesktopLink({ to, children }) {
    return (
        <NavLink
            to={to}
            end={to === '/'}
            className="group relative rounded-xl px-3.5 py-2 text-sm font-medium"
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <motion.span
                            layoutId="nav-active"
                            transition={indicator}
                            className="absolute inset-0 rounded-xl bg-primary/10"
                        />
                    )}
                    <span
                        className={`relative transition-colors ${
                            isActive
                                ? 'text-primary'
                                : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                    >
                        {children}
                    </span>
                </>
            )}
        </NavLink>
    );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
    const { pathname } = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

    const companyRef = useRef(null);

    const companyActive = companyLinks.some((link) =>
        pathname.startsWith(link.path),
    );

    // Reading progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    // Change the style once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close everything when the route changes
    useEffect(() => {
        setMobileOpen(false);
        setCompanyOpen(false);
        setMobileCompanyOpen(false);
    }, [pathname]);

    // Close on Escape and on outside click
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape') {
                setCompanyOpen(false);
                setMobileOpen(false);
            }
        };
        const onClick = (event) => {
            if (companyRef.current && !companyRef.current.contains(event.target)) {
                setCompanyOpen(false);
            }
        };

        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);

        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onClick);
        };
    }, []);

    // Lock page scroll behind the mobile menu
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
            <div
                className={[
                    'relative mx-auto max-w-7xl rounded-2xl border transition-all duration-300',
                    scrolled || mobileOpen
                        ? 'border-border bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl'
                        : 'border-transparent bg-background/40 backdrop-blur-md',
                ].join(' ')}
            >
                <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                    <Logo />

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        <DesktopLink to="/">Home</DesktopLink>

                        {/* Company dropdown */}
                        <div
                            ref={companyRef}
                            className="relative"
                            onMouseEnter={() => setCompanyOpen(true)}
                            onMouseLeave={() => setCompanyOpen(false)}
                        >
                            <button
                                type="button"
                                onClick={() => setCompanyOpen((open) => !open)}
                                aria-expanded={companyOpen}
                                aria-haspopup="menu"
                                className="group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium"
                            >
                                {companyActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        transition={indicator}
                                        className="absolute inset-0 rounded-xl bg-primary/10"
                                    />
                                )}

                                <span
                                    className={`relative flex items-center gap-1.5 transition-colors ${
                                        companyActive || companyOpen
                                            ? 'text-primary'
                                            : 'text-muted-foreground group-hover:text-foreground'
                                    }`}
                                >
                                    Company
                                    <ChevronDown
                                        size={15}
                                        className={`transition-transform duration-200 ${
                                            companyOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </span>
                            </button>

                            <AnimatePresence>
                                {companyOpen && (
                                    <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                                        <motion.div
                                            role="menu"
                                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.18 }}
                                            className="overflow-hidden rounded-2xl border bg-background p-2 shadow-2xl"
                                        >
                                            {companyLinks.map((link) => {
                                                const Icon = link.icon;

                                                return (
                                                    <NavLink
                                                        key={link.path}
                                                        to={link.path}
                                                        role="menuitem"
                                                        className={({ isActive }) =>
                                                            `group flex items-center gap-3 rounded-xl p-3 transition ${
                                                                isActive
                                                                    ? 'bg-primary/10'
                                                                    : 'hover:bg-muted'
                                                            }`
                                                        }
                                                    >
                                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                                            <Icon size={19} strokeWidth={1.7} />
                                                        </span>

                                                        <span className="min-w-0 flex-1">
                                                            <span className="block text-sm font-semibold">
                                                                {link.name}
                                                            </span>
                                                            <span className="block truncate text-xs text-muted-foreground">
                                                                {link.description}
                                                            </span>
                                                        </span>

                                                        <ArrowUpRight
                                                            size={16}
                                                            className="shrink-0 text-muted-foreground opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                                        />
                                                    </NavLink>
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {mainLinks.slice(1).map((link) => (
                            <DesktopLink key={link.path} to={link.path}>
                                {link.name}
                            </DesktopLink>
                        ))}
                    </nav>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <ThemeToggle />

                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:shadow-lg hover:shadow-primary/30"
                        >
                            <span className="relative">Let’s Talk</span>
                            <ArrowUpRight
                                size={16}
                                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        </Link>
                    </div>

                    {/* Mobile actions */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />

                        <button
                            type="button"
                            onClick={() => setMobileOpen((open) => !open)}
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                            className="relative inline-flex size-10 items-center justify-center rounded-xl border bg-background/60 transition hover:bg-muted"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={mobileOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Scroll progress */}
                <motion.span
                    style={{ scaleX }}
                    className="pointer-events-none absolute bottom-0 left-5 right-5 h-0.5 origin-left rounded-full bg-primary"
                />
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto mt-2 max-h-[calc(100vh-6rem)] max-w-7xl overflow-y-auto rounded-2xl border bg-background/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
                    >
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                                    isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-muted'
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        {/* Company accordion */}
                        <div className="mt-1">
                            <button
                                type="button"
                                onClick={() => setMobileCompanyOpen((open) => !open)}
                                aria-expanded={mobileCompanyOpen}
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-muted ${
                                    companyActive
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                Company
                                <ChevronDown
                                    size={17}
                                    className={`transition-transform duration-200 ${
                                        mobileCompanyOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {mobileCompanyOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="ml-4 space-y-1 border-l py-1 pl-3">
                                            {companyLinks.map((link) => {
                                                const Icon = link.icon;

                                                return (
                                                    <NavLink
                                                        key={link.path}
                                                        to={link.path}
                                                        className={({ isActive }) =>
                                                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                                                                isActive
                                                                    ? 'bg-primary/10 font-medium text-primary'
                                                                    : 'text-muted-foreground hover:bg-muted'
                                                            }`
                                                        }
                                                    >
                                                        <Icon size={17} />
                                                        {link.name}
                                                    </NavLink>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-1 space-y-1">
                            {mainLinks.slice(1).map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                                            isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-muted-foreground hover:bg-muted'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25"
                        >
                            Let’s Talk
                            <ArrowUpRight size={16} />
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
