// components/ContactForm.js
export default function ContactForm() {
    return (
      <div className="max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-5">Get In Touch With Us</h2>
        <p className="text-center mb-5">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Abc" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Abc@def.com" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="subject" placeholder="This is optional" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message" rows="4" placeholder="Hi! I’d like to ask about"></textarea>
          </div>
          <button className="w-full py-2 bg-gold-500 text-white font-semibold rounded bg-brown-300">submit</button>
        </form>
      </div>
    );
  }