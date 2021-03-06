# This is project to test out the DevOps in GitHub

# Planning to use a simple Node.js (express) backend program that connect to sqlite instead of Azure MySQL for this DevOps

The functions to show are:
1. Commit changes to code
2. Auto send a Telegram notification of new commit and start of Build/Publish/Deploy
3. test npm ci - installs dependencies directly from package-lock.json and uses package.json only to validate that there are no mismatched versions.
4. test npm install - install all its dependencies. Rreads package.json to create a list of dependencies   
5. Build the docker file
6. Push the image to Google Cloud Run
7. Deploy the docker image at Google Cloud Run
8. Run the docker image

Steps:
1. Change the existing backend program using Azure MySQL server to SQLite & Test the backend program
2. Creating a new Telegram Bot (using /newbot command) to get a token & manually send a message to your bot to activate
3. Talk to @jsondumpbot to get your chat ID
4. Setup GitHub secrets for the token and chat ID
5. Implement the Github Action Telegram Notify with the token and chat ID to send notification
6. Enable Google Cloud Build API
7. Add a new Google service account with role: Cloud Build Service Account, Cloud Build Editor, Service Account User, Cloud Run Admin, Viewer 
8. Generate a key.json with the credential
9. Setup Github secrets environment - GCP_PROJECT, GCP_APPLICATION, GCP_EMAIL, GCP_CREDENTIALS
10. Create Github Actrion Workflow

GitHub Action Workflow successfully completed:
![2021-06-11 12_03_36-Update Dockerfile · vlookok_DevOpsNUSProj@0344e4a](https://user-images.githubusercontent.com/79569990/121629104-1bd48e80-caad-11eb-927d-34d4f54e4b22.jpg)

Docker image successfully deployed to Google Cloud Run:
![image](https://user-images.githubusercontent.com/79569990/121629266-6524de00-caad-11eb-8f7e-4e9482b7373f.png)

URL to test the app deployed to Google Cloud Run:
1. https://nusdevops1-4zf7yfmiwq-uc.a.run.app/api/test
2. https://nusdevops1-4zf7yfmiwq-uc.a.run.app/api/getbal?user_id=1&password=123450
