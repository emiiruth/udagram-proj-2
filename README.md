# Udagram

This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.

Website Link: http://udagram-test01.s3-website-us-east-1.amazonaws.com
Couple of Notes: 
1.) The project requirements did not indicate I needed to upload my entire code for the submission - however, I've opted to keep the project intact. The root package.json file can be found in the root directory, and the circleCI config file can be found in the .circleci directory.

2.) Dependencies for this project were frankly a nightmare. I apologize for how messy the dependencies and dev dependencies got, I am just so scared I'll break the application and won't recieve support if I start playing with them , as I've already done multiple times leaving me stuck for days.

3.) A mentor stated that it didn't matter if I wrote my deployment scripts out in the root level package.json or deligated them back into the api and fronted package.json files. I've opted to leave them in the root level package json, as it seems that for project review this is the file thats being checked.

### Screenshots: Application
<img width="1680" alt="Screenshot 2024-08-05 at 3 03 04 PM" src="https://github.com/user-attachments/assets/c61b22b0-20f7-45a3-9198-e2793b0234cd">
<img width="649" alt="Screenshot 2024-08-05 at 3 00 39 PM" src="https://github.com/user-attachments/assets/11e6eebb-3a38-4a9b-99c8-a4c7f111a23e">
<img width="331" alt="Screenshot 2024-08-05 at 3 00 45 PM" src="https://github.com/user-attachments/assets/457d80ff-10af-47ad-a3e7-d89baf2b4249">

### Screenshots: AWS Resources
<img width="1393" alt="eb env" src="https://github.com/user-attachments/assets/8e8bd059-615e-4948-853c-8fe1326fdffc">
<img width="1439" alt="frontend s3" src="https://github.com/user-attachments/assets/3ee1c915-b716-46fb-a368-d5e685042648">
<img width="1320" alt="rdb" src="https://github.com/user-attachments/assets/0ace54f9-a630-45b1-88e1-4dfa3bf227f5">

### Screenshots: Pipeline
<img width="1299" alt="Screenshot 2024-08-05 at 3 06 41 PM" src="https://github.com/user-attachments/assets/fc2efa43-26ee-4999-81f1-dd1bc30ac77e">
<img width="981" alt="Screenshot 2024-08-05 at 3 06 12 PM" src="https://github.com/user-attachments/assets/d8d774cb-198a-4ab1-8c52-e9b1b1bce8b5">
<img width="961" alt="Screenshot 2024-08-05 at 3 06 24 PM" src="https://github.com/user-attachments/assets/e34dbb39-ce4f-4e05-9392-eec387deed01">

### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```
### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
