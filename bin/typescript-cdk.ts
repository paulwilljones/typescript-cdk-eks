#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { TypescriptCdkStack } from '../lib/typescript-cdk-stack';

const app = new cdk.App();
new TypescriptCdkStack(app, 'TypescriptCdkStack');
