export const GetProducts = async() => {

    const url = 'http://localhost:3000/products.json';
    const res = await fetch(url);
    const data = await res.json();

    const items = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            stock: item.stock,
            price: item.price,            
            pictureUrl: item.pictureUrl,
            categoryId: item.categoryId
        }
    })    

    return items;      
}