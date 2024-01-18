import { useState } from 'react';

// REGULAR CARD IMPORT
// import RegularCard from './regular-card/RegularCard';

// CARD COMPOSITION IMPORT
// import CardComposition, {
//   Body,
//   Footer,
//   Heading,
// } from './card-composition/CardComposition';

// CARD COMPOUND IMPORT
//import CardCompound from './card-compound/CardCompound';

//ADVANCED COMPOUND CARD IMPORT
import AdvancedCardCompound from './advanced-card-compound/AdvancedCardCompound';

const App = () => {
  const [name] = useState('Tola');

  // regular-card
  // return <RegularCard name={name} />;

  //composition-card
  // return (
  //   <CardComposition
  //     heading={<div />}
  //     body={<Body />}
  //     footer={<Footer name={name} />}
  //   />
  // );

  //compound-card
  // return (
  //   <>
  //     <CardCompound.Heading name={name} />
  //     {/* <CardCompound
  //       heading={<CardCompound.Heading name={name} />}
  //       // body={<CardCompound.Body />}
  //       // footer={<CardCompound.Footer name={name} />}
  //     /> */}
  //   </>
  // );

  // advanced card compound
  return (
    <AdvancedCardCompound>
      <>
        <AdvancedCardCompound.Heading name={name} />
        <AdvancedCardCompound.Body />
        <AdvancedCardCompound.Footer name={name} />
      </>
    </AdvancedCardCompound>
  );
};

export default App;
