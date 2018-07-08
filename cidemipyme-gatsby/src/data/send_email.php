<?php
if(isset($_POST["email"])) {
  $to = "miraleeb@hotmail.com";
  $subject = $_POST["subject"];
  $from = $_POST["email"];
  $message = $_POST["message"];
  $html_message = '
    <html>
      <body>
        <p>
          <b>Correo:</b>
        </p>
        <p>'
          . $from .
        '</p>
        <p style="margin-top:30px">
          <b>Mensaje:</b>
        </p>
        <p>'
          . $message .
        '</p>
      </body>
    </html>
  ';

  $headers =
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=iso-8859-1" . "\r\n" .
    "From: " . $from . "\r\n" .
    "Reply-To: " . $from . "\r\n" .
    "Cc: " . $from . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $html_message, $headers);
}
?>
<script type='text/javascript'>
  window.close();
</script>
