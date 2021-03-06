

<h2> Service Layer Documentation</h2>
	


## Functions

- [Mysql](#MYSQL)
- [DocumentDB](#DocumentDB)
	- [Insert](#insert)
	- [Find](#find)
		- [FindType:FindAll](#findtype-findall)
		- [FindType:FindOne](#findtype-findone)
		- [FindType:FindById](#findtype-findbyid)
		- [FindType:Count](#findtype-count)
		- [FindType:Distinct](#findtype-distinct)
	- [Update](#update)
		- [UpdateType:UpdateMany](#updatetype-updateMany)
		- [UpdateType:UpdateOne](#updatetype-updateOne)
	- [Remove](#Remove)
		- [RemoveType:RemoveAll](#removetype-removeall)
		- [RemoveType:RemoveOne](#removetype-removeone)
		- [RemoveType:RemoveById](#removetype-removebyid)
	- [Aggregate](#Aggregate)
- [ElasticCache](#ElasticCache)
- [ActiveMQ](#ActiveMQ)
	
	


## MySQL
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

## DocumentDB
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
  ```js
    {
        result:{
            _id:"5c825e0f213827c4f32dfe42"
            name:"chandru"
            email:"chandru@gmail.com"
        }
    }
  ```
    
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
*  uniqueField: Specify the field name when find type is distinct

        
   #### Example:-
   ##### FindType: findAll
   
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
    ```js
   {
   "result": [
    {
      "_id": "5c7fa9e111d62b31b17cb4a5",
      "name": "chandru"
    },
    {
      "_id": "5c7fab6211d62b16f467dc01",
      "name": "chandru"
    }
   ]}
     ```
    
    #### findType: findOne
    
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
    #### findType: findById
     ```js
    {
        collection:"user",
        _id:"5c825e0f213827c4f32dfe42",
        findType:"findById",
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
   
    #### findType: count
     ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"count",
    }
    
    ```
    ##### Reponse:
    ```js
   {
   	"result": 2
   }
   ```
    #### findType: distinct
     ```js
    {
        collection:"user",
        query:{username:"chandru",
        findType:"distinct",
	uniqueField:"name"
    }
    
    ```
    ##### Reponse:
  ```js
   {
  "result": [
    "chandru"
  ]
}
  ```
## Update

### Function Name:

*  Dev: cq-backend-dev-services-update
*  Prod:cq-backend-prod-services-update

### Parameters:

*  collection: Name of the collection(<b style='color:red'>Required</b>.).  
*  where: Query to find proper document(<b>Required</b>)
*  set: Field which need to be update(<b>Required</b>)
*  updateType: Specify the update type(<b>Required</b>) [updateOne,updateMany]

   #### Example:-
   ##### updateType: updateMany
   
    ```js
    {
        collection:"user",
        where:{username:"chandru"},
	    set:{email:"chandru@gmail.com",
        updateType:"updateMany"
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
    
    #### updateType: updateOne
    
    ```js
   {
     "result": "Updated successfully"
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
## Remove

### Function Name:

*  Dev: cq-backend-dev-services-remove
*  Prod:cq-backend-prod-services-remove

### Parameters:

*  collection: Name of the collection(<b style='color:red'>Required</b>.).  
*  Query: Query to find proper document(<b>Required</b>)
*  removeType: Specify the remove type(<b>Required</b>) [removeOne,removeById,removeAll]
*  id : Document ID when remove type is removeById

   #### Example:-
   ##### removeType: removeAll
   
    ```js
    {
        collection:"user",
        where:{username:"chandru"},
        removeType:"removeAll"
    }
    
    ```
    ##### Reponse:
    ```js
     {
     "result": {
    "Updated": 0,
    "Removed": 1,
    "Matched": 1,
    "UpsertedId": null
    }
   }
     ```
    
    #### removeType: removeOne
    
    ```js
    {
        collection:"user",
        where:{username:"chandru"},
        removeType:"removeOne"
    
    }
    
    ```
    ##### Reponse:
    ```
   {
     "result": "Deleted successfully"
   }
    ```  
     #### removeType: removeById
    
    ```js
    {
        {
        collection:"user",
        id:"5c825e0f213827c4f32dfe42",
        removeType:"removeById"
    }
    }
    
    ```
    ##### Reponse:
    ```
  	{
          "result": "Deleted successfully"
       }
    ```
## Aggregate

### Function Name:

*  Dev: cq-backend-dev-services-aggregate
*  Prod:cq-backend-prod-services-aggregate

### Parameters:

*  collection: Name of the collection(<b style='color:red'>Required</b>.).  
*  operations: Array of operations required for aggregation(<b>Required</b>)

   #### Example:-
   ```js
   {
   	collection:"user",
	operations:[
		{"$match":{status:"A"}},
		{"$group":{_id:"$cust_id",total:{"$sum":"$amount"}}}
	]
   }
   ```
   #### Response:-
   ```js
   {
   	result:[
		{ "_id" : "A123", "total" : 750 },
		{ "_id" : "B212", "total" : 200 }
	]
   }
   ```
