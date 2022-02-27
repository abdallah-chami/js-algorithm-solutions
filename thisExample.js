var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// prints different things

// what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.