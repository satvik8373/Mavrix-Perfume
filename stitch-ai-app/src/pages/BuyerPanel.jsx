import { Link } from 'react-router-dom';

function BuyerPanel() {
  const orders = [
    { id: '#MX-2024-001', date: '2024-07-15', status: 'Shipped', total: 185, statusColor: 'blue' },
    { id: '#MX-2024-002', date: '2024-07-10', status: 'Delivered', total: 250, statusColor: 'green' },
    { id: '#MX-2024-003', date: '2024-07-05', status: 'Delivered', total: 120.50, statusColor: 'green' },
    { id: '#MX-2024-004', date: '2024-06-28', status: 'Pending', total: 310, statusColor: 'orange' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-white">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 flex h-full w-64 flex-col p-4 bg-gray-50 border-r border-gray-200">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-8 p-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                MAVRIX
              </span>
            </Link>
            <nav className="flex flex-col gap-2">
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-100 text-orange-600" to="/orders">
                <span className="material-symbols-outlined text-2xl">package_2</span>
                <p className="font-body text-sm font-medium">Orders</p>
              </Link>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">favorite</span>
                <p className="font-body text-sm font-medium">Wishlist</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">person</span>
                <p className="font-body text-sm font-medium">Profile</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">location_on</span>
                <p className="font-body text-sm font-medium">Addresses</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">settings</span>
                <p className="font-body text-sm font-medium">Settings</p>
              </a>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100)' }}></div>
              <p className="font-body text-gray-900 text-sm font-medium">Alex Morgan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="font-display text-gray-900 text-4xl font-black">My Orders</h1>
              <p className="font-body text-gray-600 text-base">Review and track your recent purchases.</p>
            </div>
          </div>

          {/* Orders Table */}
          <div className="w-full">
            <div className="flex overflow-hidden rounded-xl glassmorphism shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-body text-gray-900 text-sm font-medium">Order ID</th>
                    <th className="px-6 py-4 text-left font-body text-gray-900 text-sm font-medium">Date</th>
                    <th className="px-6 py-4 text-left font-body text-gray-900 text-sm font-medium">Status</th>
                    <th className="px-6 py-4 text-left font-body text-gray-900 text-sm font-medium">Total</th>
                    <th className="px-6 py-4 text-left font-body text-gray-900 text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr key={idx} className="border-t border-gray-200">
                      <td className="h-[72px] px-6 py-2 font-body text-gray-600 text-sm">{order.id}</td>
                      <td className="h-[72px] px-6 py-2 font-body text-gray-600 text-sm">{order.date}</td>
                      <td className="h-[72px] px-6 py-2 text-sm">
                        <div className={`flex items-center justify-center min-w-[84px] max-w-[120px] rounded-full h-8 px-4 ${
                          order.statusColor === 'blue' ? 'bg-blue-100 text-blue-600' :
                          order.statusColor === 'green' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'
                        } font-body text-sm font-medium`}>
                          <span>{order.status}</span>
                        </div>
                      </td>
                      <td className="h-[72px] px-6 py-2 font-body text-gray-600 text-sm">${order.total.toFixed(2)}</td>
                      <td className="h-[72px] px-6 py-2 font-body text-gray-900 text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer">
                        View Invoice
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center p-4">
            <nav className="flex items-center gap-2">
              <a className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" href="#">
                <span className="material-symbols-outlined text-gray-600 text-lg">chevron_left</span>
              </a>
              <a className="font-body text-sm font-medium flex size-10 items-center justify-center text-white rounded-lg bg-orange-500" href="#">1</a>
              <a className="font-body text-sm flex size-10 items-center justify-center text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#">2</a>
              <a className="font-body text-sm flex size-10 items-center justify-center text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#">3</a>
              <span className="font-body text-sm flex size-10 items-center justify-center text-gray-600">...</span>
              <a className="font-body text-sm flex size-10 items-center justify-center text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#">10</a>
              <a className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" href="#">
                <span className="material-symbols-outlined text-gray-600 text-lg">chevron_right</span>
              </a>
            </nav>
          </div>
        </div>
      </main>

      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 146, 60, 0.2);
        }
      `}</style>
    </div>
  );
}

export default BuyerPanel;
