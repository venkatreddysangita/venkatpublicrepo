if(typeof(AMA) == "undefined") {
    AMA = { __namespace: true};
}

if(typeof(AMA.Functions) == "undefined") {
    AMA.Functions = { __namespace: true};
}

if(typeof(AMA.Functions.Case) == "undefined") {
    AMA.Functions.Case = { __namespace: true};
}

(function () {
    // Private Variables
    var formContext;
    var commonApi;
    var isSystemAdmin = false;
    var isCSManager = false;
    var Roles = {
        SYSTEMADMIN: "System Administrator",
        CSMANAGER: "CS Manager"
    };

    var _onLoad = function (executionContext) {
        /// <summary>
        /// Sample - Execute for onLoad event of the form
        /// </summary>
        formContext = executionContext.getFormContext();

        try{

        } catch(e) {

        }
    };

    var _onSave = function (executionContext) {
        /// <summary>
        /// Sample - Execute for onLoad event of the form
        /// </summary>

    };

    var _showHideResolveButton = function(primaryControl) {
        /// <summary>
        /// Enable Rule to show/hide the resolve button on the Case entity form
        /// </summary>

        commonApi = AMA.Functions.Common;

        formContext = primaryControl;

        var showButton = false;

        try {
            var currentUserRoles = Xrm.Utility.getGlobalContext().userSettings.roles.getAll();
            for (var i=0; i < currentUserRoles.length; i++) {
                var roleName = currentUserRoles[i].name;
                if (roleName == Roles.SYSTEMADMIN) isSystemAdmin = true;
                if (roleName == Roles.CSMANAGER) isCSManager = true;
            }

            if (isCSManager) {
                showButton = true;
            }
            else{
                if (isSystemAdmin) {
                    showButton = true;
                }
                else {
                    //
                }
            }
        }
        catch(e) {
            commonApi.handleException(e);
        }
        return showButton;
    }
    
    this.OnLoad = _onLoad;
    this.OnSave = _onSave;
    this.ShowHideResolveButton = _showHideResolveButton;

}).apply(AMA.Functions.Case);