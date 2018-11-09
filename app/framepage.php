<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/img/logo-fav.png">
    <title>Beagle</title>
    <link rel="stylesheet" type="text/css" href="https://justcall.io/theme/assets/lib/perfect-scrollbar/css/perfect-scrollbar.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://justcall.io/theme/assets/lib/material-design-icons/css/material-design-iconic-font.min.css"/>
    <script src="https://use.fontawesome.com/1a28e18715.js"></script>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../assests/css/custom.css">
    <link rel="stylesheet" href="https://justcall.io/theme/assets/css/style.css" type="text/css"/>
  </head>
  <body style="width: 100%; background-color: transparent;">
            <div class="col-sm-12">
              <button class="btn btn-rounded btn-space btn-primary click-now" onclick="return resizeframe()" id="click-now-button"><i class="fa fa-phone p-shake"></i></button>
              <div class="panel panel-default" style="display: none" id="messagepanel">
                <!-- <div class="panel-heading">Icon Text Tabs</div> -->
                <div class="tab-container">
                  <ul class="nav nav-tabs" style="display: flex; flex-direction: row;">
                    <li class=""><a href="#home5" data-toggle="tab" aria-expanded="true"><span class="icon mdi mdi-home"></span>Call Now </a></li>
                    <li class=""><a href="#profile5" data-toggle="tab" aria-expanded="false"><span class="icon mdi mdi-face"></span>Call me later</a></li>
                    <li class="active"><a href="#messages5" data-toggle="tab" aria-expanded="false"><span class="icon mdi mdi-email"></span>leave a message</a></li>
                  </ul>
                  <div class="tab-content">
                    <div id="home5" class="tab-pane">
                      <h4>Top Tabs</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lacus ipsum, tempus consequat turpis auctor sit amet. Pellentesque porta mollis nisi, pulvinar convallis tellus tristique nec.</p>
                      <p> Nam aliquet consequat quam sit amet dignissim. Quisque vel massa est. Donec dictum nisl dolor, ac malesuada tellus efficitur non. Pellentesque pellentesque odio neque, eget imperdiet eros vehicula lacinia.</p>
                    </div>
                    <div id="profile5" class="tab-pane">
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima praesentium laudantium ipsa, enim maxime placeat, dolores quos sequi nisi iste velit perspiciatis rerum eveniet voluptate laboriosam perferendis ipsum. Expedita, maiores.</p>
                      <p> Consectetur adipisicing elit. Minima praesentium laudantium ipsa, enim maxime placeat, dolores quos sequi nisi iste velit perspiciatis rerum eveniet voluptate laboriosam perferendis ipsum. Expedita, maiores.</p>
                    </div>
                    <div id="messages5" class="tab-pane cont active">
                      <form method="post" id="queryform">

                        <div class="form-group">
                          <input type="email" name="email" placeholder="email" class="ip-form" id="name">
                        </div>
                        
                        <div class="form-group">
                          <input type="text" name="Number" placeholder="number" class="ip-form" id="phone">
                        </div>
                        
                        <div class="form-group">
                          <textarea class="ip-form-texta" placeholder="Please Write Your Query here" name="query" rows="5"></textarea>
                        </div>

                        <div class="form-group ">
                          <button class="btn-cus">Submit</button>
                        </div>
                      </form>
                      <div class="w-policy">Powered By <img src="https://cdn.justcall.io/images/logo-desktop.png" height="21px"></div>
                    </div>
                  </div>
                </div>

                <div class="closeframe" onclick="undoResizingFrame()"><i class="fa fa-times cross" aria-hidden="true"></i></div>
              </div>

            </div>
            

    <script src="https://justcall.io/theme/assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="https://justcall.io/theme/assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
    <script src="https://justcall.io/theme/assets/js/main.js" type="text/javascript"></script>
    <script src="https://justcall.io/theme/assets/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="https://justcall.io/theme/assets/lib/jquery.niftymodals/dist/jquery.niftymodals.js" type="text/javascript"></script>
    <script type="text/javascript">
      $.fn.niftyModal('setDefaults',{
        overlaySelector: '.modal-overlay',
        closeSelector: '.modal-close',
        classAddAfterOpen: 'modal-show',
      });
      
      $(document).ready(function(){
        console.log("child page")
        App.init();
      });
    </script>

    <script type="text/javascript">

      function resizeframe(){
        
        let iframe = parent.document.getElementById('abc');
        iframe.style.width = '456px';
        iframe.style.height = '470px';
        iframe.style.background = 'white';
        if(window.innerWidth < 576){
          iframe.style.width = '100%';
          iframe.style.height = '70vh';
          iframe.style.left = '0';
        }


        iframe.firstChild.style.height='100%';
        iframe.firstChild.style.width = '100%';
        document.getElementById('messagepanel').style.display = 'block'
        document.getElementById('click-now-button').style.display = 'none'

      }

      function undoResizingFrame(){
        let iframe = parent.document.getElementById('abc');
        iframe.style.width = '';
        iframe.style.height = '';
        iframe.firstChild.style.height='';
        iframe.firstChild.style.width = '';
        iframe.style.background = 'transparent';
        document.getElementById('messagepanel').style.display = 'none'
        document.getElementById('click-now-button').style.display = 'block'
      }


      $('#queryform').submit(function(e) {

        e.preventDefault();
        let $form = $( this ),
        dataToBeSent = {};
        
        $.each($($form).serializeArray(),function(i,v){
          dataToBeSent[v.name] = v.value
        })

        $.post('http://localhost/callbutton/api/savedata.php', {dataToBeSent: dataToBeSent}, 
        function(data, textStatus, xhr) {
          if(data.isDataSaved == true){
            alert('Data is saved')
          }else{
            alert('some error occured');
          }
        },'json');

      });

    </script>

  </body>
</html>