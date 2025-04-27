import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-500">
            Have questions? Our team is here to help.
          </p>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md min-h-[150px]"
              placeholder="Enter your message"
            />
          </div>
          
          <Button className="w-full" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}