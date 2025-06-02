import React from "react";

// Card contenedor principal
export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Header de la Card
export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Título dentro del header
export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}

// Contenido principal de la Card
export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Pie de la Card (footer)
export function CardFooter({ children, className = "", ...props }) {
  return (
    <div className={`p-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
}
