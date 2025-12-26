import { BASE_URL, DEVELOPMENT_URL } from "./constants/url";


export default function Header() {
  return (
    <header>
      {/* <ul className="nav-links" style="backgroun-color:red"> */}
      {/* <ul className="nav-links" style={{backgroundColor:'red'}}> */}

      <ul className="flex justify-center capitalize gap-4 border mb-12 p-12 ">
        <li>
          <a href={BASE_URL}  className="text-red-500" >home</a>
        </li>
        <li>
          <a href={BASE_URL}>about </a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </header>
  );
}
