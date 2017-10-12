# UKCloud S3 Storage Examples - Perl
Example functions are all in the file bin/example.pl

## Getting Started


First install the prerequisite library:
```
cpan Net::Amazon::S3::Client
```

## Running the code

Setup your `UKCLOUD_S3_[...]` environment variables as
specified
[here](https://github.com/UKCloud/ecs-s3-examples/blob/master/README.md).

Run the script:

```
bin/example.pl
```
Sample output:

```
Using directory name: 1507835702 for example S3 functions
Using file name: 1507835702_newfile for example S3 functions
Creating directory: 1507835702
Listing all directories
  Found 10 directories
Getting directory: 1507835702
  Got directory: 1507835702
Uploading file: 1507835702_newfile
  Creating local file
  Created file with content: Some demo text
  Uploading file: 1507835702_newfile
  File uploaded succesfully
  Deleting local file: 1507835702_newfile
Getting all files in directory: 1507835702
  Directory contains 1 files
Getting file: 1507835702_newfile from directory: 1507835702
  Got file: 1507835702_newfile from cloud storage
Downloading file: 1507835702_newfile from directory: 1507835702 to: 1507835702downloaded
  Downloaded file from cloud storage with contents: Some demo text
Getting a public url for file: 1507835702_newfile
  Generated url: https://xxx/1507835702/1507835702_newfile
Deleting file: 1507835702_newfile from directory: 1507835702
  File: 1507835702_newfile deleted succesfully
Deleting directory: 1507835702
```
