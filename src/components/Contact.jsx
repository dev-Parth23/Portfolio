import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://your-catalyst-endpoint/createLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thanks! I’ll get back to you soon 🚀");
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" data-scroll-section className="relative bg-[#181818]">
      <div className="relative">
        <hr className="w-full h-[2px] bg-lime-400 shadow-[0_0_15px_#C7F000]" />
      </div>
      <div className="relative max-w-7xl mx-auto w-full pl-6 lg:pl-28 pr-6 lg:px-10 py-24 flex flex-col gap-20 ">
        <div className="flex flex-col mb-20">
          <h2 className="text-[40px] sm:text-[48px] md:text-[64px] font-normal text-center text-white mb-5">
            Let&apos;s Connect !
          </h2>
          <div className="flex items-center justify-center gap-5 align-middle text-3xl">
            <a
              target="_blank"
              href="mailto:parthsinghal23.cs@gmail.com"
              className="flex items-center gap-4 text-white/80 hover:text-lime-400 transition"
            >
              <IoIosMail />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dev-parth23/"
              className="flex items-center gap-4 text-white/80 hover:text-lime-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/dev-Parth23"
              target="_blank"
              className="flex items-center gap-4 text-white/80 hover:text-lime-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/pxrth_who/"
              target="_blank"
              className="flex items-center gap-4 text-white/80 hover:text-lime-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919368353165"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/80 hover:text-lime-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let’s build
              <br />
              something <span className="text-lime-400">impactful</span>
            </h1>

            <p className="text-white/70 max-w-md leading-relaxed">
              Have an idea, a project, or just want to say hello? I’m always
              open to discussing new opportunities, collaborations, and
              meaningful work.
            </p>
          </div>

          <div className="bg-[#1F1F1F] border border-white/10 rounded-2xl p-8 lg:p-10">
            <form className="space-y-6" autoComplete="off">
              <div>
                <label className="text-sm text-white">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    mt-2
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-2
                    text-white
                    outline-none
                    focus:border-lime-400
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-sm text-white">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-2
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-2
                    text-white
                    outline-none
                    focus:border-lime-400
                    transition
                  "
                />
              </div>
              <div>
                <label className="text-sm text-white">Phone Numer</label>
                <input
                  type="tel"
                  placeholder="+91 12345 67890"
                  className="
                    mt-2
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-2
                    text-white
                    outline-none
                    focus:border-lime-400
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-sm text-white">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="
                    mt-2
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-2
                    text-white
                    outline-none
                    resize-none
                    focus:border-lime-400
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  mt-6
                  py-3
                  rounded-lg
                  bg-lime-400
                  text-black
                  font-semibold
                  hover:bg-lime-300
                  transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
