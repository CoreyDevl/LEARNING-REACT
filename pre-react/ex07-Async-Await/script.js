/*
 estas funçoes são promises que esperam retorno de uma fetch
 
*/
fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto")

async function fetchProdutos(url){
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const requisição = fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto"
)
requisição.then(response =>{
    console.log(response)
});

 