import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    BrainCircuit,
    Boxes,
    Cloud,
    Code2,
    Database,
    Palette,
    ShieldCheck,
    Smartphone,
} from 'lucide-react';
import { Link } from 'react-router';

const services = [
    {
        title: 'Artificial Intelligence',
        description:
            'We design and deploy AI strategies using cutting-edge models to scale with your business.',
        icon: BrainCircuit,
    },
    {
        title: 'UI/UX',
        description:
            'We craft intuitive digital experiences that combine user empathy with strategic design.',
        icon: Palette,
    },
    {
        title: 'Web Development',
        description:
            'Scalable, responsive, and secure websites built for growth and seamless user experience.',
        icon: Code2,
    },
    {
        title: 'Mobile App Development',
        description:
            'High-performance native and cross-platform apps built to engage and scale in the real world.',
        icon: Smartphone,
    },
    {
        title: 'Web3.0 Development',
        description:
            'We decentralize your tech platforms or services with advanced and secure solutions.',
        icon: Boxes,
    },
    {
        title: 'Data Science',
        description:
            'Turn raw data into insights with machine learning, analytics, and visual dashboards.',
        icon: Database,
    },
    {
        title: 'Digital Marketing',
        description:
            'Improves a websites organic visibility and ranking on search engines like Google.',
        icon: Cloud,
    },
    {
        title: 'Cybersecurity',
        description:
            'Protect your online presence from increasing digital threats with robust protection.',
        icon: ShieldCheck,
    },
];

export default function ServicesGrid() {
    return (
        <section className="relative overflow-hidden py-4">

            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                                className={[
                                    'group relative',
                                    'border-b border-r',
                                    'bg-background',
                                    'transition-colors duration-300',
                                    'hover:bg-primary/[0.025]',
                                    'sm:[&:nth-child(2n)]:border-r-0',
                                    'lg:[&:nth-child(2n)]:border-r',
                                    'lg:[&:nth-child(4n)]:border-r-0',
                                    'lg:[&:nth-child(-n+4)]:border-b',
                                ].join(' ')}
                            >
                                {/* Icon area */}
                                <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden  from-primary/[0.07] via-background to-primary/[0.03]">
                                    {/* Decorative circles */}
                                    <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

                                    <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-xl transition duration-500 group-hover:bg-primary/[0.16]" />

                                    {/* Icon */}
                                    <div className="relative flex size-28 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-xl">
                                        <Icon
                                            size={58}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Floating arrow */}
                                    <div className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="min-h-[175px] p-5 sm:p-6">
                                    <h3 className="text-base font-bold sm:text-lg">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-6 text-muted-foreground sm:text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 text-center"
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-xl border bg-background px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:gap-3"
                    >
                        Explore All Services
                        <ArrowUpRight size={17} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
