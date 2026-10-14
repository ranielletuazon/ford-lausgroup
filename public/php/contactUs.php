<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

<script src="//crm.lausgroup.com.ph/ContactUs/sweetalert2.all.min.js"></script>
<link rel='//crm.lausgroup.com.ph/ContactUs/stylesheet' href='sweetalert2.min.css'>

<!--Accounting JS-->
<script language="javascript" src="//crm.lausgroup.com.ph/bootstrap5/accountingJS/accounting.js"></script>

<!-- Form Validation -->
<script src="//crm.lausgroup.com.ph/bootstrap5/custom-css-js/form_validation.js"></script>


<?php
$srv = $_SERVER['HTTP_HOST'];
$uri = $_SERVER['REQUEST_URI'];

if ($srv == 'localhost') {
	$url  = "../";
	$myCRMurl2 = "";
	$allDealer = 'Yes';
} elseif ($srv == 'dev.lausgroup.com.ph') {
	$url  = "../crm/";
	$myCRMurl2 = "../crm/ContactUs/";
	$allDealer = 'Yes';
} elseif ($srv == 'dev.lausautogroup.com') {
	$url  = "//crm.lausgroup.com.ph/";
	$myCRMurl2 = "//crm.lausgroup.com.ph/ContactUs/";
	$allDealer = 'Yes';
} else {
	$url  = "//crm.lausgroup.com.ph/";
	$myCRMurl2 = "//crm.lausgroup.com.ph/ContactUs/";
	$allDealer = 'No';
}

if (strlen(trim($uri)) > 0) {
	$allDealer = 'No';
}

// Program to display URL of current page.
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
	$link = "https";
} else {
	$link = "http";
}

// Here append the common URL characters.
$link .= "://";

// Append the host(domain name, ip) to the URL.
$link .= $_SERVER['HTTP_HOST'];

// Append the requested resource location to the URL
$link .= $_SERVER['REQUEST_URI'];

$isLAS = 'No';

switch ($srv) {
	case 'dev.lausgroup.com.ph':
		$myCond = " websites = '$link' ";
		break;
	case 'dev.lausautogroup.com':
		$link2    = explode("/", $link);
		$linkvar  = explode("-", $link2[3]);
		$linkvar1 = $linkvar[0];
		$myCond   = " websites LIKE '%$linkvar1%' ";

		if ($linkvar1 == 'crm') {
			$allDealer = 'Yes';
		} elseif ($linkvar1 == 'hyundai') {
			$linkvarCat = $linkvar[1];
			if ($linkvarCat == 'cars') {
				$myCond  = " websites LIKE '%https://dev.lausgroup.com.ph/hyundai-dagupan%' ";
			} else {
				$myCond  = " websites LIKE '%https://dev.lausgroup.com.ph/hyundai-trucks-and-buses-baliwag%' ";
			}
			$allDealer = 'No';
		} else {
			$allDealer = 'No';
		}

		if ($link2[3] == 'contact-us') {
			$allDealer = 'Yes';
		} else {
			$allDealer = 'No';
		}

		break;
	case 'mitsubishicarworld.com.ph':
		$allDealer = 'No';
		break;
	case 'www.changhe.com.ph':
		$allDealer = 'No';
		break;
	case 'www.haima.com.ph':
		$allDealer = 'No';
		break;
	case 'www.lausmazdagroup.com.ph':
		$allDealer = 'No';
		break;
	case 'www.lausautoservices.com.ph':
		$allDealer = 'Yes';
		$isLAS = 'Yes';
		break;
	case 'localhost':
		$allDealer = 'Yes';
		break;
	default:
		$allDealer = 'No';
		break;
}

?>

