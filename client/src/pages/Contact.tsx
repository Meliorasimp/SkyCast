import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import Stars from "../components/Stars";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setSubject,
  setMessage,
} from "../store/slices/contactSlice";
import type { RootState } from "../store";

const Contact = () => {
  const dispatch = useDispatch();
  const contactName = useSelector((state: RootState) => state.contact.name);
  const contactEmail = useSelector((state: RootState) => state.contact.email);
  const contactSubject = useSelector(
    (state: RootState) => state.contact.subject
  );
  const contactMessage = useSelector(
    (state: RootState) => state.contact.message
  );
  console.log(contactSubject);

  return (
    <div className="landing-page-gradient-bg min-h-screen relative">
      <Stars />
      <Landingpagenavbar />

      <div className="w-full min-h-screen pt-20 pb-16 px-4 relative z-20">
        <div className="max-w-6xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-20"
          >
            <h1 className="text-5xl landing-page-text-gradient-heading mb-6">
              Get In Touch
            </h1>
            <p className="landing-page-text text-xl max-w-3xl mx-auto opacity-90">
              Have questions about SkyCast? Want to collaborate or report an
              issue? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-morphism-animated rounded-3xl p-8 relative z-30"
            >
              <h2 className="text-2xl landing-page-text-gradient-heading font-bold mb-6">
                Send Me a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block landing-page-text text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactName}
                      onChange={(e) => dispatch(setName(e.target.value))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 landing-page-text placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all relative z-40"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block landing-page-text text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactEmail}
                      onChange={(e) => dispatch(setEmail(e.target.value))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 landing-page-text placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all relative z-40"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block landing-page-text text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="flex justify-center gap-x-4">
                    <input
                      type="text"
                      name="subject"
                      value={contactSubject}
                      onChange={(e) => dispatch(setSubject(e.target.value))}
                      required
                      className="w-2/3 px-4 py-3 rounded-xl bg-white/10 border border-white/20 landing-page-text placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all relative z-40"
                      placeholder="What's this about?"
                    />
                    <select
                      name="topic"
                      id="topic"
                      onChange={(e) => dispatch(setSubject(e.target.value))}
                      className="w-1/2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 landing-page-text focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all relative z-40 cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236dd5fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        className="bg-gray-900 text-gray-400 text-center"
                      >
                        Select Topic
                      </option>
                      <option
                        value="Question"
                        className="bg-gray-900 text-cyan-300 hover:bg-gray-800 py-2 "
                      >
                        💭 Question
                      </option>
                      <option
                        value="Feedback"
                        className="bg-gray-900 text-cyan-300 hover:bg-gray-800 py-2"
                      >
                        📝 Feedback
                      </option>
                      <option
                        value="Bug Report"
                        className="bg-gray-900 text-cyan-300 hover:bg-gray-800 py-2"
                      >
                        🐛 Bug Report
                      </option>
                      <option
                        value="Collaboration"
                        className="bg-gray-900 text-cyan-300 hover:bg-gray-800 py-2"
                      >
                        🤝 Collaboration
                      </option>
                      <option
                        value="Other"
                        className="bg-gray-900 text-cyan-300 hover:bg-gray-800 py-2"
                      >
                        ✨ Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block landing-page-text text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={contactMessage}
                    onChange={(e) => dispatch(setMessage(e.target.value))}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 landing-page-text placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none relative z-40"
                    placeholder="Tell me about your thoughts, suggestions, or questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-xl button-primary font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-morphism rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="landing-page-text font-semibold">Email</h3>
                    <p className="landing-page-text opacity-80">
                      meliorasimp@example.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-morphism rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="landing-page-text font-semibold">GitHub</h3>
                    <p className="landing-page-text opacity-80">@Meliorasimp</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-morphism rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="landing-page-text font-semibold">
                      Response Time
                    </h3>
                    <p className="landing-page-text opacity-80">
                      Usually within 24 hours
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="glass-morphism rounded-2xl p-6"
              >
                <h3 className="landing-page-text-gradient-heading text-xl font-bold mb-4">
                  Let's Connect! 🌟
                </h3>
                <div className="space-y-3 landing-page-text opacity-90">
                  <p>
                    🐛 <strong>Found a bug?</strong> Let me know and I'll fix
                    it!
                  </p>
                  <p>
                    💡 <strong>Have an idea?</strong> I'd love to hear your
                    suggestions!
                  </p>
                  <p>
                    🤝 <strong>Want to collaborate?</strong> Always open to
                    partnerships!
                  </p>
                  <p>
                    ⭐ <strong>Enjoying SkyCast?</strong> Consider starring the
                    repo!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
