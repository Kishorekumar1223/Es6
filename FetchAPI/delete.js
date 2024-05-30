fetch('https://jsonplaceholder.typicode.com/users/1',{
    method:'DELETE',
   
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))