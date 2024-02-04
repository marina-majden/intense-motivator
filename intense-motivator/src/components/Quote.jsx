import "./Quote.css";
import { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

function Quote() {
  {
    /* HR: kreiramo tri varijable koje će pohraniti podatke o citatu i autoru te varijablu koja će pohraniti podatke preuzete s URL-a. */
  }
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  {
    /* HR: kreiramo asinkronu funkciju koja će preuzeti podatke o citatima s navedenog URL-a i spremiti podatke u data varijablu koju smo stvorili s tim ciljem; data je objekt koji treba sadržavati "content", tj. tekst citata i "author", tj. ime autora citata. */
  }
  useEffect(() => {
    getQuotesData();
  }, []);
  async function getQuotesData() {
    let response = await fetch(url);
    let data = await response.json();

    setQuote(data.content);
    setAuthor(data.author);
  }
  {
    /* Kreiramo uvjetovanu tvrdnju koja će ispisati poruku korisniku ako dođe do greške te sadržaj ne bude uspješno preuzet s URL-a; ako podaci ipak postoje (uspješno su preuzeti), tada se nastavlja kod koji vraća markup, tj. opisuje sadržaj komponente kako će ga browser učitati i prikazati korisniku. */
  }
  if (!quote || !author) {
    ("Can't get data at the moment. Please try again later.");
  }
  return (
    <>
      <div className="quote">
        <h1>Quote of the day</h1>
        <svg
          fill="#98a0a9"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="210px"
          height="210px"
          viewBox="0 0 351.128 351.128"
          xml:space="preserve"
          stroke="#98a0a9"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M72.326,147.33c4.284-26.928,37.944-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836 c1.224-0.612,2.448-1.224,3.06-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.976,11.628 C38.054,85.518,1.946,136.313,3.782,184.662c-6.12,32.437-4.896,67.32,4.284,96.084c6.12,18.36,23.868,27.54,42.228,28.764 c18.36,1.225,56.304,6.732,72.828-4.283c16.524-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053 C115.778,165.078,66.818,181.602,72.326,147.33z"></path>{" "}
              <path d="M274.286,147.33c4.284-26.928,37.943-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836 c1.225-0.612,2.448-1.224,3.061-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.977,11.628 c-35.496,29.376-71.604,80.172-69.768,128.52c-6.12,32.437-4.896,67.32,4.283,96.084c6.12,18.36,23.868,27.54,42.229,28.764 c18.36,1.225,56.304,6.732,72.828-4.283c16.523-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053 C317.738,165.078,268.166,181.602,274.286,147.33z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <p>{quote}</p>
        <p>{author}</p>
      </div>
      <button onClick={getQuotesData}>Get Quote</button>
    </>
  );
}

export default Quote;
