# UKCloud S3 Storage Examples - Python / BOTO S3
Example functions are all in the file lib/examples.py

## Getting Started


First install the prerequisite library:
```
pip install -r requirements.txt
```

## Running the code

Setup your `UKCLOUD_S3_[...]` environment variables as
specified
[here](https://github.com/UKCloud/ecs-s3-examples/blob/master/README.md).

Run the script:

```
python lib/examples.py
```
Sample output:

```

Using directory name: 1498131027 for example S3 functions
Using file name: 1498131027_newfile for example S3 functions

Creating directory: 1498131027
  Created directory: 1498131027

Listing all directories
  Found 3 directories

Getting directory: 1498131027
  Got directory: 1498131027

Uploading file: 1498131027_newfile
  Creating local file
  Created file with content:

  Some demo text


  Uploading file: 1498131027_newfile
  File uploaded succesfully
  Deleting local file: 1498131027_newfile

Getting all files in directory: 1498131027
  Directory contains 1 files

Getting file: 1498131027_newfile from directory: 1498131027
  Got file: 1498131027_newfile from cloud storage

Downloading file: 1498131027_newfile from directory: 1498131027 to: 1498131027_downloaded
  Downloaded file from cloud storage with contents:

  Some demo text



Getting a time-limited public url for file: 1498131027_newfile
  Generated url: https://s3.cas.xxx0000x.ukcloud.com/1498131027/1498131027_newfile?Signature=TX1R3wNAjGyZPFfD0uQhHnxmI6E%3D&Expires=1498134628&AWSAccessKeyId=xxxx@ukcloud.com

Deleting file: 1498131027_newfile from directory: 1498131027
  File: 1498131027_newfile deleted succesfully

Deleting directory: 1498131027
```
