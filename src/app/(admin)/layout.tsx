import '../globals.css';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: 'Dashboard', iconName: 'LayoutDashboard', href: '/admin/dashboard' },
    { name: 'Categorias', iconName: 'Tags', href: '/admin/categories' },
    { name: 'Utilizadores', iconName: 'Users', href: '/admin/users' },
    { name: 'Promotores', iconName: 'Building2', href: '/admin/entities' },
    { name: 'Eventos', iconName: 'Calendar', href: '/admin/events' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar fixa à esquerda no Desktop */}
      <AdminSidebar menuItems={navItems} adminName="ADMIN" />

      {/* Área de conteúdo que faz scroll independentemente */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}