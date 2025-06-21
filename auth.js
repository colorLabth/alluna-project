let auth0 = null;

async function initAuth() {
  auth0 = await createAuth0Client({
    domain: "auth.alluna.store",
    client_id: "ifGQEPypwXEdThslpkNueB039fG0DD0O",
    cacheLocation: "localstorage"
  });

  // จัดการ redirect callback (เฉพาะ callback.html)
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  const isAuth = await auth0.isAuthenticated();
  if (isAuth) {
    const user = await auth0.getUser();
    document.body.classList.add("logged-in");
    document.getElementById("userName").textContent = user.name;
    // หรือจะเก็บไว้ใช้งานอย่างอื่นก็ได้
  } else {
    document.body.classList.add("logged-out");
  }
}

function logout() {
  auth0.logout({ returnTo: window.location.origin });
}
