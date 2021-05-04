"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Add index.html to our bucket
const bucketObject = new aws.s3.BucketObject("index.html", {
    bucket: bucket,
    source: new pulumi.asset.FileAsset("index.html")
});

// Export the name of the bucket
exports.bucketName = bucket.id;

// Add a compute instance
/*
const instance = new aws.ec2.Instance("instance1", {
    ami: "ami-0f57b4cec24530068",
    instanceType: "t2.micro",
    availabilityZone: 'us-west-2a',
});
*/
const instance = new aws.ec2.Instance("instance1", {
ami: "ami-005e54dee72cc1d00",
    instanceType: "t2.micro",
    networkInterfaces: [{
        networkInterfaceId: fooNetworkInterface.id,
        deviceIndex: 0,
    }],
    creditSpecification: {
        cpuCredits: "unlimited",
    },
exports.test = instance;
