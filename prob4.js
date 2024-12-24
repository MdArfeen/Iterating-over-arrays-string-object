let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
for (let key in students){
  if(students[key].marks==50||students[key].marks>50){
    console.log(`${students[key].name} - ${students[key].subject}`)
  } 
    }
   


// 1 more way

/*
    for (let i=0;i<=students.length-1;i++){
      if(students[i].marks==50||students[i].marks>50){
        console.log(`${students[i].name}-${students[i].subject}`)
      }
    }
      */
