

let countOfIds=[];
let count =0;    
fetch("https://jsonplaceholder.typicode.com/posts")
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
        console.log(err);
    });

//search code for understanding


    // const arr=[1,1,1,2,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,10,10,10,10,0];
    // console.log(arr[1]);
    // let count=0;
    // let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
    // console.log(unique);
    
    // function search()
    // {
    //   for (let userId of unique)
    //   {
    //     for(let i=0;i<=arr.length;i++)
    //     {
    //       if(arr[i]==userId)
    //       {
          
    //         count++;
    //       }
      
    //     }
        
    //     console.log("num "+userId+"appear"+count+"times");
    //     count=0;
    //   }
    
      
      
    // }
    
    // search();
