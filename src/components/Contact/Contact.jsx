export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}