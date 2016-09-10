var GenericClass = function() {
    this.publicInstanceVar = "Public"
    var _privateInstanceVar = "Private";
    this.getPrivateInsVar = function() {
        return _privateInstanceVar;
    }
    GenericClass.prototype.setPrivateInsVar = function(newstr) {
        _privateInstanceVar = newstr;
    };
}

// varian [3:36 PM]  
// I tried that, and each instance had its own value of "_privateinstancevar"
