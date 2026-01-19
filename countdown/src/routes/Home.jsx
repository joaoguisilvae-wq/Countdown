import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";

import "./Home.css";

const Home = (e) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { event, setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = { title, date, image, color };
    setEvent(eventObject);

    navigate("/countdown");
    console.log(eventObject);
  };

  return (
    <div className="home">
      <h2>Monte sua contagem regressiva</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            placeholder="Digite o dia do evento"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <span>Titulo:</span>
          <input type="submit" value="Enviar" />
        </label>
      </form>
    </div>
  );
};

export default Home;
