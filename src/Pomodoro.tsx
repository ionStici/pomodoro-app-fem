import styles from "./styles/pomodoro.module.scss";

const Pomodoro = function () {
  return (
    <>
      <header className={styles.header}>
        <h1>pomodoro</h1>
        <nav>
          <ul>
            <li>
              <button>pomodoro</button>
            </li>
            <li>
              <button>short break</button>
            </li>
            <li>
              <button>long break</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className={styles.circle}>
          <div className={styles.circle__inner}>
            <div className={styles.circle__line}>
              <time>17:59</time>
              <button>pause</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pomodoro;
