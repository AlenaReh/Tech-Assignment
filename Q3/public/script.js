$(document).ready(function () {
  $("form").submit(function (event) {
    // Preventing default behavior - reload of the page on submit
    event.preventDefault();
    // Getting the user's values
    let course1 = document.getElementById("c1").value.toLowerCase().trim();
    let course2 = document.getElementById("c2").value.toLowerCase().trim();
    let course3 = document.getElementById("c3").value.toLowerCase().trim();
    let courses = { course1, course2, course3 };

    console.log("course1", course1);
    console.log("course2", course2);
    console.log("course3", course3);
    console.log("courses", courses);

    let coursesSaved = document.querySelector("#coursesSaved");
    coursesSaved.innerHTML = "";

    // Create and populate p tag with picked courses
    let cr = document.createElement("cr");
    cr.innerHTML = `The courses you picked: 
        <p>${course1}</p>
        <p>${course2}</p>
        <p>${course3}</p>
      `;
    coursesSaved.appendChild(cr);

    // Checking if "calculus" exists in an object
    if (Object.values(courses).indexOf("calculus") > -1) {
      console.log("has calculus");
    } else {
      alert("You must pick calculus as one of your courses!");
    }

    $.ajax({
      type: "POST",
      url: "/",
      dataType: "json",
      data: {
        course1,
        course2,
        course3,
      },
    }).then((data) => {
      data = { course1, course2, course3 };
      console.log("data", data);

      // Clearing out the form
      $("#c1").val("");
      $("#c2").val("");
      $("#c3").val("");
    });
  });
});
