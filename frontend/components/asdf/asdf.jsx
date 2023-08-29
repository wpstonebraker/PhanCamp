import React from "react";
import { useQuery } from "react-query";
import "regenerator-runtime/runtime";

export default function Asdf() {
  const { data: albums, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(`/api/features`);
      return response.json();
      // debugger;
      // return $.ajax({
      //   url: `/api/features`,
      // });
    },
    queryKey: "albums",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(albums);

  return (
    <div>
      <b>THIS IS THE NEW COMPONENT</b>
      <b>wow</b>
    </div>
  );
}
