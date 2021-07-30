# cluster-demo
Node.js cluster demo

## Setup
> yarn install

## Run node.js server

#### run old server
> yarn run old

#### run new server
> yarn run new

## Run the load test

#### test old server
> yarn run test-old

#### test new server
> yarn run test-new


## My test result
```
old.ts result:

[Fri Jul 30 2021 19:24:54 GMT+0800 (China Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Fri Jul 30 2021 19:24:59 GMT+0800 (China Standard Time)] INFO Requests: 184 (18%), requests per second: 37, mean latency: 1961.2 ms
[Fri Jul 30 2021 19:25:04 GMT+0800 (China Standard Time)] INFO Requests: 375 (38%), requests per second: 38, mean latency: 2676.3 ms
[Fri Jul 30 2021 19:25:09 GMT+0800 (China Standard Time)] INFO Requests: 561 (56%), requests per second: 37, mean latency: 2662 ms
[Fri Jul 30 2021 19:25:14 GMT+0800 (China Standard Time)] INFO Requests: 757 (76%), requests per second: 39, mean latency: 2576.8 ms
[Fri Jul 30 2021 19:25:19 GMT+0800 (China Standard Time)] INFO Requests: 945 (95%), requests per second: 38, mean latency: 2623.9 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Target URL:          http://localhost:4040
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Max requests:        1000
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Concurrency level:   100
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Agent:               none
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Completed requests:  1000
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Total errors:        0
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Total time:          26.466477348 s
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Requests per second: 38
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Mean latency:        2513.8 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO Percentage of the requests served within a certain time
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO   50%      2600 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO   90%      2750 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO   95%      2772 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO   99%      2781 ms
[Fri Jul 30 2021 19:25:20 GMT+0800 (China Standard Time)] INFO  100%      2783 ms (longest request)
Done in 26.59s.

new.ts result:

[Fri Jul 30 2021 19:26:09 GMT+0800 (China Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Target URL:          http://localhost:4041
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Max requests:        1000
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Concurrency level:   100
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Agent:               none
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Completed requests:  1000
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Total errors:        0
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Total time:          4.833201405 s
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Requests per second: 207
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Mean latency:        461 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO 
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO Percentage of the requests served within a certain time
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO   50%      448 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO   90%      507 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO   95%      591 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO   99%      779 ms
[Fri Jul 30 2021 19:26:14 GMT+0800 (China Standard Time)] INFO  100%      916 ms (longest request)
Done in 4.96s.
```
