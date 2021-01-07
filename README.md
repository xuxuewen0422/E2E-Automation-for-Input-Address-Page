# E2E-Automation-for-Input-Address-Page
**File Description**
This is a E2E Automation Testing for entering address page of Jerry.ai
webdriverio-test.rar is complete project package file.
wdio.conf.js and example.e2e.js are the main code files.

**Steps to Reproduce**
1.Follow [docs of webdriverIO](https://webdriver.io/docs/gettingstarted.html) to set and configure webdriverIO project. After creation, use the contents of wdio.conf.js and example.e2e.js files replace the created template file respectively.
Or decompress webdriverio-test.rar. After entering the file directory, execute the *$ npm install* command to install the corresponding dependencies.

2.Run the automation testing by *$ npx wdio wdio.conf.js* command.

**Some other operations**
1.For first running, 
For the first run, it should be added *browser.pause(60000)* to make the browser have enough time to manually operate the first registration and the mobile phone verification process to reach the signup address page so that the operation record can be saved in the target folder of the test browser. Or if the local chrome user file has already been recorded in the chrome profile folder, copy it directly to the target folder of the test browser.

2.For Allure Reporter
[Detailed steps](https://webdriver.io/docs/allure-reporter.html)
The process to make Trend and History work:
Before generating the report, copy the history folder from your previous allure-report folder inside your current allure-results folder.
Therefore your new allure-report will have a new history folder that you need to save for the next day, and so on and so forth.

