export default function SignOut() {
      return (
        <head>
        <style type="text/css">
          .myButton {
            box-shadow:inset 0px 1px 3px 0px #91b8b3;
            background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
            background-color:#768d87;
            border-radius:5px;
            border:1px solid #566963;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:TimesNewRoman;
            font-size:15px;
            font-weight:bold;
            padding:11px 23px;
            text-decoration:none;
            text-shadow:0px -1px 0px #2b665e;
        }
        .myButton:hover {
            background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
            background-color:#6c7c7c;
        }
        .myButton:active {
            position:relative;
            top:1px;
        }
        </style>
        </head>
        <body>


          <!--<a href="#" class="myButton">dark grey</a>-->


          <button onclick="myFunction()" class="myButton">Log Out</button>
          <script type="text/javascript">
            function myFunction() {
              //if(jwtTokenService.validateToken(token)) {
                //ipAddress = getClientIp(request);
                //if(!ipAddress.equals(jwtTokenService.getClientIp(token))) {
                  alert("You are logging out");
                  window.location.href = "signinpagetemp.html"
                //}
              //}
            }
          </script>

        </body>
      )
    }