import React from "react";
import ContactContents from "../src/contents/ContactContents";
import ZackHeadTags from "../src/layout/ZackHeadTags";

const ContactPage = () => {
  return (
    <>
      <ZackHeadTags
        pageTitle="Contact Me"
        canonicalURL="https://zack.computer/contact"
      />
      <ContactContents />
    </>
  );
};

export default ContactPage;
