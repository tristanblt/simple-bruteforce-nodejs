# Simple Bruteforce Node.js

###Easy way to bruteforce in nodejs

Launch example with :

```
node index.js
```

```bruteForce()``` function :

- ```minLength``` : min length of the bruteforce sentence
- ```maxLength``` : max length of the bruteforce sentence
- ```test``` : characters to include in bruteforce

###Example

```
bf = require('./bruteforce');

bf.bruteForce(1, 5, '01')
    .forEach(r => {
        console.log(r);
    });
```

will display

```
00000
00001
00011
00101
00111
01001
01011
01101
01111
10001
10011
10101
10111
11001
11011
11101
11111
```
