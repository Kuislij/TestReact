import React from "react";

export default function Post({ title, image, description }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", width: "300px", borderRadius: "8px", overflow: "hidden" }}>
      <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
