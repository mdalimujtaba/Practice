import styles from "./CountriesCard.module.css";

function CountriesCard({data}) {
  
  return (
  <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">{data.country}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{data.population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
