import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, ondeleteComment }) {
    // Estado = Tudo que vai mudar
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        //A unica forma de um componente se comunicar com outro é atraves da PROPRIEDADE
        ondeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Joandersol98.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joanderson Sol</strong>
                            <time title="06 de fevereiro de 2025 às 11:23" dateTime="2025-02-06T11:23:40">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p> {content} </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}