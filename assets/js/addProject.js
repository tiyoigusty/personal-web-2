var dataProject = [];

function addProject(event) {
  event.preventDefault();

  let project = document.getElementById("projectName").value;
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let description = document.getElementById("description").value;
  let tech = document.querySelectorAll("input:checked");
  // let image = document.getElementById("uploadImg").value;
  let image = document.getElementById("uploadImg").files[0];
  let imageURL = URL.createObjectURL(image);

  if (project === "") {
    return alert("Please entered your Project Name!");
  } else if (start === "") {
    return alert("Please entered your Start Date!");
  } else if (end === "") {
    return alert("Please entered your End Date!");
  } else if (description === "") {
    return alert("Please entered your Description!");
  } else if (tech.length === 0) {
    return alert("Please choose your Technologies!");
  } else if (imageURL === "") {
    return alert("Please entered your Image!");
  }

  var listTech = [];

  tech.forEach((item) => {
    listTech.push(item.value);
  });

  // membuat tanggal tidak dapat disubmit jika lebih awal
  if (end < start) {
    return alert("End date can't be less than start date");
  }

  // merubah format tanggal
  let startDate = start.split("/");
  let endDate = end.split("/");

  let formatStartDate = startDate[2] + "-" + startDate[1] + "-" + startDate[0];
  let formatEndDate = endDate[2] + "-" + endDate[1] + "-" + endDate[0];

  let newStartDate = new Date(formatStartDate);
  let newEndDate = new Date(formatEndDate);

  // menghitung perbedaan waktu
  let timeDifference = newEndDate - newStartDate;

  let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let differenceInMonths = Math.floor(differenceInDays / 30.44);
  let differenceInYears = Math.floor(differenceInMonths / 12);

  // menghitung durasi
  let duration;

  if (differenceInYears > 0) {
    duration = `${differenceInYears} years`;
  } else if (differenceInMonths > 0) {
    duration = `${differenceInMonths} month`;
  } else {
    duration = `${differenceInDays} days`;
  }

  dataProject.push({
    project: project,
    start: start,
    end: end,
    description: description,
    technologies: listTech,
    image: imageURL,
    duration: duration,
  });

  console.log(dataProject);

  newProject();
}

function newProject() {
  document.getElementById("myProject").innerHTML = "";

  for (let i = 0; i < dataProject.length; i++) {
    const projectPlus = dataProject[i];

    document.getElementById("myProject").innerHTML += `
    <div class="myProject" id="myProject">
      <h4>${projectPlus.project}</h4>
      <p>
        Start : ${projectPlus.start} <br />
        Selesai : ${projectPlus.end}
      </p>
      <p> Duration : ${projectPlus.duration}</p>
      <p>Technologies : ${projectPlus.technologies}</p>
      <img src="${projectPlus.image}" alt="gambar-project" />
      <p>
      <p>${projectPlus.description}</p>
      </p>
    </div>
  `;
  }
}
