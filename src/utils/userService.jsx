import { BehaviorSubject } from "rxjs";

const userSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
);

function login(user) {
  // met à jour le sujet observable userSubject avec les informations de l'utilisateur et stocke l'utilisateur dans le localStorage
  // convertit une variable javascript en string JSON
  userSubject.next(user);
  localStorage.setItem("user", JSON.stringify(user));
}
let navigateFunction;

function setNavigate(navigate) {
  navigateFunction = navigate;
}

function logout() {
  // retire l'utilisateur du stockage local, publie une valeur null et redirige vers la page de connexion

  localStorage.removeItem("user");
  userSubject.next(null);
  navigateFunction("/");
}

export const userService = {
  //  propriété d'accès pour obtenir la valeur actuelle de l'utilisateur.
  user: userSubject.asObservable(),
  // methode pour interagir avec l api
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
 setNavigate,
};