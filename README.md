
----------------------
MYSQL Lamda function
----------------------

### Function Name:

*  Dev: cq-backend-dev-services-mysql
*  Prod:cq-backend-prod-services-mysql

### Parameters:

*  query: Array of strings.  
        
   Example:-
   ```js
   {query:["SELECT net_asset_value FROM nav_hist_2018_Q1 WHERE amfi_code = '112322'"]}
   
   ```
   
### Reponse:
 ```js
 [
  [
      {
        "net_asset_value": 24.7457
      },
      {
        "net_asset_value": 24.3017
      },
      {
        "net_asset_value": 23.9447
      },
      {
        "net_asset_value": 24.0693
      },
      {
        "net_asset_value": 24.1939
      },
      {
        "net_asset_value": 24.2331
      },
      {
        "net_asset_value": 21.4112
      },
      
    ]
]
```
----------------------
DocumentDB Lamda function
----------------------
## Insert

### Function Name:

*  Dev: cq-backend-dev-services-insert
*  Prod:cq-backend-prod-services-insert

### Parameters:

*  collection: Name of the collection(<b>Required</b>).  
*  document: Document to be inserted(<b>Required</b>).

        
   Example:-
   ```js
   {
        collection:"user",
        document:{
            name:"chandru"
            email:"chandru@gmail.com"
        }
   }
   
   ```
### Reponse:
    
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
    
## Find

### Function Name:

*  Dev: cq-backend-dev-services-find
*  Prod:cq-backend-prod-services-find

### Parameters:

*  collection: Name of the collection(<b style='color:red'>Required</b>.).  
*  query: Query to find proper document(<b>Required</b>)
*  id: Document Id if you need particular document when findType is findById
*  select: Specify the fields which are required
*  findType: Specify the find type(<b>Required</b>) [findAll,findOne,findById,count,distinct]
*  sort:Specify the sort order by field
*  limit:Speicify how many documents to get
*  skip: Specify how many documents to skip

        
   #### Example:-
   ##### FindType  -> findAll
   
    ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"findAll",
        sort:{_id:-1},
        skip:10
        limit:1
    }
    
    ```
    ##### Reponse:
  
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
    
    #### findType -> findOne
    
    ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"findOne",
    }
    
    ```
    ##### Reponse:
    ```
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
    ```
    #### findType -> findById
     ```js
    {
        collection:"user",
        _id:"5c825e0f213827c4f32dfe42",
        findType:"findById",
    }
    
    ```
    ##### Reponse:
  ```
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
    ```
    #### findType -> count
     ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"count",
    }
    
    ```
    ##### Reponse:
  ```
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
   ```
    #### findType -> distinct
     ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"distinct",
    }
    
    ```
    ##### Reponse:
  ```js
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
  ```
    
