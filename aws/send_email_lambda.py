import os
import smtplib
from email.mime.text import MIMEText

SMTP_SERVER = os.environ['SMTP_SERVER']
SMTP_PORT = os.environ['SMTP_PORT']
INFORMATION_EMAIL = os.environ['INFORMATION_EMAIL']
SENDER_EMAIL = os.environ['SENDER_EMAIL']
SENDER_PASSWORD = os.environ['SENDER_PASSWORD']
HTML_MESSAGE = '''
<html>
  <body>
    <p>
      <b>Correo:</b>
    </p>
    <p>
      {0}
    </p>
    <p style="margin-top:30px">
      <b>Mensaje:</b>
    </p>
    <p>
      {1}
    </p>
  </body>
</html>
'''


def send_email(event, context):
    print(event)
    subject_email = event['subject']
    from_email = event['email']
    text = event['message']

    message = MIMEText(
        HTML_MESSAGE.format(subject_email, text),
        'html'
    )
    message['Subject'] = subject_email
    message['From'] = SENDER_EMAIL
    message['To'] = INFORMATION_EMAIL
    message['Reply-To'] = from_email

    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.login(SENDER_EMAIL, SENDER_PASSWORD)
    server.starttls()
    server.sendmail(
        SENDER_EMAIL,
        [INFORMATION_EMAIL, from_email],
        message.as_string()
    )
    server.quit()
