import React from "react";
import ContactContents from "../contents/ContactContents";
import ZackHeadTags from "../layout/ZackHeadTags";

const ContactPage = () => {
  return (
    <>
      <ZackHeadTags pageTitle="Contact Me" canonicalURL="https://zack.computer/contact" />
      <ContactContents />
    </>
  );
};

export default ContactPage;
