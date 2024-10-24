import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <header>Projeto</header>
      <Outlet />
    </div>
  )
}
