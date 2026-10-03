import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

import SectionHeading from "@/components/common/SectionHeading";
import ServicesGridMini from "@/components/home/ServicesGridMini";
import ServicesGrid from "@/components/home/ServicesGrid";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import ProjectCard from "@/components/home/ProjectCard";
import Achievements from "@/components/home/Achievements";

import titleImage from "@/assets/illustration.png";

import ecommerce1 from "@/assets/images/projects/ecom1.avif";
import ecommerce2 from "@/assets/images/projects/ecom2.jpg";
import ecommerce3 from "@/assets/images/projects/ecom3.avif";

import crm1 from "@/assets/images/projects/crm1.webp";
import crm2 from "@/assets/images/projects/crm2.avif";
import crm3 from "@/assets/images/projects/crm3.webp";

import booking1 from "@/assets/images/projects/tour1.avif";
import booking2 from "@/assets/images/projects/tour3.webp";
import booking3 from "@/assets/images/projects/tour2.avif";

const services = [
    {
        title: "Web Development",
        description:
            "Modern, scalable web applications built around your business goals.",
    },
    {
        title: "Mobile Applications",
        description:
            "Reliable mobile experiences designed for performance and usability.",
    },
    {
        title: "UI/UX Design",
        description:
            "Clean and intuitive interfaces that make complex products simple.",
    },
];

const projects = [
    {
        slug: "e-commerce-platform",
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce platform with product management, order workflows, customer management and payment integration.",
        technologies: ["Laravel", "Vue.js", "MySQL", "REST API"],
        images: [ecommerce1, ecommerce2, ecommerce3],
    },

    {
        slug: "crm-platform",
        title: "CRM Platform",
        description:
            "A business-focused CRM platform designed to manage customers, workflows, communication and reporting.",
        technologies: ["Laravel", "AdonisJS", "Vue.js", "PostgreSQL"],
        images: [crm1, crm2, crm3],
    },

    {
        slug: "booking-platform",
        title: "Booking Platform",
        description:
            "A modern booking platform designed to streamline availability, reservations and customer management.",
        technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
        images: [booking1, booking2, booking3],
    },
];

export default function Home() {
    return (
        <>
            {/* hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_35%)]" />

                <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex rounded-full border bg-background px-4 py-2 text-sm font-medium">
                            Digital products. Built for growth.
                        </span>

                        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            We build
                            <span className="block text-primary">
                                technology
                            </span>
                            that moves business forward.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                            We help businesses turn ideas into powerful digital
                            products through design, development and technology.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
                            >
                                Start a Project
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/projects"
                                className="inline-flex items-center rounded-xl border px-6 py-3.5 font-semibold transition hover:bg-muted"
                            >
                                View Projects
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={17}
                                    className="text-primary"
                                />
                                Scalable solutions
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={17}
                                    className="text-primary"
                                />
                                Modern technology
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <img
                            src={titleImage}
                            alt="Illustration of a person working on a laptop"
                            className="mx-auto max-w-full p-8"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services overview*/}
            <section className="py-12 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Save Money. Save Time. Save Energy"
                        title="AI-Powered Technology"
                        description="Our AI-first developers are prepared to relieve your worries. so that your group may concentrate on what truly makes a difference."
                    />

                    <ServicesGridMini />
                </div>
            </section>

            {/* Services */}
            <section className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Technology services built around your needs"
                        description="From product development to cloud infrastructure, we help businesses build and improve digital experiences."
                    />

                    <ServicesGrid />
                </div>
            </section>

            {/* Achievements */}
            <section className="py-12 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <SectionHeading
                        eyebrow="What we do"
                        title="Technology services built around your needs"
                        description="From product development to cloud infrastructure, we help businesses build and improve digital experiences."
                    /> */}

                    <Achievements />
                </div>
            </section>

            {/* Projets */}
            <section className="relative overflow-hidden py-20 sm:py-24">
                {/* Background decoration */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-20
                        h-72
                        w-72
                        -translate-x-1/2
                        rounded-full
                        bg-primary/10
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <SectionHeading
                        eyebrow="Selected Work"
                        title="Projects that solve real business problems"
                        description="A selection of digital products and platforms we've designed and built for growing businesses."
                    />

                    {/* Project cards */}
                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>

                    {/* More projects */}
                    <div className="mt-10 text-center">
                        <Link
                            to="/projects"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                bg-background
                                px-5 py-3
                                text-sm
                                font-semibold
                                transition-all
                                duration-300
                                hover:border-primary
                                hover:bg-primary
                                hover:text-primary-foreground
                            "
                        >
                            Explore All Projects
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-12 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Our Clients"
                        title="Trusted by businesses"
                        description="Proud to work with organizations building ambitious products and services."
                    />

                    <ClientsCarousel />
                </div>
            </section>

        </>
    );
}
