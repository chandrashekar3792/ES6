
----------------------
MYSQL Lamda function
----------------------

### Function Name:

*  Dev: cq-backend-dev-services-mysql
*  Prod:cq-backend-prod-services-mysql

### Parameters:

*  query: Array of strings.  
        
   Example:-
   ```
   {query:["SELECT net_asset_value FROM nav_hist_2018_Q1 WHERE amfi_code = '112322'"]}
   
   ```
   
### Reponse:
 ```
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
DOcument Lamda function
----------------------
### Insert

| Proposal                                                                       | Author                                                                  | Champion                                                                | Tests                                          | <sub>Last Presented</sub>                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------|
| [`globalThis`][globalThis]                                                     | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-global]             | <sub>[November&nbsp;2018](globalThis-notes)</sub>       |
| [`import()`][dynamic-import]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-dynamic-import]     | <sub>[November&nbsp;2016][dynamic-import-notes]</sub>   |
| [Legacy RegExp features in JavaScript][regexp-legacy]                          | Claude Pache                                                            | Mark Miller<br />Claude Pache                                           | [:white_check_mark:][tests-regexp-legacy]      | <sub>[May&nbsp;2017][regexp-legacy-notes]</sub>         |
| [`BigInt`][bigint]                                                             | Daniel Ehrenberg                                                        | Daniel Ehrenberg                                                        | [:white_check_mark:][tests-bigint]             | <sub>[May&nbsp;2018][bigint-notes]</sub>                |
| [`import.meta`][import-meta]                                                   | Domenic Denicola                                                        | Domenic Denicola                                                        | [:white_check_mark:][tests-import-meta]        | <sub>[September&nbsp;2017][import-meta-notes]</sub>     |
| [Private instance methods and accessors][private-methods]                      | Daniel Ehrenberg                                                        | Daniel Ehrenberg<br />Kevin Gibbons                                     | [:question:][tests-private-methods]            | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Class Public Instance Fields & Private Instance Fields][class-fields]         | Daniel Ehrenberg<br />Kevin Gibbons                                     | Daniel Ehrenberg<br />Jeff Morrison<br />Kevin Smith<br />Kevin Gibbons | [:question:][tests-class-fields]               | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [Static class fields and private static methods][static-class-features]        | Daniel Ehrenberg<br />Kevin Gibbons<br />Jeff Morrison<br />Kevin Smith | Shu-Yu Guo<br />Daniel Ehrenberg                                        |                                                | <sub>[January&nbsp;2019][class-fields-notes]</sub>      |
| [`String.prototype.matchAll`][matchall]                                        | Jordan Harband                                                          | Jordan Harband                                                          | [:white_check_mark:][tests-matchall]           | <sub>[September&nbsp;2018][matchall-notes]</sub>        |
| [Hashbang Grammar][hashbang-grammar]                                           | Bradley Farias                                                          | Bradley Farias                                                          | [:white_check_mark:][tests-hashbang-grammar]   | <sub>[November&nbsp;2018][hashbang-notes]</sub>         |
