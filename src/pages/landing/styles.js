import styled from 'styled-components'

import FirstIcon from 'assets/icons/landing-icon.svg'
import BackgroundMobile from 'assets/images/mobile-landing-background.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    background: url(${BackgroundMobile}) white no-repeat center;
    align-items: unset;
  }
`

export const Icon = styled.img`
  width: 30.77%;
  margin: 0 auto 8.91% auto;
`

export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``

export const Heading = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: 19.43%;

  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
`
