import { NavLink, Outlet } from "react-router";
import ResponsiveLogo from "~/contents/ResponsiveLogo";
import SectionBreak from "~/contents/SectionBreak";
import WelcomeIntro from "~/contents/WelcomeIntro";

function NavItem({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) {
  return (
    <li className="px-1">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          [
            "mx-4 mt-2 dashlink font-title hover:text-blue-800 dark:hover:text-blue-300",
            isActive ? "border-solid font-semibold opacity-100" : "opacity-50"
          ].join(" ")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

function Nav() {
  return (
    <nav className="pt-2" aria-label="Site">
      <ul className="flex flex-row flex-wrap">
        <NavItem to="/normcore" end>
          Home
        </NavItem>
        <NavItem to="/normcore/resume">My Work</NavItem>
        <NavItem to="/normcore/contact">Contact</NavItem>
        <li className="px-1">
          <a
            href="/"
            className="mx-4 mt-2 dashlink font-title opacity-50 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Back to the fancy version &rarr;
          </a>
        </li>
      </ul>
      <SectionBreak />
    </nav>
  );
}

export default function NormcoreLayout() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center px-4 sm:px-6">
      <header>
        <ResponsiveLogo />
        <WelcomeIntro />
        <Nav />
      </header>
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
}
