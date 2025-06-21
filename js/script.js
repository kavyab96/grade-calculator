function calculate() {
    let bio = parseFloat (prompt("Enter marks of Biology (out of 100):") )
    let che = parseFloat (prompt("Enter marks of Chemistry (out of 100) :"))
    let phy = parseFloat (prompt("Enter marks of Physics (out of 100) :"))
    let mat = parseFloat (prompt("Enter marks of Maths (out of 100) :"))
    let eng = parseFloat (prompt("Enter marks of English (out of 100) :"))
    
    let totalMarks = bio + che + phy + mat + eng
    let average = totalMarks / 5

    if (isNaN(totalMarks)) {
        alert("Please enter valid marks for all subjects.");
        return;
      }

    let grade = "";
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F (Fail)";
    }

    alert(` Total Marks: ${totalMarks} \n
            Average Marks: ${average.toFixed(2)}\n
            Grade: ${grade}`)
}