export function ItemCardapio(props){
     return <div className="container-item-cardapio">
        <div>
         <h2>{props.nome}</h2>
         <h3>{props.preco}</h3>
         <h4>{props.descricao}</h4>
        </div>
     <img src={props.imagem} alt="" />
     </div>
}