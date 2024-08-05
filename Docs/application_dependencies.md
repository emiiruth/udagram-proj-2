### General
Broadly, App was built with:
Angular v8
Node v16
AWS/EB CLI

### Frontend: 
Install dependencies: `npm install —legacy-peer-deps`
Start Application: `npm run start`
Hosted on AWS S3 bucket
NOTE: Frontend is very prone to dependency errors/mismatches. Node v16.20.2 tends to work best. 

### Backend:
Backend Database uses an AWS RDS running Postgres, Node Version 14
Backend is hosted on AWS Elastic Beanstalk
Notably, in order to be compatible with Sequelize, pg was upgraded to 8.0.3
