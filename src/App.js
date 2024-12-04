import Todo from "./components/Todo";
import img1 from "./images/f3.png";
import img2 from "./images/f4.png";
import img3 from "./images/f5.png";
import styles from "./App.module.css"

function App() {
  return (

      <div className={styles.container}>
        <h1 className="Title">Что вам необходимо?</h1>
        <div></div>
        <Todo title="Первый блок" img={img1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
        <Todo title="Второй блок" img={img2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
        <Todo title="Третий блок" img={img3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
        <div></div>
      </div>

  );
}

export default App;
