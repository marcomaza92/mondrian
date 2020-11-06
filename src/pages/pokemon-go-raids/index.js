import styles from '../index.module.scss';

const PokemonGoRaids = () => {
  return (
    <div className={styles.mainContainer}>
      <h3>Crear Incursión</h3>
      <form>
        <label htmlFor="level">
          <p>Nivel</p>
          <input id="level" className={styles.input} />
        </label>
        <label htmlFor="boss">
          <p>Jefe</p>
          <input id="boss" className={styles.input} />
        </label>
        <label htmlFor="gym">
          <p>Gimnasio</p>
          <input id="gym" className={styles.input} />
        </label>
        <label htmlFor="address">
          <p>Dirección</p>
          <input id="address" className={styles.input} />
        </label>
        <label htmlFor="cc">
          <p>Coordenadas</p>
          <input id="cc" className={styles.input} />
        </label>
        <label htmlFor="time">
          <p>Hora</p>
          <input id="time" type="time" className={styles.input} />
        </label>
      </form>
    </div>
  )
}

export default PokemonGoRaids;