import {
  Titulo,
  Subtitulo,
  ContainerPai,
  ContainerPedido,
  ContainerIntermediario,
  CampoNome,
  ContainerItemCampo,
  IdentificacaoCampo,
  Alerta,
  CampoSelecaoDropdown,
  BotaoPedido,
  //InformacaoPedido,
  ContainerPaiInformacaoPedido,
} from './styles';
import Pedido from '../../components/pedido';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const Homepage = () => {
  const [guardaLista, setGuardaLista] = useState([]);
  const adicionarPedido = (nome, tipo, tamanho, qtdAcucar) => {
    const novoPedido = [...guardaLista];
    //utilizado push para que os novos pedidos possam entrar por último na lista
    novoPedido.push({ nome, tipo, tamanho, qtdAcucar });
    setGuardaLista(novoPedido);
  };

  /* Curried function retorna uma função sem parâmetro */
  const removerPedido = (indice) => () => {
    const novaLista = [...guardaLista];
    novaLista.splice(indice, 1);
    setGuardaLista(novaLista);
  };

  return (
    <ContainerPaiInformacaoPedido>
      <Titulo>Current Orders</Titulo>
      <ContainerPai>
        <Subtitulo>Name</Subtitulo>
        <Subtitulo>Type</Subtitulo>
        <Subtitulo>Syze</Subtitulo>
        <Subtitulo>Sugar</Subtitulo>
        {/*Passo 2)b. Colocado uma coluna a mais para que o título se alinhasse com os itens da lista*/}
        <Subtitulo />
      </ContainerPai>
      {/* Abaixo se encontra um if ternário pois no css só pode retornar valores que pode retornar dois 
        resultados: ou um alerta de que não há pedidos, ou retorna os itens contidos no array contato*/}
      {guardaLista.lenght === 0 ? (
        <Alerta variant="info">No orders yet... but I can smell them coming!</Alerta>
      ) : (
        guardaLista.map((parametro) => (
          <Pedido
            nomeCliente={parametro.nome}
            tipoCafe={parametro.tipo}
            tamanhoCafe={parametro.tamanho}
            quantidadeAcucar={parametro.qtdAcucar}
            deletar={removerPedido(guardaLista.indexOf(parametro))}
          />
        ))
      )}
      <ContainerIntermediario />
      <ContainerPedido>
        <Titulo>I want a coffee too!</Titulo>
        {/* IMPORTANTE: Dar nome para os campos para acessá-los*/}
        <Form
          onSubmit={(evento) => {
            evento.preventDefault();
            adicionarPedido(
              evento.target.nome.value,
              evento.target.tipo.value,
              evento.target.tamanho.value,
              evento.target.qtdAcucar.value
            );
          }}
        >
          <ContainerItemCampo>
            <IdentificacaoCampo>Your Name</IdentificacaoCampo>
            <CampoNome type="text" placeholder="Name" name="nome" />
          </ContainerItemCampo>
          <ContainerItemCampo>
            <IdentificacaoCampo>Coffee Type</IdentificacaoCampo>
            <CampoSelecaoDropdown name="tipo">
              <option>Please Select</option>
              <option>Latte</option>
              <option>Soy Latte</option>
              <option>Flat White</option>
              <option>Long Black</option>
              <option>Capuccino</option>
              <option>Mocha</option>
            </CampoSelecaoDropdown>
          </ContainerItemCampo>
          <ContainerItemCampo>
            <IdentificacaoCampo>What Size?</IdentificacaoCampo>
            <CampoSelecaoDropdown name="tamanho">
              <option>Please Select</option>
              <option>Small</option>
              <option>Regular</option>
              <option>Large</option>
            </CampoSelecaoDropdown>
          </ContainerItemCampo>
          <ContainerItemCampo>
            <IdentificacaoCampo>Any Sugar?</IdentificacaoCampo>
            <CampoSelecaoDropdown name="qtdAcucar">
              <option>Please Select</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>Seriously??</option>
            </CampoSelecaoDropdown>
          </ContainerItemCampo>

          <BotaoPedido variant="success" type="submit">
            Place my Order!
          </BotaoPedido>
        </Form>
      </ContainerPedido>
    </ContainerPaiInformacaoPedido>
  );
};

export default Homepage;
