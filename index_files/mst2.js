utl.directive("mstWh",["validateFactory",function(validateFactory){return{restrict:"EC",link:function(scope,elem,attrs){scope.mst={curr_step:1,num_steps:null,email_step:null,phone_step:null,zipcode_step:null,age_step:null,password_step:null,gender_step:null,unick_step:null,uadvert_step:null,uadvert_title_step:null,build_step:null,race_step:null,ustatus_step:null,step_animation_handler:attrs.animationHandler,error_handler:attrs.errorHandler,step_class:attrs.stepClass},void 0!==attrs.numSteps&&(scope.mst.num_steps=parseInt(attrs.numSteps)),void 0!==attrs.emailStep&&(scope.mst.email_step=parseInt(attrs.emailStep)),void 0!==attrs.phoneStep&&(scope.mst.phone_step=parseInt(attrs.phoneStep)),void 0!==attrs.zipcodeStep&&(scope.mst.zipcode_step=parseInt(attrs.zipcodeStep)),void 0!==attrs.ageStep&&(scope.mst.age_step=parseInt(attrs.ageStep)),void 0!==attrs.passwordStep&&(scope.mst.password_step=parseInt(attrs.passwordStep)),void 0!==attrs.genderStep&&(scope.mst.gender_step=parseInt(attrs.genderStep)),void 0!==attrs.unickStep&&(scope.mst.unick_step=parseInt(attrs.unickStep)),void 0!==attrs.uadvertStep&&(scope.mst.uadvert_step=parseInt(attrs.uadvertStep)),void 0!==attrs.uadvertTitleStep&&(scope.mst.uadvert_title_step=parseInt(attrs.uadvertTitleStep)),void 0!==attrs.buildStep&&(scope.mst.build_step=parseInt(attrs.buildStep)),void 0!==attrs.raceStep&&(scope.mst.race_step=parseInt(attrs.raceStep)),void 0!==attrs.ustatusStep&&(scope.mst.ustatus_step=parseInt(attrs.ustatusStep)),void 0===attrs.loProb||isNaN(attrs.loProb)||(scope.mst.loProb=parseInt(attrs.loProb)),scope.sendTrackHit({type:"curr_step",curr_step:scope.mst.curr_step,num_steps:scope.mst.num_steps}),scope.pushNotifications.subscribeStep=2,scope.nextStep=function(){scope.goToStep(scope.mst.curr_step+1)},scope.prevStep=function(){scope.goToStep(scope.mst.curr_step-1)},scope.goToStep=function(new_step){if(!(new_step===scope.mst.curr_step||new_step<1)){var curr_step=scope.mst.curr_step;if(curr_step<new_step){if(scope.validateStep(),scope.errors.length)return;if(new_step>scope.mst.num_steps)return scope.mst.curr_step="results",void scope.handleWHRequest();scope.mst.loProb&&2===new_step&&parseFloat((100*Math.random()).toFixed(5))<=scope.mst.loProb&&scope.loadLo(),scope.pushNotifications.subscribeStep&&new_step===scope.pushNotifications.subscribeStep&&scope.subscribePushNotifications(),scope.gdprModal.step&&new_step===scope.gdprModal.step&&scope.loadGdprModal(),scope.sendTrackHit({type:"curr_step",curr_step:new_step,num_steps:scope.mst.num_steps}),scope.enable_step_timer_tracking&&scope.sendTrackHit({type:"step_time",curr_step:curr_step})}scope.mst.curr_step=new_step,scope.animateStep(curr_step,new_step)}},scope.validateStep=function(){var result=null;if(scope.errors=[],scope.mst.curr_step===scope.mst.email_step){var email=scope.email.replace(/ /g,"");!0!==(result=validateFactory.isWHEmailValid(email))&&scope.errors.push({field:"email",error:result})}if(scope.mst.curr_step===scope.mst.phone_step){var phone=scope.phone;!0!==(result=validateFactory.isPhoneValid(phone))&&scope.errors.push({field:"phone",error:result})}if(scope.mst.curr_step===scope.mst.age_step){var age=scope.age;!0!==(result=validateFactory.isAgeValid(age))&&scope.errors.push({field:"age",error:result})}if(scope.enable_zip_check_wh&&scope.mst.curr_step===scope.mst.zipcode_step){var zipcode=scope.zipcode;-1!==scope.ZIPCODE_ACCEPT_COUNTRIES.indexOf(scope.country)&&"-"!==scope.zipcode||(zipcode=scope.DEFAULT_ZIPCODE),-1!==scope.ZIPCODE_VALIDATE_COUNTRIES.indexOf(scope.country)&&!0!==(result=validateFactory.isWHZipcodeValid(zipcode))&&scope.errors.push({field:"zipcode",error:result})}if(scope.mst.curr_step===scope.mst.password_step){var password=scope.password;!0!==(result=validateFactory.isWHPasswordValid(password))&&scope.errors.push({field:"password",error:result})}if(scope.mst.curr_step===scope.mst.unick_step){var unick=scope.unick;!0!==(result=validateFactory.isWHUsernameValid(unick))&&scope.errors.push({field:"unick",error:result})}if(scope.mst.curr_step===scope.mst.uadvert_step){var uadvert=scope.uadvert;!0!==(result=validateFactory.isWHProfileTitleValid(uadvert))&&scope.errors.push({field:"uadvert",error:result})}if(scope.mst.curr_step===scope.mst.uadvert_title_step){var uadvert_title=scope.uadvert_title;!0!==(result=validateFactory.isWHProfileDescriptionValid(uadvert_title))&&scope.errors.push({field:"uadvert_title",error:result})}if(scope.mst.curr_step===scope.mst.build_step){var build=scope.build;!0!==(result=validateFactory.isWHBuildValid(build))&&scope.errors.push({field:"build",error:result})}if(scope.mst.curr_step===scope.mst.race_step){var race=scope.race;!0!==(result=validateFactory.isWHRaceValid(race))&&scope.errors.push({field:"race",error:result})}if(scope.mst.curr_step===scope.mst.ustatus_step){var ustatus=scope.ustatus;!0!==(result=validateFactory.isWHStatusValid(ustatus))&&scope.errors.push({field:"ustatus",error:result})}},scope.animateStep=function(old_step,new_step){if(old_step!==new_step){if(void 0!==scope.mst.step_animation_handler){var fn=window[scope.mst.step_animation_handler];if("function"==typeof fn)return void fn(old_step,new_step)}$("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+new_step+"]").show()}},scope.apiErrorStep=function(errors){var goto=scope.mst.num_steps,curr_step=scope.mst.num_steps,old_step=scope.mst.curr_step;angular.forEach(errors,function(error_obj){switch(error_obj.field){case"age":curr_step=scope.mst.age_step;break;case"zipcode":curr_step=scope.mst.zipcode_step;break;case"email":curr_step=scope.mst.email_step;break;case"phone":curr_step=scope.mst.phone_step;break;case"password":curr_step=scope.mst.password_step;break;case"unick":curr_step=scope.mst.unick_step;break;case"uadvert":curr_step=scope.mst.uadvert_step;break;case"uadvert_title":curr_step=scope.mst.uadvert_title_step;break;case"build":curr_step=scope.mst.build_step;break;case"race":curr_step=scope.mst.race_step;break;case"ustatus":curr_step=scope.mst.ustatus_step;break;default:curr_step=1}curr_step<goto&&(goto=curr_step),scope.mst.curr_step=parseInt(goto)});var fn=null;void 0!==scope.mst.error_handler&&"function"==typeof(fn=window[scope.mst.error_handler])&&fn(errors),void 0!==scope.mst.step_animation_handler&&old_step!==scope.mst.curr_step&&("function"==typeof(fn=window[scope.mst.step_animation_handler])?fn(old_step,scope.mst.curr_step):($("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+scope.mst.curr_step+"]").show()))},scope.$watch("errors",function(errors){0<errors.length&&scope.apiErrorStep(errors)},!1)}}}]),utl.directive("mstSv",["validateFactory",function(validateFactory){return{restrict:"EC",link:function(scope,elem,attrs){scope.mst={curr_step:1,num_steps:null,email_step:null,password_step:null,first_name_step:null,last_name_step:null,report_type:attrs.reportType,report_age_step:null,report_city_step:null,report_email_step:null,report_first_name_step:null,report_full_name_step:null,report_last_name_step:null,report_phone_number_step:null,report_state_step:null,report_street_step:null,report_zip_step:null,report_prepop_step:null,step_animation_handler:attrs.animationHandler,error_handler:attrs.errorHandler,step_class:attrs.stepClass},void 0!==attrs.numSteps&&(scope.mst.num_steps=parseInt(attrs.numSteps)),void 0!==attrs.emailStep&&(scope.mst.email_step=parseInt(attrs.emailStep)),void 0!==attrs.passwordStep&&(scope.mst.password_step=parseInt(attrs.passwordStep)),void 0!==attrs.firstNameStep&&(scope.mst.first_name_step=parseInt(attrs.firstNameStep)),void 0!==attrs.lastNameStep&&(scope.mst.last_name_step=parseInt(attrs.lastNameStep)),void 0!==attrs.reportAgeStep&&(scope.mst.report_age_step=parseInt(attrs.reportAgeStep)),void 0!==attrs.reportCityStep&&(scope.mst.report_city_step=parseInt(attrs.reportCityStep)),void 0!==attrs.reportEmailStep&&(scope.mst.report_email_step=parseInt(attrs.reportEmailStep)),void 0!==attrs.reportFirstNameStep&&(scope.mst.report_first_name_step=parseInt(attrs.reportFirstNameStep)),void 0!==attrs.reportFullNameStep&&(scope.mst.report_full_name_step=parseInt(attrs.reportFullNameStep)),void 0!==attrs.reportLastNameStep&&(scope.mst.report_last_name_step=parseInt(attrs.reportLastNameStep)),void 0!==attrs.reportPhoneNumberStep&&(scope.mst.report_phone_number_step=parseInt(attrs.reportPhoneNumberStep)),void 0!==attrs.reportStateStep&&(scope.mst.report_state_step=parseInt(attrs.reportStateStep)),void 0!==attrs.reportStreetStep&&(scope.mst.report_street_step=parseInt(attrs.reportStreetStep)),void 0!==attrs.reportZipStep&&(scope.mst.report_street_step=parseInt(attrs.reportStreetStep)),void 0!==attrs.reportPrepopStep&&(scope.mst.report_prepop_step=parseInt(attrs.reportPrepopStep)),scope.validateStep=function(){var result=null;if(scope.errors=[],scope.mst.curr_step===scope.mst.email_step){var email=scope.email.replace(/ /g,"");!0!==(result=validateFactory.isEmailValid(email))&&scope.errors.push({field:"email",error:result})}scope.enable_password_check&&scope.mst.curr_step===scope.mst.password_step&&!0!==(result=validateFactory.isDJSPasswordValid(scope.password))&&scope.errors.push({field:"password",error:result}),scope.enable_sv_name_check&&scope.mst.curr_step===scope.mst.first_name_step&&!0!==(result=validateFactory.isFirstNameValid(scope.first_name))&&scope.errors.push({field:"first_name",error:result}),scope.enable_sv_name_check&&scope.mst.curr_step===scope.mst.last_name_step&&!0!==(result=validateFactory.isLastNameValid(scope.last_name))&&scope.errors.push({field:"last_name",error:result}),"address"===attrs.reportType&&scope.mst.curr_step===scope.mst.report_city_step&&!0!==(result=validateFactory.isSVCityValid(scope.sv_report_city))&&scope.errors.push({field:"sv_report_city",error:result}),"email"===attrs.reportType&&scope.mst.curr_step===scope.mst.report_email_step&&!0!==(result=validateFactory.isEmailValid(scope.sv_report_email))&&scope.errors.push({field:"sv_report_email",error:result}),"phone"===attrs.reportType&&scope.mst.curr_step===scope.mst.report_phone_number_step&&!0!==(result=validateFactory.isSVPhoneValid(scope.sv_report_phone_number))&&scope.errors.push({field:"sv_report_phone_number",error:result}),"address"===attrs.reportType&&scope.mst.curr_step===scope.mst.report_state_step&&!0!==(result=validateFactory.isSVStateValid(scope.sv_report_state))&&scope.errors.push({field:"sv_report_state",error:result}),"address"===attrs.reportType&&scope.mst.curr_step===scope.mst.report_street_step&&!0!==(result=validateFactory.isSVStreetValid(scope.sv_report_street))&&scope.errors.push({field:"sv_report_street",error:result})},scope.nextStep=function(){var curr_step=scope.mst.curr_step;scope.validateStep(),scope.errors.length||(scope.trackCurrentStep(),scope.mst.curr_step+=1,scope.mst.curr_step>scope.mst.num_steps?scope.handleSVRequest():scope.animateStep(curr_step,scope.mst.curr_step))},scope.prevStep=function(){if(!(scope.mst.curr_step<=1)){var curr_step=scope.mst.curr_step;scope.mst.curr_step-=1,scope.animateStep(curr_step,scope.mst.curr_step)}},scope.goToStep=function(new_step){if(!(new_step===scope.mst.curr_step||new_step>scope.mst.num_steps||new_step<1)){if(new_step>scope.mst.curr_step){if(scope.validateStep(),scope.errors.length)return;scope.trackCurrentStep()}var curr_step=scope.mst.curr_step;scope.mst.curr_step=new_step,scope.animateStep(curr_step,new_step)}},scope.animateStep=function(old_step,new_step){if(old_step!==new_step){if(void 0!==scope.mst.step_animation_handler){var fn=window[scope.mst.step_animation_handler];if("function"==typeof fn)return void fn(old_step,new_step)}$("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+new_step+"]").show()}},scope.apiErrorStep=function(errors){var goto=scope.mst.num_steps,curr_step=scope.mst.num_steps,old_step=scope.mst.curr_step;angular.forEach(errors,function(error_obj){switch(error_obj.field){case"email":curr_step=scope.mst.email_step;break;case"password":curr_step=scope.mst.password_step;break;case"first_name":curr_step=scope.mst.first_name_step;break;case"last_name":curr_step=scope.mst.last_name_step;break;case"sv_report_age":curr_step=scope.mst.report_age_step;break;case"sv_report_city":curr_step=scope.mst.report_city_step;break;case"sv_report_email":curr_step=scope.mst.report_email_step;break;case"sv_report_first_name":curr_step=scope.mst.report_first_name_step;break;case"sv_report_full_name":curr_step=scope.mst.report_full_name_step;break;case"sv_report_last_name":curr_step=scope.mst.report_last_name_step;break;case"sv_report_phone_number":curr_step=scope.mst.report_phone_number_step;break;case"sv_report_state":curr_step=scope.mst.report_state_step;break;case"sv_report_street":curr_step=scope.mst.report_street_step;break;default:curr_step=1}curr_step&&curr_step<goto&&(goto=curr_step),scope.mst.curr_step=parseInt(goto)});var fn=null;void 0!==scope.mst.error_handler&&"function"==typeof(fn=window[scope.mst.error_handler])&&fn(errors),void 0!==scope.mst.step_animation_handler&&old_step!==scope.mst.curr_step&&("function"==typeof(fn=window[scope.mst.step_animation_handler])?fn(old_step,scope.mst.curr_step):($("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+scope.mst.curr_step+"]").show()))},scope.trackCurrentStep=function(){scope.sendTrackHit({type:"curr_step",curr_step:scope.mst.curr_step,num_steps:scope.mst.num_steps})},scope.executePrepop=function(){if(scope.mst.report_prepop_step)for(var i=0;i<scope.SV_PARAM_NAMES.length;i++)if(scope["sv_report_"+scope.SV_PARAM_NAMES[i]])return scope.sv_is_prepop=!0,scope.handleSVReportRequest(scope.mst.report_type,function(){scope.goToStep(scope.mst.report_prepop_step)})},scope.$watch("errors",function(errors){0<errors.length&&scope.apiErrorStep(errors)},!1),scope.trackCurrentStep(),scope.executePrepop()}}}]),utl.directive("mstDjs",["validateFactory",function(validateFactory){return{restrict:"EC",link:function(scope,elem,attrs){scope.mst={curr_step:1,num_steps:attrs.numSteps,email_step:attrs.emailStep,zipcode_step:attrs.zipcodeStep,username_step:attrs.usernameStep,password_step:attrs.passwordStep,country_step:attrs.countryStep,first_name_step:attrs.firstNameStep,last_name_step:attrs.lastNameStep,full_name_step:attrs.fullNameStep,step_animation_handler:attrs.animationHandler,error_handler:attrs.errorHandler,step_class:attrs.stepClass},scope.nextStep=function(){var result=null,curr_step=scope.mst.curr_step;if(scope.errors=[],scope.mst.curr_step===scope.mst.email_step){var email=scope.email.replace(/ /g,"");!0!==(result=validateFactory.isEmailValid(email))&&scope.errors.push({field:"email",error:result})}if(scope.mst.curr_step===scope.mst.username_step){var username=scope.username.replace(/ /g,"");!0!==(result=validateFactory.isDJSUsernameValid(username))&&scope.errors.push({field:"username",error:result})}if(scope.mst.curr_step===scope.mst.zipcode_step){var zipcode=scope.zipcode.replace(/[^a-zA-Z 0-9-]+/g,"");zipcode=zipcode.replace(/ /g,""),!0!==(result=validateFactory.isDJSZipcodeValid(zipcode))&&scope.errors.push({field:"zipcode",error:result})}if(scope.mst.curr_step===scope.mst.password_step){var password=scope.password.replace(/ /g,"");!0!==(result=validateFactory.isDJSPasswordValid(password))&&scope.errors.push({field:"password",error:result})}if(scope.mst.curr_step===scope.mst.country_step){var country=scope.country;!0!==(result=validateFactory.isCountryValid(country))&&scope.errors.push({field:"country",error:result})}if(scope.mst.curr_step===scope.mst.first_name_step){var first_name=scope.first_name;!0!==(result=validateFactory.isFirstNameValid(first_name))&&scope.errors.push({field:"first_name",error:result})}if(scope.mst.curr_step===scope.mst.last_name_step){var last_name=scope.last_name;!0!==(result=validateFactory.isLastNameValid(last_name))&&scope.errors.push({field:"last_name",error:result})}if(scope.mst.curr_step===scope.mst.full_name_step){var full_name=scope.full_name;!0!==(result=validateFactory.isFullNameValid(full_name))&&scope.errors.push({field:"full_name",error:result})}if(0===scope.errors.length&&(scope.mst.curr_step+=1),scope.mst.curr_step>scope.mst.num_steps)scope.handleDJSRequest();else if(void 0!==scope.mst.step_animation_handler){var fn=window[scope.mst.step_animation_handler];"function"==typeof fn&&fn(curr_step,scope.mst.curr_step)}else $("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+scope.mst.curr_step+"]").show()},scope.apiErrorStep=function(errors){var goto=scope.mst.num_steps,curr_step=scope.mst.num_steps,old_step=scope.mst.curr_step;angular.forEach(errors,function(error_obj){switch(error_obj.field){case"username":curr_step=scope.mst.username_step;break;case"zipcode":curr_step=scope.mst.zipcode_step;break;case"email":curr_step=scope.mst.email_step;break;case"password":curr_step=scope.mst.password_step;break;case"country":curr_step=scope.mst.country_step;break;case"first_name":curr_step=scope.mst.first_name_step;break;case"last_name":curr_step=scope.mst.last_name_step;break;case"full_name":curr_step=scope.mst.full_name_step;break;default:curr_step=1}curr_step<goto&&(goto=curr_step),scope.mst.curr_step=parseInt(goto)});var fn=null;void 0!==scope.mst.error_handler&&"function"==typeof(fn=window[scope.mst.error_handler])&&fn(errors),void 0!==scope.mst.step_animation_handler&&old_step!==scope.mst.curr_step&&("function"==typeof(fn=window[scope.mst.step_animation_handler])?fn(old_step,scope.mst.curr_step):($("."+scope.mst.step_class).hide(),$("."+scope.mst.step_class+"[data-step="+scope.mst.curr_step+"]").show()))},scope.$watch("errors",function(errors){0<errors.length&&scope.apiErrorStep(errors)},!1),scope.$watch("errors",function(errors){0<errors.length&&scope.apiErrorStep(errors)},!0)}}}]);