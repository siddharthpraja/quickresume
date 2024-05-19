// components/Resume.js

const Resume = () => {
  return (
    <div className=" flex justify-center">
      <div className="border-beam max-w-4xl p-[2px] my-40">
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md  ">
          <header className="text-center mb-6">
            <h1 className="text-4xl font-bold">Your Name</h1>
            <p className="text-gray-600">Your Postion</p>
            <p className="text-gray-600">
              youremail@example.com | (123) 456-7890 | LinkedIn
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-2">
              Summary
            </h2>
            <p>
              Experienced software developer with a strong background in
              building scalable web applications and services. Proficient in
              modern JavaScript frameworks and libraries.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-2">
              Experience
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">
                Senior Software Developer
              </h3>
              <p className="text-gray-600">Tech Company | Jan 2020 - Present</p>
              <ul className="list-disc ml-5">
                <li>
                  Developed and maintained web applications using React and
                  Node.js.
                </li>
                <li>Led a team of 5 developers in various projects.</li>
                <li>
                  Implemented CI/CD pipelines for efficient development
                  workflows.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="text-gray-600">
                Another Tech Company | Jan 2018 - Dec 2019
              </p>
              <ul className="list-disc ml-5">
                <li>
                  Worked on a team to develop a large-scale e-commerce platform.
                </li>
                <li>
                  Integrated third-party APIs to enhance platform functionality.
                </li>
                <li>
                  Optimized applications for maximum speed and scalability.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-2">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">University Name | 2014 - 2018</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-2">
              Skills
            </h2>
            <ul className="list-disc ml-5">
              <li>JavaScript, React, Node.js</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>REST APIs, GraphQL</li>
              <li>Git, Docker, Jenkins</li>
            </ul>
          </section>
        </div>
        <div className="text-white"></div>
      </div>
    </div>
  );
};

export default Resume;
