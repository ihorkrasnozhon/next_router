import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Link href="/">Main</Link>
            <Link href="../../pages/about">About</Link>
            <Link href="../../pages/gallery">Gallery</Link>
        </header>
    );
}
