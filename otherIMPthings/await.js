const studentPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            name: "Nisit",
            age: 20
        });
    }, 2000);

});

async function getStudent() {

    try {
        const student = await studentPromise;

        console.log(student);

    } catch (error) {
        console.log(error);
    }
}

getStudent();