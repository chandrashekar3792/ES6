
----------------------
MYSQL Lamda function
----------------------

### Function Name:

*  Dev: cq-backend-dev-services-mysql
*  Prod:cq-backend-prod-services-mysql

### Function Name:

*  query: Array of strings.  
        
        Ex:{query:["SELECT COUNT(*) FROM (SELECT username FROM user UNION ALL SELECT username subuser_login) a WHERE username = 'mithun'","SELECT net_asset_value FROM nav_hist_2018_Q1 WHERE amfi_code = '112322'"]}  
        

