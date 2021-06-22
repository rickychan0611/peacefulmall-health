import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';

const ClinicCard = ( {item} ) => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);

  return (
    <CardContainer>
      <Pic src={item.pic} />
      <Name>{item.name}</Name>
      <Title>{item.title}</Title>
      <Answer>78人回答</Answer>
      <Button>咨询医生</Button>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddbdb;
  width: 100%;
  border-radius: 5px;
  padding: 20px 24px 20px 24px;
  cursor: pointer;
  flex: 1;
`;

const Pic = styled.img`
  font-weight: bold;
  width: 72px;
  height: 72px;
  border-radius: 50px;
  border-bottom: 10px;
  margin-bottom: 15px;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  color: grey;
`;
const Answer = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: grey;
`;
const Button = styled.div`
  font-size: 14px;
  font-weight: bold;
  background-color: #30aabc;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
`;

export default ClinicCard;