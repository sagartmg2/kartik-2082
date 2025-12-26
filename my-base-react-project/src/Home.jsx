import CourseItem from "./CourseItem";
import Header from "./Header";

const Home = () => {
  let courses = [
    {
      name: "html",
      description:
        "html is m dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "1 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "css",
      description:
        "css is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "1 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "js",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "react",
      description:
        "react is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
    {
      name: "node",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
    {
      name: "express",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
  ];

  let name = "JOhn Doe";
  let description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore minima saepe quis accusamus inventore excepturi, nostrum, unde quae laborum similique suscipit vitae reiciendis assumenda non eaque quidem adipisci! Tempore.";

  let tags = ["react", "mern", "html", "css", "js"];

  let convertedtags = tags.map((el) => <li>#{el}</li>); // [ <li>#react</li> <li>#mern</li>]
  console.log(convertedtags);

  return (
    <div>
      <Header />
      <section>
        <h1>{name}</h1>
        <ul>
          {convertedtags}
          {tags.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <p>{description}</p>
      </section>
      <h2>Courses</h2>
      <ul>
        {courses.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>

      <table>
        <thead>
          <th>Title</th>
          <th>Duration</th>
          <th>Status</th>
        </thead>
        <tbody>
          {courses.map((el) => {
            return (
              <tr
                className={`other-class-one ${
                  el.status ? "success" : "pending"
                }`}
              >
                <td>{el.name}</td>
                <td>{el.duration}</td>
                <td>{el.status ? <span>yes</span> : <span>no</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <div className="courses">
        {courses.map((el) => {
          return (
            <div className="course">
              <img src={el.image} />
              <p>{el.name}</p>
              <p>{el.duration}</p>
              <p>{el.status ? "yes" : "no"}</p>
            </div>
          );
        })}
      </div>

      <br />
      <br />
      <br />
      <br />

      {/*
       <h2>Completed Todos</h2>
      <div className="courses">
        {courses.map((el) => {
          if (el.status) {
            return (
              <div className="course">
                <img src={el.image} />
                <p>{el.name}</p>
                <p>{el.duration}</p>
                <p>
                  <span className={el.status ? "success" : "pending"}>
                    {el.status ? "yes" : "no"}
                  </span>
                </p>
                <p>{description}</p>
              </div>
            );
          }
        })}
      </div>

      <h2>InCompleted Todos</h2>
      <div className="courses">
        {courses.map((el) => {
          if (!el.status) {
            return (
              <div className="course">
                <img src={el.image} />
                <p>{el.name}</p>
                <p>{el.duration}</p>
                <p>{el.status ? "yes" : "no"}</p>
                <p>{description}</p>
              </div>
            );
          }
        })}
      </div> 
      */}

      <h2>Completed Todos</h2>
      <div className="courses">
        {courses.map((el) => {
          if (el.status) {
            // return courseIte(el.name, el.description,)
            // return <CourseItem name="html" description="html descritpion" status='true'   />;
            return (
              <CourseItem
                name={el.name}
                description={el.description}
                status={el.status}
                image={el.image}
                duration={el.duration}
              />
            );
          }
        })}
      </div>

      <h2>InCompleted Todos</h2>
      <div className="courses">
        {courses.map((el) => {
          if (!el.status) {
            return (
              <CourseItem
                name={el.name}
                description={el.description}
                status={el.status}
                image={el.image}
                duration={el.duration}
              />
            );
          }
        })}
      </div>

      <h2>InCompleted Todos</h2>
      <div className="courses">
        {courses
          .filter((el) => !el.status)
          .map((el) => (
            <CourseItem
              name={el.name}
              description={el.description}
              status={el.status}
              image={el.image}
              duration={el.duration}
            />
          ))}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
