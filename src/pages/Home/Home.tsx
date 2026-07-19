import Button from '@/components/ui/Button/Button'
import styles from './Home.module.css'

const MOCK_USERS = [
  { id: 1, nombre: 'Ana', apellido: 'García', email: 'ana@email.com', genero: 'Femenino', localidad: 'Buenos Aires', role: 'Admin', image: 'https://img.magnific.com/free-psd/3d-illustration-human-avatar-profile_23-2150671128.jpg' },
  { id: 2, nombre: 'Felix', apellido: 'López', email: 'Felix@email.com', genero: 'Masculino', localidad: 'Córdoba', role: 'User', image: 'https://img.magnific.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg' },
  { id: 3, nombre: 'Sofía', apellido: 'Martínez', email: 'sofia@email.com', genero: 'Femenino', localidad: 'Rosario', role: 'User', image: 'https://img.magnific.com/free-psd/3d-illustration-human-avatar-profile_23-2150671118.jpg' },
  { id: 4, nombre: 'Lucas', apellido: 'Fernández', email: 'lucas@email.com', genero: 'Masculino', localidad: 'Mendoza', role: 'Editor', image: 'https://img.magnific.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg' },
]

function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.header}>
        <h1 className={styles.title}>Usuarios</h1>
        <Button variant="primary">+ Agregar</Button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Usuario</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Género</th>
              <th className={styles.th}>Localidad</th>
              <th className={styles.th}>Rol</th>
              <th className={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_USERS.map((user) => (
              <tr key={user.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.userCell}>
                    <img
                      className={styles.avatar}
                      src={user.image}
                      alt={`${user.nombre} ${user.apellido}`}
                    />
                    <span>{user.nombre} {user.apellido}</span>
                  </div>
                </td>
                <td className={styles.td}>{user.email}</td>
                <td className={styles.td}>{user.genero}</td>
                <td className={styles.td}>{user.localidad}</td>
                <td className={styles.td}>
                  <span className={`${styles.badge} ${styles[`badge__${user.role.toLowerCase()}`]}`}>
                    {user.role}
                  </span>
                </td>
                <td className={styles.td}>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>Ver</button>
                    <button className={`${styles.actionBtn} ${styles.actionBtnEdit}`}>Editar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </main>
  )
}

export default Home
