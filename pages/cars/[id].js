import { useRouter } from "next/router";
import styles from "../../styles/Car.module.css";

import Head from "next/head";
import Image from "next/image";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.car}>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1 className="car__heading">It's a {capitalize(id)}</h1>
      <Image
        className="car__image"
        src={car.image}
        alt={car.id}
        width="350px"
        height="300px"
      />
      <button type="button" onClick={() => router.push("/cars")}>
        Back to List
      </button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

const capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join("");
};
