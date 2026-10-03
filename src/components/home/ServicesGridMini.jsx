import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

import ProductImage from '@/assets/images/services/tech1.webp';
import DeveloperImage from '@/assets/images/services/tech2.png';
import AiImage from '@/assets/images/services/tech3.png';

const services = [
    {
        eyebrow: 'We build',
        title: 'PRODUCTS',
        color: '#257cee',
        image: ProductImage,
        points: [
            'Web and mobile apps from idea to launch',
            'Product design, prototyping, and UX research',
            'Scalable architecture ready for growth',
            'Secure, tested, and cloud-deployed releases',
            'Ongoing maintenance and feature updates',
        ],
    },
    {
        eyebrow: 'We augment',
        title: 'BEST DEVELOPERS',
        color: '#13a100',
        image: DeveloperImage,
        points: [
            'Dedicated offshore engineering teams',
            'Frontend, backend, mobile, and DevOps talent',
            'Rapid onboarding and agile delivery',
            'Flexible FTE and project-based scaling',
            'Continuous technical support',
        ],
    },
    {
        eyebrow: 'We provide',
        title: 'AI SOLUTIONS',
        color: '#cc6300',
        image: AiImage,
        points: [
            'Custom AI strategy and model integration',
            'Chatbots, copilots, and workflow automation',
            'Data pipelines and analytics dashboards',
            'LLM apps built on your own data',
            'Monitoring, evaluation, and safe rollout',
        ],
    },
];

function ServiceCard({ service, index }) {
    const { eyebrow, title, color, image, points } = service;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            tabIndex={0}
            className="group relative h-[440px] cursor-pointer overflow-hidden rounded-[20px]  bg-background outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
            {/* Image panel: fades away on hover / focus */}
            <div
                className="absolute inset-x-6 top-6 h-[290px] overflow-hidden p-1 transition-all duration-500 group-hover:scale-95 group-hover:opacity-0 group-focus-within:scale-95 group-focus-within:opacity-0 motion-reduce:transition-none">
                <div className="rounded-[20px] opacity-[.9]" style={{ backgroundColor: `${color}1A` }} >
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="p-5"
                    />
                </div>
            </div>

            {/* Text block: slides from bottom to top on hover / focus */}
            <div className="absolute inset-x-6 top-[318px] transition-all duration-500 ease-out group-hover:top-8 group-focus-within:top-8 motion-reduce:transition-none">
                <p
                    className="text-lg leading-tight my-2"
                    style={{ color }}
                >
                    {eyebrow}
                </p>
                <h3
                    className="text-2xl font-semibold uppercase leading-tight tracking-tight"
                    style={{ color }}
                >
                    {title}
                </h3>

                <ul className="mt-6 space-y-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:delay-150 group-focus-within:opacity-100">
                    {points.map((point) => (
                        <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-5 text-muted-foreground"
                        >
                            <Sparkle
                                size={12}
                                fill={color}
                                strokeWidth={0}
                                className="mt-1 shrink-0"
                                aria-hidden="true"
                            />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}

export default function ServicesGrid() {
    return (
        <section className="relative overflow-hidden py-4">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
