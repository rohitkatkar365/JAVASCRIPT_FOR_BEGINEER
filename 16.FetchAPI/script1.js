// // option = ;
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method : "POST",
//         body:JSON.stringify({name:"Ram",
//         roll_no:2}),
//         header : {
//             "Content-type":"application/json"
//         },
//     })
//         .then((res)=>res.json())
//         .then((res1)=>
//         console.log(res1))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 13212,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));