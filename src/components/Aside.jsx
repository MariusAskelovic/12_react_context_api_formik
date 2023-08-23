// import { useContext, useEffect, useState } from 'react';
// import { styled } from 'styled-components';
// import AuthContext from '../store/AuthContext';

// const Block = styled.div`
//   background-color: #eee;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
// `;
// export default function Aside() {
//   const [date, setDate] = useState(new Date());
//   useEffect(() => {
//     const intervalId = setInterval(() => setDate(new Date()), 1000);
//     console.log('intervalId ===', intervalId);
//     return () => clearInterval(intervalId);
//   }, []);

//   const ctx = useContext(AuthContext);
//   return (
//     <Block>
//       <h3>{ctx.email}</h3>
//       <p>{date.toLocaleDateString()}</p>
//       <p>{date.toLocaleTimeString()}</p>
//     </Block>
//   );
// }

import { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../store/AuthContext';

export default function Aside() {
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);
  return (
    <div>
      <h3>Additional info:</h3>
      {ctx.isUserLoggedIn && <p>User: {ctx.email}</p>}
    </div>
  );
}
