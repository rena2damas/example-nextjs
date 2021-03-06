import Link from 'next/link'

const Navbar = () => {

    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;
