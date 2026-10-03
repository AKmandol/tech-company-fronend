import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function StorySection({
    eyebrow,
    title,
    description,
    image,
    imageAlt,
    reverse = false,
    link,
}) {
    return (
        <section className="py-20 sm:py-24">
            <div
                className={`mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 ${
                    reverse ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        x: reverse ? 30 : -30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    {eyebrow && (
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            {eyebrow}
                        </p>
                    )}

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {title}
                    </h2>

                    <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted-foreground">
                        {description.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {link && (
                        <a
                            href={link.href}
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                        >
                            {link.label}
                            <ArrowUpRight size={17} />
                        </a>
                    )}
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: reverse ? -30 : 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group"
                >
                    <div className="relative overflow-hidden rounded-2xl border bg-muted/30 p-2 shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                        <img
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            className="relative aspect-[4/3] w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
