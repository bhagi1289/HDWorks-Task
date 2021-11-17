# FanFight Wallet
steps to deploy this application.

```
npm install -g serverless

sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
```
Move to the FanFightWallet folder and enter the below command to install npm modules in your local system.
```
npm install
```
to deploy this application on AWS Lambda enter the below command.

```
sls deploy
```
After deploying the application on Lambda it will generate us the URL.

in my case I got the URL as below<br>
https://0cqagmew92.execute-api.us-east-1.amazonaws.com/dev/fanfight?percentage=20

Note: I have assumed below are the default values but percentage is a parameter which is must provided to the URL.<br/>
bonus: 60,<br/>
deposit: 100,<br>
winnings: 340<br/>
<hr/>
Below is the complete URL<br/>

https://0cqagmew92.execute-api.us-east-1.amazonaws.com/dev/fanfight?percentage=20&bonus=60&deposit=100&winnings=340