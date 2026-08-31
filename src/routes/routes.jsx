
import FAQ from "../Components/FAQ";
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
        element: <FAQ />,
      },
      {
        label: "Add New User",
        path: "users/add",
        element: <FAQ />,
      },
      {
        label: "Delete A User",
        path: "users/delete",
        element: <FAQ />,
      },
      {
        label: "Get A Single user",
        path: "users/:id",
        element: <FAQ />,
      },
      {
        label: "Upadte User",
        path: "users/id",
        element: <FAQ />,
      },
      {
        label: "Counter",
        path: "Counter",
        element: <FAQ />,
      },
    ],
  },
  {
    Label: "Auth",
    subLink: [
      {
        label: "Login",
        path: "auth/login",
        element: <FAQ />,
      },
    ],
  },
];
