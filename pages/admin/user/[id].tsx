import Head from 'next/head' 
import { useRouter } from 'next/router'

export default function UserId() {
    const router = useRouter();

    console.log("router", router.query.id)
    const handleClick = () => {
        router.push('/login')
    }

    return (
        <>
            <Head>
                <title>User Detail</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>
            <h1> Admin - user page</h1>
            <button onClick={handleClick}>go homepage</button>
        </>
    )
}