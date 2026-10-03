import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 100, suffix: '+', label: 'Successful Projects' },
    { value: 98, suffix: '%', label: 'On-Time Delivery' },
    { value: 6, suffix: '', label: 'Continents Served' },
];

/** Counts from 0 to `to` the first time it scrolls into view. */
function CountUp({ to, suffix = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const controls = animate(0, to, {
            duration: 1.6,
            ease: 'easeOut',
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });

        return () => controls.stop();
    }, [inView, to]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

export default function Achievements() {
    return (
        <section className="relative overflow-hidden">
            {/* Soft backdrop built from your theme's primary color */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-background to-primary/20" />
            <div className="absolute -left-24 bottom-0 -z-10 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-24 top-0 -z-10 size-80 rounded-full bg-primary/25 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="grid items-center gap-4 rounded-[2rem] border border-border bg-background/60 p-4 shadow-xl shadow-primary/5 backdrop-blur-xl lg:grid-cols-[minmax(0,1fr)_repeat(4,minmax(0,1fr))] lg:gap-4 lg:p-4"
                >
                    {/* Script heading */}
                    <h2
                        className="px-4 py-2 text-center text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-left lg:text-[2.6rem]"
                        style={{
                            fontFamily:
                                "'Great Vibes', 'Brush Script MT', 'Segoe Script', cursive",
                        }}
                    >
                        Our Proud
                        <br className="hidden lg:block" />{' '}
                        <span className="lg:ml-8">Achievements</span>
                    </h2>

                    {/* Stat tiles */}
                    <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-4 lg:gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: 0.15 + index * 0.1,
                                }}
                                className="rounded-2xl bg-background/70 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-lg"
                            >
                                <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </div>

                                <div className="mt-1 text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
