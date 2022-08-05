export const signup = (user) =>
  fetch("api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

export async function UpdateForm(username, diet) {
  fetch("api/diet/" + username, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      diet: diet,
    }),
  });
}

export async function GetDataFromApi(id) {
  var url = "api/diet/" + id;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export const login = (user) =>
  fetch("api/session", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
export const logout = () => fetch("api/session", { method: "DELETE" });

export const checkLoggedIn = async (preloadedState) => {
  const response = await fetch("/api/session");
  if (!response.ok) {
    window.location.replace("/Errorr.html");
  }
  const { user } = await response.json();
  if (user) {
    preloadedState = {
      session: user,
    };
  }
  return preloadedState;
};
