import { AnimatePresence, motion } from "framer-motion";
import {
    CheckCircle2,
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Plus,
    Send,
    Sparkle,
} from "lucide-react";
import { useState } from "react";
import { useSearchParams } from 'react-router';

/* -------------------------------------------------------------------------- */
/*  Data (edit these)                                                         */
/* -------------------------------------------------------------------------- */

const channels = [
    {
        icon: Mail,
        label: "Email us",
        value: "hello@yourcompany.com",
        href: "mailto:hello@yourcompany.com",
    },
    {
        icon: Phone,
        label: "Call us",
        value: "+880 1234 567890",
        href: "tel:+8801234567890",
    },
    {
        icon: Clock,
        label: "Working hours",
        value: "Sun – Thu, 9:00 – 18:00",
    },
];

const steps = [
    ["Send your message", "Tell us a little about what you need."],
    ["We review it", "The right person on our team reads every inquiry."],
    ["We get back to you", "Expect a reply within one business day."],
];

const offices = [
    {
        flag: "🇧🇩",
        country: "Bangladesh",
        title: "Head Office - Dhaka",
        address: "House 00, Road 00, Sample Area, Dhaka 1200",
        email: "dhaka@yourcompany.com",
        phone: "+880 1234 567890",
        mapImage: "", // optional: '/maps/dhaka.png'
    },
    {
        flag: "🇸🇬",
        country: "Singapore",
        title: "Regional Office - Singapore",
        address: "00 Sample Street, #00-00, Singapore 000000",
        email: "sg@yourcompany.com",
        phone: "+65 0000 0000",
        mapImage: "",
    },
];

const faqs = [
    {
        q: "How can I get in touch with your team?",
        a: "Use the contact form on this page, send us an email, or call the number listed above. The form is the fastest way because it reaches the right person directly.",
    },
    {
        q: "What should I include in my message?",
        a: "A short description of your idea or problem, your rough timeline and any budget range you have in mind. Links or documents help too, but they are not required.",
    },
    {
        q: "How soon will you reply?",
        a: "We reply to most inquiries within one business day. If your request is urgent, mention it in your message and call us.",
    },
    {
        q: "Can I book a project consultation here?",
        a: 'Yes. Choose "consultation" in your message and share a few time slots that work for you. We will confirm one and send a calendar invite.',
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely. Our team works across time zones and we plan meeting hours around yours.",
    },
];

/* -------------------------------------------------------------------------- */
/*  Form helpers                                                              */
/* -------------------------------------------------------------------------- */

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
};

const REQUIRED = "Please complete this required field.";

function validate(values) {
    const errors = {};

    if (!values.firstName.trim()) errors.firstName = REQUIRED;
    if (!values.lastName.trim()) errors.lastName = REQUIRED;

    if (!values.email.trim()) errors.email = REQUIRED;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
        errors.email = "Please enter a valid email address.";

    if (!values.phone.trim()) errors.phone = REQUIRED;
    else if (values.phone.replace(/\D/g, "").length < 6)
        errors.phone = "Please enter a valid phone number.";

    if (!values.consent) errors.consent = "Please accept to continue.";

    return errors;
}

