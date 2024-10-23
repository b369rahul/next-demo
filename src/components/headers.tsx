import Link from "next/link"
import { useRouter } from "next/router"

export const Header = ()=>{
    const activeClass = "font-bold"
    const {pathname} = useRouter();

    return (
        <nav className="flex flex-row space-x-2 pl-4 mt-2 border-white border-y-[1px] py-1 ">

            <Link href={"/"} className={pathname==="/"? activeClass : ""}>
                Home
            </Link>
            <Link href={"/following"} className={pathname==="/following"? activeClass : ""}>
                Following
            </Link>
            <Link href={"/contact-us"} className={pathname==="/contact-us"? activeClass : ""}>
                Contact Us
            </Link>

        </nav>
    )
}