# UKCloud S3 Storage Examples - Ruby / Fog S3

Example functions are all in the file lib/examples.rb

## Getting Started

Clone the repository and cd to the directory that contains the following:
```sh
ls
Gemfile  lib  README.md  spec
```

## Running the code

Setup your `UKCLOUD_S3_[...]` environment variables as
specified
[here](https://github.com/UKCloud/ecs-s3-examples/blob/master/README.md).

Run the script:

```
bundle install
bundle exec rspec
```

Sample output:
```
Using 1498131501 as Test Directory Name
..........

Finished in 2.85 seconds (files took 0.19532 seconds to load)
10 examples, 0 failures
```
