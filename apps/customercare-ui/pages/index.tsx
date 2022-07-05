// import styles from './index.module.css';
import ThemeChanger from '../components/ThemeChanger';
import styles from './index.module.css'; 


export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">  
          <ThemeChanger/> 
          <main>
          Welcome customercare-ui
          </main>
 
        </div>
      </div>
    </div>
  );
}

export default Index;
