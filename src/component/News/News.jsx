import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [saved, setSaved] = useState(false);
  const [recommendations, setRecommendations] = useState(false);
  

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Обновление новостей...");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => setLikeCount(likeCount + 1);
  const handleDislike = () => setDislikeCount(dislikeCount + 1);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleSave = () => setSaved(!saved);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Новость',
        text: 'Посмотрите эту новость!',
        url: window.location.href,
      });
    } else {
      alert('Функция "Поделиться" не поддерживается.');
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="wraper">
          <div className="img">
            <img src="./logo student chat.png" alt="Логотип" />
          </div>

          <div className="box">
            <div className="card">
              📝
              <p>SDCT — целый мир для студентов...</p>

              <div className="Like">
                <button onClick={handleLike}>👍</button> <h3>{likeCount}</h3>
                <button onClick={handleDislike}>👎</button> <h3>{dislikeCount}</h3>
                <button onClick={handleSave}>{saved ? '⭐ Сохранено' : 'Сохранить'}</button>
                <button onClick={handleShare}>🔗 Поделиться</button>
              </div>
            </div>
            <div className="card">
              📝
              <p>SDCT — целый мир для студентов...</p>

              <div className="Like">
                <button onClick={handleLike}>👍</button> <h3>{likeCount}</h3>
                <button onClick={handleDislike}>👎</button> <h3>{dislikeCount}</h3>
                <button onClick={handleSave}>{saved ? '⭐ Сохранено' : 'Сохранить'}</button>
                <button onClick={handleShare}>🔗 Поделиться</button>
              </div>
            </div>
            <div className="card">
              📝
              <p>SDCT — целый мир для студентов...</p>

              <div className="Like">
                <button onClick={handleLike}>👍</button> <h3>{likeCount}</h3>
                <button onClick={handleDislike}>👎</button> <h3>{dislikeCount}</h3>
                <button onClick={handleSave}>{saved ? '⭐ Сохранено' : 'Сохранить'}</button>
                <button onClick={handleShare}>🔗 Поделиться</button>
              </div>
            </div>
            <div className="card">
              📝
              <p>SDCT — целый мир для студентов...</p>

              <div className="Like">
                <button onClick={handleLike}>👍</button> <h3>{likeCount}</h3>
                <button onClick={handleDislike}>👎</button> <h3>{dislikeCount}</h3>
                <button onClick={handleSave}>{saved ? '⭐ Сохранено' : 'Сохранить'}</button>
                <button onClick={handleShare}>🔗 Поделиться</button>
              </div>
            </div>

            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Оставьте комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit">Отправить</button>
            </form>

            <ul>
              {comments.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>

          <button onClick={() => setRecommendations(!recommendations)}>
            Рекомендации
          </button>

          {recommendations && (
            <div className="recommendation-popup">
              <p>Рекомендуем новости на основе ваших предпочтений!</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default News;
