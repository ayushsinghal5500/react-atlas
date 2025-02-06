import * as React from "react";
import { cn } from "@/lib/utils";

// General Card component to wrap content
const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-white text-gray-900 shadow-sm", className)} // More neutral card styles
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

// CardHeader: A section for the card's header
const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4 bg-gray-100 border-b", className)} // Added background to header
    {...props}
  >
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

// CardTitle: The title of the card
const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xl font-semibold leading-none", className)} // Slightly adjusted font size
    {...props}
  >
    {children}
  </div>
));
CardTitle.displayName = "CardTitle";

// CardDescription: A description or additional info about the card
const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500", className)} // Changed color to gray for description
    {...props}
  >
    {children}
  </div>
));
CardDescription.displayName = "CardDescription";

// CardContent: Main content area of the card
const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

// CardFooter: Footer area for any additional content or actions
const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 bg-gray-50 border-t", className)} // Footer styling
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

// CardImage: Image at the top of the card
const CardImage = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={cn("rounded-t-lg w-full h-48 object-cover", className)} // Image styling
  />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage };
