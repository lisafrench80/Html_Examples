// Shiv jquery 1.9+ for our old code...
// if you are using the latest version of jquery our plugin won't
// work as it stands...
(function($){
  // remap die() to off()
  $.fn.die = $.fn.off;

  // if you are supporting IE 7-8 for this project 
  // and plan to use the latest version of jQuery I recommend 
  // also using the jQuery migrate plugin to make use
  // of the browser detection script
  if(!$.browser) {
    $.browser = {};
    $.browser.msie = false;
  }
})(jQuery);



// Call the plugin
$('#emailSubmit').emailValidate({
  // this is used by CRM to map submissions to your page
  source:'Lookbook-Footer',

  // This option and the next only need to be entered 
  // here because we are not running  on famousfootwear.com
  submitURL: 'http://f.famousfootwear.com/ats/post.aspx?cr=100068&fm=86&s_email_address_sp1_status_id=',
  iconSrc: 'http://www.famousfootwear.com/Content/core/email/warning.png'

	// Here are a list of default options for the 
	// plugin that you can change in the call if you want. 
	// 
	//
	// exp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	// backgroundColor: '#d11919',
	// fontColor: '#ffffff',
	// fontSize: false,
	// errorClass: 'error',
	// placeholder: 'Email Address',
	// iconSrc: '/Content/core/email/warning.png',
	// successMsg: 'Thanks for signing up!',
	// timeout: 6000,
	// submitURL: false,
	// submitBtn: false,
	// validation: false,
	// validationError: false,
	// success: false,
	// source: false,
	// baseCSSel: false,
	// souceAppend:false,
	// styles: '',
	// ieStyles: '*background:url(/Content/core/email/ie7-bubble.png) bottom left no-repeat transparent; *padding:.5em 1em 1.5em; *margin-bottom:-5px; *zoom:1;',
  
});