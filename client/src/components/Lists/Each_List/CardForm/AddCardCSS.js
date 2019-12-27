import styled from '@emotion/styled';

const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px 0px;
`;

const ErrorMessage = styled.div`
  margin: 3px 0px 3px 0px !important;
`;

const FormatForm = styled.div`
  margin: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1px 0px 3px 0px;
`;

const CancelButton = styled.span`
  width: 9%;
  padding: 8px 0px 0px 9px;
  font-size: 22px;
  cursor: pointer;
  color: #6b778c;
`;

export {
  CustomDiv,
  ErrorMessage,
  FormatForm,
  ButtonDiv,
  CancelButton
}