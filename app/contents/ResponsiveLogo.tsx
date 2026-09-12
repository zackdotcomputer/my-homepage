import { Link } from "react-router";
import ZFileLogo from "./ZFileLogo";

export default function ResponsiveLogo() {
  return (
    <div className="pt-12">
      <Link to="/" className="site-logo inline-block rounded-xs" aria-label="Back to the start">
        <ZFileLogo />
      </Link>
    </div>
  );
}
