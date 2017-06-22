# UKCloud S3 Storage Examples - Golang 
================

The following examples are based on user root. Therefore, default directory (GOPATH) will be set to:
/root/projects/go
In production replace that with a valid user and run all the commands with sudo.

Example functions are all in the file src/examples/examples.go
------------

### Verify your path is your project directory (GOPATH) 

```
pwd
/root/projects/go
```

### Repository required
[Minio - GitHub Repository](github.com/minio/minio-go)
```
go get github.com/minio/minio-go

```

## To try it out:

```
go build src/examples/examples.go
./src/examples/examples
```

## To run the tests:

```
go test -v src/examples/examples_test.go
```

### Sample Output when it runs:
* Examples
```
./src/examples/examples
Bucket not found.
Bucket my-bucketname created successfully.
Uploaded my-testfile.csv of size: 15 Successfully to: my-bucketname / my-testfile.csv
Successfully saved my-download.csv
Successfully deleted my-testfile.csv
Successfully deleted my-bucketname
```

* Test
```
go test -v /src/examples/examples_test.go
=== RUN   TestTimeConsuming
--- PASS: TestTimeConsuming (0.00s)
=== RUN   TestListDirectories
--- PASS: TestListDirectories (0.09s)
=== RUN   TestGetDirectory
--- PASS: TestGetDirectory (0.01s)
=== RUN   ExampleHello
--- PASS: ExampleHello (0.00s)
=== RUN   ExampleFindBucket
--- PASS: ExampleFindBucket (0.05s)
=== RUN   ExampleCreateBucket
--- PASS: ExampleCreateBucket (0.21s)
=== RUN   ExampleUploadFile
--- PASS: ExampleUploadFile (0.14s)
=== RUN   ExampleDownloadFile
--- PASS: ExampleDownloadFile (0.03s)
=== RUN   ExampleDeleteFile
--- PASS: ExampleDeleteFile (0.02s)
=== RUN   ExampleDeleteDirectory
--- PASS: ExampleDeleteDirectory (0.07s)
PASS
ok   examples 0.628s

```

Required repository
------------
```
go get github.com/minio/minio-go
```

How to compile GO using GO Version Manager to make it work on RHEL or CentOS 7:
------------
[GVM - GitHub Repository](https://github.com/moovweb/gvm)

## Install gvm:
```
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

Update your bash:
```
source /etc/profile && source ~/.bash_profile
```

* If you do not have any GO installed already run:
```
gvm install go1.8.3 -B
```
* Otherwise run:
```
gvm install go1.8.3
```

Set go1.8.3 as your default version
```
gvm use go1.8.3 --default
```

Verify your GO version
```
go version:
go version go1.8.3 linux/amd64
```

# Manual Edit of Bash profile
* vi .bash_profie
```
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
 . ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin

export PATH

[[ -s "/root/.gvm/scripts/gvm" ]] && source "/root/.gvm/scripts/gvm"
export MYGOPATH=/root/projects/go
export GOPATH="$GOPATH:$MYGOPATH"

# gvm use function that will modify the GOPATH for you
gvm-use() {
  gvm use $@
  export GOPATH="$GOPATH:$MYGOPATH"
}
```

* Verify gvm-use function
```
type gvm-use
gvm-use is a function
gvm-use ()
{
    gvm use $@;
    export GOPATH="$GOPATH:$MYGOPATH"
}
```

Set your GOPATH using gvm-use
```
gvm-use go1.8.3
Now using version go1.8.3
```

Verify your GOPATH
```
echo $GOPATH
/root/.gvm/pkgsets/go1.8.3/global:/root/projects/go
```
