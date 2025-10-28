import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import PageTransition from "@/components/PageTransition";

const Resume = () => {
  const socialLinks = [
    { Icon: FiGithub, href: "https://github.com/bigyandulal2", label: "GitHub" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/bigyan-dulal-84548b302/", label: "LinkedIn" },
    { Icon: BsTwitterX, href: "https://x.com/OrangeP96727", label: "X" },
    { Icon: FiMail, href: "mailto:rdravid569@gmail.com", label: "Email" },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Remote Developer",
      duration: "Present",
      responsibilities: [
        "Developed responsive web applications using React and Tailwind CSS.",
        "Implemented animations and transitions with Framer Motion.",
        "Collaborated with designers to improve UI/UX.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Acee Solution",
      duration: "May 2025 - Sep 2025",
      responsibilities: [
        "Assisted in developing websites with React and Tailwind CSS.",
        "Worked on projects for:",
        { link: "https://gmls.com.np", label: "Global Medilab" },
        { link: "https://rotarydamak.org.np", label: "Rotary Damak" },
        "Optimized website performance and accessibility.",
      ],
    },
  ];

  const education = [
    { degree: "B.Sc. in Computer Science & Information Technology", institution: "Tribhuvan University", duration: "2019 - 2023" },
    { degree: "High School", institution: "Panchayat College", duration: "2017 - 2020" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-teal-900 text-gray-100 py-12">
        <div className="container mx-auto px-6">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <Link to="/projects">
              <motion.button
                className="flex items-center gap-2 text-gray-200 hover:text-pink-500 transition-all"
                whileHover={{ x: -5 }}
              >
                <FiArrowLeft /> Back
              </motion.button>
            </Link>
            <a
              href="/resume.pdf" // replace with your actual resume PDF
              download
              className="flex items-center gap-2 text-gray-200 hover:text-pink-500 transition-all"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bigyan Dulal</h1>
            <p className="text-lg text-gray-300">
              Frontend Developer | UI/UX Enthusiast | Open Source Contributor
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Profile */}
              <div className="bg-black/20 p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-pink-500">Profile</h3>
                <p className="text-gray-300">
                  Passionate Frontend Developer with experience in building responsive and interactive web applications using React, TypeScript, and Tailwind CSS.
                </p>
              </div>

              {/* Skills */}
              <div className="bg-black/20 p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-pink-500">Skills</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>React, Next.js, TypeScript</li>
                  <li>Tailwind CSS, Framer Motion</li>
                  <li>UI/UX Design, Responsive Layouts</li>
                  <li>Git, GitHub</li>
                  <li>Open Source Contribution</li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-black/20 p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-pink-500">Connect</h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-black/10 rounded-xl border hover:border-pink-500 transition-colors text-blue-100"
                    >
                      <Icon className="text-2xl" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Experience */}
              <div className="bg-black/20 p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-pink-500">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-100">{exp.title}</h4>
                      <p className="text-teal-600 text-sm">
                        {exp.company} | {exp.duration}
                      </p>
                      <ul className="text-gray-300 list-disc list-inside mt-2 space-y-1">
                        {exp.responsibilities.map((item, i) =>
                          typeof item === "string" ? (
                            <li key={i}>{item}</li>
                          ) : (
                            <li key={i}>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:underline"
                              >
                                {item.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-black/20 p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-pink-500">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-100">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm">
                        {edu.institution} | {edu.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
