import styled from "styled-components";
import { Form, Alert, Button } from "react-bootstrap";

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 30px;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 15px;
`;

export const Titulo = styled.div`
  font-size: 30px;
  padding-left: 120px;
  padding-bottom: 20px;
  padding-top: 30px;
`;

export const Subtitulo = styled.div`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
`;

export const ContainerPedido = styled.div`
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerIntermediario = styled.div`
  height: 30px;
`;

export const CampoNome = styled(Form.Control)`
  flex: 1;
  margin-right: 120px;
`;

export const ContainerItemCampo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CampoSelecaoDropdown = styled(Form.Select)`
  margin-right: 120px;
  margin-top: 10px;
  width: 909px;
  flex: 1;
`;

export const IdentificacaoCampo = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  margin-left: 120px;
  margin-top: 10px;
  margin-right: 30px;
  width: 170px;
  line-height: 38px;
`;

export const Alerta = styled(Alert)`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 15px;
  font-size: 15px;
`;

export const BotaoPedido = styled(Button)`
  background-color: #5cb85c;
  margin-left: 120px;
  margin-top: 20px;
  width: 130px;
  font-size: 15px;
  padding: 5px;
`;

export const ContainerPaiInformacaoPedido = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const InformacaoPedido = styled.div`
  flex: 1;
  font-size: 15px;
`;
