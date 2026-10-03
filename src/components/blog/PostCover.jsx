/**
 * Shows the post's image if it has one, otherwise a generated cover
 * (tinted gradient, dot pattern and a large icon) from `color` and `icon`.
 */
export default function PostCover({ post, className = '' }) {
    const Icon = post.icon;

    if (post.image) {
        return (
            <img
                src={post.image}
                alt={post.title}
                className={`size-full object-cover ${className}`}
            />
        );
    }

    return (
        <div
            className={`relative flex size-full items-center justify-center overflow-hidden ${className}`}
            style={{
                backgroundImage: `linear-gradient(135deg, ${post.color}40, ${post.color}0f)`,
            }}
            role="img"
            aria-label={post.title}
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    color: post.color,
                    backgroundImage:
                        'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                }}
            />

            <div
                className="absolute -left-10 -top-10 size-48 rounded-full blur-3xl"
                style={{ backgroundColor: `${post.color}55` }}
            />

            <div
                className="relative flex size-20 items-center justify-center rounded-2xl border bg-background/80 shadow-xl backdrop-blur transition duration-500 group-hover:scale-110 group-hover:-rotate-3"
                style={{ color: post.color }}
            >
                <Icon size={38} strokeWidth={1.5} />
            </div>
        </div>
    );
}
