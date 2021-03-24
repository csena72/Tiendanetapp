export const GetCategories = async() => {

    const url = 'http://localhost:3000/categories.json';
    const res = await fetch(url);
    const data = await res.json();

    const items = data.map( item => {
        return {
            id: item.id,
            name: item.name
        }
    })    

    return items;      
}