import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ContactInfoBlock from "./ContactInfoBlock";
import ContactMapFormBlock from "./ContactMapFormBlock";

const Contact = () => {
  return (
    <SectionContainer id={"contact"} secName={"contact-sec"}>
      <SectionHead
        head={"contact us"}
        text={"We would Love To Help You Please feel free to get in touch using the form below. We'd love to hear your thoughts & answer any questions you may have!"
        }
      />
      <ContactInfoBlock />
      <ContactMapFormBlock />
    </SectionContainer>
  );
};

export default Contact;
