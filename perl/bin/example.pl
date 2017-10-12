#!/usr/bin/perl

use strict;
use warnings;
use 5.10.0;

use File::Slurp qw/read_file/;
use Net::Amazon::S3;

my $s3 = Net::Amazon::S3->new(
  aws_access_key_id     => $ENV{UKCLOUD_S3_UID},
  aws_secret_access_key => $ENV{UKCLOUD_S3_SECRET},
  retry                 => 1,
  host                  => $ENV{UKCLOUD_S3_HOST},
  secure                => 1,
);
my $client = Net::Amazon::S3::Client->new( s3 => $s3 );
 
my $directory_name = time;
say "Using directory name: $directory_name for example S3 functions";
my $file_name = "${directory_name}_newfile";
say "Using file name: $file_name for example S3 functions";

# create a directory
{
    say "Creating directory: $directory_name";
    $client->create_bucket(name => $directory_name);
}

# list all directories
{
    say "Listing all directories";
    my @dirs = $client->buckets;
    say "  Found ".@dirs." directories";
}

# get a single directory
{
    say "Getting directory: $directory_name";
    my $bucket = $client->bucket( name => $directory_name );
    say "  Got directory: ".$bucket->name;
}

#create a file in a directory
{
    say "Uploading file: $file_name";
    say "  Creating local file";
    open(my $fh, '>', $file_name);
    print $fh "Some demo text";
    open($fh, '<', $file_name);
    my $row = <$fh>;
    say "  Created file with content: $row";
    close $fh;

    say "  Uploading file: $file_name";

    my $dir = $client->bucket( name => $directory_name );
    my $bucket = $client->bucket( name => $directory_name );
    my $object = $bucket->object( key => $file_name );
    $object->put_filename($file_name);

    say "  File uploaded succesfully";
    say "  Deleting local file: $file_name";
    unlink $file_name;
}

# list all files in a directory
{
    my $dir = $client->bucket( name => $directory_name );
    say "Getting all files in directory: $directory_name";
    my $stream = $dir->list;
    my @files;
    until ( $stream->is_done )
    {
        foreach my $object ( $stream->items ) {
            push @files, $object;
        }
    }
    say "  Directory contains ".@files." files";
}

# get specified file from directory
{
    say "Getting file: $file_name from directory: $directory_name";
    my $dir = $client->bucket( name => $directory_name );
    my $file = $dir->object( key => $file_name);
    say "  Got file: $file_name from cloud storage";
}

# download a file
{
    my $file_downloaded = "${directory_name}downloaded";
    say "Downloading file: $file_name from directory: $directory_name to: $file_downloaded";
    my $dir = $client->bucket( name => $directory_name );
    my $file = $dir->object( key => $file_name );
    $file->get_filename($file_downloaded);

    say "  Downloaded file from cloud storage with contents: ".read_file($file_downloaded);
    unlink $file_downloaded;
}

# get a public url for a file (with an expiry time)
{
    say "Getting a public url for file: $file_name";
    my $dir = $client->bucket( name => $directory_name );
    my $file = $dir->object( key => $file_name );
    my $url = $file->uri;
    say "  Generated url: $url";
}

# delete a file
{
    say "Deleting file: $file_name from directory: $directory_name";
    my $dir = $client->bucket( name => $directory_name );
    my $object = $dir->object( key => $file_name );
    $object->delete;
    say "  File: $file_name deleted succesfully";
}

# delete a directory
{
    say "Deleting directory: $directory_name";
    my $dir = $client->bucket( name => $directory_name );
    $dir->delete;
}

