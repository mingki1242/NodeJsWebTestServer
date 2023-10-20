const fs = require("fs");

function generateStudent(id) {
    const departments = ["Mathematics", "Engineering", "Music", "Biology", "Literature", "Arts"];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const gender = Math.random() < 0.5 ? "M" : "F";
    const names = ["Cho", "Yone", "Lulu", "Nyami", "Veigar", "Alistar", "Jax", "Darius", "David", "Gyu", "Donald"];
    const name = names[Math.floor(Math.random() * names.length)];

    return `${id} ${department} ${gender} ${name}`;
}

function generateStudentsToFile() {
    let students = [];
    for (let id = 200001; id <= 10000000; id++) {
        const studentInfo = generateStudent(id);
        students.push(studentInfo);
    }

    const data = students.join("\n");

    fs.writeFile("students.txt", data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("Student data saved to students.txt");
        }
    });
}

generateStudentsToFile();
