if(typeof(AMA) == "undefined") {
    AMA = { __namespace: true};
}

if(typeof(AMA.Functions) == "undefined") {
    AMA.Functions = { __namespace: true};
}

if(typeof(AMA.Functions.Common) == "undefined") {
    AMA.Functions.Common = { __namespace: true};
}

(function () {
    
    var _constants = {
        errorMessage: "An error occured during execution press CTRL-C to copy the error "
            + "to the clipboard, then create a new e-mail message and press CTRL-V to paste "
            + "the error message into the e-mail. Then submit it to the support team.\n"
    };

    var _notificationLevel = {
        ERROR: "ERROR",
        WARNING: "WARNING",
        INFO: "INFO"
    }

    var _handleException = function (exception) {
        /// <summary>
        /// Handles an error by rendering the information on the user interface.
        /// </summary>
        /// <param name="controlName" type="object" maybeNull="false" optional="false">
        /// An exception object instance.
        /// </param>

        if (exception == null) throw new Error("The exception argument is undefined.");
        if (typeof exception != "object") throw new Error("Exception type must be object.");

        var message = "";
        if (exception.name) {
            message += exception.name + "\n";
        }
        if (exception.message) {
            message += exception.message + "\n";
        }
        if (exception.stack) {
            message += JSON.stringify(exception.stack) + "\n";
        }

        console.log(message);

        Xrm.Navigation.openAlertDialog({ text: message }, { height: 250, width: 550 });
    }

    this.handleException = _handleException;

}).apply(AMA.Functions.Common);