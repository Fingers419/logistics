import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Phone, Mail, PackageCheck, MessageCircle } from "lucide-react";

export default function LogisticsHomePage() {
  const [trackingId, setTrackingId] = useState("");

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted!");
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking ID: ${trackingId}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">SwiftMove Logistics</h1>
          <nav className="space-x-6">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#quote" className="hover:underline">Quote</a>
            <a href="#tracking" className="hover:underline">Tracking</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Fast. Reliable. Global.</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Providing top-notch logistics solutions to keep your business moving forward.
          </p>
          <a href="#quote">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white">Get a Quote</Button>
          </a>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="text-center p-6">
              <Truck className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Freight Services</h3>
              <p>Domestic and international freight shipping tailored to your needs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Truck className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
              <p>Secure and scalable storage solutions with real-time inventory tracking.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Truck className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="text-xl font-semibold mb-2">Last Mile Delivery</h3>
              <p>Reliable and timely last mile solutions to delight your customers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="quote" className="py-16 bg-white text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" required />
            <textarea placeholder="Describe your shipment" className="w-full border p-2 rounded" rows="4" required />
            <Button className="bg-blue-600 text-white w-full">Submit</Button>
          </form>
        </div>
      </section>

      <section id="tracking" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Track Your Shipment</h2>
          <form onSubmit={handleTrackingSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              className="w-full border p-2 rounded"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              required
            />
            <Button className="bg-blue-600 text-white w-full">Track</Button>
          </form>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">About SwiftMove</h2>
          <p>
            At SwiftMove Logistics, we pride ourselves on delivering efficient and innovative transport solutions. With a global reach and a local touch, we ensure your goods get where they need to be—on time, every time.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-700" />
              <span>+1 (800) 555-1234</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-700" />
              <span>support@swiftmove.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-700 text-white text-center p-4 relative">
        &copy; {new Date().getFullYear()} SwiftMove Logistics. All rights reserved.
        <div className="absolute bottom-4 right-4">
          <Button className="bg-green-600 hover:bg-green-500 rounded-full p-2 shadow">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

// ADMIN DASHBOARD would be developed in a separate component and protected route.
