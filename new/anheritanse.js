


// parent class

class Teacher{

// propertis

teacherName;
teacherAge;
//                                  parameter
constructor(tName,tAge)
{

    this.teacherName=tName;
    this.teacherAge=tAge;

}
}



// child class         parent class la extend kela 

class EnglishTeacher extends Teacher
{
    
    // propertis

    mainSubject;

    constructor(mSubject,ptName,ptAge)
    {
        super(ptName,ptAge);

         this.mainSubject=mSubject;
    }
    getDetails()
    {
        `teachername:${this.teacherName},teacherage :${this.teacherAge} mainsubject:${this.mainSubject}`;
    }
}

 var p1=new EnglishTeacher("English,hindi","rutu",25);
 console.log(p1.getDetails());