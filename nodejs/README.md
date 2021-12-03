# UKCloud S3 Storage Examples - Node.js

This directory contains [Node.js](https://nodejs.org/en/) examples for interacting with UKCloud ECS S3 storage.

The [code](examples/examples.mjs) uses the following packages:

* [@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3) - [Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html).

* [@aws-sdk/s3-request-presigner](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner) - [Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_s3_request_presigner.html).

## Getting Started

Before you begin, you will need [git](https://git-scm.com/) and [Docker](https://www.docker.com/) installed on your system.

Next, clone this repository and change to the examples directory:

```bash
git clone https://github.com/UKCloud/ecs-s3-examples.git && cd ecs-s3-examples/nodejs/
```

## Running Examples

Build the container image:

```bash
docker build -t ecs-s3-examples:nodejs .
```

Then, run the container providing the required environment variables:

```bash
docker run --rm --name ecs-s3-examples-nodejs \
    # https://docs.ukcloud.com/articles/cloud-storage/cs-gs.html#api-endpoints
    -e UKCLOUD_S3_HOST="https://cas.xxxx.ukcloud.com" \
    # Either cor00005 or frn00006
    -e REGION="xxxx" \
    -e BUCKET_NAME="..." \
    # The aws-sdk looks for the environment variables below automatically
    # UKCLOUD_S3_UID equivalent
    -e AWS_ACCESS_KEY_ID="..." \
    # UKCLOUD_S3_SECRET equivalent
    -e AWS_SECRET_ACCESS_KEY="..." \
    ecs-s3-examples:nodejs
```

The output should be similar to:

```
Successfully created directory 'test-dir/' in the bucket 'version-testing'
Successfully created object 'test-dir/testObject.txt' in the bucket 'version-testing'
0 - Getting object: test-dir/
0 - Object: test-dir/, ETag: "d41d8cd98f00b204e9800998ecf8427e"
1 - Getting object: test-dir/testObject.txt
1 - Object: test-dir/testObject.txt, ETag: "c2a3ecb65f0a9ae43a030f813848aef6"
Successfully downloaded object 'testObject.txt' from the bucket 'version-testing'
Successfully generated public URL for object 'test-dir/testObject.txt' in the bucket 'version-testing': https://version-testing.cas.cor00005.ukcloud.com/test-dir/testObject.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=...&X-Amz-Date=20211203T134915Z&X-Amz-Expires=3600&X-Amz-Signature=...-Amz-SignedHeaders=host&x-id=GetObject
Successfully deleted object 'test-dir/testObject.txt' in the bucket 'version-testing'
Successfully deleted directory 'test-dir/' in the bucket 'version-testing'
```
