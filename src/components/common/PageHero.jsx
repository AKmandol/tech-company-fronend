import { motion } from 'framer-motion';

export default function PageHero({
    eyebrow,
    title,
    description,
}) {
    return (
        <section className="border-b bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        {eyebrow}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
