# Search Customers Within 100Km Range Of Dublin


This is the Node package that runs on Javascript. In particular it is a package that can be used to get customers/people residing within 100Km range of Dublin.


# Installation:
> `npm i [--save] geosearchcustomer`


# Import:
> `const CW100 = require('geosearchcustomer');`

# Usage:
- `CW100` uses an `initialize(pathToFile)` function that is promisified.
- You can either use `await new CW100().initialize('your/path/to/file')` or `new CW100().intitialize('your/path/to/file').then(res => **DO SOMETHING**)`.
- Using `await` is in accordance with the current JS standards.


# File Format Requirements
- The File must be a text file that is with .txt extension.
- The file must contain JSON objects in a line formatted manner, as shown below.
- The JSON object will contain properties `user_id`, `latitude`, `longitude`, `name`.


![JSON objects structure and their properties](https://anshup7.github.io/json.png)

# Output:
> The package gives output as shown in the following Image(ASC sorted user id and names) and returns an array of Objects to the callee.

![Output of sorted User Ids and Name](https://anshup7.github.io/output.png)
    

```
[ { latitude: '53.2451022',
    user_id: 4,
    name: 'Ian Kehoe',
    longitude: '-6.238335',
    haversineDistance: 1 },
  { latitude: '53.1302756',
    user_id: 5,
    name: 'Nora Dempsey',
    longitude: '-6.2397222',
    haversineDistance: 2 },
  { latitude: '53.1229599',
    user_id: 6,
    name: 'Theresa Enright',
    longitude: '-6.2705202',
    haversineDistance: 2 },
  { latitude: '54.0894797',
    user_id: 8,
    name: 'Eoin Ahearn',
    longitude: '-6.18671',
    haversineDistance: 20 },
  { latitude: '53.008769',
    user_id: 11,
    name: 'Richard Finnegan',
    longitude: '-6.1056711',
    haversineDistance: 19 },
  { latitude: '52.986375',
    user_id: 12,
    name: 'Christina McArdle',
    longitude: '-6.043701',
    haversineDistance: 29 },
  { latitude: '53',
    user_id: 13,
    name: 'Olive Ahearn',
    longitude: '-7',
    haversineDistance: 95 },
  { latitude: '52.966',
    user_id: 15,
    name: 'Michael Ahearn',
    longitude: '-6.463',
    haversineDistance: 29 },
  { latitude: '54.080556',
    user_id: 23,
    name: 'Eoin Gallagher',
    longitude: '-6.361944',
    haversineDistance: 29 },
  { latitude: '54.133333',
    user_id: 24,
    name: 'Rose Enright',
    longitude: '-6.433333',
    haversineDistance: 52 },
  { latitude: '53.1489345',
    user_id: 31,
    name: 'Alan Behan',
    longitude: '-6.8422408',
    haversineDistance: 42 },
  { latitude: '53.0033946',
    user_id: 39,
    name: 'Lisa Ahearn',
    longitude: '-6.3877505',
    haversineDistance: 17 }
    ]
```