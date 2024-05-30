fetch('https://jsonplaceholder.typicode.com/users',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            name: 'Kishorekumar',
            email : 'kishoreak2003@gmail.com'
        }
    )
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))