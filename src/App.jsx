import { useState } from 'react';
import FotoRestaurante from './assets/foto-restaurante.jpg';
import FacaGarfo from './assets/faca-de-prato-e-garfo.ico';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export function App(){
  const paginasMenu =[pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada]= useState(0);

  return <>
   <header>
     <span><img src={FacaGarfo} alt="" className='foto'/></span>
     <span><h1 className='titulo'>Restaurante Eat<strong>Good</strong></h1></span>
   </header>
    <img src={FotoRestaurante} alt="" className="capa"/>
    <p>
    Foto de <a href="https://unsplash.com/pt-br/@kayleighharrington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Kayleigh Harrington</a> na <a href="https://unsplash.com/pt-br/fotografias/grupo-de-pessoas-dentro-do-restaurante-yhn4okt6ci0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> <button type="button">
      <svg width="16" height="16" viewBox="0 0 24 24" version="1.1"><a href="https://unsplash.com/pt-br/fotografias/grupo-de-pessoas-dentro-do-restaurante-yhn4okt6ci0?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"></a><path d="M11.905 4.56a5.328 5.328 0 1 1 7.534 7.535l-2.82 2.82-1.414-1.414 2.82-2.82a3.328 3.328 0 1 0-4.706-4.706l-2.82 2.82L9.085 7.38l2.82-2.82Zm3.65 5.3-5.696 5.695-1.414-1.415 5.695-5.695 1.415 1.414Zm-6.76.64-2.82 2.82a3.328 3.328 0 0 0 4.706 4.705l2.82-2.82 1.414 1.414-2.82 2.82a5.328 5.328 0 1 1-7.535-7.534l2.82-2.82 1.415 1.414Z"></path></svg></button>
    </p>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
    <div className='menu'>
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
    </div>
         </>
}