import Link from "next/link";
import ZackHeadTags from "../../layout/ZackHeadTags";

const NormcoreHomepage = () => {
  return (
    <>
      <ZackHeadTags pageTitle="Normcore Homepage" canonicalURL="https://zack.computer/normcore/" />
      <div className="text-lg space-y-2">
        <p>
          I’m a freelance engineer with over{" "}
          <Link href="/normcore/resume">10 years of experience</Link> making server, web, and iOS
          products.
        </p>
        <p>(I’ve also bartended, managed teams, and traveled around the world.)</p>
        <p>
          I’m currently based in London. If you’d like to work with me or just grab coffee and chat,{" "}
          <Link href="/normcore/contact">say hi</Link>.
        </p>
        <p>
          You&rsquo;re currently viewing the normcore version of my homepage - just plain HTML and
          CSS. If you want to go back to the appy, conversational version,{" "}
          <Link href="/">click here</Link>
        </p>
      </div>
    </>
  );
};

export default NormcoreHomepage;
