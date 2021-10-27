student_names_array = [];

function student(){
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    student_names_array.push(name1);
    student_names_array.push(name2);
    student_names_array.push(name3);
    student_names_array.push(name4);
    console.log(student_names_array);
    document.getElementById("display").innerHTML=student_names_array;

    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sorting(){
    student_names_array.sort();
    console.log(student_names_array);
    document.getElementById("display").innerHTML=student_names_array;
}