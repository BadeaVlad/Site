import GoTrue from "gotrue-js";

// Instantiate the GoTrue auth client with an optional configuration

auth = new GoTrue({
  APIUrl: "https://<your domain name>/.netlify/identity",
  audience: "",
  setCookie: false
});

auth
  .signup(name, surname, email, password, cpassword)
  .then(response => console.log("Confirmation email sent", response))
  .catch(error => console.log("It's an error", error));

  auth
  .login(email.value, password.value)
  .then(response => {
    showMessage("Success! Response: " + JSON.stringify({ response }), form);
  })
  .catch(error => showMessage("Failed :( " + JSON.stringify(error), form));

  auth
  .requestPasswordRecovery(email)
  .then(response => console.log("Recovery email sent", { response }))
  .catch(error => console.log("Error sending recovery mail: %o", error));

  const user = auth.currentUser();

user
  .update({ email: "example@example.com", password: "password" })
  .then(user => console.log("Updated user %s", user))
  .catch(error => {
    console.log("Failed to update user: %o", error);
    throw error;
  });

