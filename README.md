# webdriverioPOC
Webdriver.IO POC (in progress) 

This a sample POC for webdriverIO. The main purpose is to use all the webdriverIO supported API to automate the web application.

Steps to install:
1. Clone the repo to local
2. Open the cloned repo in any editer (ex: VS code)
3. Install node 
4. Install webdriver io(for installation refer: https://webdriver.io/docs/gettingstarted)
5. Add Junit support - refer https://webdriver.io/docs/jenkins/


Jenkin Instalation steps on Mac(Precondition: homebrew should be installed):
1. Install the latest LTS version: brew install jenkins-lts
2. Install a specific LTS version: brew install jenkins-lts@YOUR_VERSION (for specific version of jenkin)
3. Start the Jenkins service: brew services start jenkins-lts
4. Restart the Jenkins service: brew services restart jenkins-lts
5. Update the Jenkins version: brew upgrade jenkins-lts

Create a custom app in you Gmail security settings.(Important for jenkins email notification support)
1. Log-in into Gmail with your account
2. Navigate to https://security.google.com/settings/security/apppasswords
3. In 'select app' choose 'custom', give it an arbitrary name and press generate
4. It will give you 16 chars token. 

Achived trigger pipeline on push event