import {
  FooterWrapper,
  LinkList,
  LinkColumn,
  LinkTitle,
  LinkItem,
  SocialIconsContainer,
} from "./FooterStyles";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>{" "}
          <LinkItem href="tel:9772030306"> +91 9772030306 </LinkItem>{" "}
        </LinkColumn>{" "}
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>{" "}
          <LinkItem href="mailto:narendrashekhawat1310@gmail.com">
            narendrashekhawat1310 @gmail.com{" "}
          </LinkItem>{" "}
        </LinkColumn>{" "}
      </LinkList>{" "}
      <SocialIconsContainer>
        {" "}
        {/* Add icons here later */}{" "}
      </SocialIconsContainer>{" "}
    </FooterWrapper>
  );
};

export default Footer;
