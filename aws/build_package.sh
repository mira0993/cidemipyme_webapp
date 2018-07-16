rm -r lambda-send-email-deploy > /dev/null 2>&1
mkdir lambda-send-email-deploy
cp send_email_lambda.py lambda-send-email-deploy/
cp -r venv/lib/python3.6/site-packages/* lambda-send-email-deploy/
cd lambda-send-email-deploy/
zip -r lambda-send-email.zip .
mv lambda-send-email.zip ../
cd ..
rm -r lambda-send-email-deploy/
