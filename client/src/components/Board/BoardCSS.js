import styled from '@emotion/styled';

const Board = styled.div`
  flex-direction: row;
  display: flex;
  min-height: 740px;
  background-color: indianred;
`;

const AddListForm = styled.form`
  background-color: #ebecf0;
  border-radius: 3px;
  height: auto;
  min-height: 32px;
  padding: 4px;
  margin-left: 11px;
  margin-top: 7px;  
`
const CustomInput = styled.input`
  width: 251px;
`;

const ExtendDiv = styled.div`
  width: 272px;
`;
export{
  Board,
  AddListForm,
  CustomInput,
  ExtendDiv
}