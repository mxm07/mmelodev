import React from "react";
import { NOTFOUND_TITLE } from "@/constants";
import "./NotFound.scss";

const NotFound = () => (
  <div className="notfound">
    <h1 className="notfound__title">{NOTFOUND_TITLE}</h1>
  </div>
);

export default NotFound;
