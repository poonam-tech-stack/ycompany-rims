# ycompany-rimss

Description

This React project follows micro-frontends architecture design using Module Federation for higher scalability and maintainablility.
Modules are segregated by features as follows:

Modules
-  app_shell
-  auth
-  cart
-  offer
-  product
-  shared

The main application module is app_shell which runs on http://localhost:8000.
Components, utils and constants that are shared between different MFEs are in the shared MFE. For example Project theme resides in shared MFE to have 
constant theme across different MFEs.

The application uses graphql with Apollo client to query backend.
Backend is deployed on Render with the following url:
https://ycompany-graphql.onrender.com/graphql

We can run all MFEs in parallel by running below commands in root folder(client):
1. yarn install
2. yarn start
3. Application will run on http://localhost:8000

This is made possible with concurrently and wsrun packages. In every MFE root folder, we have a package.json with commands that responds to the commands in the root level package.json .
 
We can also run MFEs independetly.

To run app_shell mfe independently follow below steps:
1. Go to app_shell folder
2. yarn install
3. yarn start
4. app_shell will run on http://localhost:8000.


To run auth mfe independently follow below steps:
1. Go to auth folder
2. yarn install
3. yarn start
4. auth will run on http://localhost:8001.

To run cart independently follow below steps:
1. Go to cart folder
2. yarn install
3. yarn start
4. cart will run on http://localhost:8002.

To run offer independently follow below steps:
1. Go to offer folder
2. yarn install
3. yarn start
4. offer will run on http://localhost:8003.


To run product independently follow below steps:
1. Go to product folder
2. yarn install
3. yarn start
4. product will run on http://localhost:8004.

To run shared mfe follow below steps (Shared needs to be run with all mfes):
1. Go to auth folder
2. yarn install
3. yarn start
4. shared will run on http://localhost:8005.

The CI/CD pipeline is configured using “github Actions”.
Repository Link: https://github.com/poonam-tech-stack/ycompany-rims
Github Actions Workflows Link: https://github.com/poonam-tech-stack/ycompany-rims/actions

The new build is triggered as soon as the code is pushed to master branch and the build and deploy pipeline is triggered only for the MFEs have have some change in them. 

Application is deployed using Amazon S3 and Cloudfront services of AWS on following url:
https://dmdnxmbfd1yz2.cloudfront.net/
