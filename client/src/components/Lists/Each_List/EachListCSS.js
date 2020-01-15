import styled from '@emotion/styled';

const List = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: auto;
  margin-top: 10px;
  margin-left: 8px;
  position: relative;
  vertical-align: top;
  width: 272px;
  white-space: nowrap;
`;

const TitleOfList = styled.div`
  cursor: pointer;
  flex: 0 0 auto;
  font-weight: bold;
  margin-left: 10px;
  min-height: 20px;
  padding: 10px 8px;
  position: relative;
  overflow-wrap: break-word;
`
const ListContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  white-space: normal;
`;

const AddCardDiv = styled.div`
  min-height: 38px;
  max-height: fit-content;
  display: flex;
  justify-content: space-between;
  margin: inherit;
  `;

const AddCardText = styled.div`
  border-radius: 3px;
  color: #5e6c84;
  flex-grow: 1;
  margin: 4px 8px 8px 8px;
  padding: 4px 8px;
  cursor: pointer;
`;


export{
  List,
  TitleOfList,
  ListContent,
  AddCardDiv,
  AddCardText,
}