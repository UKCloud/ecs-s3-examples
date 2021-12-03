import {
    S3Client,
    ListObjectsCommand,
    GetObjectCommand,
    PutObjectCommand,
    DeleteObjectCommand
} from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from 'fs';

// Retrieve constants from environment variables
const UKCLOUD_S3_HOST = process.env.UKCLOUD_S3_HOST;
const REGION = process.env.REGION;
const BUCKET_NAME = process.env.BUCKET_NAME;

// Initalise client
const client = new S3Client({
    endpoint: UKCLOUD_S3_HOST,
    region: REGION,
});

// Create a directory in a bucket
try {
    const putDir = await client.send(new PutObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/' }));
    console.log(`Successfully created directory 'test-dir/' in the bucket '${BUCKET_NAME}'`);
} catch (err) {
    console.error(`An error occurred creating directory 'test-dir/' in the bucket '${BUCKET_NAME}': ${err}`);
};

// Create an object in a bucket
try {
    const putObject = await client.send(new PutObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/testObject.txt', Body: 'Uploaded test object.' }));
    console.log(`Successfully created object 'test-dir/testObject.txt' in the bucket '${BUCKET_NAME}'`);
} catch (err) {
    console.error(`An error occurred creating object 'test-dir/testObject.txt' in the bucket '${BUCKET_NAME}': ${err}`);
};

// List of all objects (max 1000) in a bucket
try {
    var objects = await client.send(new ListObjectsCommand({ Bucket: BUCKET_NAME }));
} catch (err) {
    console.error(`An error occurred listing objects for the bucket '${BUCKET_NAME}': ${err}`);
};

// Iterate over objects in the bucket and perform GetObjectCommand
try {
    for (const [index, object] of objects.Contents.entries()) {
        console.log(`${index} - Getting object: ${object.Key}`);
        const resp = await client.send(new GetObjectCommand({ Bucket: BUCKET_NAME, Key: object.Key }));
        console.log(`${index} - Object: ${object.Key}, ETag: ${resp.ETag}`);
    };
} catch (err) {
    console.error(`An error occurred getting objects for the bucket '${BUCKET_NAME}': ${err}`);
};

// Download an object (file) from a bucket
try {
    const downloadFile = await client.send(new GetObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/testObject.txt' }));
    const writeStream = fs.createWriteStream('/usr/src/app/testObject.txt');
    downloadFile.Body.pipe(writeStream);
    console.log(`Successfully downloaded object 'testObject.txt' from the bucket '${BUCKET_NAME}'`);
} catch (err) {
    console.error(`An error occurred downloading object 'test-dir/testObject.txt' from the bucket '${BUCKET_NAME}': ${err}`);
};

// Get a public URL for an object in a bucket
// Valid for 1 hour
try {
    //
    const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/testObject.txt' });
    // Get public URL for the object
    const publicUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
    console.log(`Successfully generated public URL for object 'test-dir/testObject.txt' in the bucket '${BUCKET_NAME}': ${publicUrl}`);
} catch (err) {
    console.error(`An error occurred generating public URL for object 'test-dir/testObject.txt' in the bucket '${BUCKET_NAME}': ${err}`);
};

// Delete an object from a bucket
try {
    const DelObject = await client.send(new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/testObject.txt' }));
    console.log(`Successfully deleted object 'test-dir/testObject.txt' in the bucket '${BUCKET_NAME}'`);
} catch (err) {
    console.error(`An error occurred deleting object 'test-dir/testObject.txt' from the bucket '${BUCKET_NAME}': ${err}`);
};

// Delete a directory in a bucket
try {
    const DelDir = await client.send(new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: 'test-dir/' }));
    console.log(`Successfully deleted directory 'test-dir/' in the bucket '${BUCKET_NAME}'`);
} catch (err) {
    console.error(`An error occurred deleting directory 'test-dir/' from the bucket '${BUCKET_NAME}': ${err}`);
};
