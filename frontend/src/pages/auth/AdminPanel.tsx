import React from "react";

const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-lg text-slate-800 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Admin Panel
      </h1>
      <p className="text-lg text-center text-slate-600">
        Welcome, administrator! You have access to this panel.
      </p>
    </div>
  );
};

export default AdminPanel;
