import React from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks/store";

const CongratsPage = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Congrats Page</h1>
    </div>
  );
};

export default CongratsPage;
