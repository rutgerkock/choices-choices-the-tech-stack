import fetch from 'node-fetch'

export async function get(request) {
    console.log(`${request.method} ${request.path}`);

    const response = await fetch('https://fdnd.directus.app/items/person/53');
    const persoon = await response.json();
    

    return {
        json: { persoon }
    };
}