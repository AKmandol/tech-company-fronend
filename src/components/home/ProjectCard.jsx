import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router';

export default function ProjectCard({ project }) {
    const carouselRef = useRef(null);

    const [activeImage, setActiveImage] = useState(0);

    const scrollToImage = (index) => {
        const container = carouselRef.current;

        if (!container) {
            return;
        }

        const width = container.clientWidth;

        container.scrollTo({
            left: width * index,
            behavior: 'smooth',
        });

        setActiveImage(index);
    };

    const handleScroll = () => {
        const container = carouselRef.current;

        if (!container) {
            return;
        }

        const width = container.clientWidth;

        if (!width) {
            return;
        }

        const index = Math.round(
            container.scrollLeft / width
        );

        setActiveImage(index);
    };

    const previousImage = () => {
        const nextIndex =
            activeImage === 0
                ? project.images.length - 1
                : activeImage - 1;

        scrollToImage(nextIndex);
    };

    const nextImage = () => {
        const nextIndex =
            activeImage === project.images.length - 1
                ? 0
                : activeImage + 1;

        scrollToImage(nextIndex);
    };

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.5,
            }}
            className="
                group overflow-hidden rounded-2xl
                border
                bg-background
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-primary/5
            "
        >
            {/* =====================================================
                IMAGE CAROUSEL
            ====================================================== */}
            <div className="relative overflow-hidden">
                <div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    className="
                        project-carousel
                        flex
                        overflow-x-auto
                        scroll-smooth
                        snap-x snap-mandatory
                        overflow-x-hidden
                    "
                >
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="
                                w-full shrink-0
                                snap-center
                                overflow-hidden
                            "
                        >
                            <img
                                src={image}
                                alt={`${project.title} - image ${index + 1}`}
                                loading="lazy"
                                className="
                                    aspect-[16/10]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-[1.02]
                                "
                            />
                        </div>
                    ))}
                </div>

                {/* Dark image overlay */}
                <div className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/35
                    via-transparent
                    to-transparent
                    overflow-x-hidden
                    opacity-0
                " />

                {/* Image counter */}
                <div className="
                    absolute
                    left-4 top-4
                    rounded-full
                    border border-white/20
                    bg-black/30
                    px-3 py-1
                    text-xs font-medium
                    text-white
                    backdrop-blur-md
                ">
                    {activeImage + 1} / {project.images.length}
                </div>

                {/* Previous */}
                {project.images.length > 1 && (
                    <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous project image"
                        className="
                            absolute
                            left-3 top-1/2
                            flex size-9
                            -translate-y-1/2
                            items-center justify-center
                            rounded-full
                            border border-white/20
                            bg-black/35
                            text-white
                            opacity-100
                            backdrop-blur-md
                            transition-all duration-300

                            sm:opacity-0
                            sm:group-hover:opacity-100

                            hover:bg-black/55
                        "
                    >
                        <ChevronLeft size={18} />
                    </button>
                )}

                {/* Next */}
                {project.images.length > 1 && (
                    <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next project image"
                        className="
                            absolute
                            right-3 top-1/2
                            flex size-9
                            -translate-y-1/2
                            items-center justify-center
                            rounded-full
                            border border-white/20
                            bg-black/35
                            text-white
                            opacity-100
                            backdrop-blur-md
                            transition-all duration-300

                            sm:opacity-0
                            sm:group-hover:opacity-100

                            hover:bg-black/55
                        "
                    >
                        <ChevronRight size={18} />
                    </button>
                )}

                {/* Dots */}
                {project.images.length > 1 && (
                    <div className="
                        absolute
                        bottom-4 left-1/2
                        flex
                        -translate-x-1/2
                        items-center
                        gap-1.5
                        rounded-full
                        border border-white/10
                        bg-black/25
                        px-2.5 py-1.5
                        backdrop-blur-md
                    ">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() =>
                                    scrollToImage(index)
                                }
                                aria-label={`Go to image ${index + 1}`}
                                className={`
                                    rounded-full
                                    transition-all duration-300

                                    ${
                                        activeImage === index
                                            ? 'h-1.5 w-5 bg-white'
                                            : 'size-1.5 bg-white/50 hover:bg-white/80'
                                    }
                                `}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="p-5 sm:p-6">
                {/* Technology pills */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-full
                                border
                                bg-muted/50
                                px-2.5 py-1
                                text-[11px]
                                font-medium
                                text-muted-foreground
                                transition-colors
                                group-hover:border-primary/20
                                group-hover:text-foreground
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Project title */}
                <h3 className="
                    mt-4
                    text-xl
                    font-bold
                    tracking-tight
                ">
                    {project.title}
                </h3>

                {/* Short description */}
                {project.description && (
                    <p className="
                        mt-2
                        line-clamp-2
                        text-sm
                        leading-6
                        text-muted-foreground
                    ">
                        {project.description}
                    </p>
                )}

                {/* View project */}
                <Link
                    to={`/projects/${project.slug}`}
                    className="
                        group/link
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-primary
                    "
                >
                    View Project

                    <ArrowRight
                        size={16}
                        className="
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                        "
                    />
                </Link>
            </div>
        </motion.article>
    );
}
