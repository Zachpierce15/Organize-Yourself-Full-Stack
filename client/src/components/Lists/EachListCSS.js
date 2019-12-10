import styled from '@emotion/styled';

const List = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: auto;
  margin-top: 10px;
  margin-left: 8px;
  position: relative;
  vertical-align: top;
  width: 192px;
  white-space: nowrap;
`;

const TitleOfList = styled.div`
  cursor: pointer;
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;
`
const ListContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;
export{
  List,
  TitleOfList,
  ListContent
}