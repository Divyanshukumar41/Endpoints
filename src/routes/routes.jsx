import Login from "../Components/AuthApi/Login";
import Counter from "../Components/Pages/ClassComp";
import Home from "../Components/Pages/Home";
import AddANewUser from "../Components/UserApi/AddANewUser";
import DeleteAUser from "../Components/UserApi/DeleteAUser";
import GetAllUsers from "../Components/UserApi/GetAllUsers";
import GetASingleuser from "../Components/UserApi/GetASingleuser";
import UpadteUser from "../Components/UserApi/UpadetUser";

export const userRoutes = [
  {
    Label: "Product",
    subLink: [],
  },
  {
    Label: "Cart",
    subLink: [],
  },
  {
    Label: "User",
    subLink: [
      {
        label: "Get All Users",
        path: "/docs",
        element: <GetAllUsers />,
      },
      {
        label: "Add New User",
        path: "users/add",
        element: <AddANewUser />,
      },
      {
        label: "Delete A User",
        path: "users/delete",
        element: <DeleteAUser />,
      },
      {
        label: "Get A Single user",
        path: "users/:id",
        element: <GetASingleuser />,
      },
      {
        label: "Upadte User",
        path: "users/id",
        element: <UpadteUser />,
      },
      {
        label: "Counter",
        path: "Counter",
        element: <Counter />,
      },
    ],
  },
  {
    Label: "Auth",
    subLink: [
       {
        label: "Login",
        path: "auth/login",
        element: <Login />,
      },

    ],
  },
];
