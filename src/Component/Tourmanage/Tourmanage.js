import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");

  const inputValue = (e) => {
    const name = e.target.value;
    setUsername(name);
  };

  const submitform = (e) => {
    e.preventDefault();
    console.log(username);
    fetch("https://ctbfb.sse.codesandbox.io/tour", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <form onSubmit={submitform} encType="multipart/form-data">
        <input
          onBlur={(e) => inputValue(e)}
          type="text"
          name="name"
          placeholder="name"
        />
        <input type="file" name="img" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
