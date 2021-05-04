# pulumi

## Installing:
If you're cloning this repo, just run `install.sh` and restart your shell
to get the latest version of pulumi. To check that the install went smoothly, type `pulumi version`.

More details can be found here:

https://www.pulumi.com/docs/get-started/install/

## Creating your first project:
In pulumi, projects represent the highest level of organization. The information about this project will live in the Pulumi.yaml file. 

To crate your first project, create an empty directory and use the following:
`pulumi new <YOUR STACK OPTIONS>`.

For my first attempt, I'm using:
`pulumi new aws-javascript`

## Milestone 1
1. EC2 instance running
2. Have s3 bucket
3. HTTP Requst to instance returns file from S3 bucket

## Milestone 2
1. Add a load balancer to provision more EC2 instances as neccessary
