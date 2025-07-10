import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-700 text-white p-4 text-center text-2xl font-bold shadow">
        Admin Dashboard - SwiftMove Logistics
      </header>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Pending Quotes</h2>
            <p className="text-gray-700">View and manage customer quote requests.</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">View Requests</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Shipment Tracker</h2>
            <p className="text-gray-700">Monitor all active shipments and updates.</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">Track Shipments</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">User Messages</h2>
            <p className="text-gray-700">Respond to live chat and contact form messages.</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">Open Inbox</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Warehouse Inventory</h2>
            <p className="text-gray-700">Manage storage units and availability.</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">View Inventory</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-700">Configure preferences and system settings.</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">Go to Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
