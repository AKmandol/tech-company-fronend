import { motion } from 'framer-motion';

import client1 from '@/assets/images/clients/p1.png';
import client2 from '@/assets/images/clients/p2.png';
import client3 from '@/assets/images/clients/p3.png';
import client4 from '@/assets/images/clients/p4.png';
import client5 from '@/assets/images/clients/p5.png';
import client6 from '@/assets/images/clients/p6.png';
import client7 from '@/assets/images/clients/p7.png';
import client8 from '@/assets/images/clients/p8.png';
import client9 from '@/assets/images/clients/p9.png';
import client10 from '@/assets/images/clients/p10.png';
import client11 from '@/assets/images/clients/p11.png';
import client12 from '@/assets/images/clients/p12.png';

const clients = [
    {
        name: 'Client One',
        logo: client1,
    },
    {
        name: 'Client Two',
        logo: client2,
    },
    {
        name: 'Client Three',
        logo: client3,
    },
    {
        name: 'Client Four',
        logo: client4,
    },
    {
        name: 'Client Five',
        logo: client5,
    },
    {
        name: 'Client Six',
        logo: client6,
    },
    {
        name: 'Client Seven',
        logo: client7,
    },
    {
        name: 'Client Eight',
        logo: client8,
    },
    {
        name: 'Client Nine',
        logo: client9,
    },
    {
        name: 'Client Ten',
        logo: client10,
    },
    {
        name: 'Client Eleven',
        logo: client11,
    },
    {
        name: 'Client Twelve',
        logo: client12,
    }
];

export default function ClientsCarousel() {
    // Duplicate the logos so the animation can loop continuously.
    const carouselItems = [...clients, ...clients];

    return (
        <section className="relative overflow-hidden">
            {/* Soft background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
                <div className="relative">
                    {/* Left fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />

                    {/* Right fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />

                    <div className="overflow-hidden">
                        <div className="clients-marquee flex w-max mt-6">
                            {carouselItems.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex h-24 w-40 shrink-0 items-center justify-center px-5 sm:h-28 sm:w-52 sm:px-8"
                                >
                                    <div className="group flex h-full w-full items-center justify-center rounded-xl border bg-muted/50 px-6 transition-all duration-300 hover:border-primary/100 hover:bg-primary/[0.06] hover:shadow-sm">
                                        <img
                                            src={client.logo}
                                            alt={`${client.name} logo`}
                                            loading="lazy"
                                            className="max-h-12 max-w-[135px] object-contain transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14 sm:max-w-[135px]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Small bottom message */}
                <p className="mt-8 text-center text-xs text-muted-foreground">
                    Building long-term partnerships through technology.
                </p>
            </div>
        </section>
    );
}
