
if(Meteor.isClient){
    Template.profilePage.helpers({
    	'student': function(){
        	return StudentList.find();
    	},
   		'selectedClass': function(){
    		var studentId = this._id;
		    var selectedStudent = Session.get('selectedStudent');
    		if(studentId == selectedStudent){
    		    return "selected"
   			 }
		}  
    });

    Template.profilePage.events({
    	'click .student': function(){
    		var studentId = this._id;
    		Session.set('selectedStudent', studentId);
        	var selectedStudent = Session.get('selectedStudent');
    		//console.log(selectedStudent);
    	},
     	'click .remove': function(){
     		var selectedStudent = Session.get('selectedStudent');
     		StudentList.remove({_id: selectedStudent});
		 },

    	'click .compoundInt': function(){
    		var selectedStudentId = Session.get('selectedStudent');
			var p = 0;
			StudentList.find(
  			{
			    _id: selectedStudentId
  			}
  			).forEach(function(obj){
    			p = obj.p
    			r = obj.r
    			t = obj.t
    			n = obj.n
    			debt = obj.debt
    			interest = obj.interest
    		})
    		console.log(p, r, n, t, debt, interest);
    		debt = p*(Math.pow((1+ (r/n)),(n*t)))
    		interest = p-debt
    		
    		StudentList.update({ _id: selectedStudentId }, { $set: {debt: debt }})
    		//console.log(debt, interest)	
    	}

	});
    Template.addStudent.events({
    'submit form': function(event){
        event.preventDefault();
        var studentNameVar = event.target.studentName.value;
        var pVar = event.target.studentP.value;
        var rVar = event.target.studentR.value;
        var tVar = event.target.studentT.value;
        var nVar = event.target.studentN.value;

        StudentList.insert({
        	name: studentNameVar,
        	p: pVar,
        	r: rVar,
        	t: tVar,
        	n: nVar,
        	debt: 0,
        	interest:0
        });
       // event.target.playerName.value = "";
    }

});

}//end of meteor client

if(Meteor.isServer)
{
	//console.log("hello server")	
}

StudentList = new Mongo.Collection('students');
