let api = "http://40.0.49.6:4040/api/login";

async function login() {
  let x = document.getElementById("e").value;
  let y = document.getElementById("p").value;

  let db = {
    email: x,
    password: y
  };

  console.log("JS object:", JSON.stringify(db, null, 2));

  try {
    let res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(db),
    });

    let data = await res.text();

    if (res.ok) {
      // ✅ STORE SESSION
      sessionStorage.setItem("isLogin", "true");
      sessionStorage.setItem("email", x);

      alert("Login success ✅");

      // ✅ REDIRECT TO ADMIN
      window.location.href = "admin.html";
    } else {
      alert("Invalid credentials ❌");
    }

    console.log("API response:", data);

  } catch (e) {
    alert("Login failed ❌");
    console.error(e);
  }
}
