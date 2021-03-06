import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;
  justify-content: flex-end;

  @media screen and (max-width: 600px){
    margin: -20px 0 0 10px;
  }
`
export const Label = styled.div`
  color: #654cf0;
  font-weight: 600;
  font-size: 17px;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    white-space: pre-wrap;
    padding-bottom: 20px;
  }
`

const CheckboxLabel = styled(Label)`
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};
  margin: 0;
  margin-left: 10px;

  font-size: 14px;
  align-self: center;
  color: #7c7795;
  text-align: left;
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  padding-top: 8px;
  padding-right: 6px;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`
const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 1;
  position: absolute;
  display: none;
`
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  transition: all 150ms;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${(props) => (props.checked ? '#03F5A9' : '#FFFFFF')};
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

export {
  Container,
  CheckboxLabel,
  CheckboxContainer,
  Icon,
  StyledCheckbox,
  HiddenCheckbox,
}
