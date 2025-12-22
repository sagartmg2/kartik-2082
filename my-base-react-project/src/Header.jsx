import { BASE_URL, DEVELOPMENT_URL } from "./constants/url";

export default function Header() {
   
  return (
    <header>
      <ul>
        <li>
          <a href={BASE_URL}>home </a>
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
