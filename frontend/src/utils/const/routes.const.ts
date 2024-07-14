import { HomeIcon, LineChartIcon, Package, PinIcon, UsersIcon } from 'lucide-react'

export const enum Routes {
  Dashboard = '/dashboard',
  DashboardUsers = '/dashboard/users',
  DashboardNomenclators = '/dashboard/nomenclators',
  DashboardLogs = '/dashboard/logs',
  DashboardSocialWorks = '/dashboard/social-works',
  DashboardSettings = '/dashboard/settings'
}

export const ADMIN_DASHBOARD_ROUTES = [
  { icon: HomeIcon, name: 'Inicio', href: Routes.Dashboard },
  { icon: UsersIcon, name: 'Usuarios', href: Routes.DashboardUsers },
  { icon: PinIcon, name: 'Nomencladores', href: Routes.DashboardNomenclators },
  { icon: LineChartIcon, name: 'Registros', href: Routes.DashboardLogs },
  { icon: Package, name: 'Obras sociales', href: Routes.DashboardSocialWorks }
]
