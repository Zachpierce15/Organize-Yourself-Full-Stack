import styled from '@emotion/styled'; 

const AddButtonDiv = styled.div`
  text-align: end;
  width: 30%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SearchDiv = styled.div`
  display:flex;
  flex-direction: row;
  width: 70%;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: skyblue;
  padding: 8px 4px 4px 8px;
`;

const WelcomeH2 = styled.h2`
  margin: 11px 0px 0px 17px !important;
  color: aliceblue;
  width: 53%;
`;

const Title = styled.h1`
  margin-top: 6px;
  color: aliceblue;
`;

export{
  AddButtonDiv,
  SearchDiv,
  HeaderNav,
  WelcomeH2,
  Title
}