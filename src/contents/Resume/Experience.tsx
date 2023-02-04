import Link from "next/link";
import DevIcons from "./DevIcons";

const ExperienceSection = () => {
  return (
    <div>
      <h2>
        My <span className="title-red">Focus</span>
      </h2>
      <p>
        I’m a full-time freelance senior engineer, helping teams realize their potential and
        complete their projects. If you have need for someone with my experience,{" "}
        <Link href="/contact">send me an email</Link>.
      </p>
      <p>
        Additionally, I’m working on building tools and code to improve the open-source community
        and the closed-source developer experience.
      </p>

      <h3>Programming Languages &amp; Tools</h3>
      <p>
        I focus on front-end web and iOS work. I&rsquo;m an expert in Swift, Typescript, and React.
        I also have extensive experience with AWS, Objective-C, HTML CSS, and really most ways you
        can build a webapp. (Except Ruby, sorry.)
      </p>
      <DevIcons />
    </div>
  );
};

export default ExperienceSection;
