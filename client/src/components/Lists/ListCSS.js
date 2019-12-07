import styled from '@emotion/styled';

const Board = styled.div`
  flex-direction: row;
  display: flex;
  min-height: 740px;
  background-color: steelblue;
`;

const EachList = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: auto;
  margin: 0 4px;
  position: relative;
  vertical-align: top;
  width: 272px;
  white-space: nowrap;
`
export{
  Board,
  EachList
}