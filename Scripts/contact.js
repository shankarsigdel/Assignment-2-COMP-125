// IIFE module
"use strict";
let objects;
(function (objects) {
    let Contact = /** @class */ (function () {
        function Contact(firstName, lastName, emailAddress, contactNumber, shortMessage) {
            if (firstName === void 0) { firstName = ""; }
            if (lastName === void 0) { lastName = ""; }
            if (emailAddress === void 0) { emailAddress = ""; }
            if (contactNumber === void 0) { contactNumber = ""; }
            if (shortMessage === void 0) { shortMessage = ""; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailAddress = emailAddress;
            this.contactNumber = contactNumber;
            this.shortMessage = shortMessage;
        }
        Contact.prototype.toString = function () {
            let outputstring = "";
            outputstring += "Your First Name is    : " + this.firstName + "\n";
            outputstring += "Your Last Name is     : " + this.lastName + "\n";
            outputstring += "Your Email Address is : " + this.emailAddress + "\n";
            outputstring += "Your Contact Number is: " + this.contactNumber + "\n";
            outputstring += "Your Short Message is : " + this.shortMessage + "\n";
            return outputstring;
        };
        Contact.prototype.toJSON = function () {
            let JSONObject = {
                firstName: this.firstName,
                lastName: this.lastName,
                emailAddress: this.emailAddress,
                contactNumber: this.contactNumber,
                shortMessage: this.shortMessage,
            };
            return JSONObject;
        };
        Contact.prototype.setContact = function (JSON_Data) {
            this.firstName = JSON_Data.firstName;
            this.lastName = JSON_Data.lastName;
            this.emailAddress = JSON_Data.emailAddress;
            this.contactNumber = JSON_Data.contactNumber;
            this.shortMessage = JSON_Data.shortMessage;
        };
        return Contact;
    }());
    objects.Contact = Contact;
}(objects || (objects = {})));