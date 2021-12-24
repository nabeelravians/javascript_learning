// assig3a with error

let count =0;    
fetch("https://jsonplaceholder.typicode.com/postss")
    .then((response) => 
    {
        return response.json();           //get only headers
    })
    .then(data => 
    {
        //console.log(data);

        let idValues=data.map((users)=>                //get only ids save into idValues
        {
            return users.userId;
        })

        //console.log(idValues);
        let uniqueIds = idValues.filter((item, i,ar) => ar.indexOf(item) === i);     //get unique values and save into uniqueIds
        console.log(uniqueIds);

        
        for (let userId of uniqueIds)                                               //perform search
        {
            for(let i=0;i<=idValues.length;i++)
            {
                if(idValues[i]==userId)
                {
                    count++;
                }
            }
    
            console.log("User"+userId+":"+count);
            count=0;
        }
    })
    
    .catch((err) => {
        console.log(err+"error aya hy bhai");
    });

    //assig3b with error
//     async function titleCapitalize()
// {

//     try
//     {
//         let response = await fetch("https://jsonplaceholder.typicode.com/postss");
//         let responseArr = await response.json();
//         console.log(responseArr);
//         let titles=responseArr.map((posts)=>                //get only title save into titles
//         {
//             return posts.title;
//         })


//         for (let title of titles)
//         {
//             if(title.length>31)
//             {
//                 console.log(title.toUpperCase());
//             }
//             else
//             {
//                 console.log(title);
//             }
            
//         }

//     }
//     catch(err){
//         console.log(err+"error aya hy bhai");
//     }
// }
// titleCapitalize();