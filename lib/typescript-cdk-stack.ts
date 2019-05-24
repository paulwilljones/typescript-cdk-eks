import cdk = require('@aws-cdk/cdk');

export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.VpcNetwork(this, 'VPC');

    const cluster = new eks.Cluster(this, 'EKSCluster', {
      vpc
    });

    cluster.addCapacity('Nodes', {
      instanceType: new ec2.InstanceType('t2.medium'),
      desiredCapacity: 1,  // Raise this number to add more nodes
    });
  }
}
