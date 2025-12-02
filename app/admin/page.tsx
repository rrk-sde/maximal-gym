export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Stat Cards */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-600 mb-2">Total Members</div>
                    <div className="text-3xl font-bold text-gray-900">5,234</div>
                    <div className="text-sm text-green-600 mt-2">+12% this month</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-600 mb-2">Active Plans</div>
                    <div className="text-3xl font-bold text-gray-900">1,853</div>
                    <div className="text-sm text-green-600 mt-2">+8% this month</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-600 mb-2">Revenue</div>
                    <div className="text-3xl font-bold text-gray-900">$45,678</div>
                    <div className="text-sm text-green-600 mt-2">+15% this month</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-sm text-gray-600 mb-2">Trainers</div>
                    <div className="text-3xl font-bold text-gray-900">28</div>
                    <div className="text-sm text-gray-600 mt-2">Active staff</div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Welcome to Gymmax Admin
                </h2>
                <p className="text-gray-600">
                    Manage your gym members, trainers, classes, and more from this dashboard.
                </p>
            </div>
        </div>
    );
}
