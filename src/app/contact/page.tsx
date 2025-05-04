'use client';

export default function ContactPage() {
  return (
    <section className="py-16 px-4 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Company (optional)"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded h-32"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-navy text-white font-medium rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}