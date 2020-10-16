import React, { Fragment } from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

  return (
    <UserContext.Consumer>
      {currentUser => (
        <Fragment>
          {image && (
            <img
              style={{ height: 100, width: 200, objectFit: "cover" }}
              src={URL.createObjectURL(image)}
              alt="Post cover"
            />
          )}
          <p>{content}</p>
          <div style={{ color: currentUser === user && "green" }}>{user}</div>
          <div>
            {isCurrentUser && (
              <button onClick={handleDeletePost}>Delete</button>
            )}
          </div>
        </Fragment>
      )}
    </UserContext.Consumer>
  );
}

export default Post;

// This is the messy way of using Context ( render props pattern)
// import React, { Fragment } from "react";
// import { UserContext } from "../App";

// function Post({ image, content, user }) {

//   return (
//     <UserContext.Consumer>
//       {currentUser => (
//         <Fragment>
//           {image && (
//             <img
//               style={{ height: 100, width: 200, objectFit: "cover" }}
//               src={URL.createObjectURL(image)}
//               alt="Post cover"
//             />
//           )}
//           <p>{content}</p>
//           <div style={{ color: currentUser === user && "green" }}>{user}</div>
//         </Fragment>
//       )}
//     </UserContext.Consumer>
//   );
// }

// export default Post;
