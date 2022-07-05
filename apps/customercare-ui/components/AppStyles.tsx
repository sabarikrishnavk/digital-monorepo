import site1Styles from '../styles/site1.scss';
import site2Styles from '../styles/site2.scss';
import site3Styles from '../styles/site3.scss';


function Site1Styles(): React.ReactElement {
  return <style jsx global>{site1Styles}</style>;
}

function Site2Styles(): React.ReactElement {
  return <style jsx global>{site2Styles}</style>;
}

function Site3Styles(): React.ReactElement {
    return <style jsx global>{site3Styles}</style>;
  }
export default function AppStyles({ site }): React.ReactElement {
  if (site == 'site1') { return <Site1Styles />; }
  if (site == 'site2') { return <Site2Styles />; }
  if (site == 'site3') { return <Site3Styles />; }
  return <Site3Styles />;
}