<div>
	<form class="elementor-form" method="post" novalidate style="width:100%;" <?php $this->print_render_attribute_string('form'); ?>>

		<input type="hidden" id="mySite" name="mySite" value="<?php echo $link; ?>">
		<input type="hidden" id="myurl" name="myurl" value="<?php echo $srv; ?>">
		<input type="hidden" id="myurl2" name="myurl2" value="<?php echo $uri; ?>">
		<input type="hidden" id="allDealer" name="allDealer" value="<?php echo $allDealer; ?>">
		<input type="hidden" id="isLAS" name="isLAS" value="<?php echo $isLAS; ?>">

		<div class="container">
			<?php
			foreach ($instance['form_fields'] as $item_index => $item) :
				$item['input_size'] = $instance['input_size'];
				$this->form_fields_render_attributes($item_index, $instance, $item);
				$field_type = $item['field_type'];
				$item = apply_filters('elementor_pro/forms/render/item', $item, $item_index, $this);
			?>

			<?php endforeach; ?>

			<div class="row">

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="fname" placeholder="First Name" autocomplete="off" required>
						<label for="floatingInput">First Name</label>
						<div class="invalid-feedback">Please enter your Firstname</div>
					</div>

				</div>

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="lname" placeholder="Last Name" required autocomplete="off">
						<label for="floatingInput">Last Name</label>
						<div class="invalid-feedback">Please enter your Lastname</div>
					</div>
				</div>

			</div><!-- end of row -->

			<div class="row">
				<div class="col-md-6 mb-3">

					<div class="form-floating">
						<select class="form-select" id="bansa" aria-label="Floating label select example" autocomplete="off" onChange="get_province();">
							<option>Open this to Select Country</option>
						</select>
						<label for="floatingSelect">Country</label>
					</div>

				</div>

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<select class="form-select" id="probinsya" name="probinsya" aria-label="Floating label select example" required autocomplete="off">
							<option>Open this to Select Province</option>
						</select>
						<label for="floatingSelect">Province/City</label>
						<div class="invalid-feedback">Please select your Province</div>
					</div>
				</div>
			</div>

			<div class="row">

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="myCity" placeholder="City" required autocomplete="off">
						<label for="floatingInput">Address</label>
						<div class="invalid-feedback">Please enter your Address</div>
					</div>
				</div>

				<div class="col-md-3 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="myCntryCode" placeholder="Country Code" required readonly autocomplete="off">
						<label for="floatingInput">Country Code</label>
						<div class="invalid-feedback">Please enter your Country Code</div>
					</div>
				</div>

				<div class="col-md-3 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="myAreaCode" placeholder="Area Code" value=" " autocomplete="off">
						<label for="floatingInput">Area Code <span style="font-size: 12px; color: grey;">(Telephone)</span></label>
						<div class="invalid-feedback">Please enter your Area Code</div>
					</div>
				</div>



			</div><!-- end of row -->

			<div class="row">

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<input type="text" class="form-control" id="myNumber" placeholder="Contact Number" required autocomplete="off">
						<label for="floatingInput">Contact Number</label>
						<div class="invalid-feedback">Please enter your Contact Number</div>
					</div>
				</div>

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<input type="email" class="form-control" id="myEmail" placeholder="Email Address" required autocomplete="off">
						<label for="floatingInput">Email Address</label>
						<div class="invalid-feedback">Please provide valid Email Address</div>
					</div>
				</div>

			</div><!-- end of row -->

			<div class="row">


				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<select class="form-select" id="dlrship" aria-label="Floating label select example" onChange="get_VehModels()">
						</select>
						<label for="floatingSelect">Preferred Dealership</label>
					</div>
				</div>

				<div class="col-md-6 mb-3">
					<div class="form-floating">
						<select class="form-select" id="cntctype" aria-label="Floating label select example" onChange="myFunction()">
							<option value="INQR">Inquiry</option>
							<option value="TDRV">Test Drive</option>
							<option value="GQOT">Vehicle Sales Quotation</option>
							<option value="SVRAPNT">Service Appointment</option>
						</select>
						<label for="floatingSelect">How may we help you?</label>
						<div class="invalid-feedback">Please select Contact Typ</div>
					</div>
				</div>
			</div><!-- end of row -->

			<div id="SVRAPNT" class="collapse"> <!-- Begin Service Appointment -->
				<div class="row mb-3">

					<div class="col-md-3">
						<div class="form-floating">
							<input type="text" class="form-control" id="PltCs" placeholder="Plate/Cond.#" autocomplete="off">
							<label for="floatingInput">Plate/Cond.#</label>
						</div>
					</div>

					<div class="col-md-3">
						<div class="form-floating"><!-- id="YrModel" -->
							<input type="text" class="form-control" id="VehVIN" placeholder="VIN" autocomplete="off">
							<label for="floatingInput">VIN</label>
						</div>
					</div>

					<div class="col-md-6">
						<div class="form-floating">
							<input type="text" class="form-control" id="VehDesc" placeholder="Vehicle Model Description" autocomplete="off">
							<label for="floatingInput">Vehicle Model Description</label>
						</div>
					</div>



				</div><!-- end of row -->

				<div class="row mb-3">

					<div class="col-md-2">
						<div class="form-floating">
							<input type="text" class="form-control" id="VehOdo" placeholder="Odometer"
								oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" onKeyUp="format(this)" autocomplete="off">
							<label for="floatingInput">Odometer</label>
						</div>
					</div>

					<div class="col-md-3">
						<div class="form-floating flex-grow-1">
							<input type="text" class="form-control" id="prefdate" placeholder="Preferred Date" name="prefdate" autocomplete="off" size="15">
							<label for="floatingInput">Preferred Date</label>
						</div>


					</div>

					<div class="col-md-3">
						<div class="form-floating">
							<select class="form-select" id="pretime" aria-label="Floating label select example" autocomplete="off">
							</select>
							<label for="floatingSelect">Preferred Time</label>
						</div>
					</div>

					<div class="col-md-4">
						<div class="form-floating">
							<select class="form-select" id="jobtype" aria-label="Floating label select example" autocomplete="off">

							</select>
							<label for="floatingSelect">Service Type</label>
						</div>
					</div>

				</div><!-- end of row -->

			</div> <!-- End Service Appointment -->

			<div id="GETQUOTE" class="collapse"> <!-- Begin Get Quotation -->
				<div class="row mb-3">
					<div class="col-md-4">

						<div class="form-floating" id="VarSelect">
							<select class="form-select" id="VehDescQ" aria-label="Floating label select example" autocomplete="off">
							</select>
							<label for="floatingSelect">Model Description</label>
						</div>

						<div class="form-floating" id="VarManual">
							<input type="text" class="form-control" id="VehDescQM" placeholder="Vehicle Model Description" autocomplete="off">
							<label for="floatingInput">Model Description</label>
						</div>

					</div>

					<div class="col-md-3">
						<div id="VarManual2">
							<div class="form-floating">
								<input type="text" class="form-control" id="SpesVehDesc" placeholder="Vehicle Model Description" autocomplete="off">
								<label for="floatingInput">Model Description</label>
							</div>
						</div>
					</div>

					<div class="col-md-3">

						<div class="form-floating" id="MOP">
							<select class="form-select" id="PayMode" aria-label="Floating label select example" autocomplete="off">
								<option value="FIN">Financing</option>
								<option value="CASH">Cash</option>
							</select>
							<label for="floatingSelect">Payment Mode</label>
						</div>
					</div>

					<div class="col-md-2">
						<div class="form-floating" id="TermCtrl">
							<select class="form-select" id="PayTermQ" aria-label="Floating label select example" autocomplete="off">
								<option value="12 Months">12 Months</option>
								<option value="24 Months">24 Months</option>
								<option value="36 Months">36 Months</option>
								<option value="48 Months">48 Months</option>
								<option value="60 Months">60 Months</option>
							</select>
							<label for="floatingSelect">Payment Term</label>
						</div>
					</div>


				</div><!-- end of row -->
			</div> <!-- End SGet Quotation -->


			<div class="row mb-3">
				<div class="col-md-12">
					<div class="form-floating">
						<textarea class="form-control" placeholder="Leave a comment here" id="tellUs" style="height: 100px" required></textarea>
						<label for="floatingTextarea2">
							<div id="telwhat">Tell Us Your Inquiry</div>
						</label>
					</div>
				</div>
			</div><!-- end of row -->

			<div class="row  mb-3">
				<div class="form-floating">
					<input type="checkbox" name="dpa" id="dpa" value="1">
					By using this form and providing my personal information, I expressly consent to the collection, processing and disclosure of my personal data and information by the Company in this website in accordance with our <a href="https://dev.lausgroup.com.ph/privacy-policy/"><u>Data Protection Policy.</u></a>
				</div>
			</div><!-- end of row -->

			<div class="row mb-3">
				<div class="col-lg-12">
					<div class="g-recaptcha" data-sitekey="6LcAFtwhAAAAAJuWKOlLTpdmrj29oMxqSE1tvXbl" data-callback="callback" data-expired-callback="callbackExp"></div>
				</div>
			</div><!-- end of row -->

			<div class="row mb-3">
				<div class="col-lg-12">

					<button type="button" class="btn btn-danger" id="btnSend" style="width:100%" disabled>Send</button>
				</div>
			</div><!-- end of row -->


		</div>
	</form>
