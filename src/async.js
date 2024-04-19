export async function fetchData() {
    // const response = await fetch('https://api.example.com/data');
    const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    return data;
}
