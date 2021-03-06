import styled from "styled-components";
import * as ButtonLink from "components/buttonLink/styles";
import LogoPhone from "assets/icons/phone-icon.svg";
import LogoQr from "assets/icons/qr-scan-logo.svg";
import LogoCovid from "assets/icons/covid-logo.svg";

const StyledCard = styled.div`
  height: 350px;
  width: 310px;
  border-radius: 2em;
  box-shadow: 4px 10px 40px #e0ddf7;
  text-align: center;
  margin: 0 24px;
  background: #ffffff;
  justify-content: center;

  ${ButtonLink.Container} {
    width: 180px;
    margin: 0 auto;
    min-width: 100px;
    margin-top: 30px;
    height: 50px;
  }

  ${ButtonLink.InternalLinkContainer} {
    width: 180px;
    margin: 0 auto;
    min-width: 100px;
    height: 50px;
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    margin: 15px auto;
    margin-right: 15px;
    &:nth-of-type(1) {
      margin-top: 60px;
    }
  }
`;
const Icon = styled.img`
  width: 78px;
  padding-top: 42px;
  padding-bottom: 34px;

  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

const PhoneLogo = styled(Icon).attrs({ src: LogoPhone })``;

const QrLogo = styled(Icon).attrs({ src: LogoQr })`
  width: 88px;
`;

const CovidLogo = styled(Icon).attrs({ src: LogoCovid })`
  padding-top: 46px;
  padding-bottom: 30px;
`;

const ItemWrapper = styled.div`
  align-content: center;
  justify-content: center;
  height: 345px;
  width: 305px;

  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

const TextBox = styled.div`
  width: 305px;
  height: 170px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

const Text = styled.div`
  width: 230px;
  height: 56px;
  margin: 0 auto;

  /* H4 Bold 25 */

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 110%;
  /* or 28px */

  text-align: center;
  letter-spacing: 0.02em;

  /* Black */

  color: #110a37;
`;

const FileUpload = styled.div`
  width: 100%;
  /* height: 50px; */
  position: relative;
  overflow: hidden;
`;

const FileInput = styled.input`
  position: absolute;
  top: 25px;
  right: 0; /* not left, because only the right part of the input seems to
             be clickable in some browser I can't remember */
  cursor: pointer;
  opacity: 0;
  filter: alpha(
    opacity=0
  ); /* and all the other old opacity stuff you
                             want to support */
  font-size: 300px; /* wtf, but apparently the most reliable way to make
                     a large part of the input clickable in most browsers */
  height: 50px;
  width: 100%;
`;

export {
  StyledCard,
  Icon,
  Text,
  TextBox,
  ItemWrapper,
  CovidLogo,
  PhoneLogo,
  QrLogo,
  FileUpload,
  FileInput
};
