fetch('https://dummyjson.com/users/')
    .then(response => response.json())
    .then(data => {
        const users = [];
        data.users.forEach(element => {
            users.push(element);
            console.log(users)
        });

            const randomInt = []
            for(let i=0;i<4;i++){
                randomInt.push(Math.floor(Math.random() * 29))
            }
            document.getElementById("userName1").textContent = `${users[randomInt[0]].firstName} ${users[randomInt[0]].lastName}`;
            document.getElementById("userName2").textContent = `${users[randomInt[1]].firstName} ${users[randomInt[1]].lastName}`;
            document.getElementById("userName3").textContent = `${users[randomInt[2]].firstName} ${users[randomInt[2]].lastName}`;
            document.getElementById("userName4").textContent = `${users[randomInt[3]].firstName} ${users[randomInt[3]].lastName}`;
            document.getElementById("user-image1").src = users[randomInt[0]].image;
            document.getElementById("user-image2").src = users[randomInt[1]].image;
            document.getElementById("user-image3").src = users[randomInt[2]].image;
            document.getElementById("user-image4").src = users[randomInt[3]].image;
    })  
    .catch(error => console.error('Error:', error));