</div>
<script src='https://www.google.com/recaptcha/api.js'></script>
<script>
	document.getElementById("GETQUOTE").style.display = "block";
	document.getElementById("MOP").style.display = "none";
	document.getElementById("TermCtrl").style.display = "none";
	document.getElementById("VarManual2").style.display = "none";
	document.getElementById("VarManual").style.display = "none";

	function myFunction() {
		var cntctype = $("#cntctype").val();
		switch (cntctype) {
			case "INQR":
				document.getElementById("SVRAPNT").style.display = "none";
				document.getElementById("GETQUOTE").style.display = "block";

				document.getElementById("MOP").style.display = "none";
				document.getElementById("TermCtrl").style.display = "none";
				document.getElementById("VarManual2").style.display = "none";

				var arr_dlrBrand = $('#dlrship').find(':selected').data('id');
				var arr_dlrBrand_id = arr_dlrBrand.split("|");
				var dlrId = arr_dlrBrand_id[0];
				var BrndID = arr_dlrBrand_id[1];

				if (BrndID == 'MIX') {
					document.getElementById("VehDescQ").required = false;
					document.getElementById("SpesVehDesc").required = false;
					document.getElementById("VarManual").style.display = "block";
					document.getElementById("VarSelect").style.display = "none";
				} else {
					document.getElementById("VehDescQ").required = true;
					document.getElementById("VarManual").style.display = "none";
					document.getElementById("VarSelect").style.display = "block";
				}


				// Dyanamically Require user to fillup the following...
				document.getElementById("PltCs").required = false;
				document.getElementById("VehVIN").required = false;
				document.getElementById("VehDesc").required = false;
				document.getElementById("prefdate").required = false;
				document.getElementById("pretime").required = false;
				document.getElementById("jobtype").required = false;

				$("#telwhat").text("Tell Us Your Inquiry");
				break;
			case "TDRV":
				document.getElementById("SVRAPNT").style.display = "none";
				document.getElementById("GETQUOTE").style.display = "none";

				// Dyanamically Require user to fillup the following...
				document.getElementById("PltCs").required = false;
				document.getElementById("VehVIN").required = false;
				document.getElementById("VehDesc").required = false;
				document.getElementById("prefdate").required = false;
				document.getElementById("pretime").required = false;
				document.getElementById("jobtype").required = false;

				document.getElementById("VehDescQ").required = false;
				document.getElementById("VehDescQM").required = false;
				document.getElementById("SpesVehDesc").required = false;
				document.getElementById("PayMode").required = false;
				document.getElementById("PayTermQ").required = false;

				$("#telwhat").text("Tell Us Your Inquiry");

				break;
			case "GQOT":
				document.getElementById("SVRAPNT").style.display = "none";
				document.getElementById("GETQUOTE").style.display = "block";

				document.getElementById("MOP").style.display = "block";
				document.getElementById("TermCtrl").style.display = "block";
				document.getElementById("VarManual2").style.display = "none";

				// Dyanamically Require user to fillup the following...
				document.getElementById("PltCs").required = false;
				document.getElementById("VehVIN").required = false;
				document.getElementById("VehDesc").required = false;
				document.getElementById("prefdate").required = false;
				document.getElementById("pretime").required = false;
				document.getElementById("jobtype").required = false;

				$("#telwhat").text("Tell Us Your Inquiry");
				break;
			case "SVRAPNT":
				document.getElementById("SVRAPNT").style.display = "block";
				document.getElementById("GETQUOTE").style.display = "none";

				// Dyanamically Require user to fillup the following...
				document.getElementById("PltCs").required = true;
				document.getElementById("VehVIN").required = true;
				document.getElementById("VehDesc").required = true;
				document.getElementById("prefdate").required = true;
				document.getElementById("pretime").required = true;
				document.getElementById("jobtype").required = true;

				document.getElementById("VehDescQ").required = false;
				document.getElementById("VehDescQM").required = false;
				document.getElementById("SpesVehDesc").required = false;
				document.getElementById("PayMode").required = false;
				document.getElementById("PayTermQ").required = false;

				$("#telwhat").text("More Details About Your Service Request.");
				break;
		}
	}

	function get_country() {
		var CntryID = "PH";

		jQuery.ajax({
			type: 'POST',
			url: '//crm.lausgroup.com.ph/ContactUs/country_list.php',
			data: {
				"CntryID": CntryID
			},
			success: function(data) {

				jQuery('#bansa').html(data);


			}
		});

	}




	function get_province() {



		var CntryID = $('#bansa').val();

		var arr_Prov = $('#bansa').find(':selected').data('idc');
		var arr_Prov_id = arr_Prov.split("|");
		var CntryID = arr_Prov_id[0];
		var CntryCode = arr_Prov_id[1];


		$("#myCntryCode").val(CntryCode);



		if (CntryID) {

			jQuery.ajax({
				type: 'POST',
				url: '//crm.lausgroup.com.ph/ContactUs/province_slct_get_prov.php',
				data: 'CntryID=' + CntryID,
				success: function(data) {


					jQuery('#probinsya').html(data);


				}
			});




		}

	}




	get_country();


	function get_dealerships() {

		var allDealer = $("#allDealer").val();
		var isLAS = $("#isLAS").val();

		jQuery.ajax({
			type: 'POST',
			url: '//crm.lausgroup.com.ph/ContactUs/slct_get_dealership.php',
			data: {
				"allDealer": allDealer,
				"isLAS": isLAS
			},
			success: function(data) {
				jQuery('#dlrship').html(data);
			}
		});
	}

	get_dealerships();

	function get_VehModels() {

		var dlrship = $("#dlrship").val();

		jQuery.ajax({
			type: 'POST',
			url: '//crm.lausgroup.com.ph/ContactUs/dealer_slct_get_variantWP.php',
			data: {
				"dlrship": dlrship
			},
			success: function(data) {
				jQuery('#VehDescQ').html(data);
				myFunction();
			}
		});
	}


	//Date picker	
	$(function() {
		$("#prefdate").datepicker();
	});

	function get_ServiceTime() {

		var dlrship = $("#dlrship").val();

		jQuery.ajax({
			type: 'POST',
			url: '//crm.lausgroup.com.ph/ContactUs/slct_get_serviceTime.php',
			data: {
				"dlrship": dlrship
			},
			success: function(data) {
				jQuery('#pretime').html(data);
			}
		});
	}

	function get_ServiceType() {

		var dlrship = $("#dlrship").val();

		jQuery.ajax({
			type: 'POST',
			url: '//crm.lausgroup.com.ph/ContactUs/slct_get_serviceType.php',
			data: {
				"dlrship": dlrship
			},
			success: function(data) {
				jQuery('#jobtype').html(data);
			}
		});
	}

	get_ServiceTime();
	get_ServiceType();

	document.getElementById('dpa').onclick = function() {
		// access properties using this keyword
		if (this.checked) {
			if (isCaptchaChecked()) {
				$('#btnSend').attr('disabled', false);
			} else {
				$('#btnSend').attr('disabled', true);
			}
		} else {
			$('#btnSend').attr('disabled', true);
		}

		str1 = location.host;
		if (str1 == 'localhost') {
			$('#btnSend').attr('disabled', false);
		}
	};

	function isCaptchaChecked() {
		return grecaptcha && grecaptcha.getResponse().length !== 0;
	}

	function callback() {
		// Get the checkbox
		var checkBox = document.getElementById("dpa");
		if (checkBox.checked == true) {
			const submitButton = document.getElementById("btnSend");
			submitButton.removeAttribute("disabled");
		}
	}

	function callbackExp() {
		const submitButton = document.getElementById("btnSend");
		submitButton.Attribute("disabled");
	}

	$(document).on("click", "#btnSend", function(event) {
		event.preventDefault();
		if ($('.needs-validation')[0].checkValidity() === false) {
			Swal.fire('Kindly fill out required fields.', '', 'error');
			event.stopPropagation();
		} else {
			SubmitInquiry();
		}
	});




	function SubmitInquiry() {


		if ($('#myAreaCode').val() == " ") {
			var myAreaCode = '';

		} else {

			var myAreaCode = $("#myAreaCode").val();
		}

		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var bansa = $("#bansa").val();
		var probinsya = $("#probinsya").val();
		var myCity = $("#myCity").val();
		var myCntryCode = $("#myCntryCode").val();
		var myNumber = $("#myNumber").val();
		var myEmail = $("#myEmail").val();
		var dlrship = $("#dlrship").val();
		var cntctype = $("#cntctype").val();
		var PltCs = $("#PltCs").val();
		var VehVIN = $("#VehVIN").val();
		var VehDesc = $("#VehDesc").val();
		var VehOdo = $("#VehOdo").val();
		var prefdate = $("#prefdate").val();
		var pretime = $("#pretime").val();
		var jobtype = $("#jobtype").val();
		var SpesVehDesc = $("#SpesVehDesc").val();
		var mySite = $('#mySite').val();
		var PayMode = $("#PayMode").val();
		var TermCtrl = $("#TermCtrl").val();
		var telwhat = $("#tellUs").val();

		if (cntctype == "GQOT" || cntctype == "INQR") {
			var VehDescS = $("#VehDescQ").val();
			var VehDescM = $("#VehDescQM").val();

			if (VehDescS == null) {
				VehDesc = VehDescM;
			} else {
				VehDesc = VehDescS;
			}

		} else {
			var VehVIN = $("#VehVIN").val();
			var VehDesc = $("#VehDesc").val();
		}

		var DwnPymntQ = 0; //accounting.unformat( $("#DwnPymntQ").val() );
		var VehOdo = accounting.unformat($("#VehOdo").val());

		var PayTermQ = $("#PayTermQ").val();

		Swal.fire({
			icon: 'question',
			title: 'Send Inquiry?',
			showCancelButton: true,
			showConfirmButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',

		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed == true) {

				jQuery.ajax({
					type: 'POST',
					url: '//crm.lausgroup.com.ph/ContactUs/SaveSendInquiryWP.php',
					data: {
						"fname": fname,
						"lname": lname,
						"bansa": bansa,
						"probinsya": probinsya,
						"myCity": myCity,
						"myCntryCode": myCntryCode,
						"myAreaCod": myAreaCode,
						"myNumber": myNumber,
						"myEmail": myEmail,
						"dlrship": dlrship,
						"cntctype": cntctype,
						"PltCs": PltCs,
						"VehVIN": VehVIN,
						"VehDesc": VehDesc,
						"VehOdo": VehOdo,
						"prefdate": prefdate,
						"pretime": pretime,
						"jobtype": jobtype,
						"SpesVehDesc": SpesVehDesc,
						"PayMode": PayMode,
						"PayTermQ": TermCtrl,
						"tellUs": telwhat,
						"DwnPymntQ": DwnPymntQ,
						"mySite": mySite
					},
					success: function(response1) {
						var myresponse = response1.split('|');
						// alert( $.trim(myresponse[1]));
						if ($.trim(myresponse[0]) == 'errorSaving') {
							Swal.fire('Database Connection Error.', '', 'error')
							$("#btnSend").prop("disabled", false);
						} else if ($.trim(myresponse[0]) == 'Saved') {
							Swal.fire({
								icon: 'info',
								title: 'Thank you for contacting us!',
								text: "You inquiry has been submitted.",
								showCancelButton: false,
								showConfirmButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Yes',
								cancelButtonText: 'No',

							}).then((result) => {
								/* Read more about isConfirmed, isDenied below */
								if (result.isConfirmed == true) {
									location.reload();
								}
							});
						} else {
							Swal.fire('Error Saving.', '', 'error');
							$("#btnSend").prop("disabled", false);
						}

					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						$('#myloader').hide();
						Swal.fire('Kindly check your internet connection.', '', 'error')
					}
				});
			}
		});

	}
</script>