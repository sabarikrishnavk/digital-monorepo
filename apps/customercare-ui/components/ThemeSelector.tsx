import { useEffect } from 'react'
import { useTheme } from 'next-themes'

 
const ThemeSelector = (props) => {
  // const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const {site } = props
  // When mounted on client, now we can show the UI
  useEffect(() => setTheme(site), []);

  ;
  

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
      <span>The current theme is: <strong>{theme}</strong></span> 
    </div>
  )
}

export default ThemeSelector;