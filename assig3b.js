

async function titleCapitalize()
{

    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let responseArr = await response.json();
        console.log(responseArr);
        let titles=responseArr.map((posts)=>                //get only title save into titles
        {
            return posts.title;
        })


        for (let title of titles)
        {
            if(title.length>31)
            {
                console.log(title.toUpperCase());
            }
            else
            {
                console.log(title);
            }
            
        }

    }
    catch(err){
        console.log(err);
    }

   
    // ***************same code with promises then catch**************

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => 
    // {
    //     return response.json();           //get only headers
    // })
    // .then(data => 
    // {
    //     //console.log(data);

    //     let titles=data.map((users)=>                //get only title save into titles
    //     {
    //         return users.title;
    //     })


    //     for (let title of titles)
    //     {
    //         if(title.length>31)
    //         {
    //             console.log(title.toUpperCase());
    //         }
    //         else
    //         {
    //             console.log(title);
    //         }
            
    //     }

        
   
    // })
    
   
}
titleCapitalize();

