import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm <span>Narendra Shekhawat</span>
        </SectionTitle>
        <SectionText>
          A dedicated Front-End developer with a strong passion for creating
          intuitive and visually appealing web solutions. Experience in building
          responsive, user friendly interfaces and developing scalable frontend
          architectures. Expertise in integrating APIs, optimizing performance
          and creating reusable components to enhance efficiency and
          maintainability.{" "}
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
