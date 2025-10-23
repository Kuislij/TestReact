import React from 'react';
import './App.css';

const postsData = [
  {
    id: 1,
    title: "Парк им. Шевченко",
    image: "https://picsum.photos/id/1018/300/200",
    author: "Пользователь1",
  },
  {
    id: 2,
    title: "Музей истории",
    image: "https://picsum.photos/id/1015/300/200",
    author: "Пользователь2",
  },
  {
    id: 3,
    title: "Старый город",
    image: "https://picsum.photos/id/1020/300/200",
    author: "Пользователь3",
  },
  {
    id: 4,
    title: "Пляж Лазурный",
    image: "https://picsum.photos/id/1019/300/200",
    author: "Пользователь4",
  },
  {
    id: 5,
    title: "Городской рынок",
    image: "https://picsum.photos/id/1016/300/200",
    author: "Пользователь5",
  },
  {
    id: 6,
    title: "Смотровая площадка",
    image: "https://picsum.photos/id/1024/300/200",
    author: "Пользователь6",
  },
];

function App() {
  return (
    <div className="app">
      <h1>Туристические места ДНР</h1>
      <div className="posts-grid">
        {postsData.map(post => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>Добавил: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
