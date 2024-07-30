# Animal Filter and Counter CLI App



## Description

This CLI application allows you to filter a list of elements containing a pattern and count the number of people and animals. The application can be run with different commands to achieve the desired functionality.



## Installation

Before using the application, ensure you have [Node.js](https://nodejs.org/) installed on your machine. Then, install the necessary dependencies by running :

```bash
npm install
```



## Usage

### Filter animals

To filter animals based on a specific pattern, use the following command :

```bash
node app.js --filter=XXX
```

Where `XXX` is the pattern you want the animals to be filtred by.

#### Example

To filter the data on the `dog` pattern, you could use :

```bash
node app.js --filter=dog
```



### Count Animals and People

To count the number of animals per person and the number of people per country, use the following command :

```bash
node app.js --count
```



### Filter and Count

To filter animals based on a pattern and then count the number of animals per person per country, use the following command :

```bash
node app.js --filter=XXX --count
```

Where `XXX` is the pattern you want the animals to be filtred by.

#### Example

To filter the data on the `dog` pattern and then count the data, you could use :

```bash
node app.js --filter=dog --count
```