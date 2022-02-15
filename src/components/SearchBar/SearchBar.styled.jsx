import styled from 'styled-components';
const StyledSearchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  margin-bottom: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 32px;
  color: #fff;
  background-color: #d3dedc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const StyledFormButton = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
const StyledFormButtonLabel = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
`;
const StyledFormInput = styled.input`
  display: inline-block;
  color: #a1a7c8;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  caret-color: #6b9fed;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export {
  StyledSearchbar,
  StyledForm,
  StyledFormButton,
  StyledFormButtonLabel,
  StyledFormInput,
};
