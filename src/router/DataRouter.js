import React from "react";
import NotFoundPage from "../pages/404";
import HomeGolobal from "../pages/HomePage/HomeGolobal";
import Albums from "../pages/album";
import Contacter from "../pages/contacter";
import Blogs from "../pages/blogs";

export const PrivateRouters = [{ path: "", component: "" }];

export const PublicRouters = [
  { path: "/", component: <HomeGolobal /> },
  { path: "/album", component: <Albums /> },
  { path: "/contacter", component: <Contacter /> },
  { path: "/blogs", component: <Blogs /> },
  { path: "/error", component: <NotFoundPage /> },
];
