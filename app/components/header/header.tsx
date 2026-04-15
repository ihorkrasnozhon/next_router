import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex gap-2'>
            <Link href="/">Main</Link>
            <Link href="../../pages/about">About</Link>
            <Link href="../../pages/gallery">Gallery</Link>
            <Link href="../../pages/register">Register</Link>
            <Link href="../../pages/counter">Counter</Link>
            <Link href="../../pages/amazon">Amazon</Link>
        </header>
    );
}
