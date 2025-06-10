// import React from "react";
// import {useState } from "react";
// import './twitterfollowcard.css';

// export function TwitterFollowCard ({userName, name, InitialIsFollowing}) {
//     const imageSrc = `https://unavatar.io/twitter/${userName}`;
    
//     const [isUserFollowing, setFollow] = useState(InitialIsFollowing);
//     const text = isUserFollowing ? 'Siguiendo' : 'Seguir';
//     const buttonClassName = isUserFollowing ? 'fc-f' : 'fc-nf';

//     const handleFollowButtonClick = () => {
//         setFollow(!isUserFollowing);
//     }  
//     return (
//          <article className="card">
//         <header>   
//         <img alt="avatar" src={imageSrc}/>
//         <div>
//         <strong>{name}</strong>
//         <span>@{userName}</span>
//         </div>
//         </header>
    
//         <aside>
//         <button className={buttonClassName} onClick={handleFollowButtonClick}>
//             {text}
        
//         </button>
//         </aside>
//         </article>
//     );
   
// }    // ,* }//