# Thanks to 🎉
[@damla](https://github.com/damla) 💎
[@theykk](https://github.com/TheYkk) 💎

# Usage Indicator
Basic React.js system usage indicator (CPU,MEM)

Basic system usage indicator for low level pc's

  - CPU Usage Indicator
  - MEM Usage Indicator

# CPU Usage Indicator

How does work ? (This section dont finish yet need help !?)
 
# MEM Usage Indicator

### Which property we need ?

```js
    chrome.system.memory.getInfo()
    // this code line will return your memory infos
    // as two object (availableCapacity,capacity)
```

### What we do ?

```js
    var total = 0;
    var available = 0
    chrome.system.memory.getInfo((e) => {
        total = e.capacity
        available = e.availableCapacity
        var result = ~~((total - available) * 100 / total)
        return result
        // This result will our pergentages of MEM Usage
    }) 
```

### Installation

Install the react.js modules and build our extension.

```sh
$ cd ./folder
$ npm install
$ npm run build
```

Let's add between our extensions...
That's it! 


License
----

MIT
