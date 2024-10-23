import Link from "next/link";

export default function ErrorPage(){
    return(
        <div className="w-full text-center space-y-2">
            <div className="text-lg ">
                You are Lost
            </div>
            <button className="bg-slate-500 p-1 rounded-md ">
                <Link href="/">
                    Return to Home
                </Link>
            </button>
        </div>
    )
}