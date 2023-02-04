import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { PropsWithChildren } from "react";
import SectionBreak from "../../contents/SectionBreak";

const NavLink = ({
  href,
  children,
  selected
}: PropsWithChildren<{ href: string; selected: boolean }>) => {
  const classes = [
    "dashlink mt-2 mx-4 font-title hover:text-blue-800",
    selected ? "border-solid font-semibold opacity-100" : "opacity-50"
  ];

  return (
    <Link href={href}>
      <a className={classes.join(" ")}>
        <li className="px-1">{children}</li>
      </a>
    </Link>
  );
};

const Nav = () => {
  const router = useRouter();

  const resumeSelected = router.pathname.endsWith("/resume");
  const contactSelected = router.pathname.endsWith("/contact");
  const homeSelected = router.pathname === "/normcore";

  return (
    <nav>
      <ul className="flex flex-row">
        <NavLink href="/normcore/" selected={homeSelected}>
          Home
        </NavLink>
        <NavLink href="/normcore/resume" selected={resumeSelected}>
          My Work
        </NavLink>
        <NavLink href="/normcore/contact" selected={contactSelected}>
          Contact
        </NavLink>
        <NavLink href="/" selected={false}>
          Back to the fancy version &rarr;
        </NavLink>
      </ul>
      <SectionBreak />
    </nav>
  );
};

export default Nav;
