import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
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

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Goku, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}