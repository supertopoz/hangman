import React from "react";

export const User = (props) => {
    return (
        <div>
          From user
          <p>User Name: {props.username}</p>
        </div>
    );
}