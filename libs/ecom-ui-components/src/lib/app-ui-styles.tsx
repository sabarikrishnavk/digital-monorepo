import site1Styles from './styles/site1.scss';
import site2Styles from './styles/site2.scss';
import site3Styles from './styles/site3.scss';


function Site1Styles(): React.ReactElement {
  return <style jsx global>{site1Styles}</style>;
}

function Site2Styles(): React.ReactElement {
  return <style jsx global>{site2Styles}</style>;
}

function Site3Styles(): React.ReactElement {
    return <style jsx global>{site3Styles}</style>;
  }

export interface SiteProps {
  site:string
}

export function AppStyles(props: SiteProps): React.ReactElement {
  console.log("app-ui-styles :AppStyles: "+props.site);
  if (props.site === 'site1') { return <Site1Styles />; }
  if (props.site === 'site2') { return <Site2Styles />; }
  if (props.site === 'site3') { return <Site3Styles />; }
  return <Site3Styles />;
}
export default AppStyles;