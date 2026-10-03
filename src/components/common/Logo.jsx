import { Link } from 'react-router';

export default function Logo() {
    return (
        <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                T
            </span>

            <span>
                Tech<span className="text-primary">Company</span>
            </span>
        </Link>
    );
}
