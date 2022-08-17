
const postData = async(url="http://localhost:3000/items", data)=> {
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data,
    });
    if(!res.ok) {
        throw new Error(`Could not fetch`);
    }
    return await res.json();
}
const getResource = async(url="http://localhost:3000/items")=> {
    const res = await fetch(url);
    return await res.json();
}
const deleteData = async(url) => {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    if(!res.ok) {
        throw new Error(`Could not fetch`);
    }
    return await res.json();
}

export {postData, getResource, deleteData};