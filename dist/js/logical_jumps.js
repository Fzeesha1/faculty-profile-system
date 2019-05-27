// disable default values on both sides
  // $("#firstpref").find(':selected');
  $("#firstpref").change(function(){
    // jQuery
    let selectedVal = $(this).find(':selected').val();
    $("#secondpref option").each(function(){
      if($(this).val()==selectedVal){
        $(this).prop('disabled',true);
      }
    });
  });

  $("#secondpref").change(function(){
    // jQuery
    let selectedVal = $(this).find(':selected').val();
    $("#firstpref option").each(function(){
      if($(this).val()==selectedVal){
        $(this).prop('disabled',true);
      }
    });
  });


$("#domnonpunjab").change(function(){
  console.log("listener is active");
  if($(this).val()=='Enter test name ...'){
    $("#othertestname").prop('disabled',false);
    $("#othertestname").focus();
    $("#othertestname").val($(this).val());
    $("#othertestname").text($(this).val());
  }
  else{
    $("#othertestname").val($(this).val());
    $("#othertestname").text($(this).val());
  }
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$(function () { 
    //Initialize Select2 Elements
    $('.select2').select2()

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
    //Money Euro
    $('[data-mask]').inputmask()

    //Date range picker
    $('#reservation').daterangepicker()
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({
      timePicker         : true,
      timePickerIncrement: 30,
      format             : 'MM/DD/YYYY h:mm A'
    })

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass   : 'iradio_minimal-blue'
    })
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass   : 'iradio_minimal-red'
    })
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass   : 'iradio_flat-green'
    })

  });
  function selector() {
		
		document.getElementById('firstpref').disabled = true;
		document.getElementById('secondpref').disabled = true;
      var st_program = document.getElementById("st-program");
      var option = st_program.options;
      var count =0
      for (var i=0; i<option.length;i++){

          if(option[i].selected){
              count++;
              console.log(option[i].text);
          }

      }
      if(count==1){
		 document.getElementById('firstpref').disabled = false;          
      }else if(count >= 2){
		document.getElementById('firstpref').disabled = false;
		document.getElementById('secondpref').disabled = false;
	  }
	  addSelectFields();
  }
  	
	function removeAll(){
		$('#firstpref').find('option').remove();
		$('#secondpref').find('option').remove();
	}
	
	function provchange(){
		var provselector = document.getElementById('domicileprov');
		var provselected = provselector.options[provselector.selectedIndex].text;
		if(provselected == "Punjab"){
			document.getElementById('dompunjab').disabled = false;
			document.getElementById('domnonpunjab').disabled = true;
		}else{
			document.getElementById('dompunjab').disabled = true;
			document.getElementById('domnonpunjab').disabled = false;
		}
	}

  function statusSelector(){
    var statselector = document.getElementById('qualStatus');
    var statselected = statselector.options[statselector.selectedIndex].text;
    if(statselected == "Completed"){
      document.getElementById('studyYears').disabled = true;
      document.getElementById('inter2rollnum').disabled = true;
    }
    else{
      document.getElementById('studyYears').disabled = false;
      document.getElementById('inter2rollnum').disabled = false;
    }
  }
  
  function personal() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none"
          a.style.display = "none"
          b.style.display = "none"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "none"
      }
    document.getElementById('personalInfo').classList.add("active");
    document.getElementById('programdetails').classList.remove("active");
    document.getElementById('academicqual').classList.remove("active");
    document.getElementById('eligcriteria').classList.remove("active")
    document.getElementById('faques').classList.remove("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.remove("active");
  }

  function program() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (y.style.display === "none") {
          x.style.display = "none";
          y.style.display = "block";
          z.style.display = "none"
          a.style.display = "none"
          b.style.display = "none"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "none"
      }
    document.getElementById('personalInfo').classList.remove("active");
    document.getElementById('programdetails').classList.add("active");
    document.getElementById('academicqual').classList.remove("active");
    document.getElementById('eligcriteria').classList.remove("active")
    document.getElementById('faques').classList.remove("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.remove("active");
  }  

  function academic() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (z.style.display === "none") {
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "block"
          a.style.display = "none"
          b.style.display = "none"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "none"
      }
    document.getElementById('personalInfo').classList.remove("active");
    document.getElementById('programdetails').classList.remove("active");
    document.getElementById('academicqual').classList.add("active");
    document.getElementById('eligcriteria').classList.remove("active")
    document.getElementById('faques').classList.remove("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.remove("active");
  }

  function submitform() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (zs.style.display === "none") {
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "none"
          a.style.display = "none"
          b.style.display = "none"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "block"
      }
    document.getElementById('personalInfo').classList.remove("active");
    document.getElementById('programdetails').classList.remove("active");
    document.getElementById('academicqual').classList.remove("active");
    document.getElementById('eligcriteria').classList.remove("active")
    document.getElementById('faques').classList.remove("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.add("active");
  }

  function criteria() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (a.style.display === "none") {
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "none"
          a.style.display = "block"
          b.style.display = "none"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "none"
      }
    document.getElementById('personalInfo').classList.remove("active");
    document.getElementById('programdetails').classList.remove("active");
    document.getElementById('academicqual').classList.remove("active");
    document.getElementById('eligcriteria').classList.add("active")
    document.getElementById('faques').classList.remove("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.remove("active");
  }

  function faqs() {
    var x = document.getElementById("personal");
    var y=document.getElementById("program");
    var z=document.getElementById("academic");
    var a=document.getElementById("criteria");
    var b=document.getElementById("faq");
    // var h=document.getElementById("home");
    // var c=document.getElementById("contact");
    var zs=document.getElementById("submitform");
      if (b.style.display === "none") {
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "none"
          a.style.display = "none"
          b.style.display = "block"
          // c.style.display = "none"
          // h.style.display = "none"
          zs.style.display = "none"
      }
    document.getElementById('personalInfo').classList.remove("active");
    document.getElementById('programdetails').classList.remove("active");
    document.getElementById('academicqual').classList.remove("active");
    document.getElementById('eligcriteria').classList.remove("active")
    document.getElementById('faques').classList.add("active");
    // document.getElementById('homesec').classList.remove("active");
    // document.getElementById('contactdetails').classList.remove("active");
    document.getElementById('submit').classList.remove("active");
  }

  // function contact() {
  //   var x = document.getElementById("personal");
  //   var y=document.getElementById("program");
  //   var z=document.getElementById("academic");
  //   var a=document.getElementById("criteria");
  //   var b=document.getElementById("faq");
  //   var h=document.getElementById("home");
  //   var c=document.getElementById("contact");
  //   var zs=document.getElementById("submitform");
  //     if (c.style.display === "none") {
  //         x.style.display = "none";
  //         y.style.display = "none";
  //         z.style.display = "none"
  //         a.style.display = "none"
  //         b.style.display = "none"
  //         c.style.display = "block"
  //         h.style.display = "none"
  //         zs.style.display = "none"
  //     }
  //   document.getElementById('personalInfo').classList.remove("active");
  //   document.getElementById('programdetails').classList.remove("active");
  //   document.getElementById('academicqual').classList.remove("active");
  //   document.getElementById('eligcriteria').classList.remove("active")
  //   document.getElementById('faques').classList.remove("active");
  //   document.getElementById('homesec').classList.remove("active");
  //   document.getElementById('contactdetails').classList.add("active");
  //   document.getElementById('submit').classList.remove("active");
  // }

  // function home() {
  //   var x = document.getElementById("personal");
  //   var y=document.getElementById("program");
  //   var z=document.getElementById("academic");
  //   var a=document.getElementById("criteria");
  //   var b=document.getElementById("faq");
  //   var h=document.getElementById("home");
  //   var c=document.getElementById("contact");
  //   var zs=document.getElementById("submitform");
  //     if (h.style.display === "none") {
  //         x.style.display = "none";
  //         y.style.display = "none";
  //         z.style.display = "none"
  //         a.style.display = "none"
  //         b.style.display = "none"
  //         c.style.display = "none"
  //         h.style.display = "block"
  //         zs.style.display = "none"
  //     }
  //   document.getElementById('personalInfo').classList.remove("active");
  //   document.getElementById('programdetails').classList.remove("active");
  //   document.getElementById('academicqual').classList.remove("active");
  //   document.getElementById('eligcriteria').classList.remove("active")
  //   document.getElementById('faques').classList.remove("active");
  //   document.getElementById('homesec').classList.add("active");
  //   document.getElementById('contactdetails').classList.remove("active");
  //   document.getElementById('submit').classList.remove("active");
  // } 


  function nonpunjabtester(){
    var testselector = document.getElementById('domnonpunjab');
    var testselected = testselector.options[testselector.selectedIndex].text;
    if(testselected == "Other"){
      document.getElementById('othertestname').disabled = false;
    }
    else{
      document.getElementById('othertestname').disabled = true;
    }
  }
  

  // function interBoardSelector(){
  //   var boardselector = document.getElementById('interBoard');
  //   var boardselected = boardselector.options[boardselector.selectedIndex].text;
  //   if(boardselected == "Other"){
  //     document.getElementById('otherinterboard').disabled = false;
  //   }
  //   else{
  //     document.getElementById('otherinterboard').disabled = true;
  //   }
  // }

  //   function matBoardSelector(){
  //   var boardselector = document.getElementById('matBoard');
  //   var boardselected = boardselector.options[boardselector.selectedIndex].text;
  //   if(boardselected == "Other"){
  //     document.getElementById('othermatboard').disabled = false;
  //   }
  //   else{
  //     document.getElementById('othermatboard').disabled = true;
  //   }
  // }

  // const categories=[
