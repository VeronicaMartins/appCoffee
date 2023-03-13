import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 30px;
  padding-bottom: 15px;
`;

export const DetalhePedido = styled.div`
  flex: 1;
  font-size: 15px;
`;

export const BotaoDeletar = styled(Button)`
  background-color: #d9534f;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
