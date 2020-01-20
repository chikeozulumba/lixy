<template>
	<div id="app">
		<div class="container-fluid">
			<div class="heading pt-5 text-white">
				<h2 class>Prime Numbers</h2>
				<p>Place an integer in the boxes below</p>
			</div>
			<div>
				<form class="form-inline justify-content-center">
					<div class="form-group mx-sm-3 mb-2">
						<!-- <label for="integer1" class="sr-only">Password</label> -->
						<input
							type="number"
							class="form-control"
							id="integerA"
							placeholder="Enter an integer"
							v-model="integerA"
						/>
					</div>
					<div class="form-group mx-sm-3 mb-2">
						<!-- <label for="integer2" class="sr-only">Password</label> -->
						<input
							type="number"
							class="form-control"
							id="integerB"
							placeholder="Enter an integer"
							v-model="integerB"
						/>
					</div>
					<button
						type="submit"
						class="btn btn-primary mb-2"
						@click.prevent="generateTable"
					>Generate Table</button>
				</form>
			</div>
			<div class="mt-5">
				<table v-if="allPrimes.length > 0" class="table table-dark">
					<thead>
						<tr>
							<th v-for="(head, index) in tableHead" :key="index" scope="col">{{ head }}</th>
						</tr>
					</thead>
					<tbody>
            <tr v-for="(primes, index) in allPrimes" :key="index">
              <template v-for="(prime, index) in primes">
                <th v-if="index === 0" :key="index" scope="row">{{ prime }}</th>
                <td v-else :key="index">{{ prime }}</td>
              </template>
            </tr>
					</tbody>
				</table>
				<p v-else class="text-white">No table generated</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      integerA: 1,
      integerB: 100,
      allPrimes: [],
      tableHead: [],
    };
  },
  methods: {
    generateTable() {
      this.run();
    },
    run() {
      if (typeof parseInt(this.integerA, 10) !== 'number' || typeof parseInt(this.integerB, 10) !== 'number') {
        // eslint-disable-next-line no-alert
        return alert('Only integers are allowed in this program');
      }
      const allPrimes = [];
      for (let i = this.integerA; i <= this.integerB; i += 1) {
        if (this.isPrime(i)) allPrimes.push(i);
      }
      this.allPrimes = this.multiplyThePrimeNumbers(allPrimes);
      this.tableHead = this.allPrimes.shift();
      return true;
    },
    isPrime(number) {
      if (number <= 1) {
        return false;
      }

      const numberSqrt = Math.floor(Math.sqrt(number));
      let i = 2;
      while (i <= numberSqrt) {
        if (number % i === 0) {
          return false;
        }

        i += 1;
      }

      return true;
    },
    multiplyThePrimeNumbers(primesArray) {
      if (primesArray.length === 0) {
        return null;
      }

      const firstArray = [this.integerA].concat(primesArray);
      const multipliedPrimes = [firstArray];

      primesArray.forEach((prime) => {
        const newRow = [prime];
        primesArray.forEach((primeToMultiplyBy) => {
          newRow.push(prime * primeToMultiplyBy);
        });

        multipliedPrimes.push(newRow);
      });

      return multipliedPrimes;
    },
  },
};
</script>

<style>
  @import './bootstrap.min.css';
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		background: #2c3e50;
		min-height: 100vh;
		min-width: 100vw;
    padding-bottom: 50px;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: #2c3e50;
		width: fit-content;
	}
</style>
