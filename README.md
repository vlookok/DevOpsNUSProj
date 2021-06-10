# This is project to test out the DevOps in GitHub

# Planning to use a simple Node.js (express) backend program that connect to sqllite instead of Azure MySQL for this DevOps

The functions to show are:
1. Commit changes to code
2. Auto send a Telegram notification of new commit and start of Build/Publish/Deploy
3. test npm ci - installs dependencies directly from package-lock.json and uses package.json only to validate that there are no mismatched versions.
4. test npm install - install all its dependencies. Rreads package.json to create a list of dependencies   
5. Build the docker file
6. Push the image to Google Cloud Run
7. Deploy the docker image at Google Cloud Run
8. Run the docker image
9. Send a Telegram notificaiton of complete of deployment to Google Cloud Run

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
