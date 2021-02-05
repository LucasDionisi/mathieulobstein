<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Mathieu Lobstein</title>
  <meta name="”description”" content="””">
  <meta name="”keywords”" content="””">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="format-detection" content="telephone=no">
  <link rel="shortcut icon" href="../com/img/contest/favicon/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="../com/css/realisation.css">
  <link rel="stylesheet" href="../com/css/main.min.css">
  <link rel="stylesheet" href="../com/libs/owl_carousel_2/assets/owl.carousel.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans&amp;display=swap" rel="stylesheet">
</head>

<body class="body page-template-landing-page dark_theme" style="background-color:#421255; overflow: hidden;" >
  <div class="preloader">
    <div class="transition-loader">
      <div class="transition-loader-inner">
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
      </div>
    </div>
  </div><!-- Start Header-->
  <header class="header header_burger" data-sticly="off">
    <div class="header_in">
      <div class="header_logo">
        <div class="header_logo_link">
          <a class="custom-logo-link" href="../">

            <div class="custom-logo" style="margin-top: 15px;"><img src="../com/img/contest/logo.png" width="50" height="36">
            </div>
          </a>
        </div>
      </div>
      <nav>
        <ul class="header_menu_hide header_menu_burger" id="menu-primary-menu">
          <li class="menu-item-wrap">
            <ul class="menu-item-ul">
              <li class="">
                <a class="header_menu_link" href="../"> Accueil</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="header_menu_link" href="../realisation/"> Réalisations</a>
              <li class="menu-item menu-item-has-children">
                <a class="header_menu_link" href="../services/"> Services</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="header_menu_link" href="../a_propos/"> A propos</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="header_menu_link" href="../contact/"> Contacts</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="header_menu_link" href="#"> FR/EN</a>
              </li>
            </ul>
          </li>
          <li>
            <ul class="menu_social">
              <ul class="menu_social">
                <li><a id="follow-click1" class="socials_link" href="https://many.link/mathieu.lobstein"><i class="fa fa-link"></i></a></li>
              </ul>
              <p><a id="follow-click2">Me suivre</a></p>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="burger">
        <div class="burger_in"></div>
      </div>
    </div>
  </header><!-- End Header-->
  <div class="content-area" id="primary" data-animate="on">
    <br><br>
      <div class="contact_bg" >
        <!-- Start Portfolio-->
        <div class="contact_form">
          <div class="container">
            <div class="title wow fadeInUp" data-wow-delay=".2s">Me Contacter</div>
            <div class="subtitle">Faisons quelque chose de grand ensemble.</div>
            <div class="PNb">4<span class="invisible">9</span>0<span class="invisible">1</span>1 <span class="invisible">6</span>4<span class="invisible">00</span>4<span class="invisible">2</span>2 2<span class="invisible">4</span>8<span class="invisible">7</span>6 (33+)</div>
            <div class="AdrM">moc<span class="invisible">hey</span>.kool<span class="invisible">.goir</span>tuo<span class="invisible">gh</span>@<span class="invisible">yay</span>niet<span class="invisible">4Po</span>sbol_<span class="invisible">9uhg</span>ueih<span class="invisible">$2eD</span>tam                          
            </div>
            <div class="form_wrapp wow fadeInUp" data-wow-delay=".2s">
              <form action="" method="post" id="contact-form">
                <p>
                  <span><b>Votre nom : </b></span><input id="name" type="text" required name="name" placeholder="* prenom nom"><br>
                  <span><b>Entreprise :</b></span><input id="work" type="text" name="work" placeholder="* nom de l'entreprise"><br>
                  <span><b>Votre numéro de téléphone :</b></span><input id="phone" type="text" name="phone" placeholder="* xx xx xx xx xx"><br>
                  <span><b>Votre email :</b></span><input id="email" type="email" required name="email" placeholder="* votre@email.com"><br>
                  <span><b>Ce que vous faites :</b></span><input id="business" type="text" name="business" placeholder=""><br>
                  <span><b>Par quoi êtes vous intéressé :</b></span><input id="message" type="text" name="message" placeholder=""><br>
                </p>
                <div class="form_btn">
                  <input class="btn accen" name="sumbitBtn" type="submit" value="Envoyer">
                </div>
                <div class="form_result" id="success">Votre méssage a été envoyé</div>
                <div class="form_result" id="error">Impossible d'envoyer votre méssage</div>
              </form>
            </div>
          </div>
        </div><!-- End Portfolio-->
      </div>

    <?php
      if(isset($_POST['sumbitBtn'])) {
        $name = $_POST['name'];
        $work = $_POST['work'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $business = $_POST['business'];
        $message = $_POST['message'];

        $to = 'contact@mathieulobstein.com';
        $from = $email;
        $subject = "Contact mathieulobstein.com";
        $message2 = "Bonjour, mon nom est : " . $name . ", je travaille pour : " . $work . ", vous pouvez me contacter au : " . $phone . ", ou par email via "
          . $email . ", si je devais écrire ce que nous faisons, je dirais : " . $business . "je suis interessé pour : " . $message;

        $headers = 'From:' .$from;

        mail($to, $subject, $message2, $headers);
      }
    ?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../com/libs/jquery/dist/jquery.min.js"></script>
    <script src="../com/js/scripts.min.js"></script>
    <script src="../com/libs/owl_carousel_2/owl.carousel.min.js"></script>
    <script src="../com/pug/components/slider/index.js"></script>
</div>
</body>

</html>