import { useRouter } from "next/router";
import styles from "../../styles/Cars.module.css";

export default function CarsList(props) {
  const router = useRouter();

  return (
    <div className={styles.cars}>
      <h1>Car List</h1>

      {props.cars.map((car, i) => (
        <button
          key={car + i}
          type="button"
          onClick={() => router.push(`/cars/${car}`)}
          className="cars__btn"
        >
          {car}
        </button>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  return {
    props: { cars: data },
  };
}
