<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if ($name && $phone) {
  $to = 'info@madadpharm.tj';
  $subject = 'Новое сообщение из сайта madadpharm.tj';
  $message = "Новый запрос о бесплатной консультации. Имя: $name. Телефон: $phone";

  $headers = 'From: web@demo.madadpharm.tj' . "\r\n" .
    'Reply-To: web@demo.madadpharm.tj' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    header("Location: https://madadpharm.tj/");
    die();
  } else {
    echo "Сервис временно не работает!";
  }
} else {
  header("Location: https://madadpharm.tj/");
  die();
}
