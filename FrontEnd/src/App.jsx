import '@radix-ui/themes/styles.css';
import Header from './components/Header';
// import {Badge} from '@radix-ui/themes/src/components';
import MyApp from './components/MyApp';
import { Theme } from '@radix-ui/themes';
import Tables from './components/Tables';
import Hero from './components/Hero';
// badge import



export default function App() {
  return (
<>
<Theme appearance='light'>
  <Header/>
  <Hero/>
  < Tables/>
  <MyApp />
</Theme>
      
   </>
  )
}