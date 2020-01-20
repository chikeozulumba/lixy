# LIXY

URL: [https://lixy.netlify.com](https://lixy.netlify.com/)

## Dependencies
- Vue 2.6.10
- Bootstrap 4.4.1

## Project setup
```
git clone https://github.com/chikeozulumba/lixy

yarn install
```

## Process
```
The methods are responsible for implementing the application, 'run', 'isPrime' and 'multiplyThePrimeNumbers'. The run method provides a loop that selects numbers that fall within the minimum integer 'integerA' and maximum integer 'integerB'.

While the loop runs the 'isPrime' method returns only prime numbers out of the range of numbers.

The 'multiplyThePrimeNumbers' method is called last and it gets the selected prime numbers and parses into an array. It then loops over the parsed array and multiplies each element agaist itself and other elements in the array. Eventually, it adds the resultant array to the parent array outside the loop.

When the process is completed, the result is assigned to the object property 'allPrimes', and using v-for directives in vue, the table is populated with the values of the 'allPrimes'.

The disadvantage of this approach is that as the maximum range (n) increases, so will the space complexity O(n)space. As for time complexity, it is fairly relative to the maximum range between the two integers.
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

