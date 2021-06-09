const apiip = "http://localhost:3000/"
function getbalanceFromServer(uid, pwd) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // redirect: "follow",
  };

  fetch(apiip+"api/getbal?user_id="+uid+"&password="+pwd, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      text += `<li>
      Account Number: ${data.accountId} <br>
      Account Balance: ${data.balance}
      </li>`;
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => $(".mypanel").html(error));
}

function authenUser() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    user_id: 2,
    password: "123451",
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch(apiip+"api/auth", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      var text = "<ul>";
      text += `<li>First Name: ${result.firstName}</li>`;
      text += `<li>Last Name: ${result.lastName}</li>`;
      text += `<li>NRIC/FIN: ${result.nricfin}</li>`;
      text += `<li>Email: ${result.email}</li>`;
      text += `<li>Mobile Number: ${result.mobile}</li>`;
      text += `<li>Account Number: ${result.accountId}</li>`;
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => $(".mypanel").html(error));
}

function transferAcct() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    userId: "3",
    password: "123452",
    fromAccount_number: "3",
    toAccount_number: "4",
    amount: 20,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(apiip+"api/trfbal", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => $(".mypanel").html(error));
}

function changePwd() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    userId: "4",
    oldpassword: "123453",
    newpassword: "123454",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(apiip+"api/chgpwd", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => $(".mypanel").html(error));
}