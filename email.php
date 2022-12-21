<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if ($name && $phone) {
  $to = 'info@orienpharm.tj';
  $subject = 'Новое сообщение из сайта orienpharm.tj';
  $message = "Новый запрос о бесплатной консультации. Имя: $name. Телефон: $phone";

  $headers = 'From: web@demo.orienpharm.tj' . "\r\n" .
    'Reply-To: web@demo.orienpharm.tj' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    header("Location: https://orienpharm.tj/");
    die();
  } else {
    echo "Сервис временно не работает!";
  }
} else {
  header("Location: https://orienpharm.tj/");
  die();
}
