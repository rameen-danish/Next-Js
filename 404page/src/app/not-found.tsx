import Link from "next/link";

export default function NotFound(){
    return(
        <div className="heading">
            <h1>This Page is NotFound</h1>
            <Link href="/">Go to Home Page</Link>
        </div>
    )
}