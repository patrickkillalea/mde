$(document).ready(function() {

    hideAll();
    $("#ExchangeHomePageDiv").show();

    $("#ExchangeHomePage").click(function() {
        hideAll();
        $("#ExchangeHomePageDiv").show();
    });

    $("#JobHomePage").click(function() {
        hideAll();
        $("#JobHomePageDiv").show();
    });

    $("#JobSettings").click(function() {
        hideAll();
        $("#JobSettingsDiv").show();
    });

    $("#JobSchedule").click(function() {
        hideAll();
        $("#JobScheduleDiv").show();
    });

    $("#JobSupport").click(function() {
        hideAll();
        $("#JobSupportDiv").show();
    });

    $("#JobQualityCenter").click(function() {
        hideAll();
        $("#JobQualityCenterDiv").show();
    });

    $("#JobFileInfo").click(function() {
        hideAll();
        $("#JobFileInfoDiv").show();
    });

    $("#JobFTP").click(function() {
        hideAll();
        $("#JobFTPDiv").show();
    });

    $("#JobEmail").click(function() {
        hideAll();
        $("#JobEmailDiv").show();
    });

    $("#JobJobFlow").click(function() {
        hideAll();
        $("#JobJobFlowDiv").show();
    });

    $("#JobInfo").click(function() {
        hideAll();
        $("#JobInfoDiv").show();
    });

    $("#JobAlerts").click(function() {
        hideAll();
        $("#JobAlertsDiv").show();
    });


    // $("#JobInfo").click(function() {
    //     fillSameDivs();
    // });
});

function hideAll() {
    $("#ExchangeHomePageDiv").hide();
    $("#JobHomePageDiv").hide();
    $("#JobSettingsDiv").hide();
    $("#JobScheduleDiv").hide();
    $("#JobSupportDiv").hide();
    $("#JobQualityCenterDiv").hide();
    $("#JobFileInfoDiv").hide();
    $("#JobFTPDiv").hide();
    $("#JobEmailDiv").hide();
    $("#JobJobFlowDiv").hide();
    $("#JobInfoDiv").hide();
    $("#JobAlertsDiv").hide();
}

// function fillSameDivs(){
//     $("#JobInfoDiv").jobHeader.HTML();
// }

// var jobHeader = "<div class='well'>"
//                 +"<div class='col-md-2'><a id='JobHomePage'>Job Home</a>"
//                 +"</div>"
//                 +"<div class='col-md-2'>JobID: 1595</div>"
//                 +"<div class='col-md-2'>Area: BSwift</div>"
//                 +"<div class='col-md-2'>Client: Belcan</div>"
//                 +"<div class='col-md-2'>Job: P01 Payroll</div>"
//                 +"<div class='col-md-2'>PRODUCTION</div>"
//                 +"</div>";