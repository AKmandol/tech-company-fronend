export default function SectionHeading({
    eyebrow,
    title,
    description,
}) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {eyebrow}
                </p>
            )}

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}
