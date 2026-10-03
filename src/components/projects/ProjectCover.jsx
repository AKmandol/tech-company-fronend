/**
 * Shows the project's real image if it has one, otherwise a generated cover
 * (tinted gradient, dot pattern and a small app-window mockup) built from
 * the project's `color` and `icon`.
 */
export default function ProjectCover({ project, className = '' }) {
    const Icon = project.icon;

    if (project.image) {
        return (
            <img
                src={project.image}
                alt={project.title}
                className={`size-full object-cover ${className}`}
            />
        );
    }

    return (
        <div
            className={`relative flex size-full items-center justify-center overflow-hidden ${className}`}
            style={{
                backgroundImage: `linear-gradient(135deg, ${project.color}40, ${project.color}0f)`,
            }}
            role="img"
            aria-label={project.title}
        >
            {/* dot pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    color: project.color,
                    backgroundImage:
                        'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                }}
            />

            {/* soft glow */}
            <div
                className="absolute -right-10 -top-10 size-48 rounded-full blur-3xl"
                style={{ backgroundColor: `${project.color}55` }}
            />

            {/* app window mockup */}
            <div className="relative w-3/5 max-w-[320px] rounded-xl border bg-background/85 p-3 shadow-2xl backdrop-blur transition duration-500 group-hover:scale-105">
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                </div>

                <div className="mt-3 flex items-center gap-3">
                    <div
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                        style={{
                            backgroundColor: `${project.color}22`,
                            color: project.color,
                        }}
                    >
                        <Icon size={20} />
                    </div>

                    <div className="flex-1 space-y-1.5">
                        <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
                        <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
                    </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                    {[0.9, 0.6, 0.75].map((height, index) => (
                        <div
                            key={index}
                            className="flex h-12 items-end rounded-md bg-muted/70 p-1.5"
                        >
                            <div
                                className="w-full rounded-sm"
                                style={{
                                    height: `${height * 100}%`,
                                    backgroundColor: project.color,
                                    opacity: 0.75,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
