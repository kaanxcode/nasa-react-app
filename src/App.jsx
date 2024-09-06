import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Main from "./component/Main";
import SideBar from "./component/SideBar";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  const [data, setData] = useState(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log("DATA\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      <Footer data={data} handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;
