import Link from 'next/link'
function About(props) {
    return (
        <div>
            <h1>about</h1>
            <Link href="/">
                <a>về trang chủ</a>
            </Link>
        </div>
    );
}

export default About;