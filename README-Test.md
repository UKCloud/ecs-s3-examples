# UKCloud ECS S3 Storage Examples

This project contains sample code for common operations against
UKCloud's ECS based Cloud Storage service. Whilst ECS itslef
supports both an S3 compatible and an EMC native API the samples in this
repository are designed to work with the S3 compatible endpoint only.

## Credentials
In order to provide a common way to pass credentials to the sample code,
each example will expect to be able to get credentials from environment
vairables. Please ensure the following are exported:

```
UKCLOUD_S3_UID
UKCLOUD_S3_SECRET
UKCLOUD_S3_HOST
```

Linux:
```
export UKCLOUD_S3_UID=A123456678912345
export UKCLOUD_S3_SECRET=ABC2346253HFDG453=
export UKCLOUD_S3_HOST=casxxxx.ukcloud.com
```

Test that the variables are set with:

Linux:
```
echo $UKCLOUD_S3_UID
printenv | grep S3
set | grep S3

```

To remove the variables that you set run:

Linux:
```
for i in UID SECRET HOST; do unset UKCLOUD_S3_$i; done
```

To remove individual variables that you set run:

Linux:
```
unset UKCLOUD_S3_UID
unset UKCLOUD_S3_SECRET
unset UKCLOUD_S3_HOST

```


## Languages
Examples are available for the following languages / SDKs
- Ruby (Fog)
- Python (Boto)
- Go (Minio)

Language specific instructions are available in each directory

## Functions
The following common functions are demonstrated in these samples:

- Connect to ECS S3
- List all directories
- List a specific directory
- Create a directory
- Delete a directory
- List all files in a directory
- Upload a file
- Download a file
- Get a public url for a file

## Contribution
This repository is a work in progress and as such will be updated over
time. If you would like to contribute examples, please Fork this repo
and create a Pull Request with your contribution. 
If you would like to see examples of other functions not listed here but
do not have time to contribute then please raise an Issue in Github and
we will look at your request ASAP.
