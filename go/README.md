# UKCloud S3 Storage Examples - Golang

If you haven't already [installed Golang](https://golang.org/doc/install), and
also [setup your GOPATH](https://golang.org/doc/code.html) to your liking,
please do so before continuing.

## Getting Started

First fetch the example code:

```
go get -u github.com/UKCloud/esc-s3-examples/go/examples
```

## Running Examples

Setup your `UKCLOUD_S3_[...]` environment variables as
specified
[here](https://github.com/UKCloud/esc-s3-examples/blob/master/README.md).

Visit the examples folder:

```bash
cd $GOPATH/src/github.com/UKCloud/esc-s3-examples/go/examples
```

And run the examples:

```
go build
./examples
```

Which should yield the following output:

```
Bucket not found.
Bucket my-bucketname created successfully.
Uploaded my-testfile.csv of size: 15 Successfully to: my-bucketname / my-testfile.csv
Successfully saved my-download.csv
Successfully deleted my-testfile.csv
Successfully deleted my-bucketname
```

## Running Tests

```bash
go test
```
