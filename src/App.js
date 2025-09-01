
import beans1 from "./assets/beans1.jpg";
import beans2 from "./assets/beans2.jpg";
import beans3 from "./assets/beans3.jpg";
import beans4 from "./assets/beans4.jpg";
import beans5 from "./assets/beans5.jpg";

import Directory from "./components/directory/directory.component";

function App() {
  
  // We know this is something will show up several times with a pattern
  const categories = [
    {
      id: 1,
      title: 'Africa',
      imageUrl: beans1,
    },
    {
      id: 2,
      title: 'Asia Pacific',
      imageUrl: beans2,
    },
    {
      id: 3,
      title: 'Latin America',
      imageUrl: beans3,
    },
    {
      id: 4,
      title: 'Decaf',
      imageUrl: beans4,
    },
    {
      id: 5,
      title: 'Samplers',
      imageUrl: beans5,
    },
  ]
  
  return <Directory categories={categories} />;
}

export default App;