const inputBase =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({ label, required, error, className = "", children }) {
    return (
        <div className={className}>
            <label className="mb-2 block text-sm font-medium">
                {label}
                {required && <span className="text-primary">*</span>}
            </label>
            {children}
            {error && (
                <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Contact form                                                              */
/* -------------------------------------------------------------------------- */

function ContactForm() {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    const errors = validate(values);
    const show = (name) => (touched[name] ? errors[name] : undefined);

    const set = (name) => (event) => {
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const blur = (name) => () =>
        setTouched((prev) => ({ ...prev, [name]: true }));

    const invalid = (name) =>
        show(name) ? "border-destructive focus:border-destructive" : "";

    async function handleSubmit(event) {
        event.preventDefault();

        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            consent: true,
        });

        if (Object.keys(errors).length) {
            return;
        }

        setStatus("sending");

        try {
            const requestType = values.message.toLowerCase().includes("consultation") ? "Consultation" : "General Inquiry";
            const submission = {
                name: `${values.firstName.trim()} ${values.lastName.trim()}`,
                email: values.email.trim(),
                phone: values.phone.trim(),
                message: values.message.trim(),
                request_type: requestType,
            };

            await fetch("https://script.google.com/macros/s/AKfycbzShsWFVo3FltWRJVWs9OKXko7bFKSo491gOpriIZX7EFunVc2--ZdOpUsIOljaz0zMqg/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(submission),
            });

            setStatus("sent");
            setValues(initialValues);
            setTouched({});
        } catch (error) {
            console.error(error);
            setStatus("idle");

            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="relative overflow-hidden rounded-3xl border bg-muted/40 p-6 shadow-xl sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl" />

            <AnimatePresence mode="wait">
                {status === "sent" ? (
                    <motion.div
                        key="sent"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <CheckCircle2 size={34} />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold">
                            Message sent!
                        </h3>
                        <p className="mt-2 max-w-sm text-muted-foreground">
                            Thanks for reaching out. We will get back to you
                            within one business day.
                        </p>
                        <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="mt-6 text-sm font-semibold text-primary hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        noValidate
                        className="relative"
                    >
                        <h2 className="text-2xl font-bold">
                            Let’s have a chat
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Fields marked * are required.
                        </p>

                        <div className="mt-7 grid gap-5 sm:grid-cols-2">
                            <Field
                                label="First name"
                                required
                                error={show("firstName")}
                            >
                                <input
                                    value={values.firstName}
                                    onChange={set("firstName")}
                                    onBlur={blur("firstName")}
                                    autoComplete="given-name"
                                    className={`${inputBase} ${invalid("firstName")}`}
                                />
                            </Field>

                            <Field
                                label="Last name"
                                required
                                error={show("lastName")}
                            >
                                <input
                                    value={values.lastName}
                                    onChange={set("lastName")}
                                    onBlur={blur("lastName")}
                                    autoComplete="family-name"
                                    className={`${inputBase} ${invalid("lastName")}`}
                                />
                            </Field>

                            <Field label="Email" required error={show("email")}>
                                <input
                                    type="email"
                                    value={values.email}
                                    onChange={set("email")}
                                    onBlur={blur("email")}
                                    autoComplete="email"
                                    className={`${inputBase} ${invalid("email")}`}
                                />
                            </Field>

                            <Field
                                label="Phone number"
                                required
                                error={show("phone")}
                            >
                                <input
                                    type="tel"
                                    value={values.phone}
                                    onChange={set("phone")}
                                    onBlur={blur("phone")}
                                    autoComplete="tel"
                                    className={`${inputBase} ${invalid("phone")}`}
                                />
                            </Field>

                            <Field label="Message" className="sm:col-span-2">
                                <textarea
                                    rows={5}
                                    value={values.message}
                                    onChange={set("message")}
                                    placeholder="Tell us about your project..."
                                    className={`${inputBase} resize-y`}
                                />
                            </Field>
                        </div>

                        <div className="mt-5">
                            <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                                <input
                                    type="checkbox"
                                    checked={values.consent}
                                    onChange={set("consent")}
                                    onBlur={blur("consent")}
                                    className="mt-0.5 size-4 shrink-0 rounded border accent-[var(--primary)]"
                                />
                                <span>
                                    I agree that my information may be processed
                                    in accordance with the{" "}
                                    <a
                                        href="/privacy"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        privacy statement
                                    </a>
                                    .
                                </span>
                            </label>
                            {show("consent") && (
                                <p
                                    className="mt-1.5 text-xs text-destructive"
                                    role="alert"
                                >
                                    {errors.consent}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Submit"}
                            <Send size={17} />
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Office card                                                               */
/* -------------------------------------------------------------------------- */

function MapTile({ image, title }) {
    if (image) {
        return (
            <img
                src={image}
                alt={`Map of ${title}`}
                className="size-full object-cover"
            />
        );
    }

    // Stylised placeholder map that follows the theme colors.
    return (
        <div className="relative size-full overflow-hidden bg-primary/10">
            <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 size-full text-primary/25"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M-10 60 C 50 40, 90 90, 210 70" />
                    <path d="M-10 140 C 60 120, 110 170, 210 150" />
                    <path d="M40 -10 C 60 60, 30 120, 70 210" />
                    <path d="M130 -10 C 110 50, 160 110, 140 210" />
                    <path d="M-10 100 L 210 110" strokeWidth="1" />
                    <path d="M100 -10 L 95 210" strokeWidth="1" />
                </g>
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                <span className="relative flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <MapPin size={20} />
                </span>
            </div>
        </div>
    );
}

function OfficeCard({ office, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group flex flex-col gap-5 rounded-2xl border bg-card p-4 text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:flex-row sm:p-5"
        >
            <div className="h-44 shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-44">
                <MapTile image={office.mapImage} title={office.title} />
            </div>

            <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm">
                    <span aria-hidden="true">{office.flag}</span>
                    {office.country}
                </span>

                <h3 className="mt-3 text-xl font-bold">{office.title}</h3>

                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                        <MapPin
                            size={17}
                            className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{office.address}</span>
                    </li>
                    <li className="flex gap-3">
                        <Mail size={17} className="shrink-0 text-primary" />
                        <a
                            href={`mailto:${office.email}`}
                            className="hover:text-foreground"
                        >
                            {office.email}
                        </a>
                    </li>
                    <li className="flex gap-3">
                        <Phone size={17} className="shrink-0 text-primary" />
                        <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="hover:text-foreground"
                        >
                            {office.phone}
                        </a>
                    </li>
                </ul>
            </div>
        </motion.article>
    );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

function FaqItem({ item, open, onToggle }) {
    return (
        <div
            className={[
                "rounded-2xl border bg-card text-card-foreground transition duration-300",
                open
                    ? "border-primary/40 shadow-lg"
                    : "hover:border-primary/30",
            ].join(" ")}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-5 py-5 text-left"
            >
                <Sparkle
                    size={20}
                    fill="currentColor"
                    strokeWidth={0}
                    className="shrink-0 text-primary"
                />
                <span className="flex-1 font-semibold">{item.q}</span>
                <Plus
                    size={20}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        open ? "rotate-45 text-primary" : ""
                    }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-6 text-muted-foreground">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Contact() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                            <MessageSquare size={15} />
                            Contact us
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Let’s build something
                            <span className="text-primary">
                                {" "}
                                great together.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Have a project, a question or just an idea? Send us
                            a message and a real person will get back to you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Info + form */}
            <section className="py-16 sm:py-20 bg-muted/30">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Talk to a{" "}
                            <span className="text-primary">real person.</span>
                        </h2>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            Pick the way that suits you best. We are happy to
                            start with a quick email or a longer call.
                        </p>

                        <div className="mt-8 space-y-3">
                            {channels.map((channel) => {
                                const Icon = channel.icon;
                                const Wrapper = channel.href ? "a" : "div";

                                return (
                                    <Wrapper
                                        key={channel.label}
                                        href={channel.href}
                                        className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition duration-300 hover:border-primary/40 hover:shadow-lg"
                                    >
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon size={22} strokeWidth={1.6} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                                {channel.label}
                                            </p>
                                            <p className="font-semibold">
                                                {channel.value}
                                            </p>
                                        </div>
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {/* What happens next */}
                        <div className="mt-10">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                What happens next
                            </h3>

                            <ol className="mt-5 space-y-5 border-l pl-6">
                                {steps.map(([title, text], index) => (
                                    <li key={title} className="relative">
                                        <span className="absolute -left-[2.15rem] flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                            {index + 1}
                                        </span>
                                        <p className="font-semibold">{title}</p>
                                        <p className="mt-0.5 text-sm text-muted-foreground">
                                            {text}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>

            {/* Offices */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Visit us
                    </p>
                    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                        Our office addresses
                    </h2>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        {offices.map((office, index) => (
                            <OfficeCard
                                key={office.title}
                                office={office}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 sm:py-24 bg-muted/30">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8">
                    <div>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Frequently
                            <br />
                            Asked
                            <br />
                            <span className="text-primary">Questions</span>
                        </h2>

                        <p className="mt-5 max-w-xs text-muted-foreground">
                            Can’t find what you’re looking for? Send us a
                            message above and we’ll help.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <FaqItem
                                key={item.q}
                                item={item}
                                open={openFaq === index}
                                onToggle={() =>
                                    setOpenFaq(openFaq === index ? -1 : index)
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
