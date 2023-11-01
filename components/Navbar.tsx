import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"


const Navbar = () => {
  return (
    <nav className="  padding-container   relative z-30 py-5  bg-blue-70  ">

      <div className=" flexBetween max-container ">
        <Link href={"/"} >
          <p className="text-2xl font-semibold text-slate-100">

            Férias<span className="text-yellow-50">Indo</span>.
          </p>

        </Link>
        <ul className="hidden h-full gap-12 lg:flex text-yellow-50">

          {NAV_LINKS.map(link => (
            <Link href={link.href} key={link.key} className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold ">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button icon="user.svg" type="button" title="Entrar" variant="btn_dark_yellow" />
        </div>
      </div>

      <Image src={"/menu.svg"} alt="Menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />


    </nav>
  )
}

export default Navbar