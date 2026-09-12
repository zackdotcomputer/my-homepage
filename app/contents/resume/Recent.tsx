import ExternalLink from "./ExternalLink";
import ResumeSection from "./ResumeSection";

export default function RecentSection() {
  return (
    <div>
      <h2>
        <span className="title-red">Recent</span> Work
      </h2>
      <ResumeSection title="Marker" timerange="2026 - Present">
        <p>
          In 2026 I joined <ExternalLink href="https://marker.page">Marker</ExternalLink> as a
          Product Engineer, helping to build the future of human writing and creativity in the AI
          era.
        </p>
      </ResumeSection>
      <ResumeSection title="Stealth Startup" timerange="2025 - 2026">
        <p>
          Before Marker, I worked on a new stealth startup exploring the place and event
          recommendation space in the age of AI. That business never launched.
        </p>
      </ResumeSection>
      <ResumeSection title="Addition Wealth" timerange="2021 - 2025">
        <p>
          I was initially brought on as a freelance advisor to help shape the initial build for{" "}
          <ExternalLink href="https://www.additionwealth.com">Addition Wealth</ExternalLink>
          &rsquo;s first prototype.
        </p>
        <p>
          I helped craft our product process, shape the features we chose to develop, and lead a
          team of contractor engineers during the initial product build. I then stayed on to help
          them grow the product and team into a stable company, working on a long-term contract as
          the founding architect and lead engineer. In 2025 I transitioned to an advisor position
          and no longer actively work there.
        </p>
      </ResumeSection>
    </div>
  );
}
