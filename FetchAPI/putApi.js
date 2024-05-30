fetch('https://jsonplaceholder.typicode.com/users/1',{
    method:'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            name: 'Kishorekumar',
            email : 'kishore2003@gmail.com'
        }
    )
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))