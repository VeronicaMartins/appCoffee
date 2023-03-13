import { ContainerPai, DetalhePedido, BotaoDeletar } from "./styles";
import { useState } from "react";

//Criadas as props nomeCliente, tipoCafe, tamanhoCafe, quantidadeAcucar
//para que os valores sejam passados no DetalhePedido
//prop deletar recebe uma função
const Pedido = ({
  nomeCliente,
  tipoCafe,
  tamanhoCafe,
  quantidadeAcucar,
  deletar,
}) => {
  return (
    <ContainerPai>
      {/*Criadas props que substituirão as informações fixas */}
      <DetalhePedido>{nomeCliente}</DetalhePedido>
      <DetalhePedido>{tipoCafe}</DetalhePedido>
      <DetalhePedido>{tamanhoCafe}</DetalhePedido>
      <DetalhePedido>{quantidadeAcucar}</DetalhePedido>
      <DetalhePedido>
        <BotaoDeletar variant="primary" size="sm" onClick={deletar}>
          Delete
        </BotaoDeletar>
      </DetalhePedido>
    </ContainerPai>
  );
};

export default Pedido;
