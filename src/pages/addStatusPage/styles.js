import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 8%;


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;

  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
`;

export const Text = styled.div`
  width: 160px;
  height: 20px;
  vertical-align: middle;
  text-align: center;
  font-size: 1.06rem;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #654cf0;
`;

export const StepIndicator = styled.div`
  padding: 0 20px;
  height: 35px;
  background-color: #efecfe;
  border-radius: 30px;
  display: flex;
  width: 42.43%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 41.3%;
  }
`;

export const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 1rem;
`;

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  flex-direction: column;
`;
export const StepHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #654cf0;
  margin: 10px 0 30px 0;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