//   {category: 'FSc: Pre-Engineering' , subjects:['Math','Physics','Chemistry']},
//   {category: 'FSc: Pre-Medical' , subjects:['Biology','Physics','Chemistry']},
//   {category: 'FSc: ICS' , subjects:['Math','Physics','Computer Science']},
//   {category: 'DAE Holder' , subjects:['Computer Information Technology','Computer Technology','Information Technology','Software Technology','Electrical Technology','Electronics Technology','Biomedical Technology','Automation Technology','Radio Technology','Radar Technology','Instruments Technology','Instrumentation and Process Control','Telecommunication Technology','Avionics Technology','Precision Mechanical and Instrument']}
// ];

// $('#selected-subjects option').each(function(){
//   // if(!$(this).is(':selected')){
//     $(this).prop('disabled',true);
//   // }
// });
// $("#selected-category").change(function(){
//   let selectedCateg=$(this).val();
//   // console.log(selectedCateg);
//   categories.forEach(function(elem){
    
//     if(elem.category==selectedCateg){
//       // console.log("selected: "+elem.category);
//       let subjects=elem.subjects;
//       elem.subjects.map(function(subject){
//         console.log(subject);
//         $('#selected-subjects option').each(function(){
//           if($(this).val()==subject){
//             console.log("selected in subject: "+$(this).val());
//             $(this).attr("selected","selected");
//             $(this).prop('disabled',false);
//           }
//         });
//       });
//     }
//   });
// });

// function addSelectFields() { 
//  var txtSelectedValuesObj = document.getElementById('firstpref');
//  var txtSelectedValuesObj1 = document.getElementById('secondpref');
//  var selectedArray = new Array();
//  var selObj = document.getElementById('firstpref'); 
//  var count = 0;
//  for (var i=0; i<selObj.options.length; i++) { 
//    if (selObj.options[i].selected) {
//      selectedArray[count] = selObj.options[i].text;
//      count++; 
//    } 
//  } 
//  removeAll();
//  for(var i = 0; i < selectedArray.length; i ++){
//    var option = document.createElement("option");
//    option.text = selectedArray[i];
//    option.value = selectedArray[i];
//    txtSelectedValuesObj.add(option);
//    var option1 = document.createElement("option");
//    option1.text = selectedArray[i];
//    option1.value = selectedArray[i];
//    txtSelectedValuesObj1.add(option1);
//  }
// }

// $("#domnonpunjab").change(function(){
//   console.log("listener is active");
//   if($(this).val()=='nonpunjothertest'){
//     $("#othertestname").prop('disabled',false);
//     $("#othertestname").focus();
//   }
//   else{
//     $("#othertestname").val($(this).val());
//     $("#othertestname").text($(this).val());
//   }
// });  