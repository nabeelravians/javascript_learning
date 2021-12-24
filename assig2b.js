


const users = [
    {
      name: "Candace Johnson",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/vg9hyrdUSLW3XokioDeq",
      id: "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47"
    },
    {
      name: "Mark Tzang",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/RMF3UYD0SlqJkzAypbCu",
      id: "user.agent.75dcdd9a-a632-46ae-8beb-c3f2095962c9"
    },
    {
      name: "Sara Conner",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/IMd517xxTiu6S8xqnOop",
      id: "user.agent.b832ec9e-9766-443e-974b-fd745872191f"
    },
    {
      name: "Mylie Tshu",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/WzPo3zJ6QnenW2j8l9rv",
      id: "user.agent.d624d60f-e8bf-492a-a4ec-cea90131441e"
    },
    {
      name: "Beverly Jackson",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/zhT9pK8BT639OEkXhr0A",
      id: "user.agent.97ee2fd3-b19c-44c6-a2aa-c7f9c07b511d"
    },
    {
      name: "Anshul Gupta",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/plxXsXhQkOti1HLftBh4",
      id: "user.agent.100bb019-c8ed-488f-8509-abacdf065f6a"
    },
    {
      name: "Brian Ramsey",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/l7pU9u75Te6E54c4NIJK",
      id: "user.agent.a6d3ca3a-a85d-456e-9cf3-b357f4640c22"
    },
  
    {
      name: "John Markley",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/RMF3UYD0SlqJkzAypbCu",
      id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64"
    },
    {
      name: "Amanda Smith",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/tHhKbndeSymR0QIpc1pr",
      id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182"
    },
    {
      name: "Rianna Jones",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/Y55MfdJfSdaTzosoLaMc",
      id: "user.consumer.768d15d0-3f55-44df-89ca-e1c4ba8c2f8a"
    },
    {
      name: "Anika Agarwal",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/cN8aodqR5yBMSPGEEM0Q",
      id: "user.consumer.f53fee76-11c6-427c-98fe-915608400d37"
    },
    {
      name: "Segey Ivanov",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/A9MvlsEKQOOaxRVY92qa",
      id: "user.consumer.465d9ad0-3ff6-4018-a778-50ec0e85e5da"
    },
    {
      name: "Tom Watson",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/DKd7OR35TKK79fKJACKw",
      id: "user.consumer.d0a82244-7c38-40dc-8416-43f02f0074e0"
    },
    {
      name: "Paul Ransom",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/ifHXO5YwRpOpXt993ZNF",
      id: "user.consumer.3cc12741-8c82-47bc-b693-0ec5111dfcb6"
    },
  
    {
      name: "Josh Allen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/zcmz4sSum1c4y6wqC1RQ",
      id: "user.advisor.8dfdf582-6dd8-457a-9fcc-8b1f903ec15a"
    },
    {
      name: "Helen Cook",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/H1YmRQd6w2D8cdSvlTQ5",
      id: "user.advisor.5eb5ce55-48ca-4462-b7d7-633457612e19"
    },
    {
      name: "Avi Cohen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/MVeirH82R6OTtUYX9tK9",
      id: "user.advisor.4ea8196e-c5e0-4a2f-91b6-5108a530edb8"
    },
    {
      name: "Pat Wang",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/pHjIo1WsRn20AzgsNZSq",
      id: "user.advisor.a75fa1df-8940-48cd-af63-e68cc5629340"
    },
    {
      name: "Evan Hansen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/DP6NAHZFTASyuOkgqCxi",
      id: "user.advisor.70fcce65-1e22-431a-a804-a688dba0d75d"
    },
    {
      name: "Jessica Rand",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/qxUx0y9TIO2FedHlbDu1",
      id: "user.advisor.207980e9-baa3-4643-b7b9-ad9aeba957b4"
    }
  ];

  const newUser =                                                     //new user created
  {
    name: "M Nabeel Mahtab",
      custom: {
        title: "SQA Engineer",
        role: "QA"
      },
      profileUrl: "https://cdn.filestackcontent.com/qxUx0y9TIO2FedHlbDu1",
      id: "XYZXYZXYZ"
  }

  



users.splice(1,0,newUser) //new user added into 1st index
console.log(users)
