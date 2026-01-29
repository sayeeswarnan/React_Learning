// import React, { useEffect, useState } from "react";

// function User() {
//   const [usersList, setUsersList] = useState([]);
//   const [loading,SetLoading] = useState(false)
//   async function fetchAllUsers() {
//     try {
//         SetLoading(true)
//       const apiResponse = await fetch("https://dummyjson.com/users");
//       const result = await apiResponse.json()
//       console.log(" this is result: ", result)
//       if(result?.users){
//         setUsersList(result?.users)
//         SetLoading(false)
//       }
//      else{
//         setUsersList([])
//         SetLoading(false)
//      }

//     } catch (error) {
//       console.log(error);
//     }
//   }

// console.log(usersList)
// if (loading) return <h2>This is loading </h2>

//   useEffect(() => {
//     fetchAllUsers()
//   }, []);
//   return (
//     <>
//       <div>
//         <h1>This is just users</h1>
//         <ul>
//             {
//                 usersList && usersList.length > 0 ? (
//                     usersList.map(userItem => <li key={userItem?.id}  >{userItem?.firstName} {userItem?.lastName}  </li>  )
//                  ) : (
//                     <h3>No users found check the da</h3>
//                  )
//             }
//         </ul>
//       </div>
//     </>
//   );
// }

// export default User;
import { useEffect } from "react";
import { useState } from "react";

export default function User() {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("http://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) {
        setUsersList(result?.users);
        setPending(false);
      } else {
        setUsersList([]);
        setPending(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  //   function handleFetchListOfUsers() {
  //     fetchAllUsers();
  //   }

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  console.log(usersList);

  if (pending) return <h1>Fetching users! Please wait</h1>;

  return (
    <div>
      <h1>All Users Lists</h1>
      <button onClick={fetchAllUsers}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem?.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! Please try again.</h1>
        )}
      </ul>
    </div>
  );
}