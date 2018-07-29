package=$(mktemp -d lambda-send-email-deploy-XXXX)
cp send_email_lambda.py $package/
cp -r venv/lib/python3.6/site-packages/* $package/
pushd $package/
zip -r lambda-send-email.zip .
mv lambda-send-email.zip ../
popd
rm -rf $package/
