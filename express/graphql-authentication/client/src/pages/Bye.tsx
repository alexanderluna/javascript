import React from "react";
import { useByeQuery } from "../generated/graphql";

const Bye: React.FC = () => {
  const { data, loading, error } = useByeQuery({ fetchPolicy: "network-only" });

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    console.log(error);
    return <div>{error.message}</div>
  }

  return (
    <div>{data!.bye}</div>
  )
};

export default Bye;