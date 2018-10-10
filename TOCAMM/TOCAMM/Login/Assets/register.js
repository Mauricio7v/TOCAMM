// JavaScript Validation For Registration Page

$('document').ready(function()
{ 		 		
		 // name validation
		  var nameregex = /^[a-zA-Z ]+$/;
		 
		 $.validator.addMethod("validname", function( value, element ) {
		     return this.optional( element ) || nameregex.test( value );
		 }); 
		 
		 // valid email pattern
		 var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 
		 $.validator.addMethod("validemail", function( value, element ) {
		     return this.optional( element ) || eregex.test( value );
		 });
		 
		 $("#register-form").validate({
					
		  rules:
		  {
				Nombre: {
					required: true,
					validname: true,
					minlength: 10
              },
              nombreus: {
                  required: true,
                  validname: false,
                  minlength: 4
              },
              CorreoElectronico: {
					required: true,
					validemail: true
				},
              pass: {
					required: true,
					minlength: 6,
					maxlength: 15
				},
              cpass: {
					required: true,
					equalTo: '#pass'
				},
		   },
		   messages:
		   {
               Nombre: {
					required: "Please Enter your Name",
					validname: "Name must contain only alphabets and space",
					minlength: "Your Name is Too Short"
               },
               nombreus: {
                   required: "Please Enter User Name",
                   minlength: "Your Name is Too Short"
               },
               CorreoElectronico: {
					  required: "Please Enter Email Address",
					  validemail: "Enter Valid Email Address"
					   },
				pass:{
					required: "Please Enter Password",
					minlength: "Password at least have 6 characters"
					},
				cpass:{
					required: "Please Retype your Password",
					equalTo: "Password Did not Match !"
					}
		   },
		   errorPlacement : function(error, element) {
			  $(element).closest('.form-group').find('.help-block').html(error.html());
		   },
		   highlight : function(element) {
			  $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		   },
		   unhighlight: function(element, errorClass, validClass) {
			  $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
			  $(element).closest('.form-group').find('.help-block').html('');
		   },
		   
		   		submitHandler: function(form){
					
					alert('submitted');
					form.submit();
					//var url = $('#register-form').attr('action');
					//location.href=url;
					
				}
				
				/*submitHandler: function() 
							   { 
							   		alert("Submitted!");
									$("#register-form").resetForm(); 
							   }*/
		   
		   }); 
		   
		   
		   /*function submitForm(){
			 
			   
			   /*$('#message').slideDown(200, function(){
				   
				   $('#message').delay(3000).slideUp(100);
				   $("#register-form")[0].reset();
				   $(element).closest('.form-group').find("error").removeClass("has-success");
				    
			   });
			   
			   alert('form submitted...');
			   $("#register-form").resetForm();
			      
		   }*/
});